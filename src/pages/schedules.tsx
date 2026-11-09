import { useState } from "react";
import { Clock, MapPin, Bell, BellRing } from "lucide-react";
import { ContentShell } from "../components/intracker/ContentShell";

const rotas = [
  {
    parada: "UFC Campus Mucambinho",
    ponto: "Próximo ao terminal rodoviário",
    horarios: ["07:00", "07:10", "12:00", "18:30", "22:10"],
  },
  {
    parada: "Santa Casa",
    ponto: "Ao lado da Delegacia Municipal de Sobral",
    horarios: ["06:45", "11:40", "17:50", "22:10"],
  },
  {
    parada: "Cadeia Criativa",
    ponto: "Rº Desembargador Moreira da Rocha, 1030, Centro",
    horarios: ["06:00", "13:15", "19:05"],
  },
];

export default function Schedule() {
  const [subscribed, setSubscribed] = useState<Record<string, boolean>>({});

  function toggleSubscription(linha: string) {
    setSubscribed((prev) => ({ ...prev, [linha]: !prev[linha] }));
  }

  return (
    <ContentShell
      title="Horários"
      icon={<Clock className="h-6 w-6" strokeWidth={1.8} />}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {rotas.map((rota) => {
          const isSubscribed = subscribed[rota.parada] ?? false;

          return (
            <article
              key={rota.parada}
              className="relative rounded-2xl bg-primary p-5 text-secondary shadow-lg"
            >
              <button
                type="button"
                onClick={() => toggleSubscription(rota.parada)}
                aria-label={
                  isSubscribed
                    ? `Desativar notificações da ${rota.parada}`
                    : `Ativar notificações da ${rota.parada}`
                }
                aria-pressed={isSubscribed}
                className={`absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full transition-colors ${
                  isSubscribed
                    ? "bg-secondary text-primary"
                    : "text-secondary/80 hover:bg-secondary/20"
                }`}
              >
                {isSubscribed ? (
                  <BellRing className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <Bell className="h-5 w-5" strokeWidth={1.8} />
                )}
              </button>

              <h2 className="pr-10 font-display text-lg font-bold">
                {rota.parada}
              </h2>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-secondary/80">
                <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                {rota.ponto}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2 text-primary">
                {rota.horarios.map((horario) => (
                  <li
                    key={horario}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                  >
                    {horario}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <p className="text-center text-xs text-secondary-text">
        Horários sujeitos a alteração conforme avisos da administração
      </p>
    </ContentShell>
  );
}
