import { createAuthClient } from "better-auth/react";
import { BETTER_AUTH_URL } from "@/config/const";

export const authClient = createAuthClient({
  baseURL: BETTER_AUTH_URL,
});
