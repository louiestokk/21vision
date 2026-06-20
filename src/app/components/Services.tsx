import { motion } from "motion/react";
import { MonitorSmartphone, Paintbrush, Megaphone, Lightbulb } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Services() {
  const { lang } = useLanguage();

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

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-400 text-lg max-w-lg">
            {t.desc}
          </p>
        </div>
        <button className="text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors self-start md:self-auto font-medium">
          {t.viewAll}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.services.map((service, index) => {
          const Icon = icons[index];
          const style = styles[index];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800/80 transition-colors group"
            >
              <div className={`w-14 h-14 rounded-2xl ${style.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-7 h-7 ${style.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
