import { useState } from "react";
import { Bell, Newspaper, Search, MapPin } from "lucide-react";
import { NewsCard, newsItems } from "../components/intracker/NewsCard";
import { BottomNav } from "../components/intracker/BottomNav";
import logo from "../assets/logo.png";

const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-46.6450%2C-23.5720%2C-46.6100%2C-23.5460&layer=mapnik";

type MobileTab = "news" | "map";

export default function HomePage() {
  const [mobileTab, setMobileTab] = useState<MobileTab>("map");

  return (
    <div className="min-h-screen bg-background md:grid md:h-screen md:grid-rows-[auto_minmax(0,1fr)] md:overflow-hidden">
      {/* Header desktop */}
      <header className="hidden items-center justify-between gap-4 bg-primary px-6 py-3 md:grid md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Intracker Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="truncate text-2xl font-semibold text-secondary">
            InTracker
          </span>
        </div>
        <button
          aria-label="Notificações"
          className="shrink-0 text-secondary/90"
        >
          <Bell className="h-6 w-6" strokeWidth={1.8} />
        </button>
      </header>

      {/*Mobile Header */}
      <div className="sticky top-0 z-10 bg-secondary/60 px-4 pb-3 pt-[calc(env(safe-area-inset-top)+12px)] backdrop-blur md:hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex min-w-0 items-center gap-2 rounded-full border border-border bg-secondary-text/20 px-4 py-2">
            <Search className="h-4 w-2 shrink-0 text-secondary-text" />
            <input
              placeholder="Pesquisar..."
              className="min-w-0 flex-1 bg-transparent text-sm text-secondary-text placeholder:text-secondary-text focus:outline-none"
            />
          </div>
          <button aria-label="Notificações" className="shrink-0 relative">
            <div className="grid h-9 w-9 place-items-center rounded-full hover:bg-primary/10 hover:text-secondary active:bg-primary text-primary/90">
              <Bell
                className="h-4 w-4 text-primary active:text-secondary"
                strokeWidth={1.8}
              />
            </div>
          </button>
        </div>

        {/* Abas Notícias / Mapa */}

        <div className="mt-3 grid grid-cols-2 rounded-full p-1">
          <button
            onClick={() => setMobileTab("map")}
            className={`flex items-center justify-center gap-1.5 rounded-full py-2 text-sm font-medium transition-colors ${
              mobileTab === "map"
                ? "bg-primary text-secondary shadow-2xl"
                : "text-primary hover:bg-primary/10"
            }
                        `}
          >
            <MapPin className="h-4 w-4" strokeWidth={2} />
            Mapa
          </button>
          <button
            onClick={() => setMobileTab("news")}
            className={`flex items-center justify-center gap-1.5 rounded-full py-2 text-sm font-medium transition-colors ${
              mobileTab === "news"
                ? "bg-primary text-secondary shadow-2xl"
                : "text-primary/90 hover:bg-primary/10"
            }
                        `}
          >
            <Newspaper className="h-4 w-4" strokeWidth={2} />
            Notícias
          </button>
        </div>
      </div>

      {/* Desktop: noticias e mapa */}
      <div className="hidden md:grid md:min-h-0 md:grid-cols-[minmax(320px,30%)_1fr]">
        <aside className="flex min-h-0 min-w-0 flex-col bg-cream px-5 py-5">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Newspaper className="h-6 w-6" strokeWidth={1.8} />
            Notícias
          </h1>
          <div className=" scrollbar-thin scrollbar-track-secondary/10 scrollbar-thumb-secondary-text/30 mt-5 min-h-0 flex-1 space-y-5 overflow-y-auto pr-1">
            {newsItems.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
          <div className="pt-4">
            <BottomNav />
          </div>
        </aside>

        <div className="relative min-w-0">
          <iframe
            title="Mapa das rotas do Campus"
            src={MAP_SRC}
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      {/* Mobile: conteúdo alternando por aba */}
      <main className="md:hidden">
        {mobileTab === "map" && (
          <div className="relative h-[calc(100vh-170px)] pb-8">
            <iframe
              title="Mapa das rotas do Campus"
              src={MAP_SRC}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        )}

        {mobileTab === "news" && (
          <div className="space-y-6 px-4 pb-32 pt-6 md:hidden">
            <h1 className="sr-only"> Notícias do IntraCampus</h1>
            {newsItems.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-2 ${left ? "" : "flex-row-reverse"} `}
                >
                  <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-secondary">
                    AD
                  </div>
                  <div className="min-w-0 flex-1">
                    <NewsCard
                      {...item}
                      variant={left ? "bubble-left" : "bubble-right"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      <div className="fixed inset-x-0 bottom-0 px-6 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
