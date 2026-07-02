import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../LanguageContext";
import { Magnetic } from "./ui/Magnetic";

export function Cases() {
  const { lang } = useLanguage();

  const t = {
    sv: {
      title: "Utvalda projekt",
      desc: "Dyk in i våra senaste projekt och se hur vi har hjälpt varumärken att transformera sin digitala närvaro och uppnå sina mål.",
      viewAll: "Visa alla case",
      categories: ["Webb- & Appdesign", "Webbdesign", "Varumärkesbyggande"]
    },
    en: {
      title: "Selected Works",
      desc: "Dive into our latest projects and see how we've helped brands transform their digital presence and achieve their goals.",
      viewAll: "View All Cases",
      categories: ["Web & App Design", "Web Design", "Branding"]
    }
  }[lang];

  const cases = [
    {
      id: "fintech-revolution",
      title: "Fintech Revolution",
      category: t.categories[0],
      image: "https://images.unsplash.com/photo-1695048064952-44b984f2af6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzgxNzY4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: "minimalist-e-commerce",
      title: "Minimalist E-Commerce",
      category: t.categories[1],
      image: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3ODE3Njg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: "aura-identity",
      title: "Aura Identity",
      category: t.categories[2],
      image: "https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc4MTc2ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="cases" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
        {cases.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group overflow-hidden rounded-3xl ${project.span}`}
            data-case-card
          >
            <Link to={`/case/${project.id}`} className="block w-full h-full">
              <ImageWithFallback 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <p className="text-zinc-300 text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Magnetic>
          <button className="px-8 py-4 rounded-full border border-zinc-700 text-white hover:bg-white hover:text-black transition-all font-medium cursor-pointer">
            {t.viewAll}
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
