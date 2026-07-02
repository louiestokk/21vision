import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Play, Sparkles, Monitor, Smartphone, PenTool, LayoutTemplate, Zap, Code2, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { Magnetic } from "./ui/Magnetic";
import { ConfettiButton } from "./ui/ConfettiButton";

export function Hero() {
  const { lang } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);

  const t = {
    sv: {
      available: "Tillgängliga för nya projekt",
      weBuild: "Vi bygger",
      digital: "digitala",
      experiences: "upplevelser",
      desc: "En kreativ digital byrå med fokus på varumärkesbyggande, UI/UX och webbutveckling för framåttänkande företag över hela världen.",
      ourWork: "Vårt arbete",
      showreel: "Showreel",
      projects: "Lanserade projekt",
      awards: "Vunna priser",
      clients: "Nöjda kunder",
      badgeTitle: "Kreativ",
      badgeSub: "Excellens"
    },
    en: {
      available: "Available for new projects",
      weBuild: "We build",
      digital: "digital",
      experiences: "experiences",
      desc: "A creative digital agency focused on branding, UI/UX, and web development for forward-thinking companies worldwide.",
      ourWork: "Our Work",
      showreel: "Showreel",
      projects: "Projects Launched",
      awards: "Awards Won",
      clients: "Happy Clients",
      badgeTitle: "Creative",
      badgeSub: "Excellens"
    }
  }[lang];

  const floatingIcons = [
    { Icon: Monitor, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", delay: 0, x: -40, y: -20 },
    { Icon: Smartphone, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", delay: 0.2, x: 40, y: -60 },
    { Icon: PenTool, color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20", delay: 0.4, x: 60, y: 40 },
    { Icon: LayoutTemplate, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", delay: 0.6, x: -60, y: 60 },
    { Icon: Zap, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", delay: 0.8, x: 0, y: 100 },
    { Icon: Code2, color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20", delay: 1, x: 0, y: -90 },
  ];

  const handleOurWorkClick = () => {
    document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="relative min-h-screen pt-36 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-[1600px] mx-auto overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-800/30 blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] -z-10" />
        
        <div className="flex-1 flex flex-col items-start z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium mb-6 text-zinc-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t.available}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-6"
          >
            {t.weBuild} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 font-extrabold pr-1.5 italic font-serif">{t.digital}</span> {t.experiences}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-400 max-w-[600px] mb-10 leading-relaxed"
          >
            {t.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-row items-center gap-3 w-full max-w-[480px]"
          >
            <Magnetic className="flex-1">
              <button 
                onClick={handleOurWorkClick}
                className="w-full relative group overflow-hidden rounded-full p-[1.5px] cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-zinc-950 px-4 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold text-white flex items-center justify-center gap-1.5 group-hover:bg-transparent transition-all">
                  {t.ourWork} <ArrowUpRight className="w-4 h-4 md:w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </Magnetic>
            <Magnetic className="flex-1">
              <ConfettiButton>
                <button 
                  onClick={() => setShowreelOpen(true)}
                  className="w-full flex items-center justify-center gap-2.5 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer border border-zinc-600 hover:border-zinc-400 backdrop-blur-md hover:-translate-y-0.5 shadow-lg"
                >
                  <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-sm shrink-0 transition-transform duration-300">
                    <Play className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-300 ml-0.5 fill-zinc-300" />
                  </span>
                  {t.showreel}
                </button>
              </ConfettiButton>
            </Magnetic>
          </motion.div>





          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-3 md:gap-8 mt-16 pt-8 border-t border-zinc-800 w-full"
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">150+</div>
              <div className="text-xs md:text-sm text-zinc-500 mt-1">{t.projects}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">40+</div>
              <div className="text-xs md:text-sm text-zinc-500 mt-1">{t.awards}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">99%</div>
              <div className="text-xs md:text-sm text-zinc-500 mt-1">{t.clients}</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 w-full relative z-10 mt-20 lg:mt-0 flex items-center justify-center h-[500px]"
        >
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px]"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-72 h-72 bg-fuchsia-500/20 rounded-full blur-[70px]"
            />

            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
                transition={{ duration: 0.8, delay: 0.5 + item.delay, type: "spring" }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [item.y, item.y - 15, item.y], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                  className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl backdrop-blur-xl border ${item.bg} ${item.border} shadow-2xl`}
                >
                  <item.Icon className={`w-8 h-8 md:w-10 md:h-10 ${item.color}`} />
                </motion.div>
              </motion.div>
            ))}

            <motion.div
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
               className="relative z-20 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-3 w-48 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">{t.badgeTitle}</div>
                <div className="text-zinc-400 text-sm">{t.badgeSub}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Showreel Modal */}
      <AnimatePresence>
        {showreelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowreelOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[999] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-5xl bg-zinc-950 border border-zinc-850 rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowreelOpen(false)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/60 border border-zinc-800 text-white flex items-center justify-center hover:scale-105 hover:bg-black/90 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <video
                src="/showreel.mp4"
                autoPlay
                loop
                muted
                controls
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
