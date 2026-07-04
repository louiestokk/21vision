import { motion } from "motion/react";
import { MonitorSmartphone, Paintbrush, Megaphone, Lightbulb } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router";
import { Magnetic } from "./ui/Magnetic";

// VISUAL CARD 1: Design Visual (Static Figma canvas mock)
function DesignVisual() {
  return (
    <div className="w-full h-36 bg-zinc-950/70 border border-zinc-900/60 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
      <svg className="w-full h-full p-3 overflow-visible" viewBox="0 0 240 100">
        {/* Mock workspace grids */}
        <rect x="5" y="5" width="230" height="90" rx="8" fill="#09090b" stroke="#1f2937" strokeWidth="0.5" />
        <rect x="15" y="15" width="80" height="70" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="0.75" />
        
        {/* Mock design blocks */}
        <rect x="25" y="25" width="60" height="8" rx="2" fill="#27272a" />
        <rect x="25" y="40" width="40" height="6" rx="2" fill="#1f2937" />
        
        {/* Active interface button */}
        <rect
          x="125"
          y="38"
          width="70"
          height="24"
          rx="12"
          fill="#4f46e5"
          stroke="#4f46e5"
          strokeWidth="1.5"
        />
        <text x="160" y="53" textAnchor="middle" fill="#ffffff" className="text-[8px] font-bold font-mono tracking-wider">CLICKED</text>

        {/* Static cursor click ripple */}
        <circle
          cx="160"
          cy="50"
          r="16"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Figma styled Pointer Arrow positioned at clicked button */}
        <g transform="translate(162, 52)">
          <path
            d="M 0,0 L 12,4 L 6,6 L 4,12 Z"
            fill="#ffffff"
            stroke="#4f46e5"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

// VISUAL CARD 2: Web & App Dev (Static flexing container workspace)
function DevelopmentVisual() {
  return (
    <div className="w-full h-36 bg-zinc-950/70 border border-zinc-900/60 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
      <div className="w-full h-full p-4 flex flex-col justify-between select-none">
        {/* Editor controls */}
        <div className="flex items-center justify-between border-b border-zinc-900/80 pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <div className="w-2 h-2 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[8px] font-mono text-zinc-650">Component.tsx</span>
        </div>

        {/* Layout container showing clean layout elements */}
        <div className="flex-1 flex items-center justify-center gap-3 py-2">
          <div className="w-[75px] h-[40px] bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 rounded bg-blue-400/45" />
          </div>

          <div className="w-[85px] h-[36px] bg-indigo-500/10 border border-indigo-500/30 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 rounded bg-indigo-400/45" />
          </div>
        </div>

        {/* Compiler status bar */}
        <div className="text-[8px] font-mono text-zinc-550 flex items-center justify-between border-t border-zinc-900/80 pt-2">
          <span className="text-emerald-450 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Vite: 8ms
          </span>
          <span>99% Score</span>
        </div>
      </div>
    </div>
  );
}

// VISUAL CARD 3: Brand Strategy (Static brand identity guides)
function StrategyVisual() {
  return (
    <div className="w-full h-36 bg-zinc-950/70 border border-zinc-900/60 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
      <div className="flex flex-col items-center justify-center gap-2.5 relative z-10">
        {/* Soft background shape */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-28 h-28 bg-gradient-to-r from-amber-400 to-amber-600 blur-[10px] rounded-full" />
        </div>

        {/* Strategic tags layout */}
        <div className="flex flex-wrap gap-1.5 justify-center max-w-[170px]">
          <span className="text-[8px] font-mono font-extrabold px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full tracking-wider">IDENTITY</span>
          <span className="text-[8px] font-mono font-extrabold px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full tracking-wider">VISION</span>
          <span className="text-[8px] font-mono font-extrabold px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full tracking-wider">STRATEGY</span>
        </div>

        {/* Target alignment guidelines */}
        <div className="w-24 h-0.5 bg-zinc-900 relative mt-1">
          <div className="absolute w-2 h-2 rounded-full bg-amber-400/80 -top-0.5 left-[60%] -translate-x-1 shadow-md shadow-amber-500/20" />
        </div>
      </div>
    </div>
  );
}

// VISUAL CARD 4: Marketing Visual (Static growth sparkline and metric indicators)
function MarketingVisual() {
  return (
    <div className="w-full h-36 bg-zinc-950/70 border border-zinc-900/60 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
      <svg className="w-full h-full p-4 overflow-visible" viewBox="0 0 200 80">
        <defs>
          <linearGradient id="servicesMktGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Layout grid lines */}
        <line x1="0" y1="60" x2="200" y2="60" stroke="#18181b" strokeWidth="0.75" strokeDasharray="2 2" />
        <line x1="0" y1="30" x2="200" y2="30" stroke="#18181b" strokeWidth="0.75" strokeDasharray="2 2" />

        <path
          d="M 10,70 Q 50,65 90,40 T 170,15 L 170,80 L 10,80 Z"
          fill="url(#servicesMktGrad)"
        />

        <path
          d="M 10,70 Q 50,65 90,40 T 170,15"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Stable Bubble Leads */}
        <g className="text-[8px] font-sans font-bold fill-emerald-400" transform="translate(0, -25)">
          <circle cx="100" cy="50" r="8" fill="#065f46" stroke="#059669" strokeWidth="0.5" />
          <text x="100" y="53" textAnchor="middle" className="text-[5px]">Leads</text>
        </g>

        {/* Stable Bubble ROI */}
        <g className="text-[8px] font-sans font-bold fill-emerald-400" transform="translate(0, -35)">
          <circle cx="160" cy="50" r="10" fill="#065f46" stroke="#059669" strokeWidth="0.5" />
          <text x="160" y="53" textAnchor="middle" className="text-[5px]">ROI: 5x</text>
        </g>
      </svg>
    </div>
  );
}

export function Services() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const t = {
    sv: {
      title: "Vår expertis",
      desc: "Vi erbjuder en heltäckande svit av digitala tjänster för att hjälpa ditt företag att frodas i det moderna landskapet.",
      viewAll: "Visa alla tjänster",
      services: [
        {
          title: "Digital design",
          description: "Vi skapar fantastiska, användarcentrerade gränssnitt som engagerar och konverterar."
        },
        {
          title: "Webb- & Apputveckling",
          description: "Robusta, skalbara och högpresterande applikationer byggda med modern teknik."
        },
        {
          title: "Varumärkesstrategi",
          description: "Definiera er röst, visuella identitet och marknadspositionering."
        },
        {
          title: "Marknadsföring",
          description: "Datadrivna kampanjer för att växa er publik och lyfta ert varumärke."
        }
      ]
    },
    en: {
      title: "Our Expertise",
      desc: "We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.",
      viewAll: "View all services",
      services: [
        {
          title: "Digital Design",
          description: "We create stunning, user-centric interfaces that engage and convert."
        },
        {
          title: "Web & App Dev",
          description: "Robust, scalable, and high-performance applications built with modern tech."
        },
        {
          title: "Brand Strategy",
          description: "Defining your voice, visual identity, and market positioning."
        },
        {
          title: "Marketing",
          description: "Data-driven campaigns to grow your audience and elevate your brand."
        }
      ]
    }
  }[lang];

  const icons = [Paintbrush, MonitorSmartphone, Lightbulb, Megaphone];
  const styles = [
    { color: "text-pink-400", bg: "bg-pink-400/10" },
    { color: "text-blue-400", bg: "bg-blue-400/10" },
    { color: "text-amber-400", bg: "bg-amber-400/10" },
    { color: "text-emerald-400", bg: "bg-emerald-400/10" }
  ];

  const handleViewAllClick = () => {
    navigate("/services");
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-400 text-lg max-w-lg">
            {t.desc}
          </p>
        </div>
        <Magnetic>
          <button 
            onClick={handleViewAllClick}
            className="text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors self-start md:self-auto font-medium cursor-pointer"
          >
            {t.viewAll}
          </button>
        </Magnetic>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.services.map((service, index) => {
          const Icon = icons[index];
          const style = styles[index];
          
          const VisualComponent = [
            DesignVisual,
            DevelopmentVisual,
            StrategyVisual,
            MarketingVisual
          ][index];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-950/40 hover:bg-zinc-950/80 border border-zinc-850 hover:border-zinc-700/60 transition-all duration-500 rounded-3xl p-6 relative overflow-hidden group shadow-lg flex flex-col justify-between min-h-[380px]"
            >
              {/* Top Motion Visual Panel */}
              <div className="mb-6 w-full">
                <VisualComponent />
              </div>

              {/* Text Info Area */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${style.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-indigo-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
