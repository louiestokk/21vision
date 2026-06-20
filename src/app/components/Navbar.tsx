import { motion } from "motion/react";
import { Menu, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Navbar() {
  const { lang, setLang } = useLanguage();

  const t = {
    sv: {
      services: "Tjänster",
      cases: "Case",
      about: "Om oss",
      contact: "Kontakt",
      startProject: "Starta projekt"
    },
    en: {
      services: "Services",
      cases: "Cases",
      about: "About",
      contact: "Contact",
      startProject: "Start Project"
    }
  }[lang];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-black/50 backdrop-blur-md border-b border-zinc-800"
    >
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
          21
        </div>
        <span className="font-bold text-lg tracking-tight text-white">Vision Agency</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#services" className="hover:text-white transition-colors text-zinc-400">{t.services}</a>
        <a href="#cases" className="hover:text-white transition-colors text-zinc-400">{t.cases}</a>
        <a href="#about" className="hover:text-white transition-colors text-zinc-400">{t.about}</a>
        <a href="#contact" className="hover:text-white transition-colors text-zinc-400">{t.contact}</a>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-3 border-r border-zinc-800 pr-6">
          <button 
            onClick={() => setLang('sv')} 
            className={`text-xl transition-all duration-300 hover:scale-110 ${lang === 'sv' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'opacity-40 grayscale'}`}
            title="Svenska"
          >
            🇸🇪
          </button>
          <button 
            onClick={() => setLang('en')} 
            className={`text-xl transition-all duration-300 hover:scale-110 ${lang === 'en' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'opacity-40 grayscale'}`}
            title="English"
          >
            🇬🇧
          </button>
        </div>
        
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          {t.startProject} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="md:hidden flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button onClick={() => setLang('sv')} className={`text-xl ${lang === 'sv' ? 'opacity-100' : 'opacity-40 grayscale'}`}>🇸🇪</button>
          <button onClick={() => setLang('en')} className={`text-xl ${lang === 'en' ? 'opacity-100' : 'opacity-40 grayscale'}`}>🇬🇧</button>
        </div>
        <button className="p-2 text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
