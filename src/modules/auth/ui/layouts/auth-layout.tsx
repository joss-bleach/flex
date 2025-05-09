export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background flex h-screen w-screen items-center justify-center">
      {children}
    </div>
  );
};
