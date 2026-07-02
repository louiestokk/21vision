import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Zap, Shield, Sparkles, Terminal, Code2, Globe, Cpu } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { Magnetic } from "./ui/Magnetic";
import { ConfettiButton } from "./ui/ConfettiButton";
import confetti from "canvas-confetti";

export function Footer() {
  const { lang } = useLanguage();
  const [time, setTime] = useState("");
  const [activeTab, setActiveTab] = useState("config.json");
  const [auditLogs, setAuditLogs] = useState<string[]>([]);
  const [auditRunning, setAuditRunning] = useState(false);

  // Stockholm Time Tracker
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Stockholm",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const t = {
    sv: {
      tagline: "Låt oss bygga något spektakulärt tillsammans.",
      tickerText: " • LET'S BUILD SOMETHING EXTRAORDINARY • LÅT OSS SKAPA FRAMTIDEN ",
      terminalTitle: "Interaktiv Terminal & Sandbox",
      runAuditBtn: "Kör Systemgranskning",
      auditComplete: "Analys slutförd!",
      navigation: "Sitemap",
      aboutShort: "En framåtriktad studio som kombinerar avancerad teknik med kompromisslös estetik.",
      timezoneLabel: "Stockholm, SE (Lokal tid)",
      links: [
        { label: "Tjänster", id: "services" },
        { label: "Case", id: "cases" },
        { label: "Om oss", id: "about" },
        { label: "Kontakt", id: "contact" }
      ]
    },
    en: {
      tagline: "Let's build something extraordinary together.",
      tickerText: " • LET'S BUILD SOMETHING EXTRAORDINARY • SHAPING DIGITAL FUTURES ",
      terminalTitle: "Interactive Sandbox & Terminal",
      runAuditBtn: "Run System Audit",
      auditComplete: "Audit Complete!",
      navigation: "Sitemap",
      aboutShort: "A forward-thinking studio blending advanced engineering with uncompromising aesthetics.",
      timezoneLabel: "Stockholm, SE (Local Time)",
      links: [
        { label: "Services", id: "services" },
        { label: "Cases", id: "cases" },
        { label: "About", id: "about" },
        { label: "Contact", id: "contact" }
      ]
    }
  }[lang];

  const configCode = `{
  "agency": "21Vision",
  "status": "Available_Q3",
  "location": "Stockholm, SE",
  "coreTech": ["Vite", "React", "Tailwind", "Motion"],
  "specialties": {
    "ux": "Aggressive Conversion",
    "speed": "Sub-100ms Latenz",
    "branding": "Premium Aesthetics"
  }
}`;

  const servicesCode = `import { Studio } from "21vision";

export async function deploySuccess(client) {
  const audit = await Studio.evaluate(client);
  
  return {
    conversionRate: "🚀 Optimized",
    visualAesthetics: "✨ Premium",
    performanceScore: 100
  };
}`;

  const handleRunAudit = () => {
    if (auditRunning) return;
    setAuditRunning(true);
    setAuditLogs([]);

    const steps = [
      "> npm run audit:performance",
      "[system] Initiating 21Vision system diagnostic...",
      "[diagnostics] Loading UI/UX layouts... OK (100% hierarchy score)",
      "[diagnostics] Fetching load time index... OK (< 80ms latency)",
      "[diagnostics] Verifying conversion funnel... OK (+48% lead generation)",
      "[system] Diagnostic complete. Confetti engine ready."
    ];

    steps.forEach((log, index) => {
      setTimeout(() => {
        setAuditLogs((prev) => [...prev, log]);
        
        // Final complete trigger
        if (index === steps.length - 1) {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.85 }
          });
          setAuditRunning(false);
        }
      }, (index + 1) * 600);
    });
  };

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 pt-24 pb-12 overflow-hidden mt-32">
      {/* Visual background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1] -z-10" />

      {/* Infinite Scrolling Ticker (Marquee) */}
      <div className="w-full overflow-hidden border-y border-zinc-900 bg-black/40 py-6 mb-20 relative select-none">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] text-4xl md:text-6xl font-black uppercase text-zinc-900 tracking-wider">
          {Array(4).fill(t.tickerText).join("")}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Column 1: Branding Info (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3 select-none">
            <div className="relative p-[1.5px] rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500">
              <div className="w-9 h-9 bg-zinc-950 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,6 88,33 73,78 27,78 12,33" stroke="url(#logoGlow)" strokeWidth="6" strokeLinejoin="round" />
                  <path d="M30,38 C30,26 46,26 48,32 C50,42 32,48 32,58 L52,58" stroke="url(#logoGlow)" strokeWidth="7" />
                  <path d="M66,31 L66,58 M58,36 L66,31" stroke="#FFFFFF" strokeWidth="7" />
                </svg>
              </div>
            </div>
            <span className="font-extrabold text-lg tracking-[0.15em] text-white">21VISION</span>
          </div>

          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
            {t.aboutShort}
          </p>

          {/* Animated Tech/Performance Badges */}
          <div className="flex gap-4 pt-4 select-none">
            {[
              { Icon: Zap, grad: "url(#yellowGlow)", label: lang === "sv" ? "Sub-100ms Prestanda" : "Sub-100ms Performance" },
              { Icon: Shield, grad: "url(#indigoGlow)", label: lang === "sv" ? "Hög Säkerhet" : "Top-tier Security" },
              { Icon: Sparkles, grad: "url(#fuchsiaGlow)", label: lang === "sv" ? "Kreativ Estetik" : "Creative Aesthetics" }
            ].map((badge, i) => (
              <Magnetic key={i}>
                <div
                  className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-850 hover:border-zinc-700 flex items-center justify-center transition-all cursor-pointer group shadow-xl relative"
                  title={badge.label}
                >
                  <badge.Icon className="w-5 h-5 group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300" stroke={badge.grad} strokeWidth={2.5} />
                </div>
              </Magnetic>
            ))}
          </div>

          {/* Live Clock / Location Info */}
          <div className="pt-6 border-t border-zinc-900 max-w-xs">
            <span className="text-[10px] text-zinc-650 font-bold uppercase tracking-widest block mb-1">
              {t.timezoneLabel}
            </span>
            <span className="text-lg font-mono font-bold text-zinc-300 flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
              {time || "00:00:00"}
            </span>
          </div>
        </div>

        {/* Column 2: Sitemap Navigation (3 cols) */}
        <div className="lg:col-span-3 space-y-6 lg:pl-10">
          <h4 className="text-xs text-zinc-600 font-bold uppercase tracking-[0.25em] border-b border-zinc-900 pb-3">
            {t.navigation}
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-semibold">
            {t.links.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: The Interactive Code Sandbox Widget (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl border border-zinc-850 bg-zinc-900/40 backdrop-blur-md shadow-2xl overflow-hidden">
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/70 border-b border-zinc-900 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-zinc-650 font-bold font-mono ml-2 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  sandbox.ts
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-zinc-550 font-mono">
                <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-fuchsia-400" /> node-v20</span>
              </div>
            </div>

            {/* Tab controls */}
            <div className="flex bg-zinc-950/30 border-b border-zinc-900 font-mono text-xs select-none">
              <button
                onClick={() => { setActiveTab("config.json"); setAuditLogs([]); }}
                className={`px-4 py-2 border-r border-zinc-900 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === "config.json"
                    ? "bg-zinc-950/80 text-white border-t-2 border-t-indigo-500"
                    : "text-zinc-650 hover:bg-zinc-900/30"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                config.json
              </button>
              <button
                onClick={() => { setActiveTab("services.ts"); setAuditLogs([]); }}
                className={`px-4 py-2 border-r border-zinc-900 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === "services.ts"
                    ? "bg-zinc-950/80 text-white border-t-2 border-t-indigo-500"
                    : "text-zinc-650 hover:bg-zinc-900/30"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-fuchsia-400" />
                services.ts
              </button>
            </div>

            {/* Code / Logs Display Container */}
            <div className="p-6 font-mono text-xs overflow-x-auto min-h-[220px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {auditLogs.length === 0 ? (
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-zinc-400 leading-relaxed"
                  >
                    <code>{activeTab === "config.json" ? configCode : servicesCode}</code>
                  </motion.pre>
                ) : (
                  <motion.div
                    key="logs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-1.5 text-green-400 flex-1"
                  >
                    {auditLogs.map((log, index) => (
                      <div key={index} className={log.startsWith(">") ? "text-indigo-400 font-bold" : ""}>
                        {log}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Sandbox action button */}
              <div className="mt-6 pt-4 border-t border-zinc-900/80 flex items-center justify-between gap-4">
                <span className="text-[10px] text-zinc-650 font-semibold uppercase">
                  {auditRunning ? "Auditing..." : "Interactive Console"}
                </span>

                <Magnetic>
                  <ConfettiButton>
                    <button
                      onClick={handleRunAudit}
                      disabled={auditRunning}
                      className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all font-bold text-xs cursor-pointer flex items-center gap-1.5 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {auditRunning ? (
                        <span className="w-3.5 h-3.5 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Terminal className="w-3.5 h-3.5" />
                      )}
                      {t.runAuditBtn}
                    </button>
                  </ConfettiButton>
                </Magnetic>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Shared gradient definitions for icons */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <linearGradient id="yellowGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="indigoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="fuchsiaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E879F9" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ticker marquee css styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
      `}</style>
    </footer>
  );
}
