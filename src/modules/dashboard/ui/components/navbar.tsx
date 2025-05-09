import Link from "next/link";
import {
  ChartNoAxesCombinedIcon,
  DumbbellIcon,
  UserIcon,
  PlusIcon,
} from "lucide-react";

export const Navbar = () => {
  return (
    <div className="fixed top-auto bottom-0 z-50 w-full transform p-4 transition-all duration-500 md:left-1/2 md:w-2/3 md:-translate-x-1/2">
      <nav className="bg-muted flex justify-evenly overflow-hidden rounded-lg py-3">
        <Link className="text-inverted relative text-center" href="/templates">
          <i className="bg-primary absolute top-0 left-1/2 -my-3 h-2 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded"></i>
          <div className="text-foreground flex flex-col items-center gap-1">
            <DumbbellIcon />
            <span className="text-xs">Templates</span>
          </div>
        </Link>
        <Link className="text-inverted relative text-center" href="/trends">
          <div className="text-muted-foreground flex flex-col items-center gap-1">
            <ChartNoAxesCombinedIcon />
            <span className="text-xs">Trends</span>
          </div>
        </Link>
        <Link className="text-inverted relative text-center" href="/trends">
          <div className="text-muted-foreground flex flex-col items-center gap-1">
            <PlusIcon />
            <span className="text-xs">Workout</span>
          </div>
        </Link>
        <Link className="text-inverted relative text-center" href="/profile">
          <div className="text-muted-foreground flex flex-col items-center gap-1">
            <UserIcon />
            <span className="text-xs">Profile</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};
