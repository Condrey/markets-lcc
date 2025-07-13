"use server";

import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import { globalPOSTRateLimit } from "../../lib/request";
import { invalidateSession } from "../../lib/session";
import { deleteSessionTokenCookie } from "../../lib/tokens";

export async function logout() {
  if (!globalPOSTRateLimit()) {
    throw Error("Too many requests");
  }

  const { session } = await validateRequest();
  if (!session) {
    throw new Error("Unauthorized.");
  }

  invalidateSession(session.id);
  deleteSessionTokenCookie();
  // finally
  return redirect("/login");
}
