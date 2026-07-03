import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, ShieldCheck, Check, Sparkles, TrendingUp, BarChart3, LineChart, Search, Globe, ChevronRight } from "lucide-react";
import { Magnetic } from "./ui/Magnetic";
import { ConfettiButton } from "./ui/ConfettiButton";

export function SEODetails() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const handleContactNav = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const t = {
    sv: {
      meta: "SEO & SYNLIGHET",
      title: "Dominera sökresultaten och driv organisk tillväxt",
      desc: "Vi bygger inte bara snygga hemsidor – vi ser till att de hittas av rätt kunder. Våra sökmotoroptimeringskampanjer kombinerar teknisk kodning med datadriven innehållsstrategi för att sätta er högst upp på Google.",
      back: "Tillbaka till hem",
      whyTitle: "Varför välja vår SEO-modell?",
      whyDesc: "Många byråer pratar om rankings, men vi bryr oss om leads och intäkter. Vi optimerar hela vägen från sökfråga till avslutad konvertering.",
      pricingTitle: "Våra prispaket",
      pricingDesc: "Välj ett paket baserat på er målmarknad och ambition. Inga dolda avgifter, transparent månatlig rapportering.",
      contactBtn: "Boka konsultation",
      casesTitle: "Bevisad organisk tillväxt",
      casesDesc: "Här är resultaten från några av våra senaste SEO-kampanjer:",
      reasons: [
        {
          title: "Teknisk Kodoptimering",
          desc: "Google älskar snabba sajter. Vi bygger med extremt ren kod som ger 100/100 poäng på Google PageSpeed Insights.",
          Icon: ShieldCheck
        },
        {
          title: "Strategiskt Innehåll",
          desc: "Vi skriver SEO-anpassat innehåll som svarar på era kunders frågor och leder dem naturligt till ert kontaktformulär.",
          Icon: Search
        },
        {
          title: "Datadriven Spårning",
          desc: "Full insyn i exakt vilka sökord som driver trafik, rankpositioner och leads genom anpassade Dashboards.",
          Icon: BarChart3
        }
      ],
      packages: [
        {
          name: "Core SEO",
          price: "5 900 kr",
          period: "/månad",
          desc: "Perfekt för lokala företag som vill dominera sin lokala marknad och synas på Google Maps.",
          popular: false,
          features: [
            "Lokal sökordsanalys (15 ord)",
            "Google Business Profile optimering",
            "On-Page teknisk grundoptimering",
            "Sökordsspårning i realtid",
            "Kvartalsvis resultatrapport"
          ]
        },
        {
          name: "Growth SEO",
          price: "12 900 kr",
          period: "/månad",
          desc: "Vårt populäraste paket för etablerade företag som vill expandera nationellt och slå konkurrenterna.",
          popular: true,
          features: [
            "Omfattande sökordsanalys (50 ord)",
            "Komplett konkurrentanalys",
            "Tekniska SEO-fixar varje månad",
            "2x optimerade artiklar / månad",
            "Månatlig länkbyggnadsstrategi",
            "Månatlig videogenomgång av data"
          ]
        },
        {
          name: "Enterprise Dominance",
          price: "23 900 kr",
          period: "/månad",
          desc: "För marknadsledare som kräver aggressiv tillväxt och dominans på breda globala eller nationella sökord.",
          popular: false,
          features: [
            "Obegränsad sökordsspårning",
            "Veckovisa prestandaanalyser",
            "Programmatisk SEO & landningssidor",
            "4x högkvalitativa artiklar / månad",
            "Avancerad länkförvärvning & PR",
            "Dedikerad SEO-strateg & support",
            "Konverteringsoptimering (CRO)"
          ]
        }
      ],
      stats: [
        { value: "+340%", label: "Organisk trafikökning i snitt" },
        { value: "85%", label: "Fler leads från Google-sökningar" },
        { value: "Top 3", label: "Ranking på prioriterade sökord" }
      ]
    },
    en: {
      meta: "SEO & VISIBILITY",
      title: "Dominate search results and drive organic growth",
      desc: "We don't just build beautiful websites – we make sure they are found by the right clients. Our search engine optimization campaigns blend technical code architecture with data-driven content strategy to rank you #1.",
      back: "Back to home",
      whyTitle: "Why choose our SEO model?",
      whyDesc: "Many agencies talk about rankings, but we care about leads and revenue. We optimize the entire journey from search query to conversion.",
      pricingTitle: "Our Pricing Packages",
      pricingDesc: "Select a package tailored to your target market and ambition. No hidden fees, fully transparent monthly reports.",
      contactBtn: "Book Consultation",
      casesTitle: "Proven Organic Growth",
      casesDesc: "Here are the results from some of our recent SEO campaigns:",
      reasons: [
        {
          title: "Technical Code Optimization",
          desc: "Google rewards fast sites. We build with exceptionally clean code that scores 100/100 on Google PageSpeed Insights.",
          Icon: ShieldCheck
        },
        {
          title: "Strategic Content",
          desc: "We write SEO-adapted content that directly answers customer queries and funnels them to your forms.",
          Icon: Search
        },
        {
          title: "Data-driven Tracking",
          desc: "Full transparency of which keywords drive traffic, rankings, and actual leads with custom Dashboards.",
          Icon: BarChart3
        }
      ],
      packages: [
        {
          name: "Core SEO",
          price: "$590",
          period: "/month",
          desc: "Ideal for local businesses looking to dominate search in their city and rank on Google Maps.",
          popular: false,
          features: [
            "Local keyword analysis (15 terms)",
            "Google Business Profile optimization",
            "Basic On-Page technical optimization",
            "Real-time keyword position tracking",
            "Quarterly performance report"
          ]
        },
        {
          name: "Growth SEO",
          price: "$1,290",
          period: "/month",
          desc: "Our most popular package for established companies aiming to rank nationally and outpace competitors.",
          popular: true,
          features: [
            "Advanced keyword analysis (50 terms)",
            "Detailed competitor profiling",
            "Monthly technical SEO corrections",
            "2x custom optimized articles / month",
            "Monthly link-building outreach",
            "Monthly video report review"
          ]
        },
        {
          name: "Enterprise Dominance",
          price: "$2,390",
          period: "/month",
          desc: "For market leaders demanding aggressive growth and dominance on high-volume keywords.",
          popular: false,
          features: [
            "Unlimited keyword tracking",
            "Weekly performance diagnostics",
            "Programmatic SEO & landing page scaling",
            "4x custom premium articles / month",
            "High-authority backlink acquisitions",
            "Dedicated SEO strategist & support",
            "Conversion Rate Optimization (CRO)"
          ]
        }
      ],
      stats: [
        { value: "+340%", label: "Average organic traffic growth" },
        { value: "85%", label: "More leads from Google searches" },
        { value: "Top 3", label: "Ranking on prioritized keywords" }
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

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
        <div className="flex-1 space-y-6">
          <span className="text-xs text-indigo-400 font-extrabold tracking-[0.25em] uppercase block">
            {t.meta}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            {t.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            {t.desc}
          </p>
          <div className="pt-4">
            <Magnetic>
              <button
                onClick={handleContactNav}
                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-150 transition-colors cursor-pointer flex items-center gap-2"
              >
                {t.contactBtn} <ArrowRight className="w-5 h-5" />
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Stats card */}
        <div className="lg:w-[400px] w-full bg-zinc-900 border border-zinc-850 rounded-3xl p-8 space-y-6 relative overflow-hidden shrink-0">
          <div className="absolute top-[-20%] right-[-20%] w-48 h-48 rounded-full bg-emerald-500/10 blur-[50px] -z-10" />
          <h3 className="text-lg font-bold text-white border-b border-zinc-850 pb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            {t.casesTitle}
          </h3>
          <div className="space-y-6">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs text-zinc-400 font-medium">{stat.label}</span>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why SEO Section */}
      <div className="mb-28">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.whyTitle}</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.whyDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.reasons.map((reason, index) => {
            const Icon = reason.Icon;
            return (
              <div key={index} className="bg-zinc-900/50 border border-zinc-850 rounded-3xl p-8 hover:border-zinc-800 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.pricingTitle}</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.pricingDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all border ${
                pkg.popular 
                  ? "bg-zinc-900 border-indigo-500 shadow-2xl scale-102 z-10" 
                  : "bg-zinc-900/40 border-zinc-850 hover:border-zinc-800"
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest">
                  POPULÄR
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-zinc-400 text-xs mb-6 min-h-[40px]">{pkg.desc}</p>
                <div className="flex items-baseline gap-1 mb-8 border-b border-zinc-850 pb-6">
                  <span className="text-4xl font-black text-white font-mono">{pkg.price}</span>
                  <span className="text-zinc-500 text-xs">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Magnetic className="w-full">
                <ConfettiButton>
                  <button
                    onClick={handleContactNav}
                    className={`w-full py-3.5 rounded-full text-center text-sm font-bold cursor-pointer transition-all ${
                      pkg.popular
                        ? "bg-indigo-500 hover:bg-indigo-650 text-white shadow-xl shadow-indigo-500/10"
                        : "bg-zinc-950/60 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    {t.contactBtn}
                  </button>
                </ConfettiButton>
              </Magnetic>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
