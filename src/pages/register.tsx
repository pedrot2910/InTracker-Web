import { Link, useNavigate } from "react-router-dom";
import { AuthCard, Field } from "../components/intracker/AuthCard";
import { ChevronRight } from "lucide-react";

export default function RegisterPage() {
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
        <h1 className="sr-only">Cadastro</h1>
        <Field label="Nome" />
        <Field label="E-mail" type="email" />
        <Field label="Senha" type="password" />
        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-secondary transition hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/90"
        >
          Cadastrar <ChevronRight className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-secondary-text">
          Já tem uma conta?{" "}
          <Link
            to="/login"
            className="text-primary underline underline-offset-4 transition hover:text-primary/80 focus:outline-none focus:ring"
          >
            Entre
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
