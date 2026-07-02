import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Magnetic } from "./ui/Magnetic";

export function About() {
  const { lang } = useLanguage();

  const t = {
    sv: {
      h1Start: "Vi är ett kollektiv av",
      h1Italic: "tänkare",
      h1End: ", skapare och utförare.",
      desc: "Grundat 2020, vi bestämde oss för att bygga en byrå som prioriterar kreativitet, innovation och mätbara resultat. Vi samarbetar med modiga varumärken för att skapa digitala upplevelser som lämnar ett bestående avtryck.",
      btn: "Lär känna oss",
      stats: ["Branschexperter", "Globala kontor", "Support", "Oberoende"]
    },
    en: {
      h1Start: "We are a collective of",
      h1Italic: "thinkers",
      h1End: ", makers, and doers.",
      desc: "Founded in 2020, we set out to build an agency that prioritizes creativity, innovation, and measurable results. We partner with brave brands to create digital experiences that leave a lasting impact.",
      btn: "Get to know us",
      stats: ["Industry Experts", "Global Offices", "Support", "Independent"]
    }
  }[lang];

  const handleContactScroll = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-800/50 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {t.h1Start} <span className="text-zinc-500 italic font-serif">{t.h1Italic}</span>{t.h1End}
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            {t.desc}
          </p>
          
          <div className="flex gap-4">
            <Magnetic>
              <button 
                onClick={handleContactScroll}
                className="bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:scale-102 transition-all cursor-pointer"
              >
                {t.btn}
              </button>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 pt-12">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl aspect-square flex flex-col justify-center">
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-zinc-400">{t.stats[0]}</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl aspect-[4/3] flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-indigo-900/20">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-zinc-400">{t.stats[1]}</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl aspect-[4/3] flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-pink-900/20">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-zinc-400">{t.stats[2]}</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl aspect-square flex flex-col justify-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-zinc-400">{t.stats[3]}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
