import { Link } from "react-router-dom";
import { User, Mail, GraduationCap, Bus, LogOut } from "lucide-react";
import { ContentShell } from "../components/intracker/ContentShell";

const dados = [
  { icon: User, label: "Nome", value: "João da Silva" },
  { icon: Mail, label: "E-mail", value: "joão.silva@alu.ufc.br" },
  { icon: GraduationCap, label: "Curso", value: "Engenharia da Computação" },
  { icon: Bus, label: "Rota favorita", value: "Linha Centro" },
];

export default function ProfilePage() {
  return (
    <ContentShell
      title="Perfil"
      icon={<User className="h-6 w-6" strokeWidth={1.8} />}
    >
      <section className="flex items-center gap-4 rounded-2xl bg-primary p-5 text-secondary shadow-lg">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-secondary text-lg font-bold text-primary">
          JS
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-lg font-bold">João da Silva</h2>
          <p className="text-xs text-secondary/80"> Matrícula 546789</p>
        </div>
      </section>
      <section className="divide-y divide-secondary overflow-hidden rounded-2xl border border-secondary bg-primary">
        {dados.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 px-5 py-4">
            <Icon
              className="h-5 w-5 shrink-0 text-secondary"
              strokeWidth={1.8}
            />
            <div className="min-w-0">
              <p className="text-xs text-secondary font-bold">{label}</p>
              <p className="truncate text-sm font-medium text-secondary/70">
                {value}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Link
        to="/login"
        className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-secondary shadow-lg transition-opacity hover:opacity-90"
      >
        <LogOut className="h-4 w-4" strokeWidth={2} />
      </Link>
    </ContentShell>
  );
}
