import type { NextConfig } from "next";
import { env } from "@/config/env";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: env.VERCEL_ENV !== "production" ? true : false,
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
