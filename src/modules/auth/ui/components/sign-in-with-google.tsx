"use client";
import { FaGoogle } from "react-icons/fa";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

export const SignInWithGoogle = () => {
  return (
    <div className="my-4">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <SignIn.Step name="start">
              <Clerk.GlobalError className="block text-sm text-red-400" />
              <div className="space-y-2">
                <Clerk.Connection asChild name="google">
                  <Button
                    disabled={isGlobalLoading}
                    className="hover:bg-primary/90 relative h-[40px] w-full font-medium text-white hover:cursor-pointer"
                  >
                    <Clerk.Loading scope="provider:google">
                      {(isLoading) =>
                        isLoading ? (
                          <Loader2Icon className="size-4 animate-spin" />
                        ) : (
                          <>
                            <FaGoogle className="absolute top-3 left-4 size-4" />
                            Continue with Google
                          </>
                        )
                      }
                    </Clerk.Loading>
                  </Button>
                </Clerk.Connection>
              </div>
            </SignIn.Step>
          )}
        </Clerk.Loading>
      </SignIn.Root>
      <div id="clerk-captcha" />
    </div>
  );
};
