import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { SignInWithGoogle } from "@/modules/auth/ui/components/sign-in-with-google";

const Page = async () => {
  const user = await currentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="w-[380px] p-4 md:p-0">
      <div className="flex flex-col gap-1">
        <h1 className="text-foreground text-3xl font-medium">
          Continue with Google
        </h1>
        <p className="text-muted-foreground text-xl font-medium">
          Log into an account to track and view your workouts
        </p>
      </div>
      <SignInWithGoogle />
      <p className="text-muted-foreground text-sm">
        By continuing, you agree with our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default Page;
