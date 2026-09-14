import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="grid min-h-screen place-items-center bg-primary p-6">
      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-5">
          {/*esperando o bombom serenata logos */}
          <h1 className="sr-only">InTracker</h1>
          <span className="text-6xl font-semibold text-secondary">
            InTracker
          </span>
        </div>
        <Link
          to="/login"
          className="rounded-full bg-secondary px-10 py-3 text-sm font-medium text-primary transition hover:bg-secondary/80 focus:outline-none focus:ring active:bg-secondary/90"
        >
          Se Junte a nós
        </Link>
      </div>
    </main>
  );
}
