import type { BusLocation, StatusConnection } from "../../types/bus";

type Props = {
  status: StatusConnection;
  isStale: boolean;
  bus: BusLocation | null;
};

export function LiveBadge({ status, isStale, bus }: Props) {
  let label = "Aguardando o ônibus...";
  let live = false;

  if (status !== "connected") label = "Reconectando...";
  else if (bus && !bus.gpsFix) label = "Ônibus sem sinal de GPS";
  else if (bus && isStale) label = "Ônibus offline";
  else if (bus) {
    label = "Ao vivo";
    live = true;
  }

  return (
    <div
      className="
      absolute right-4 top-4 z-[1000]
      flex items-center gap-2
      rounded-full
      border border-border/60
      bg-background/95
      px-4 py-2
      text-xs font-semibold text-text
      shadow-md backdrop-blur-sm
    "
      role="status"
    >
      <span className="relative flex h-2.5 w-2.5">
        {live && (
          <span
            className="
            absolute inline-flex h-full w-full
            animate-ping rounded-full
            bg-green-500 opacity-75
          "
          />
        )}

        <span
          className={`
            relative inline-flex h-2.5 w-2.5 rounded-full
            ${live ? "bg-green-500" : "bg-amber-500"}
          `}
        />
      </span>

      {label}
    </div>
  );
}
