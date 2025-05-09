import { redirect } from "next/navigation";
import { getSessionUserId } from "@/modules/actions/get-session";

import { AuthView } from "@/modules/auth/ui/views/auth-view";

const Page = async () => {
  const userId = await getSessionUserId();
  if (userId) {
    redirect("/");
  }
  return <AuthView />;
};
export default Page;
