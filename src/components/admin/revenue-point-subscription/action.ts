"use server";

import { Role } from "@/app/generated/prisma";
import { validateRequest } from "@/auth";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { revenuePointSubscriptionDataInclude } from "@/lib/types";
import { revenuePointSubscriptionSchema, RevenuePointSubscriptionSchema } from "@/lib/validation";
import { cache } from "react";

async function allRevenuePointSubscriptions() {
  return await prisma.revenuePointSubscription.findMany();
}
export const getAllRevenuePointSubscriptions = cache(allRevenuePointSubscriptions);

export async function upsertRevenuePointSubscription(revenuePointSubscription: RevenuePointSubscriptionSchema) {
  const { user } = await validateRequest();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  const { id, amount,subscriptionName, } = revenuePointSubscriptionSchema.parse(revenuePointSubscription);
  return await prisma.revenuePointSubscription.upsert({
    where: { id },
    create: {
      amount,subscriptionName
    },
    update: {  amount,subscriptionName},
    include: revenuePointSubscriptionDataInclude,
  });
}

export async function deleteRevenuePointSubscription(id: string) {
  const { user } = await validateRequest();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  return await prisma.revenuePointSubscription.delete({
    where: { id },
    include: revenuePointSubscriptionDataInclude,
  });
}
