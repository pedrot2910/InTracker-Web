import type { ReactNode } from "react";
import { Bell } from "lucide-react";
import { BottomNav } from "./BottomNav";
import logo from "../../assets/logo.png";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

export function ContentShell({ children, icon, title }: Props) {
  return (
    <div className="min-h-screen bg-secondary pb-28 md:pb-0">
      {/* Header desktop */}
      <header className="hidden items-center justify-between gap-4 bg-primary px-6 py-3 md:flex">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Intracker Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="truncate text-2xl font-semibold text-secondary">
            InTracker
          </span>
        </div>
        <button
          aria-label="Notificações"
          className="shrink-0 text-secondary/90"
        >
          <Bell className="h-6 w-6" strokeWidth={1.8} />
        </button>
      </header>

      {/* Mobile Header */}
      <div className="text-secondary sticky top-0 z-20 flex items-center gap-2 bg-primary px-4 pb-3 pt-[calc(env(safe-area-inset-top)+12px)] md:hidden backdrop-blur">
        {icon}
        <h1 className="font-display text=xl font-bold text-secondary">
          {title}
        </h1>
      </div>

      {/* Content */}
      <main className="mx-auto w-full max-w-3xl px-4 py-6 md:px-8">
        <h1 className="hidden items-center gap-2 text-2xl font-bold text-primary md:flex">
          {icon}
          {title}
        </h1>
        <div className="mt-5 space-y-5 md:mt-6">{children}</div>
      </main>

      {/* Bottom Nav */}
      <div className="">
        <BottomNav />
      </div>
    </div>
  );
}
