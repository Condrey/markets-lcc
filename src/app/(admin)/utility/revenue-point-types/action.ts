"use server";

import { Role } from "@/app/generated/prisma";
import { validateRequest } from "@/auth";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { revenuePointDataInclude } from "@/lib/types";
import { revenuePointSchema, RevenuePointSchema } from "@/lib/validation";
import { cache } from "react";

async function allRevenuePoints() {
  return await prisma.revenuePoint.findMany({
    include: revenuePointDataInclude,
  });
}
export const getAllRevenuePoints = cache(allRevenuePoints);

export async function upsertRevenuePoint(revenuePoint: RevenuePointSchema) {
  const { user } = await validateRequest();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  const { id, subscriptions, type, revenuePointName } =
    revenuePointSchema.parse(revenuePoint);
  return await prisma.revenuePoint.upsert({
    where: { id },
    create: {
      revenuePointName,
      type,
      subscriptions: {
        connect: subscriptions.map((s) => ({ id: s.id })),
      },
    },
    update: {
      revenuePointName,
      type,
      subscriptions: {
        set: [],
        connect: subscriptions.map((s) => ({ id: s.id })),
      },
    }, include: revenuePointDataInclude
  });
}

export async function deleteRevenuePoint(id: string) {
  const { user } = await validateRequest();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  return await prisma.revenuePoint.delete({
    where: { id },
    include: revenuePointDataInclude,
  });
}
