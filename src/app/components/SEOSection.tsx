import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router";
import { ArrowRight, Search, CheckCircle2, TrendingUp, ArrowUpRight, Globe, Zap } from "lucide-react";
import { Magnetic } from "./ui/Magnetic";

function SEOMotionCard() {
  const { lang } = useLanguage();
  const [animState, setAnimState] = useState<"typing" | "searching" | "results">("typing");
  const [displayedText, setDisplayedText] = useState("");
  
  const queryText = lang === "sv" ? "seo byrå stockholm" : "seo agency stockholm";
  
  const [trafficVal, setTrafficVal] = useState("+12%");
  const [rankPos, setRankPos] = useState("#42");

  const t = {
    sv: {
      statsLabel: "Trafikökning i snitt",
      statsVal: "+340%"
    },
    en: {
      statsLabel: "Average Traffic Growth",
      statsVal: "+340%"
    }
  }[lang];
  
  // Reset states when language changes
  useEffect(() => {
    setDisplayedText("");
    setTrafficVal("+12%");
    setRankPos("#42");
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
        setRankPos("#1");
      }, 800);

      const t2 = setTimeout(() => {
        setTrafficVal(t.statsVal);
      }, 1600);

      const loopTimer = setTimeout(() => {
        setDisplayedText("");
        setTrafficVal("+12%");
        setRankPos("#42");
        setAnimState("typing");
      }, 9000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(loopTimer);
      };
    }
  }, [animState, t.statsVal]);

  return (
    <div className="w-full lg:w-[400px] xl:w-[440px] bg-zinc-950/80 border border-zinc-850 rounded-3xl p-6 flex flex-col justify-between shrink-0 relative overflow-hidden backdrop-blur-xl shadow-2xl min-h-[420px] group">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
      
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
              <span className="w-1.5 h-4 bg-emerald-400 ml-0.5 animate-pulse inline-block" />
            )}
          </div>
          <div className={`text-[10px] px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded-lg transition-all duration-300 ${animState === "searching" ? "scale-95 opacity-60" : "scale-100"}`}>
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
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20" />
                <div className="absolute inset-0 rounded-full border-2 border-t-emerald-400 animate-spin" />
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
              <div className="p-4 bg-zinc-900/60 border border-zinc-850 rounded-2xl flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  {lang === "sv" ? "Sökposition" : "Search Position"}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold transition-colors duration-500 ${rankPos === "#1" ? "text-zinc-500 line-through" : "text-red-400 font-bold"}`}>
                    #42
                  </span>
                  <span className="text-zinc-650 text-xs">→</span>
                  <motion.span 
                    key={rankPos}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className={`px-3 py-1 text-xs font-black rounded-full border ${rankPos === "#1" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25 shadow-[0_0_12px_rgba(52,211,153,0.15)] animate-pulse" : "bg-zinc-850 text-zinc-400 border-zinc-800"}`}
                  >
                    {rankPos === "#1" ? (lang === "sv" ? "Rank #1 (Högst upp)" : "Rank #1 (Top Position)") : "Rank #42"}
                  </motion.span>
                </div>
              </div>

              <div className="p-4 bg-zinc-900/40 border border-zinc-850 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-550 font-bold block mb-1">
                      {t.statsLabel}
                    </span>
                    <motion.span 
                      key={trafficVal}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]"
                    >
                      {trafficVal}
                    </motion.span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-semibold rounded-full border border-emerald-500/25">
                    Organic Growth
                  </span>
                </div>

                <div className="relative pt-2">
                  <svg className="w-full h-20 overflow-visible" viewBox="0 0 260 80">
                    <defs>
                      <linearGradient id="seoChartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    <motion.path
                      d="M 10,70 C 30,68 50,75 70,68 C 90,62 110,70 130,62 C 150,50 170,22 190,12 C 210,5 230,2 250,2 L 250,80 L 10,80 Z"
                      fill="url(#seoChartGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />

                    <motion.path
                      d="M 10,70 C 30,68 50,75 70,68 C 90,62 110,70 130,62 C 150,50 170,22 190,12 C 210,5 230,2 250,2"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
                    />
                    
                    <motion.circle
                      cx="250"
                      cy="2"
                      r="4"
                      className="fill-emerald-400 stroke-zinc-950"
                      strokeWidth="1.5"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 1], opacity: 1 }}
                      transition={{ delay: 2, duration: 0.3 }}
                    />
                    <motion.circle
                      cx="250"
                      cy="2"
                      r="8"
                      className="fill-emerald-400/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 2, 1] }}
                      transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

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
      ]
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
      ]
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

        <SEOMotionCard />
      </div>
    </section>
  );
}
