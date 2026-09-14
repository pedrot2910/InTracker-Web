import type { ReactNode } from "react";
import Image from "../../assets/logo.png";

export function AuthCard({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-primary">
      <div className="absolute inset-x-0 bottom-0 h-[62%] rounded-t-[3rem] bg-secondary" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pt-14">
        <img src={Image} alt="logo" className="w-24 h-24" />
        <span className="mt-2 text-3xl font-semibold text-secondary">
          InTracker
        </span>
        <div className="mt-6 w-full pb-14">{children}</div>
      </div>
    </main>
  );
}
export function Field({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-title">{label}</span>
      <input
        type={type}
        className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
