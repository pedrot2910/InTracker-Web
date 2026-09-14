import { Info, MapPinned, BellRing, Clock } from "lucide-react";
import { ContentShell } from "../components/intracker/ContentShell";
import logo from "../assets/logo.png";

const recursos = [
  {
    icon: MapPinned,
    title: "Mapa em Tempo Real",
    body: "Veja onde o IntraCampus está agora e evite esperas desnecessárias.",
  },
  {
    icon: Clock,
    title: "Horários sempre na sua mão",
    body: "Todas as linhas e seus horários organizados por ponto de embarque",
  },
  {
    icon: BellRing,
    title: "Avisos da administração",
    body: "Panes, atrasos e outras notícias chegam direto no seu feed de notícias",
  },
];

export default function AboutPage() {
  return (
    <ContentShell
      title="Sobre"
      icon={<Info className="h-6 w-6" strokeWidth={1.8} />}
    >
      <section className="flex flex-col items-center rounded-2xl bg-primary p-6 text-center text-secondary shadow-lg">
        <img src={logo} alt="InTracker" className="h-18 w-18 object-contain" />
        <span className="mt-3 text-2xl font-semibold">InTracker</span>
        <p className="mt-2 text-sm text-secondary/90">
          Transporte universitário mais próximo de você.
        </p>
      </section>

      {recursos.map(({ icon: Icon, title, body }) => (
        <article
          key={title}
          className="flex gap-4 rounded-2xl border border-secondary bg-secondary"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-secondary">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-base font-bold text-primary">
              {title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-secondary-text/70">
              {body}
            </p>
          </div>
        </article>
      ))}
      <p className="text-center text-xs text-secondary-text/50">
        InTracker - versão 1.5x - Projeto Acadêmico de mobilidade no campus
      </p>
    </ContentShell>
  );
}
