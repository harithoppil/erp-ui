import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GlobalSearch } from "@/components/global-search";

interface TopBarProps {
  user: string;
}

export function TopBar({ user }: TopBarProps) {
  const initials = user.slice(0, 2).toUpperCase();

  return (
    <header className="flex h-14 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-3">
        <GlobalSearch />
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-md p-2 hover:bg-gray-100">
          <Bell size={18} className="text-gray-500" />
        </button>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-[#242729] text-xs text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-700">{user}</span>
        </div>
      </div>
    </header>
  );
}
