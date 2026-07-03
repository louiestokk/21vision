import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Check, ShoppingBag, Layers, Activity, FileText, Sparkles, Star, Eye, ExternalLink, X, Laptop, Monitor, Smartphone, ShoppingCart, RefreshCw } from "lucide-react";
import { Magnetic } from "./ui/Magnetic";
import { ConfettiButton } from "./ui/ConfettiButton";

export function WebsitesDetails() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [demoTemplate, setDemoTemplate] = useState<any | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [demoCartCount, setDemoCartCount] = useState(0);

  const handleContactNav = () => {
    setDemoTemplate(null);
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const t = {
    sv: {
      meta: "THEMEFOREST STYLE MARKETPLACE",
      title: "Premium Hemsidor & Webbshopsmallar",
      desc: "Utforska vår marknadsplats av specialdesignade mallar för olika branscher. Välj din favoritdesign, köp den licensierad eller låt oss konfigurera den helt efter ditt varumärke med sub-100ms prestanda.",
      back: "Tillbaka till hem",
      templatesTitle: "Våra exklusiva templates",
      templatesDesc: "Hitta den design som matchar dina ambitioner. Klicka på 'Live Demo' för att provköra och interagera med varje template i realtid.",
      pricingTitle: "Hemsides-paket & driftsättning",
      pricingDesc: "Transparenta engångspriser för full designanpassning, driftsättning och optimering av din utvalda mall.",
      contactBtn: "Välj denna template",
      liveDemoBtn: "Live Demo",
      filterAll: "Alla",
      filterEcom: "E-handel",
      filterCorp: "Företag",
      filterTech: "Tech & SaaS",
      filterCreative: "Kreativ",
      included: "Licens ingår",
      liveUrl: "templates.21vision.se/",
      demoAlert: "Detta är ett simulerat demo. Vid leverans anpassar vi allt efter ditt varumärke.",
      demoBuyBtn: "Boka konfigurering",
      packages: [
        {
          name: "Startup Launch",
          price: "14 900 kr",
          period: "engångssumma",
          desc: "Vi tar din utvalda template, anpassar logotyp, färger och text, samt driftsätter den på din domän.",
          popular: false,
          features: [
            "Anpassning av valfri template",
            "1x fullmatad landningssida",
            "Kontaktformulär till e-post",
            "Google Analytics-koppling",
            "PageSpeed optimering (100/100)"
          ]
        },
        {
          name: "Professional CMS",
          price: "34 900 kr",
          period: "engångssumma",
          desc: "Vårt rekommenderade paket. Vi bygger ut din mall till upp till 8 sidor och kopplar på ett enkelt redigeringsverktyg.",
          popular: true,
          features: [
            "Anpassning av valfri template",
            "Upp till 8x undersidor",
            "Koppling till Headless CMS (Sanity)",
            "Lätt att blogga & ändra texter själv",
            "Avancerade animationer & transitions",
            "Integrerad lead-tracker"
          ]
        },
        {
          name: "E-Commerce Master",
          price: "59 000 kr",
          period: "engångssumma",
          desc: "Full e-handelsdriftsättning av Volt eller Apex mallarna med Stripe/Klarna checkout.",
          popular: false,
          features: [
            "Volt eller Apex E-com template",
            "Stripe & Klarna Checkout integrerad",
            "Produktdatabas via CMS",
            "Varukorg & dynamisk kassa",
            "Lager- & orderhantering",
            "Automatiska kvitton till kunder",
            "SEO-optimerade artiklar & produkter"
          ]
        }
      ],
      templatesList: [
        { 
          name: "Volt E-Commerce", 
          category: "Ecom", 
          desc: "Blixtsnabb checkout och minimalistisk layout för exklusiva modevarumärken.", 
          industry: "Mode & E-handel", 
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
          price: "790 kr",
          sales: 142,
          rating: 4.9,
          tags: ["React", "Tailwind", "Cart"]
        },
        { 
          name: "Apex Retail", 
          category: "Ecom", 
          desc: "Modern shopping-layout optimerad för större sport- och produktkataloger.", 
          industry: "Sport & E-handel", 
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
          price: "790 kr",
          sales: 96,
          rating: 5.0,
          tags: ["Klarna", "Stripe", "NextJS"]
        },
        { 
          name: "Zenith Portfolio", 
          category: "Creative", 
          desc: "Ultraminimalistisk och ren portfölj anpassad för fotografer och arkitekter.", 
          industry: "Konst & Foto", 
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
          price: "490 kr",
          sales: 210,
          rating: 4.8,
          tags: ["Framer", "Gallery", "Lightroom"]
        },
        { 
          name: "Aether SaaS", 
          category: "Tech", 
          desc: "Konverteringsfokuserad landningssida byggd för mjukvarubolag och mobilappar.", 
          industry: "Teknologi & SaaS", 
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
          price: "590 kr",
          sales: 84,
          rating: 4.9,
          tags: ["Charts", "Auth", "Dark Mode"]
        },
        { 
          name: "Nova Medtech", 
          category: "Corp", 
          desc: "Ren och förtroendeingivande profil för medicinsk vård och klinisk utrustning.", 
          industry: "Medicinsk Teknik", 
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
          price: "590 kr",
          sales: 45,
          rating: 4.7,
          tags: ["Secure", "Accessibility", "SEO"]
        },
        { 
          name: "Quantum Law", 
          category: "Corp", 
          desc: "Exklusiv och sofistikerad hemsida för advokatbyråer och revisionsbyråer.", 
          industry: "Juridik & Advokater", 
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
          price: "590 kr",
          sales: 68,
          rating: 4.9,
          tags: ["Legal", "Form Builder", "PDF"]
        },
        { 
          name: "Vanguard Bistro", 
          category: "Corp", 
          desc: "Inbjudande restaurangdesign med smidig bordsbokning och menyvy.", 
          industry: "Bistro & Restaurang", 
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
          price: "490 kr",
          sales: 112,
          rating: 4.8,
          tags: ["Booking", "Menu Grid", "Map"]
        },
        { 
          name: "Solstice Fitness", 
          category: "Creative", 
          desc: "Kraftfull och energisk design för träningsstudios, crossfitboxar och PTs.", 
          industry: "Träning & Gym", 
          image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
          price: "490 kr",
          sales: 74,
          rating: 4.9,
          tags: ["Schedule", "Membership", "Video"]
        },
        { 
          name: "Echo Blog", 
          category: "Creative", 
          desc: "Optimera dina artiklar med en layout byggd för optimal läsbarhet och annonser.", 
          industry: "Tidning & Blogg", 
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
          price: "390 kr",
          sales: 130,
          rating: 4.7,
          tags: ["Newsletter", "Read Time", "Ads"]
        },
        { 
          name: "Horizon Agency", 
          category: "Tech", 
          desc: "Stilren presentation av tjänster och cases för byråer och konsulter.", 
          industry: "Byrå & Konsulting", 
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
          price: "590 kr",
          sales: 154,
          rating: 5.0,
          tags: ["Works Grid", "Dynamic", "Contact"]
        }
      ]
    },
    en: {
      meta: "THEMEFOREST STYLE MARKETPLACE",
      title: "Premium Website & Webshop Templates",
      desc: "Explore our marketplace of custom-built design templates. Select your favorite layout, purchase the license, or let us deploy and customize it for you with sub-100ms loading performance.",
      back: "Back to home",
      templatesTitle: "Our Exclusive Templates",
      templatesDesc: "Find the design that matches your ambition. Click 'Live Demo' to preview and interact with each template in real-time.",
      pricingTitle: "Website Bundles & Deployment",
      pricingDesc: "Transparent one-time pricing for full design customization, system deployment, and speed optimization of your chosen theme.",
      contactBtn: "Select This Template",
      liveDemoBtn: "Live Demo",
      filterAll: "All",
      filterEcom: "E-Commerce",
      filterCorp: "Corporate",
      filterTech: "Tech & SaaS",
      filterCreative: "Creative",
      included: "License Included",
      liveUrl: "templates.21vision.se/",
      demoAlert: "This is a simulated demo. Upon onboarding, we customize everything to match your brand assets.",
      demoBuyBtn: "Book Customization",
      packages: [
        {
          name: "Startup Launch",
          price: "$1,490",
          period: "one-time",
          desc: "We take your chosen template, customize logos, fonts, colors, and copy, and deploy it to your domain.",
          popular: false,
          features: [
            "Customization of 1 template",
            "1x rich responsive landing page",
            "Contact form routing to email",
            "Google Analytics connection",
            "PageSpeed optimization (100/100)"
          ]
        },
        {
          name: "Professional CMS",
          price: "$3,490",
          period: "one-time",
          desc: "Our recommended setup. We extend your template to up to 8 pages and configure a visual content manager.",
          popular: true,
          features: [
            "Customization of 1 template",
            "Up to 8x responsive pages",
            "Headless CMS integration (Sanity)",
            "Easy editing & blogging dashboard",
            "Advanced animations & transitions",
            "Integrated lead tracker"
          ]
        },
        {
          name: "E-Commerce Master",
          price: "$5,900",
          period: "one-time",
          desc: "Full checkout deployment for Volt or Apex stores with Stripe and Klarna payment processing.",
          popular: false,
          features: [
            "Volt or Apex E-com template",
            "Stripe & Klarna Checkout integrated",
            "Product catalog via Headless CMS",
            "Shopping cart & dynamic checkout",
            "Inventory & order administration",
            "Automated client PDF invoices",
            "SEO-optimization for all item listings"
          ]
        }
      ],
      templatesList: [
        { 
          name: "Volt E-Commerce", 
          category: "Ecom", 
          desc: "Blazing fast checkout and minimalist design for premium fashion brands.", 
          industry: "Fashion & E-Commerce", 
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
          price: "$79",
          sales: 142,
          rating: 4.9,
          tags: ["React", "Tailwind", "Cart"]
        },
        { 
          name: "Apex Retail", 
          category: "Ecom", 
          desc: "Modern shopping catalog layout optimized for larger sports inventories.", 
          industry: "Sports & E-Commerce", 
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
          price: "$79",
          sales: 96,
          rating: 5.0,
          tags: ["Klarna", "Stripe", "NextJS"]
        },
        { 
          name: "Zenith Portfolio", 
          category: "Creative", 
          desc: "Ultraminimalist portfolio tailored for photographers and architecture studios.", 
          industry: "Art & Photo", 
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
          price: "$49",
          sales: 210,
          rating: 4.8,
          tags: ["Framer", "Gallery", "Lightroom"]
        },
        { 
          name: "Aether SaaS", 
          category: "Tech", 
          desc: "Conversion-centric landing page layout built for SaaS platforms and dashboards.", 
          industry: "Tech & SaaS", 
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
          price: "$59",
          sales: 84,
          rating: 4.9,
          tags: ["Charts", "Auth", "Dark Mode"]
        },
        { 
          name: "Nova Medtech", 
          category: "Corp", 
          desc: "Clean and trustworthy visual presence for medical technology and care facilities.", 
          industry: "Medical Tech", 
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
          price: "$59",
          sales: 45,
          rating: 4.7,
          tags: ["Secure", "Accessibility", "SEO"]
        },
        { 
          name: "Quantum Law", 
          category: "Corp", 
          desc: "Exclusive and sophisticated layout for law firms and consultancy practices.", 
          industry: "Legal & Consulting", 
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
          price: "$59",
          sales: 68,
          rating: 4.9,
          tags: ["Legal", "Form Builder", "PDF"]
        },
        { 
          name: "Vanguard Bistro", 
          category: "Corp", 
          desc: "Inviting restaurant layout with seamless table booking integrations.", 
          industry: "Restaurant & Café", 
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
          price: "$49",
          sales: 112,
          rating: 4.8,
          tags: ["Booking", "Menu Grid", "Map"]
        },
        { 
          name: "Solstice Fitness", 
          category: "Creative", 
          desc: "Powerful, high-energy layout built for fitness centers, boxes, and trainers.", 
          industry: "Fitness & Health", 
          image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
          price: "$49",
          sales: 74,
          rating: 4.9,
          tags: ["Schedule", "Membership", "Video"]
        },
        { 
          name: "Echo Blog", 
          category: "Creative", 
          desc: "Optimize your articles with a layout built for ultimate readability and ads spots.", 
          industry: "Media & News", 
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
          price: "$39",
          sales: 130,
          rating: 4.7,
          tags: ["Newsletter", "Read Time", "Ads"]
        },
        { 
          name: "Horizon Agency", 
          category: "Tech", 
          desc: "Sleek and polished service and cases showcase for consulting agencies.", 
          industry: "Agency & Consulting", 
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
          price: "$59",
          sales: 154,
          rating: 5.0,
          tags: ["Works Grid", "Dynamic", "Contact"]
        }
      ]
    }
  }[lang];

  // Filtering templates
  const filteredTemplates = activeCategory === "All"
    ? t.templatesList
    : t.templatesList.filter(item => item.category === activeCategory);

  const categories = [
    { key: "All", label: t.filterAll },
    { key: "Ecom", label: t.filterEcom },
    { key: "Corp", label: t.filterCorp },
    { key: "Tech", label: t.filterTech },
    { key: "Creative", label: t.filterCreative }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Back button */}
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </Link>
      </div>

      {/* Hero */}
      <div className="mb-24">
        <span className="text-xs text-indigo-400 font-extrabold tracking-[0.25em] uppercase block mb-3">
          {t.meta}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl mb-6">
          {t.title}
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          {t.desc}
        </p>
      </div>

      {/* Templates Browser (ThemeForest Layout) */}
      <div className="mb-28">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.templatesTitle}</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.templatesDesc}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-white text-black font-extrabold"
                  : "bg-zinc-900/60 text-zinc-400 border border-zinc-850 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Templates Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((tpl) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={tpl.name}
                className="bg-zinc-900/70 border border-zinc-850 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-zinc-800 transition-colors group shadow-2xl"
              >
                {/* Template Visual Thumbnail with Hover overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <img
                    src={tpl.image}
                    alt={tpl.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Magnetic>
                      <button
                        onClick={() => setDemoTemplate(tpl)}
                        className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold flex items-center gap-1.5 shadow-xl hover:bg-zinc-150 transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" /> {t.liveDemoBtn}
                      </button>
                    </Magnetic>
                  </div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[9px] text-zinc-400 font-extrabold uppercase tracking-widest bg-zinc-950/80 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full">
                    {tpl.industry}
                  </span>
                  {/* Price Tag */}
                  <span className="absolute top-4 right-4 text-xs text-white font-extrabold bg-indigo-500 px-3 py-1 rounded-full shadow-lg">
                    {tpl.price}
                  </span>
                </div>

                {/* Template Metadata */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{tpl.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-amber-400 font-bold font-mono">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {tpl.rating.toFixed(1)}
                      </div>
                    </div>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{tpl.desc}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tpl.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono text-zinc-550 font-semibold border border-zinc-850 px-2 py-0.5 rounded bg-zinc-950/30">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-zinc-850/60 text-xs">
                    <span className="text-zinc-550 font-medium">
                      {tpl.sales} {lang === "sv" ? "sålda licenser" : "licenses sold"}
                    </span>
                    <button
                      onClick={handleContactNav}
                      className="text-white font-bold hover:text-indigo-400 flex items-center gap-1 transition-colors cursor-pointer group"
                    >
                      {t.contactBtn} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Pricing packages section */}
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
                  <span className="text-zinc-500 text-xs">/ {pkg.period}</span>
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

      {/* Simulated Live Demo Modal Overlay (ThemeForest Style Preview) */}
      <AnimatePresence>
        {demoTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex flex-col p-4 md:p-8"
          >
            {/* Header Control Panel */}
            <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-t-2xl px-6 py-4 w-full max-w-[1500px] mx-auto">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white">{demoTemplate.name}</span>
                <span className="text-xs text-zinc-500 font-mono hidden md:inline">{t.liveUrl}{demoTemplate.name.toLowerCase().replace(" ", "-")}</span>
              </div>
              
              {/* Device Selector */}
              <div className="hidden sm:flex items-center gap-1.5 bg-zinc-950 p-1 rounded-lg border border-zinc-850">
                <button
                  onClick={() => setPreviewDevice("desktop")}
                  className={`p-1.5 rounded transition-all cursor-pointer ${previewDevice === "desktop" ? "bg-zinc-800 text-white" : "text-zinc-500"}`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPreviewDevice("tablet")}
                  className={`p-1.5 rounded transition-all cursor-pointer ${previewDevice === "tablet" ? "bg-zinc-800 text-white" : "text-zinc-500"}`}
                  title="Tablet View"
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPreviewDevice("mobile")}
                  className={`p-1.5 rounded transition-all cursor-pointer ${previewDevice === "mobile" ? "bg-zinc-800 text-white" : "text-zinc-500"}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <Magnetic>
                  <button
                    onClick={handleContactNav}
                    className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-xs font-bold hover:bg-indigo-600 transition-colors cursor-pointer"
                  >
                    {t.demoBuyBtn}
                  </button>
                </Magnetic>
                <button
                  onClick={() => { setDemoTemplate(null); setDemoCartCount(0); }}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Simulated Live Browser View */}
            <div className="flex-1 w-full max-w-[1500px] mx-auto bg-zinc-950 border-x border-b border-zinc-800 rounded-b-2xl overflow-y-auto flex items-start justify-center p-4">
              <motion.div
                layout
                className={`bg-black border border-zinc-900 rounded-xl overflow-hidden transition-all shadow-2xl relative ${
                  previewDevice === "desktop" ? "w-full min-h-[500px]" :
                  previewDevice === "tablet" ? "w-[768px] min-h-[600px]" : "w-[375px] min-h-[550px]"
                }`}
              >
                {/* Simulated Content based on Category */}
                {demoTemplate.category === "Ecom" ? (
                  <div className="p-6 md:p-12 space-y-8 font-sans">
                    {/* Store Header */}
                    <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                      <span className="font-extrabold text-sm tracking-wider text-white uppercase">{demoTemplate.name.split(" ")[0]} STORE</span>
                      <button className="flex items-center gap-1.5 bg-zinc-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Cart ({demoCartCount})</span>
                      </button>
                    </div>

                    {/* Product Showcase */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
                      <img src={demoTemplate.image} alt="Demo Product" className="rounded-xl w-full aspect-square object-cover" />
                      <div className="space-y-4">
                        <span className="text-[10px] bg-zinc-900 text-indigo-400 font-extrabold uppercase px-2.5 py-1 rounded-full">New Arrival</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Volt Limited Edition Jacket</h2>
                        <span className="text-xl font-mono text-zinc-300 font-bold block">$189.00</span>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                          Experience premium craftsmanship and unparalleled comfort. This custom layout features fluid checkout funnels and quick-add actions.
                        </p>
                        <div className="pt-4 flex gap-3">
                          <button
                            onClick={() => setDemoCartCount(prev => prev + 1)}
                            className="flex-1 bg-white text-black py-3 rounded-full text-xs font-bold hover:bg-zinc-150 transition-colors"
                          >
                            Add to Bag
                          </button>
                          <button
                            onClick={() => { setDemoCartCount(prev => prev + 1); alert("Simulated checkout initiated!"); }}
                            className="flex-1 bg-indigo-500 text-white py-3 rounded-full text-xs font-bold hover:bg-indigo-600 transition-colors"
                          >
                            Buy It Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : demoTemplate.category === "Tech" ? (
                  <div className="p-6 md:p-12 space-y-8 font-sans">
                    {/* Nav */}
                    <div className="flex justify-between items-center">
                      <span className="font-black text-sm text-white uppercase">{demoTemplate.name.split(" ")[0]} CLOUD</span>
                      <button className="bg-zinc-900 text-zinc-300 px-3 py-1.5 rounded-lg text-xs font-semibold">Sign In</button>
                    </div>

                    {/* SaaS Dashboard preview */}
                    <div className="space-y-6 pt-4">
                      <div className="bg-zinc-900/40 border border-zinc-850 rounded-xl p-6 space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-[10px] text-zinc-550 font-bold uppercase tracking-wider block">Monthly Active Users</span>
                            <span className="text-2xl font-black text-white font-mono">14,285</span>
                          </div>
                          <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">+18.5%</span>
                        </div>
                        {/* Simulated SVG Graph */}
                        <svg className="w-full h-24 text-indigo-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                          <path d="M0,25 Q15,10 30,18 T60,5 T90,12 T100,2 L100,30 L0,30 Z" fill="rgba(99,102,241,0.06)" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-center">
                        {["Storage", "CPU usage", "Uptime"].map((lbl, idx) => (
                          <div key={idx} className="bg-zinc-900/30 border border-zinc-850 rounded-lg p-3">
                            <span className="text-[9px] text-zinc-500 font-semibold block uppercase">{lbl}</span>
                            <span className="text-xs font-bold text-white font-mono mt-1 block">{idx === 0 ? "42.8 GB" : idx === 1 ? "18%" : "99.98%"}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 md:p-12 space-y-6 font-sans">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-sm text-white uppercase">{demoTemplate.name.split(" ")[0]} STUDIO</span>
                      <span className="text-xs text-zinc-550 font-semibold">Menu</span>
                    </div>

                    {/* Creative Showcase */}
                    <div className="space-y-4 pt-6">
                      <h1 className="text-3xl font-bold text-white tracking-tight leading-none max-w-sm">Crafting visual aesthetics for modern brands.</h1>
                      <p className="text-zinc-500 text-xs max-w-xs">We build custom digital design solutions tailored to amplify product value and brand strategy.</p>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <img src={demoTemplate.image} className="rounded-lg aspect-[4/3] object-cover border border-zinc-900" />
                        <div className="bg-zinc-900/20 border border-zinc-850 rounded-lg p-4 flex flex-col justify-between">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Latest Work</span>
                          <span className="text-xs font-bold text-white mt-4 block">Creative Identity Project <ExternalLink className="w-3.5 h-3.5 inline ml-1 text-indigo-400" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Simulated alert bar at bottom of live demo browser */}
                <div className="absolute bottom-0 left-0 right-0 bg-indigo-500 text-white text-center py-2 text-[10px] font-semibold flex items-center justify-center gap-2 select-none px-4">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>{t.demoAlert}</span>
                </div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
