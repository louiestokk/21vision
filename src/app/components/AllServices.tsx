import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router";
import { ArrowLeft, MonitorSmartphone, Paintbrush, Lightbulb, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Magnetic } from "./ui/Magnetic";

export function AllServices() {
  const { lang } = useLanguage();

  const t = {
    sv: {
      meta: "STUDIONS KAPABILITETER",
      title: "Hela vår verktygslåda för digital tillväxt",
      back: "Tillbaka till hem",
      ctaTitle: "Redo att lyfta ditt varumärke?",
      ctaDesc: "Låt oss diskutera ditt projekt och skräddarsy en lösning som passar just dina behov.",
      ctaBtn: "Starta projekt",
      seoBtn: "Utforska SEO",
      webBtn: "Utforska Hemsidor",
      servicesList: [
        {
          id: "design",
          title: "Digital Design & UX/UI",
          desc: "Vi designar gränssnitt som är både estetiskt fantastiska och funktionellt självklara. Varje detalj är utformad för att optimera användarresan.",
          icon: Paintbrush,
          color: "text-pink-400",
          bg: "bg-pink-400/10",
          features: [
            "Användarcentrerad gränssnittsdesign (UI)",
            "Interaktions- & användartester (UX)",
            "Trådskisser & klickbara prototyper",
            "Designsystem för snabb skalbarhet",
            "Mobilanpassning & responsivt fokus"
          ]
        },
        {
          id: "webdev",
          title: "Modern Hemside- & Systemutveckling",
          desc: "Vi bygger blixtsnabba, robusta hemsidor och webbapplikationer. Genom att använda modern teknologi garanterar vi prestanda i världsklass.",
          icon: MonitorSmartphone,
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          link: "/hemsidor",
          linkText: "Se templates & paket",
          features: [
            "Blixtsnabb laddningstid (sub-100ms)",
            "Skräddarsydd React- & Next.js-kod",
            "Flexibel Headless CMS-integration",
            "Sömlös e-handelsutveckling",
            "Clean code, helt optimerad för SEO"
          ]
        },
        {
          id: "seo",
          title: "Sökmotoroptimering (SEO) & Synlighet",
          desc: "Det spelar ingen roll hur snygg din sajt är om ingen hittar den. Vi tar ditt varumärke till toppen av sökresultaten för att generera varaktig organisk tillväxt.",
          icon: TrendingUp,
          color: "text-emerald-400",
          bg: "bg-emerald-400/10",
          link: "/seo",
          linkText: "Se priser & paket",
          features: [
            "Noggrann sökords- & konkurrentanalys",
            "Teknisk SEO-optimering & Core Web Vitals",
            "Strategisk innehållsproduktion",
            "Lokal SEO & Google Business-dominans",
            "Månatlig datadriven rapportering"
          ]
        },
        {
          id: "brand",
          title: "Varumärkesstrategi & Identitet",
          desc: "Vi definierar ditt varumärkes visuella själ och röst. Från logotyper till tonalitet bygger vi en sammanhängande identitet som sticker ut.",
          icon: Lightbulb,
          color: "text-amber-400",
          bg: "bg-amber-400/10",
          features: [
            "Grafisk profil (Logotyp, typsnitt, färger)",
            "Varumärkespositionering & röst",
            "Marknadskampanjer & assets",
            "Skapande av grafiska element",
            "Digitala varumärkeshandböcker"
          ]
        }
      ]
    },
    en: {
      meta: "STUDIO CAPABILITIES",
      title: "Our Full Toolbox for Digital Growth",
      back: "Back to home",
      ctaTitle: "Ready to elevate your brand?",
      ctaDesc: "Let's discuss your project and tailor a solution that fits your exact needs.",
      ctaBtn: "Start Project",
      seoBtn: "Explore SEO",
      webBtn: "Explore Websites",
      servicesList: [
        {
          id: "design",
          title: "Digital Design & UX/UI",
          desc: "We design interfaces that are both aesthetically stunning and functionally intuitive. Every detail is crafted to optimize the user journey.",
          icon: Paintbrush,
          color: "text-pink-400",
          bg: "bg-pink-400/10",
          features: [
            "User-Centric Interface Design (UI)",
            "UX Research & User Testing",
            "Wireframing & Clickable Prototyping",
            "Scalable Custom Design Systems",
            "Mobile-first Responsive Design"
          ]
        },
        {
          id: "webdev",
          title: "Modern Web & System Development",
          desc: "We build lightning-fast, robust websites and web applications. Using state-of-the-art tech stacks, we guarantee world-class performance.",
          icon: MonitorSmartphone,
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          link: "/hemsidor",
          linkText: "See Templates & Packages",
          features: [
            "Sub-100ms lightning-fast load times",
            "Custom React & Next.js development",
            "Flexible Headless CMS integration",
            "Seamless custom E-Commerce solutions",
            "Clean code, fully search engine optimized"
          ]
        },
        {
          id: "seo",
          title: "Search Engine Optimization (SEO) & Visibility",
          desc: "A beautiful site is useless if no one finds it. We take your brand to the top of search rankings to generate sustainable organic growth.",
          icon: TrendingUp,
          color: "text-emerald-400",
          bg: "bg-emerald-400/10",
          link: "/seo",
          linkText: "See Pricing & Packages",
          features: [
            "Comprehensive Keyword & Competitor Research",
            "Technical SEO Auditing & Core Web Vitals",
            "Strategic SEO Content Production",
            "Local SEO & Google Business Dominance",
            "Monthly Data-driven Performance Reports"
          ]
        },
        {
          id: "brand",
          title: "Brand Strategy & Identity",
          desc: "We define your brand's visual soul and voice. From logos to copy guides, we build a coherent identity that stands out in the crowd.",
          icon: Lightbulb,
          color: "text-amber-400",
          bg: "bg-amber-400/10",
          features: [
            "Visual Branding (Logos, Typography, Colors)",
            "Brand Positioning & Voice Guidelines",
            "Marketing assets & digital collaterals",
            "Asset design & graphics creation",
            "Digital Brand Books"
          ]
        }
      ]
    }
  }[lang];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Back button */}
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </Link>
      </div>

      {/* Header */}
      <div className="mb-20">
        <span className="text-xs text-indigo-400 font-extrabold tracking-[0.25em] uppercase block mb-3">
          {t.meta}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
          {t.title}
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {t.servicesList.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-850 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-zinc-800 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  {service.link && (
                    <Magnetic>
                      <Link
                        to={service.link}
                        className="text-xs font-bold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors border-b border-zinc-800 hover:border-white pb-0.5"
                      >
                        {service.linkText} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Magnetic>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">{service.desc}</p>
              </div>

              {/* Features checklist */}
              <div className="border-t border-zinc-850/60 pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-zinc-300 font-medium">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Card */}
      <div className="relative rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-2xl">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 rounded-full bg-indigo-500/10 blur-[80px] -z-10 animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-72 h-72 rounded-full bg-fuchsia-500/10 blur-[80px] -z-10 animate-pulse" />
        
        <div className="space-y-4 max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {t.ctaTitle}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.ctaDesc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 justify-center">
          <Magnetic>
            <Link
              to="/hemsidor"
              className="px-6 py-3.5 rounded-full border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-center text-sm font-bold bg-zinc-950/40 backdrop-blur-md cursor-pointer block"
            >
              {t.webBtn}
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              to="/seo"
              className="px-6 py-3.5 rounded-full relative group overflow-hidden p-[1.5px] cursor-pointer block text-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-950 px-6 py-3 rounded-full text-sm font-bold text-white flex items-center justify-center gap-1.5 group-hover:bg-transparent transition-all">
                {t.ctaBtn} <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
