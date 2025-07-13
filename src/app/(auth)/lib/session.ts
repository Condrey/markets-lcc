import { Prisma, Role, Session } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { cache } from "react";
import { validateSessionToken } from "./tokens";
import { hashSecret } from "./utils";
import { LuciaSession, LuciaUser } from "./type";

const inactivityTimeoutSeconds = 60 * 60; // 1 hour

const sessionWithUserInclude = {
  user: {
    select: {
      id: true,
      role: true,
      avatarUrl: true,
      email: true,
      username: true,
      name: true,
      isVerified: true,
    },
  },
} satisfies Prisma.SessionInclude;
type SessionWithUserData = Prisma.SessionGetPayload<{
  include: typeof sessionWithUserInclude;
}>;

interface LuciaSessionWithToken extends Session {
  token: string;
}
export type SessionValidationResult =
  | { session: LuciaSession; user: LuciaUser }
  | { session: null; user: null };

export async function getCurrentSession(): Promise<SessionValidationResult> {
  const cookieStore = await cookies();
  const token = cookieStore.get("oauth_session")?.value ?? null;
  if (!token) {
    return { session: null, user: null };
  }
  const result = await validateSessionToken(token);

  return result;
}

export async function invalidateSession(sessionId: string): Promise<void> {
  await prisma.session.delete({ where: { id: sessionId } });
}

export async function invalidateUserSessions(userId: string): Promise<void> {
  await prisma.session.deleteMany({ where: { userId } });
}

export async function createSession(
  token: string,
  userId: string,
): Promise<LuciaSessionWithToken> {
  const now = new Date();
  const tokenParts = token.split(".");
  const id = tokenParts[0];
  const secret = tokenParts[1];
  const secretHash = await hashSecret(secret);
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

  const dbSession = await prisma.$transaction(
    async (tx) => {
      const user = await tx.user.findUnique({ where: { id: userId } });
      return await tx.session.create({
        data: {
          id,
          userId,
          expiresAt,
          createdAt: now,
          secretHash: secretHash.toString(),
          role: user?.role || Role.USER,
          lastVerifiedAt: now,
        },
      });
    },
    { timeout: 60 * 1000, maxWait: 60 * 1000 },
  );

  const session: LuciaSessionWithToken = {
    ...dbSession,
    token,
  };

  return session;
}

export async function getSessionById(
  sessionId: string,
): Promise<SessionWithUserData | null> {
  const now = new Date();

  const session = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
    include: sessionWithUserInclude,
  });
  if (!session) {
    return null;
  }
  //  Check expiration
  if (
    now.getTime() - session.lastVerifiedAt.getTime() >=
    inactivityTimeoutSeconds * 1000
  ) {
    await deleteSessionById(sessionId);
    return null;
  }
  return session;
}

export async function deleteSessionById(sessionId: string): Promise<void> {
  await prisma.session.delete({
    where: {
      id: sessionId,
    },
  });
}
