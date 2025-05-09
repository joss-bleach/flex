"use client";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Loader2Icon } from "lucide-react";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnClick = async () => {
    setIsLoading(true);
    await authClient.signIn.social({ provider: "google" });
    setIsLoading(false);
  };
  return (
    <Button
      disabled={isLoading ? true : false}
      onClick={handleOnClick}
      className="hover:bg-primary/90 relative my-2 grid h-[40px] w-full hover:cursor-pointer"
    >
      <span className={`w-full ${isLoading ? "hidden" : "block"}`}>
        <FaGoogle className="absolute top-3 left-4" />
        Continue with Google
      </span>
      <span
        className={`col-start-1 col-end-[-1] row-start-1 row-end-[-1] w-full ${isLoading ? "block" : "hidden"}`}
      >
        <Loader2Icon className="animate-spin" />
      </span>
    </Button>
  );
};
