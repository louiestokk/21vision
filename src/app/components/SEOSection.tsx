import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router";
import { ArrowRight, Search, CheckCircle2, TrendingUp } from "lucide-react";
import { Magnetic } from "./ui/Magnetic";

export function SEOSection() {
  const { lang } = useLanguage();

  const t = {
    sv: {
      meta: "SEO & SYNLIGHET",
      title: "Hjälp dina kunder att hitta hem.",
      desc: "Att synas på Google är skillnaden mellan att aktivt jaga kunder och att låta kunderna hitta dig. Vi bygger avancerade SEO-kampanjer som ger resultat som syns på sista raden.",
      viewPricing: "Läs mer & Se paket",
      features: [
        "Djup sökords- och konkurrentanalys",
        "PageSpeed & Core Web Vitals optimering",
        "Löpande innehållsproduktion & länkbygge"
      ],
      statsLabel: "Trafikökning i snitt",
      statsVal: "+340%"
    },
    en: {
      meta: "SEO & VISIBILITY",
      title: "Help your clients find their way.",
      desc: "Ranking on Google is the difference between chasing leads and having them land directly in your inbox. We implement technical SEO strategies that directly increase organic revenue.",
      viewPricing: "Read More & View Packages",
      features: [
        "Deep Keyword & Competitor Analysis",
        "PageSpeed & Core Web Vitals Optimization",
        "Strategic Content Production & Authority Backlinks"
      ],
      statsLabel: "Average Traffic Growth",
      statsVal: "+340%"
    }
  }[lang];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-900/60">
      <div className="flex flex-col lg:flex-row gap-12 items-center bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-emerald-500/5 blur-[100px] -z-10 animate-pulse" />
        
        {/* Text Area */}
        <div className="flex-1 space-y-6">
          <span className="text-xs text-emerald-400 font-extrabold tracking-[0.25em] uppercase block">
            {t.meta}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {t.title}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
            {t.desc}
          </p>

          <ul className="space-y-3.5 pt-2">
            {t.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <Magnetic>
              <Link
                to="/seo"
                className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-emerald-400 hover:border-emerald-500 pb-1.5 transition-colors text-sm cursor-pointer"
              >
                {t.viewPricing} <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Floating statistics widget */}
        <div className="w-full lg:w-[350px] bg-zinc-900 border border-zinc-850 rounded-3xl p-8 flex flex-col justify-between shrink-0 relative">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-10">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-xs text-zinc-550 font-bold uppercase tracking-widest block mb-1">
              {t.statsLabel}
            </span>
            <span className="text-5xl font-black text-white font-mono leading-none tracking-tight">
              {t.statsVal}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
