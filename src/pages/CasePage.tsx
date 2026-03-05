import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";
import { CASES } from "@/data/cases";

const LOGO = "https://cdn.poehali.dev/projects/73d44e83-d564-479d-8f43-da6574df1585/bucket/39cf89f9-e068-4ca7-81a6-b30477dfd19e.png";

export default function CasePage() {
  const { id } = useParams<{ id: string }>();
  const c = CASES.find((x) => x.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (c) {
      document.title = `${c.title} — IT25`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", `${c.problem.slice(0, 155)}...`);
    }
  }, [c]);

  if (!c) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <div className="font-golos text-white/30 text-8xl font-black">404</div>
        <p className="font-ibm text-white/50">Кейс не найден</p>
        <Link to="/" className="btn-primary px-6 py-3 rounded-xl">На главную</Link>
      </div>
    );
  }

  const accentMetric = c.accent === "purple" ? "text-purple-300" : "text-orange-300";
  const accentBg = c.accent === "purple" ? "bg-purple-400/10" : "bg-orange-400/10";
  const accentBorder = c.accent === "purple" ? "border-purple-400/20" : "border-orange-400/20";
  const accentBadge = c.accent === "purple"
    ? "bg-purple-500/25 border-purple-400/40 text-purple-200"
    : "bg-orange-500/25 border-orange-400/40 text-orange-200";

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,20%,6%,0.95)] backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={LOGO} alt="IT25" className="h-8 w-auto" />
          </Link>
          <Link to="/#cases" className="flex items-center gap-2 font-ibm text-sm text-white/50 hover:text-white/90 transition-colors">
            <Icon name="ArrowLeft" size={16} />
            Все кейсы
          </Link>
        </div>
      </header>

      <div className="pt-16">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 max-w-4xl mx-auto px-6">
            <div className="flex gap-2 mb-4">
              <span className={`font-ibm text-xs font-semibold px-3 py-1.5 rounded-lg border backdrop-blur-sm ${accentBadge}`}>{c.category}</span>
              <span className="font-ibm text-xs px-3 py-1.5 rounded-lg border backdrop-blur-sm bg-white/10 border-white/20 text-white/70">{c.tag}</span>
            </div>
            <h1 className="font-golos font-black text-white text-3xl md:text-4xl lg:text-5xl leading-tight">{c.title}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="font-ibm text-white/40 text-sm mb-10 flex items-center gap-2">
            <Icon name="Building2" size={14} className="text-white/30" />
            {c.client}
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-2xl border ${accentBg} ${accentBorder}`}>
            {c.results.map((r) => (
              <div key={r.label} className="text-center">
                <div className={`font-golos font-black text-3xl md:text-4xl mb-1 ${accentMetric}`}>{r.metric}</div>
                <div className="font-ibm text-white/45 text-xs leading-snug">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div>
              <h2 className="font-golos font-bold text-white text-xl mb-4 flex items-center gap-2">
                <Icon name="AlertCircle" size={18} className="text-white/30" />
                Ситуация
              </h2>
              <p className="font-ibm text-white/60 leading-relaxed text-base">{c.problem}</p>
            </div>
            <div>
              <h2 className="font-golos font-bold text-white text-xl mb-4 flex items-center gap-2">
                <Icon name="Lightbulb" size={18} className="text-white/30" />
                Решение
              </h2>
              <p className="font-ibm text-white/60 leading-relaxed text-base">{c.solution}</p>
            </div>
          </div>

          <blockquote className={`card-glass rounded-2xl p-8 border ${accentBorder} relative mb-14`}>
            <Icon name="Quote" size={32} className={`${accentMetric} opacity-30 absolute top-6 left-6`} />
            <p className="font-golos text-white text-xl md:text-2xl font-semibold leading-relaxed pl-10 mb-5">«{c.quote}»</p>
            <footer className="font-ibm text-white/40 text-sm pl-10">— {c.quoteAuthor}</footer>
          </blockquote>

          <div className="border-t border-white/8 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-golos font-bold text-white text-xl mb-1">Хотите такой же результат?</p>
              <p className="font-ibm text-white/40 text-sm">Обсудим вашу задачу — ответим в течение часа</p>
            </div>
            <Link to="/#contacts" className="btn-primary px-8 py-3.5 rounded-xl text-base whitespace-nowrap">
              Обсудить проект
            </Link>
          </div>

          <div className="mt-10">
            <p className="font-ibm text-white/30 text-sm mb-5">Другие кейсы</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CASES.filter((x) => x.id !== c.id).slice(0, 2).map((other) => (
                <Link
                  key={other.id}
                  to={`/cases/${other.id}`}
                  className="card-glass rounded-2xl overflow-hidden border border-white/5 group hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-32 overflow-hidden">
                    <img src={other.image} alt={other.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="font-ibm text-white/30 text-xs mb-1">{other.category}</p>
                    <p className="font-golos font-bold text-white text-sm leading-snug group-hover:text-purple-300 transition-colors">{other.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
