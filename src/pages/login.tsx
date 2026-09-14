import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { AuthCard, Field } from "../components/intracker/AuthCard";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <AuthCard>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/home");
        }}
        className="space-y-5 rounded-3xl bg-secondary/70 p-6 shadow-lg backdrop-blur-md"
      >
        <h1 className="sr-only">Entrar</h1>
        <Field label="E-mail" type="email" />
        <Field label="Senha" type="password" />
        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-secondary transition hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/90"
        >
          Entrar <ChevronRight className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-secondary-text">
          Não tem uma conta?{" "}
          <Link
            to="/register"
            className="text-primary underline underline-offset-4 transition hover:text-primary/80 focus:outline-none focus:ring"
          >
            Cadastre-se
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
