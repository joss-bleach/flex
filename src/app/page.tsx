import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  return <div>Home</div>;
};

export default Page;
