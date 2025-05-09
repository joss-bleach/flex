import { Navbar } from "../components/navbar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-background">
      <main className="p-4">{children}</main>
      <Navbar />
    </div>
  );
};
