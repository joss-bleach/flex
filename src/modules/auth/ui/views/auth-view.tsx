import { AuthButton } from "../components/auth-button";

export const AuthView = () => {
  return (
    <div>
      <div className="flex w-[380px] flex-col gap-2">
        <h1 className="text-foreground text-2xl font-medium">
          Welcome to Flex
        </h1>
        <p className="text-muted-foreground text-lg">
          Create an account or log in to get started.
        </p>
        <AuthButton />
        <p className="text-muted-foreground text-sm">
          By creating an account you agree to our Terms of Service and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};
