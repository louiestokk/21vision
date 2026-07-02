import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { useLocation, useNavigate } from "react-router";
import { Magnetic } from "./ui/Magnetic";
import { ConfettiButton } from "./ui/ConfettiButton";

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleStartProjectClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
    } else {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    handleNavClick(e, id);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-black/90 backdrop-blur-xl border-b border-zinc-900"
      >
        {/* Scroll indicator bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Styled Logo with Gradient Border & Pentagon Prism Icon */}
        <div onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer group relative z-50 select-none">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500 scale-90 group-hover:scale-100" />
          
          <div className="relative p-[1.5px] rounded-xl bg-gradient-to-br from-indigo-400 via-purple-500 to-fuchsia-500 shadow-xl shadow-indigo-500/10 group-hover:shadow-indigo-500/20 group-hover:rotate-3 transition-all duration-500">
            <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/30 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000" />
              
              <svg className="w-6 h-6 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="60%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <polygon points="50,6 88,33 73,78 27,78 12,33" stroke="url(#logoGlow)" strokeWidth="6" strokeLinejoin="round" />
                <path d="M30,38 C30,26 46,26 48,32 C50,42 32,48 32,58 L52,58" stroke="url(#logoGlow)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M66,31 L66,58 M58,36 L66,31" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-[0.15em] text-white leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">21</span>VISION
            </span>
            <span className="text-[7.5px] text-zinc-500 tracking-[0.32em] font-bold uppercase mt-1">
              Creative Agency
            </span>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Magnetic range={30} strength={0.2}>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "services")} 
              className="relative py-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              {t.services}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </a>
          </Magnetic>
          <Magnetic range={30} strength={0.2}>
            <a 
              href="#cases" 
              onClick={(e) => handleNavClick(e, "cases")} 
              className="relative py-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              {t.cases}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </a>
          </Magnetic>
          <Magnetic range={30} strength={0.2}>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")} 
              className="relative py-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              {t.about}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </a>
          </Magnetic>
          <Magnetic range={30} strength={0.2}>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")} 
              className="relative py-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              {t.contact}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </a>
          </Magnetic>
        </div>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3 border-r border-zinc-800 pr-6">
            <button 
              onClick={() => setLang('sv')} 
              className={`text-xl transition-all duration-300 hover:scale-110 cursor-pointer ${lang === 'sv' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'opacity-40 grayscale'}`}
              title="Svenska"
            >
              🇸🇪
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`text-xl transition-all duration-300 hover:scale-110 cursor-pointer ${lang === 'en' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'opacity-40 grayscale'}`}
              title="English"
            >
              🇬🇧
            </button>
          </div>
          
          <Magnetic>
            <ConfettiButton>
              <button 
                onClick={handleStartProjectClick}
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-150 transition-colors cursor-pointer"
              >
                {t.startProject} <ArrowRight className="w-4 h-4" />
              </button>
            </ConfettiButton>
          </Magnetic>
        </div>

        {/* Mobile controls in the header (z-50 to hover on top) */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <div className="flex items-center gap-2 border-r border-zinc-800 pr-4">
            <button 
              onClick={() => setLang('sv')} 
              className={`text-lg cursor-pointer transition-all ${lang === 'sv' ? 'opacity-100 scale-105' : 'opacity-35 grayscale'}`}
            >
              🇸🇪
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`text-lg cursor-pointer transition-all ${lang === 'en' ? 'opacity-100 scale-105' : 'opacity-35 grayscale'}`}
            >
              🇬🇧
            </button>
          </div>
          
          {/* Animated Hamburger Icon */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white cursor-pointer relative z-50 flex flex-col justify-center items-center gap-1.5 w-10 h-10 focus:outline-none"
            aria-label="Menu"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded-full origin-center"
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-white block rounded-full"
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Slide-in Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            />

            {/* Menu Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[380px] bg-zinc-950/95 backdrop-blur-2xl border-l border-zinc-900 z-40 md:hidden flex flex-col justify-between pt-28 pb-12 px-8 shadow-2xl"
            >
              {/* Ambient Glowing Orbs */}
              <div className="absolute top-[20%] left-[10%] w-48 h-48 rounded-full bg-indigo-500/10 blur-[60px] -z-10 animate-pulse" />
              <div className="absolute bottom-[30%] right-[10%] w-48 h-48 rounded-full bg-fuchsia-500/10 blur-[60px] -z-10 animate-pulse" />

              <div className="flex flex-col gap-6">
                {/* Header navigation section identifier */}
                <div className="text-[10px] text-zinc-550 font-bold uppercase tracking-[0.25em] mb-4 border-b border-zinc-900 pb-3">
                  {lang === 'sv' ? 'Navigering' : 'Navigation'}
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { label: t.services, id: "services", delay: 0.05 },
                    { label: t.cases, id: "cases", delay: 0.1 },
                    { label: t.about, id: "about", delay: 0.15 },
                    { label: t.contact, id: "contact", delay: 0.2 },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay, type: "spring", stiffness: 150 }}
                      href={`#${item.id}`}
                      onClick={(e) => handleMobileNavClick(e, item.id)}
                      className="text-zinc-300 hover:text-white transition-all text-xl font-bold flex items-center justify-between py-3.5 border-b border-zinc-900/60 group"
                    >
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">{item.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Area */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full space-y-6"
              >
                <div className="border-t border-zinc-900 pt-6">
                  <Magnetic className="w-full block">
                    <ConfettiButton>
                      <button
                        onClick={() => { setMenuOpen(false); handleStartProjectClick(); }}
                        className="w-full flex items-center justify-center gap-2.5 bg-white text-black py-4 px-6 rounded-full text-sm font-bold shadow-xl hover:bg-zinc-100 transition-colors cursor-pointer"
                      >
                        {t.startProject} <ArrowRight className="w-4 h-4" />
                      </button>
                    </ConfettiButton>
                  </Magnetic>
                </div>

                {/* Mini-branding logo footer */}
                <div className="text-center text-[9px] text-zinc-650 tracking-[0.25em] uppercase font-semibold">
                  © 21Vision Agency
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
