"use server";

import { Role, User } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { staffLoginSchema, StaffLoginValues } from "@/lib/validation";
import ky from "ky";
import { redirect } from "next/navigation";
import { createSession } from "../../lib/session";
import { generateSessionToken, setSessionTokenCookie } from "../../lib/tokens";

export async function loginAction(
  values: StaffLoginValues
): Promise<{ error: string }> {
  const { ippsNumber } = staffLoginSchema.parse(values);
  const response = await ky.post(
    "https://liracity.vercel.app/api/gou-employee-check",
    {
      body: JSON.stringify(values),
      throwHttpErrors: false,
    }
  );
  if (response.ok) {
    const {
      email,
      avatarUrl,
      bio,
      githubId,
      googleId,
      id,
      name,
      passwordHash,
      telephone,
      createdAt,
      username,
    } = await response.json<User>();
    const employee = await prisma.employee.upsert({
      where: { ippsNumber: `${ippsNumber}` },
      create: {
        ippsNumber: `${ippsNumber}`,
        user: {
          connectOrCreate: {
            where: { id },
            create: {
              email,
              avatarUrl,
              bio,
              githubId,
              googleId,
              id,
              name,
              passwordHash,
              telephone,
              createdAt,
              username,
              role: Role.MODERATOR,
            },
          },
        },
      },
      update: {
        user: {
          upsert: {
            where: { id },
            create: {
              email,
              avatarUrl,
              bio,
              githubId,
              googleId,
              id,
              name,
              passwordHash,
              telephone,
              createdAt,
              username,
              role: Role.MODERATOR,
            },
            update: {
              email,
              avatarUrl,
              bio,
              githubId,
              googleId,
              name,
              passwordHash,
              telephone,
              createdAt,
              username,
              role: Role.MODERATOR,
            },
          },
        },
      },
      include: { user: true },
    });

    const existingUser = employee.user;
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.id);
    await setSessionTokenCookie(sessionToken, session.expiresAt);
    redirect(
      existingUser.isVerified ? "/" : `/user-verification/${existingUser.id}`
    );
  }
  const text = await response.text();
  return { error: JSON.parse(text) };
}
