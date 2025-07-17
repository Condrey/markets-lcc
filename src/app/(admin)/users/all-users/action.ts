"use server";

import { Role } from "@/app/generated/prisma";
import { validateRequest } from "@/auth";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
// import { userDataInclude } from "@/lib/types";
import { userSchema, UserSchema } from "@/lib/validation";
import { cache } from "react";

async function allUsers() {
  const { user: currentUser } = await validateRequest();
  const isSuperAdmin =
    !!currentUser && myPrivileges[currentUser.role].includes(Role.SUPER_ADMIN);

  return await prisma.user.findMany({
    where: { role: !isSuperAdmin ? { not: Role.SUPER_ADMIN } : {} },
    orderBy: { name: "asc" },
  });
}
export const getAllUsers = cache(allUsers);

export async function upsertUser(user: UserSchema) {
  const { user: currentUser } = await validateRequest();
  const isAuthorized =
    !!currentUser && myPrivileges[currentUser.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  const { id, name, email, telephone, username ,role} = userSchema.parse(user);
  return await prisma.user.upsert({
    where: { id },
    create: {
      name,
      email: email!,
      telephone,
      username,role
    },
    update: { name, email: email!, telephone, username,role },
    // include: userDataInclude,
  });
}

export async function deleteUser(id: string) {
  const { user } = await validateRequest();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  return await prisma.user.delete({
    where: { id },
    // include: userDataInclude,
  });
}
