"use server";

import { Role } from "@/app/generated/prisma";
import { validateRequest } from "@/auth";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { marketDataInclude } from "@/lib/types";
import { marketSchema, MarketSchema } from "@/lib/validation";
import { cache } from "react";

async function allMarkets() {
  return await prisma.market.findMany({ orderBy: { name: "asc" } });
}
export const getAllMarkets = cache(allMarkets);

export async function upsertMarket(market: MarketSchema) {
  const { user } = await validateRequest();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  const { id, name, location, mapCoordinates } = marketSchema.parse(market);
  return await prisma.market.upsert({
    where: { id },
    create: {
      name,
      mapCoordinates,
      location,
    },
    update: { name, mapCoordinates, location },
    include: marketDataInclude,
  });
}

export async function deleteMarket(id: string) {
  const { user } = await validateRequest();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  if (!isAuthorized) throw new Error("Unauthorized");

  return await prisma.market.delete({
    where: { id },
    include: marketDataInclude,
  });
}
