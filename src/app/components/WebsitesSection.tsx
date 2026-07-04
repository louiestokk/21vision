import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router";
import { ArrowRight, MonitorSmartphone, Code2, Sparkles, CheckCircle2, Search, ArrowUpRight, Globe, Zap } from "lucide-react";
import { Magnetic } from "./ui/Magnetic";

function SearchSpeedCard() {
  const { lang } = useLanguage();
  const [animState, setAnimState] = useState<"typing" | "searching" | "results">("typing");
  const [displayedText, setDisplayedText] = useState("");
  
  const queryText = lang === "sv" ? "snabb hemsida företag" : "fastest business website";
  
  const [performanceScore, setPerformanceScore] = useState(35);
  const [loadTime, setLoadTime] = useState("2.4s");
  
  // Reset states when language changes
  useEffect(() => {
    setDisplayedText("");
    setPerformanceScore(35);
    setLoadTime("2.4s");
    setAnimState("typing");
  }, [lang]);

  // Typewriter effect
  useEffect(() => {
    let active = true;
    if (animState === "typing") {
      if (displayedText.length < queryText.length) {
        const nextChar = queryText.charAt(displayedText.length);
        const timer = setTimeout(() => {
          if (active) {
            setDisplayedText((prev) => prev + nextChar);
          }
        }, 80);
        return () => {
          active = false;
          clearTimeout(timer);
        };
      } else {
        const timer = setTimeout(() => {
          if (active) setAnimState("searching");
        }, 800);
        return () => {
          active = false;
          clearTimeout(timer);
        };
      }
    }
  }, [animState, displayedText, queryText]);

  // Searching phase transition
  useEffect(() => {
    if (animState === "searching") {
      const timer = setTimeout(() => {
        setAnimState("results");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [animState]);

  // Results display and metric animation
  useEffect(() => {
    if (animState === "results") {
      const t1 = setTimeout(() => {
        setPerformanceScore(72);
        setLoadTime("450ms");
      }, 800);

      const t2 = setTimeout(() => {
        setPerformanceScore(100);
        setLoadTime("82ms");
      }, 1600);

      const loopTimer = setTimeout(() => {
        setDisplayedText("");
        setPerformanceScore(35);
        setLoadTime("2.4s");
        setAnimState("typing");
      }, 8000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(loopTimer);
      };
    }
  }, [animState]);

  return (
    <div className="w-full lg:w-[400px] xl:w-[440px] bg-zinc-950/80 border border-zinc-850 rounded-3xl p-6 flex flex-col justify-between shrink-0 order-2 lg:order-1 relative overflow-hidden backdrop-blur-xl shadow-2xl min-h-[420px] group">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
      
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/30 group-hover:bg-red-500/60 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/30 group-hover:bg-yellow-500/60 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors" />
        </div>
        <div className="flex-1 max-w-[180px] md:max-w-[220px] text-center text-[10px] text-zinc-550 font-mono truncate px-3 py-1 bg-zinc-900/60 rounded-lg border border-zinc-850/60 flex items-center justify-center gap-1.5">
          <Globe className="w-3 h-3 text-zinc-500" />
          <span>{lang === "sv" ? "google.se" : "google.com"}</span>
        </div>
        <div className="w-12" />
      </div>

      <div className="mb-4">
        <div className="relative flex items-center bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-zinc-400">
          <Search className="w-4 h-4 text-zinc-500 mr-2 shrink-0" />
          <div className="text-xs font-semibold text-white flex-grow truncate min-h-[16px] flex items-center">
            {displayedText}
            {animState === "typing" && (
              <span className="w-1.5 h-4 bg-blue-400 ml-0.5 animate-pulse inline-block" />
            )}
          </div>
          <div className={`text-[10px] px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold rounded-lg transition-all duration-300 ${animState === "searching" ? "scale-95 opacity-60" : "scale-100"}`}>
            {lang === "sv" ? "Sök" : "Search"}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center relative min-h-[220px]">
        <AnimatePresence mode="wait">
          {animState === "typing" && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center space-y-2 py-8"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-500">
                <Search className="w-4 h-4 animate-bounce" />
              </div>
              <span className="text-xs text-zinc-550 font-medium">
                {lang === "sv" ? "Väntar på sökning..." : "Awaiting search query..."}
              </span>
            </motion.div>
          )}

          {animState === "searching" && (
            <motion.div
              key="searching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center space-y-4 py-8"
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
                <div className="absolute inset-0 rounded-full border-2 border-t-blue-400 animate-spin" />
              </div>
              <span className="text-xs text-zinc-400 font-medium animate-pulse">
                {lang === "sv" ? "Hämtar sökresultat..." : "Fetching search results..."}
              </span>
            </motion.div>
          )}

          {animState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="space-y-4 py-2"
            >
              <div className="p-4 bg-zinc-900/60 border border-zinc-850 rounded-2xl space-y-3 relative group/item hover:border-zinc-800 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    {lang === "sv" ? "Sökresultat #1" : "Search Result #1"}
                  </div>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-semibold rounded-full border border-emerald-500/25">
                    100% Core Web Vitals
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] text-zinc-550 flex items-center gap-1">
                    https://21vision.se <ArrowUpRight className="w-3 h-3 text-zinc-650" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                    {lang === "sv" ? "21Vision — Blixtsnabba Hemsidor" : "21Vision — Lightning Fast Websites"}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {lang === "sv" 
                      ? "Vi skapar digitala upplevelser optimerade för snabbhet och affärsnytta. Sub-100ms laddningstid." 
                      : "We create digital experiences optimized for speed and conversion. Sub-100ms load times."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-zinc-900/40 border border-zinc-850 rounded-xl flex flex-col items-center justify-center gap-2">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="28" cy="28" r="24" className="stroke-zinc-800" strokeWidth="2.5" fill="transparent" />
                      <motion.circle 
                        cx="28" cy="28" r="24" 
                        className={performanceScore === 100 ? "stroke-emerald-400" : performanceScore > 60 ? "stroke-yellow-500" : "stroke-red-500"} 
                        strokeWidth="3" 
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 24}
                        initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                        animate={{ strokeDashoffset: (2 * Math.PI * 24) * (1 - performanceScore/100) }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </svg>
                    <span className={`absolute text-sm font-black font-mono ${performanceScore === 100 ? "text-emerald-400" : performanceScore > 60 ? "text-yellow-500" : "text-red-500"}`}>
                      {performanceScore}
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">
                    Performance
                  </span>
                </div>

                <div className="p-3 bg-zinc-900/40 border border-zinc-850 rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-550 font-bold block mb-1">
                      {lang === "sv" ? "Laddningstid" : "Load Speed"}
                    </span>
                    <span className={`text-lg font-black font-mono tracking-tight transition-colors duration-300 ${performanceScore === 100 ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.15)]" : performanceScore > 60 ? "text-yellow-500" : "text-red-500"}`}>
                      {loadTime}
                    </span>
                  </div>

                  <div className="mt-1">
                    {performanceScore === 100 ? (
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-emerald-400/20 animate-pulse" /> 96% snabbare
                      </span>
                    ) : (
                      <span className="text-[9px] text-zinc-500 font-semibold">
                        {lang === "sv" ? "Mäter..." : "Analyzing..."}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function WebsitesSection() {
  const { lang } = useLanguage();

  const t = {
    sv: {
      meta: "HEMSIDOR & SYSTEM",
      title: "Extrem prestanda. Prisbelönt estetik.",
      desc: "Vi bygger inte traditionella hemsidor – vi skapar digitala upplevelser optimerade för snabbhet och affärsnytta. Sub-100ms laddningstid, skräddarsydd design och enkla administrationsverktyg.",
      viewTemplates: "Utforska case & priser",
      features: [
        "Skräddarsydd React- & Next.js-kod (Ingen bloat)",
        "Headless CMS-koppling för full redaktionell kontroll",
        "E-handelssystem integrerade med Klarna/Stripe"
      ]
    },
    en: {
      meta: "WEBSITES & SYSTEMS",
      title: "Extreme performance. Award-winning aesthetics.",
      desc: "We don't build generic websites – we create digital systems optimized for speed and conversion. Sub-100ms load times, bespoke layouts, and intuitive administration dashboards.",
      viewTemplates: "Explore Cases & Pricing",
      features: [
        "Bespoke React & Next.js engineering (No bloat)",
        "Headless CMS integrations for full editorial control",
        "E-Commerce workflows powered by Stripe & Klarna"
      ]
    }
  }[lang];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-900/60">
      <div className="flex flex-col lg:flex-row gap-12 items-center bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] -z-10 animate-pulse" />
        
        <SearchSpeedCard />

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
