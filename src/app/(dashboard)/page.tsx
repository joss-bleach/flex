export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { HydrateClient } from "@/trpc/server";

import { DashboardView } from "@/modules/dashboard/ui/views/dashboard-view";

const Page = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <HydrateClient>
      <DashboardView />
    </HydrateClient>
  );
};

export default Page;
