"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigations } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-grow flex-col gap-y-1 p-2">
      {navigations.map((navigation) => {
        const Icon = navigation.icon;
        const isActive = pathname === navigation.href || (navigation.href !== "/" && pathname.startsWith(navigation.href));
        return (
          <Link
            key={navigation.name}
            href={navigation.href}
            className={cn(
              "group relative flex items-center rounded-md px-2 py-1.5 transition-colors",
              isActive
                ? "bg-primary/10 text-primary dark:bg-primary/20"
                : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {/* 激活态左侧指示条 */}
            <span
              className={cn(
                "absolute -left-2 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-primary to-accent transition-opacity",
                isActive ? "opacity-100" : "opacity-0",
              )}
            />
            <Icon size={16} className={cn("mr-2", isActive ? "text-primary" : "group-hover:text-foreground")} />
            <span className="text-sm">{navigation.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
