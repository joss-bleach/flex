"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { tryCatch } from "@/lib/utils";

export async function getSessionUserId() {
  const { data, error } = await tryCatch(
    auth.api.getSession({
      headers: await headers(),
    }),
  );

  if (error || !data) {
    return null;
  }

  return data.session.userId;
}
