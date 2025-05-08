import { env } from "./env";

export const BETTER_AUTH_URL =
  env.VERCEL_ENV === "production" ? env.VERCEL_URL : env.BASE_URL;
