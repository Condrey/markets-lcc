"use server";

import { Role } from "@/app/generated/prisma";
import { validateRequest } from "@/auth";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
// import { userDataInclude } from "@/lib/types";
import { userSchema, UserSchema } from "@/lib/validation";
import { cache } from "react";

async function allUsers() {
  return await prisma.user.findMany({ orderBy: { name: "asc" } });
}
export const getAllUsers = cache(allUsers);

export async function upsertUser(user: UserSchema) {
  const { user:currentUser } = await validateRequest();
  const isAuthorized =
    !!currentUser && myPrivileges[currentUser.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  const { id, name, email,telephone,username } = userSchema.parse(user);
  return await prisma.user.upsert({
    where: { id },
    create: {
      name,
       email:email!,telephone,username
    },
    update: {   name,
       email:email!,telephone,username},
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
