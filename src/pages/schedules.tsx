import { Clock, MapPin } from "lucide-react";
import { ContentShell } from "../components/intracker/ContentShell";

const rotas = [
  {
    linha: "Linha Centro",
    ponto: "Terminal Central",
    horarios: ["06:20", "07:10", "12:00", "18:30", "22:10"],
  },
  {
    linha: "Linha Bloco C",
    ponto: "Em frente à biblioteca",
    horarios: ["06:45", "11:40", "17:50", "22:10"],
  },
  {
    linha: "Linha Bairro Norte",
    ponto: "Praça das Palmeiras",
    horarios: ["06:00", "13:15", "19:05"],
  },
];

export default function Schedule() {
  return (
    <ContentShell
      title="Horários"
      icon={<Clock className="h-6 w-6" strokeWidth={1.8} />}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {rotas.map((rota) => (
          <article
            key={rota.linha}
            className="rounded-2xl bg-primary p-5 text-secondary shadow-lg"
          >
            <h2 className="font-display text-lg font-bold">{rota.linha}</h2>
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
        ))}
      </div>
      <p className="text-center text-xs text-secondary-text">
        Horários sujeitos a alteração conforme avisos da administração
      </p>
    </ContentShell>
  );
}
