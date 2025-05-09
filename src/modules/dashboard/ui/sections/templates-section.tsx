import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const TemplatesSection = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="text-foreground text-lg font-medium">Templates</h1>
        <Button className="hover:bg-primary/90 flex w-[80px] flex-row items-center gap-1 hover:cursor-pointer">
          <PlusIcon />
          New
        </Button>
      </div>
      <div className="bg-muted my-10 rounded-lg px-8 py-10">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-foreground text-lg font-medium">No templates</h2>
          <p className="text-muted-foreground pb-4 text-sm">
            Create a template to get started
          </p>
          <Button className="hover:bg-primary/90 flex w-[160px] flex-row items-center gap-1 hover:cursor-pointer">
            <PlusIcon />
            New
          </Button>
        </div>
      </div>
    </div>
  );
};
