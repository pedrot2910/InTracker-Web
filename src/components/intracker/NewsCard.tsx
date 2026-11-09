import { useState } from "react";

type Props = {
  title: string;
  body: string;
  variant?: "panel" | "bubble-left" | "bubble-right";
};

export function NewsCard({ title, body, variant = "panel" }: Props) {
  const [expanded, setExpanded] = useState(false);

  const tail =
    variant === "bubble-left"
      ? "bubble-left"
      : variant === "bubble-right"
        ? "bubble-right"
        : "";

  return (
    <article
      className={`relative z-0 rounded-2xl bg-primary p-5 text-primary shadow-lg ${tail}`}
    >
      <h3 className="font-display text-lg font-bold text-secondary">{title}</h3>
      <p
        className={`mt-4 whitespace-pre-line text-center text-sm leading-relaxed text-secondary/90 transition-all ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {body}
      </p>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="mx-auto mt-4 block text-secondary/80 hover:underline underline-offset-4 transition hover:text-secondary-text/80 focus:outline-none focus:ring"
      >
        {expanded ? "Fechar" : "Ler mais"}
      </button>
    </article>
  );
}

export const newsItems = [
  {
    title: "IntraCampus quebrou!",
    body: "A administração informa que o IntraCampus apresentou uma pane mecânica na manhã de hoje e está temporariamente fora de circulação.\nA equipe já foi acionada para o reparo e trabalha para normalizar o serviço o quanto antes.",
  },
  {
    title: "Nova rota no turno da noite",
    body: "A partir de segunda-feira o IntraCampus passa a atender o bloco C às 22h10.\nO embarque continua no ponto central, em frente à biblioteca.",
  },
  {
    title: "Cancelamento do turno da manhã",
    body: "Devido a obras na avenida principal, o turno da manhã está cancelado nesta semana.\nAcompanhe a posição do veículo em tempo real pelo mapa.",
  },
];
