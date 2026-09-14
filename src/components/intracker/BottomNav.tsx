import { Home, Clock, User, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { icon: Home, label: "Início", to: "/home" },
  { icon: Clock, label: "Horários", to: "/schedule" },
  { icon: User, label: "Perfil", to: "/profile" },
  { icon: Info, label: "Sobre", to: "/about" },
];

export function BottomNav() {
  return (
    <nav className="mx-auto flex w-full max-w-sm items-center justify-around rounded-full border border-primary/40 bg-secondary/70 px-3 py-2 shadow-lg backdrop-blur">
      {items.map(({ icon: Icon, label, to }) => (
        <NavLink
          key={label}
          to={to}
          type="button"
          aria-label={label}
          className={({ isActive }) =>
            `flex h-11 w-11 items-center justify-center rounded-full p-0 leading-none transition-colors ${
              isActive
                ? "bg-primary text-secondary"
                : "text-primary/90 hover:bg-primary/10 hover:text-primary"
            } `
          }
        >
          <Icon className="block h-5 w-5" strokeWidth={1.8} />
        </NavLink>
      ))}
    </nav>
  );
}
