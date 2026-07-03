import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router";
import { ArrowRight, MonitorSmartphone, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { Magnetic } from "./ui/Magnetic";

export function WebsitesSection() {
  const { lang } = useLanguage();

  const t = {
    sv: {
      meta: "HEMSIDOR & SYSTEM",
      title: "Extrem prestanda. Prisbelönt estetik.",
      desc: "Vi bygger inte traditionella hemsidor – vi skapar digitala upplevelser optimerade för snabbhet och affärsnytta. Sub-100ms laddningstid, skräddarsydd design och enkla administrationsverktyg.",
      viewTemplates: "Utforska templates & priser",
      features: [
        "Skräddarsydd React- & Next.js-kod (Ingen bloat)",
        "Headless CMS-koppling för full redaktionell kontroll",
        "E-handelssystem integrerade med Klarna/Stripe"
      ],
      statsLabel: "Laddningstid i snitt",
      statsVal: "< 100ms"
    },
    en: {
      meta: "WEBSITES & SYSTEMS",
      title: "Extreme performance. Award-winning aesthetics.",
      desc: "We don't build generic websites – we create digital systems optimized for speed and conversion. Sub-100ms load times, bespoke layouts, and intuitive administration dashboards.",
      viewTemplates: "Explore Templates & Pricing",
      features: [
        "Bespoke React & Next.js engineering (No bloat)",
        "Headless CMS integrations for full editorial control",
        "E-Commerce workflows powered by Stripe & Klarna"
      ],
      statsLabel: "Average Load Speed",
      statsVal: "< 100ms"
    }
  }[lang];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-900/60">
      <div className="flex flex-col lg:flex-row gap-12 items-center bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] -z-10 animate-pulse" />
        
        {/* Floating statistics widget */}
        <div className="w-full lg:w-[350px] bg-zinc-900 border border-zinc-850 rounded-3xl p-8 flex flex-col justify-between shrink-0 order-2 lg:order-1 relative">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-10">
            <MonitorSmartphone className="w-6 h-6 text-blue-400" />
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

        {/* Text Area */}
        <div className="flex-1 space-y-6 order-1 lg:order-2 lg:pl-6">
          <span className="text-xs text-blue-400 font-extrabold tracking-[0.25em] uppercase block">
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
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <Magnetic>
              <Link
                to="/hemsidor"
                className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-blue-400 hover:border-blue-500 pb-1.5 transition-colors text-sm cursor-pointer"
              >
                {t.viewTemplates} <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </div>

      </div>
    </section>
  );
}
