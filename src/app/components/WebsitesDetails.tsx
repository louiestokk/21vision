import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Link, useNavigate } from "react-router";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Layers, 
  Sparkles, 
  Star, 
  Eye, 
  X, 
  Laptop, 
  Monitor, 
  Smartphone, 
  RefreshCw,
  Dumbbell,
  Car,
  Truck,
  Bot,
  CheckCircle2,
  Calendar,
  Clock,
  TrendingUp,
  Cpu,
  ShoppingCart
} from "lucide-react";
import { Magnetic } from "./ui/Magnetic";
import { ConfettiButton } from "./ui/ConfettiButton";

export function WebsitesDetails() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [demoCase, setDemoCase] = useState<any | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Interactive states for live demos
  // SaaS Demo State
  const [saasTasks, setSaasTasks] = useState([
    { id: 1, title: "Designa UI mockups", col: "todo" },
    { id: 2, title: "Konfigurera databas", col: "todo" },
    { id: 3, title: "Integrera Stripe", col: "progress" },
    { id: 4, title: "Skapa API-endpoints", col: "done" }
  ]);
  const handleMoveTask = (id: number) => {
    setSaasTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextCol = t.col === "todo" ? "progress" : t.col === "progress" ? "done" : "todo";
        return { ...t, col: nextCol };
      }
      return t;
    }));
  };

  // PT App Demo State
  const [ptWorkout, setPtWorkout] = useState([
    { name: "Knäböj (Squats)", sets: "4x8", done: false },
    { name: "Bulgariska utfall", sets: "3x10", done: false },
    { name: "Vader i maskin", sets: "3x15", done: false }
  ]);
  const handleToggleWorkout = (index: number) => {
    setPtWorkout(prev => prev.map((w, i) => i === index ? { ...w, done: !w.done } : w));
  };
  const workoutProgress = Math.round((ptWorkout.filter(w => w.done).length / ptWorkout.length) * 100);

  // Car Booking App Demo State
  const [carService, setCarService] = useState("wash"); // wash, detail, service, tires
  const [carSelectedPkg, setCarSelectedPkg] = useState<string | null>(null);
  const [carTime, setCarTime] = useState<string | null>(null);
  const [carBooked, setCarBooked] = useState(false);

  const carPackages: Record<string, Array<{ id: string; name: string; price: number; desc: string }>> = {
    wash: [
      { id: "w1", name: "Standard Tvätt", price: 299, desc: "Utvändig tvätt & torkning" },
      { id: "w2", name: "Premium Glans", price: 599, desc: "Premium vaxning & invändig rengöring" }
    ],
    detail: [
      { id: "de1", name: "Lera & Polering", price: 1499, desc: "Borttagning av asfalt, lätt polering" },
      { id: "de2", name: "Keramiskt Lackskydd", price: 3499, desc: "3-års hållbarhet, extrem hydrofobisk yta" }
    ],
    service: [
      { id: "s1", name: "Oljeservice", price: 999, desc: "Filter & motoroljebyte inkl. kontroll" },
      { id: "s2", name: "Helservice", price: 2499, desc: "Komplett mekanisk genomgång & vätskebyte" }
    ],
    tires: [
      { id: "t1", name: "Däckskifte", price: 399, desc: "Hjulskifte inkl. lufttrycksjustering" },
      { id: "t2", name: "Däckhotell", price: 999, desc: "Säsongsförvaring, tvätt & skifte" }
    ]
  };

  // Moving Company Demo State
  const [movingKvm, setMovingKvm] = useState(60);
  const [movingPacking, setMovingPacking] = useState(false);
  const [movingCleaning, setMovingCleaning] = useState(false);
  const [movingSent, setMovingSent] = useState(false);

  const calcMovingPrice = () => {
    let base = 1200;
    base += movingKvm * 45;
    if (movingPacking) base += 1500;
    if (movingCleaning) base += 2500;
    return base;
  };

  const handleContactNav = () => {
    setDemoCase(null);
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const t = {
    sv: {
      meta: "CASES & PORTFÖLJ",
      title: "Skräddarsydda Hemsidor & Appar",
      desc: "Vi bygger inte traditionella mallar. Vi designar och programmerar avancerade webbapplikationer i Next.js, interaktiva profilhemsidor och stabila mobilappar i React Native. Utforska fyra av våra senaste projekt nedan.",
      back: "Tillbaka till hem",
      casesTitle: "Nyligen levererade projekt",
      casesDesc: "Klicka på 'Live Demo' för att provköra och interagera med en levande simulering av det vi byggt för våra kunder.",
      pricingTitle: "Riktlinjer & Prisindikationer",
      pricingDesc: "Här är indikativa priser för olika typer av projekt för att hjälpa er budgetering. Varje lösning skräddarsys efter era unika behov.",
      contactBtn: "Diskutera projekt",
      liveDemoBtn: "Live Demo",
      filterAll: "Alla",
      filterApps: "Mobilappar",
      filterSaaS: "SaaS & Webapps",
      filterWebsites: "Företagssidor",
      demoAlert: "Interaktiv fallstudie-simulering levererad av 21Vision.",
      demoBookBtn: "Boka möte om liknande projekt",
      techStack: "Teknologier",
      niche: "Nisch / Bransch",
      resultLabel: "Resultat",
      
      casesList: [
        {
          id: "saas",
          name: "SaaS Planeringsplattform",
          category: "SaaS",
          niche: "Kreativa byråer & Projektledningsverktyg",
          desc: "Ett fullstack-planeringsverktyg med dra-och-släpp Kanban-tavlor, samarbete i realtid och resursplanering.",
          details: "Vi utvecklade en SaaS-webbapplikation i Next.js som hjälper distributörer och kreativa byråer att fördela arbetsbördan. Plattformen har realtidssynk via WebSockets samt ett specialbyggt kalendersystem.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
          tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "WebSockets"],
          results: "PageSpeed 100/100, laddar på under 100ms och hanterar över 10k samtidiga anslutningar.",
          rating: 5.0
        },
        {
          id: "pt",
          name: "PT & Coachingsplattform",
          category: "Apps",
          niche: "Träning, Hälsa & Personlig Träning",
          desc: "En mobilapp för iOS & Android med skräddarsydd träningsgenerator, kostschema och chatt i realtid med tränare.",
          details: "För en ledande hänsynscoach utvecklade vi en prestandafokuserad app i React Native. Användare kan generera träningspass baserade på AI-rekommendationer, logga sina måltider och chatta direkt med sin PT.",
          image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
          tech: ["React Native", "Expo", "Supabase", "TypeScript"],
          results: "Minskade administrativ tid för tränare med 70% och ökade kundretention med 35%.",
          rating: 4.9
        },
        {
          id: "car",
          name: "Allt-i-ett Bilvårdsapp",
          category: "Apps",
          niche: "Bilvård & Servicefranchise",
          desc: "En samlad bokningsapplikation där kunden kan boka biltvätt, bilrekond, bilservice och däckbyten på en och samma plats.",
          details: "En mobilapp där användare enkelt registrerar sitt fordon och bokar fyra olika tjänster (tvätt, rekond, service och däck) i ett och samma flöde. Innehåller säkra Stripe-betalningar.",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
          tech: ["React Native", "TypeScript", "FastAPI", "Stripe Checkout"],
          results: "Helt automatiserat bokningsflöde som genererade en 40-procentig ökning i merförsäljning av tilläggstjänster.",
          rating: 4.8
        },
        {
          id: "moving",
          name: "Logistik & Flyttportal",
          category: "Websites",
          niche: "Transport- & Flyttfirma",
          desc: "En modern företagshemsida med en sofistikerad flyttkalkylator som ger omedelbara prisförslag baserat på bostadsyta.",
          details: "Vi ersatte kundens äldre hemsida med en modern Next.js-app. Kärnan är en interaktiv kalkylator där kunden anger bostadens storlek, väljer tilläggstjänster (packning, städning) och får ett fast prisförslag direkt.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
          tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
          results: "Ökade andelen ifyllda offertförfrågningar med 120% på grund av den enkla priskalkylatorn.",
          rating: 4.9
        }
      ],

      priceGrid: [
        {
          name: "Företagshemsida (5 sidor)",
          price: "24 900 kr",
          period: "engångspris",
          icon: Laptop,
          desc: "En skräddarsydd profilhemsida optimerad för SEO, konvertering och sub-100ms laddningstid.",
          features: [
            "Bespoke Next.js & React-kod",
            "5 unika designade sidor",
            "Inbyggt Headless CMS (enkelt att redigera själv)",
            "Kontaktformulär med lead-spårning",
            "PageSpeed Score 100/100"
          ]
        },
        {
          name: "AI Webbapplikation (Next.js)",
          price: "119 000 kr",
          period: "engångspris",
          icon: Cpu,
          desc: "En avancerad webbplattform byggd med integrerad artificiell intelligens och dynamiskt gränssnitt.",
          features: [
            "OpenAI / Anthropic API-kopplingar",
            "Vektordatabaser (Pinecone/PGVector)",
            "Prompt engineering & modellfinjustering",
            "Hantering av AI-historik & sessioner",
            "Next.js Fullstack & Säker autentisering"
          ]
        },
        {
          name: "SaaS Webbapplikation",
          price: "89 000 kr",
          period: "engångspris",
          icon: Layers,
          desc: "Fullstack-applikation för din prenumerationstjänst eller digitala verktyg.",
          features: [
            "Säker inloggning & användarroller",
            "Databasstruktur & API-integrationer",
            "Stripe Billing (prenumerationshantering)",
            "Admin-dashboard för administration",
            "Next.js Server Actions & optimerad DB"
          ]
        },
        {
          name: "Mobilapp (React Native)",
          price: "95 000 kr",
          period: "engångspris",
          icon: Smartphone,
          desc: "Skräddarsydd app för både iOS och Android utvecklad i ett enhetligt kodramverk.",
          features: [
            "React Native & Expo-miljö",
            "Publicering på App Store & Google Play",
            "Push-notiser integrerat",
            "Hårdvarukoppling (kamera, GPS, etc.)",
            "Offline-stöd & lokal databas"
          ]
        },
        {
          name: "E-handel & Webbshop",
          price: "59 000 kr",
          period: "engångspris",
          icon: ShoppingCart,
          desc: "Blixtsnabb e-handelsbutik med optimal kundkorgskonvertering och checkout.",
          features: [
            "Stripe & Klarna integrationsklart",
            "Dynamisk varukorg & sömlös kassa",
            "Hantering av produkter via smidigt CMS",
            "SEO-optimerade produktsidor",
            "Automatiserade orderkvitton & e-post"
          ]
        },
        {
          name: "AI-Integration i Hemsida",
          price: "19 900 kr",
          period: "engångspris",
          icon: Bot,
          desc: "Koppla på intelligent AI på din befintliga hemsida för kundsupport eller rådgivning.",
          features: [
            "Specialtränad AI-chattbot",
            "Dataträning på era egna dokument/hemsida",
            "Lead-generering integrerat i chatten",
            "Design anpassad efter er grafiska profil",
            "Lättplacerad widget (fungerar överallt)"
          ]
        }
      ]
    },
    en: {
      meta: "CASES & PORTFOLIO",
      title: "Custom Websites & Mobile Apps",
      desc: "We don't do templates. We design and program bespoke full-stack Next.js web applications, interactive landing pages, and native mobile apps using React Native. Explore four of our latest client case studies below.",
      back: "Back to home",
      casesTitle: "Recently Delivered Cases",
      casesDesc: "Click 'Live Demo' to interact with a simulated preview of what we built for our clients.",
      pricingTitle: "Pricing & Benchmarks",
      pricingDesc: "Here are indicative price ranges for common digital products to help with your budgeting. Every project is fully tailored.",
      contactBtn: "Discuss Project",
      liveDemoBtn: "Live Demo",
      filterAll: "All",
      filterApps: "Mobile Apps",
      filterSaaS: "SaaS & Webapps",
      filterWebsites: "Corporate Sites",
      demoAlert: "Interactive case study simulation delivered by 21Vision.",
      demoBookBtn: "Book project discussion",
      techStack: "Technologies",
      niche: "Niche / Industry",
      resultLabel: "Result",
      
      casesList: [
        {
          id: "saas",
          name: "SaaS Planning Platform",
          category: "SaaS",
          niche: "Creative Agencies & Project Management",
          desc: "A full-stack planning platform featuring drag-and-drop Kanban boards, real-time collaboration, and resource scheduling.",
          details: "We built a custom Next.js SaaS web application to help creative agencies distribute workloads. Features include real-time sync via WebSockets and a bespoke calendar scheduler.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
          tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "WebSockets"],
          results: "100/100 PageSpeed, sub-100ms loads, and scales to 10k+ concurrent connections.",
          rating: 5.0
        },
        {
          id: "pt",
          name: "PT & Coaching Platform",
          category: "Apps",
          niche: "Fitness, Health & Personal Training",
          desc: "An iOS & Android mobile app featuring custom workout generators, diet trackers, and real-time chat with coaches.",
          details: "For a leading health coach, we designed a high-performance React Native app. Users can generate workouts based on AI recommendations, log food, and chat directly with their trainer.",
          image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
          tech: ["React Native", "Expo", "Supabase", "TypeScript"],
          results: "Reduced administrative scheduling time by 70% and increased retention by 35%.",
          rating: 4.9
        },
        {
          id: "car",
          name: "All-in-One Car Care App",
          category: "Apps",
          niche: "Car Care & Mechanical Service Franchise",
          desc: "A unified booking app where users can schedule car washes, detailing, mechanical service, and tire changes in one place.",
          details: "A mobile application allowing users to register vehicles and book four distinct services (wash, detail, service, and tires) in a single booking funnel. Payment is handled securely through Stripe.",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
          tech: ["React Native", "TypeScript", "FastAPI", "Stripe Checkout"],
          results: "100% automated booking system leading to a 40% increase in extra package add-on sales.",
          rating: 4.8
        },
        {
          id: "moving",
          name: "Logistics & Moving Portal",
          category: "Websites",
          niche: "Logistics & Transportation",
          desc: "A modern corporate website featuring a sophisticated moving volume calculator providing instant price estimates based on area.",
          details: "We replaced the client's legacy website with a modern Next.js site. The centerpiece is an interactive calculator where clients input home size and extra services (packing, cleaning) to get an instant quote.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
          tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
          results: "Increased completed quote submissions by 120% due to the simplified digital calculator.",
          rating: 4.9
        }
      ],

      priceGrid: [
        {
          name: "Corporate Website (5 pages)",
          price: "$2,490",
          period: "one-time",
          icon: Laptop,
          desc: "A custom brochure website optimized for search visibility, conversions, and sub-100ms loading speeds.",
          features: [
            "Bespoke Next.js & React engineering",
            "5 uniquely designed pages",
            "Integrated Headless CMS for simple text updates",
            "Contact forms with visual lead dashboard",
            "PageSpeed Score 100/100"
          ]
        },
        {
          name: "AI Web Application (Next.js)",
          price: "$11,900",
          period: "one-time",
          icon: Cpu,
          desc: "An advanced web platform built with integrated artificial intelligence and digital user interfaces.",
          features: [
            "OpenAI / Anthropic API integrations",
            "Vector databases (Pinecone / PGVector)",
            "Prompt engineering & custom model tuning",
            "AI conversation history & persistent sessions",
            "Full-stack Next.js with secure auth schemas"
          ]
        },
        {
          name: "SaaS Web Application",
          price: "$8,900",
          period: "one-time",
          icon: Layers,
          desc: "A full-stack application built for subscription business models or digital SaaS products.",
          features: [
            "Secure login & role-based access control",
            "Custom database architecture & APIs",
            "Stripe Billing (subscription setup)",
            "Management administration dashboard",
            "Next.js Server Actions & optimized DB schemas"
          ]
        },
        {
          name: "Mobile App (React Native)",
          price: "$9,500",
          period: "one-time",
          icon: Smartphone,
          desc: "Bespoke application for both iOS and Android platforms engineered from a single codebase.",
          features: [
            "React Native & Expo architecture",
            "App Store & Google Play publishing pipeline",
            "Integrated push notification channels",
            "Hardware API connections (camera, GPS, etc.)",
            "Offline mode support with local databases"
          ]
        },
        {
          name: "E-Commerce & Storefront",
          price: "$5,900",
          period: "one-time",
          icon: ShoppingCart,
          desc: "Blazing fast storefront built for high cart conversion and seamless customer checkouts.",
          features: [
            "Stripe & Klarna checkout ready",
            "Dynamic cart drawers & fluid checkouts",
            "Intuitive catalog management via CMS",
            "SEO-optimized product and list pages",
            "Automated PDF billing receipts & triggers"
          ]
        },
        {
          name: "AI Website Integration",
          price: "$1,990",
          period: "one-time",
          icon: Bot,
          desc: "Connect intelligent AI to your existing site for customer support, advice, or lead gen.",
          features: [
            "Bespoke AI chatbot widget",
            "Model training on your own documentation",
            "Structured lead capture integrated in chatbot",
            "Custom branding layout adjustments",
            "Embeddable widget working on any site builder"
          ]
        }
      ]
    }
  }[lang];

  // Filter cases
  const filteredCases = activeCategory === "All"
    ? t.casesList
    : t.casesList.filter((item: any) => item.category === activeCategory);

  const categories = [
    { key: "All", label: t.filterAll },
    { key: "Apps", label: t.filterApps },
    { key: "SaaS", label: t.filterSaaS },
    { key: "Websites", label: t.filterWebsites }
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
      <div className="mb-20">
        <span className="text-xs text-blue-400 font-extrabold tracking-[0.25em] uppercase block mb-3">
          {t.meta}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl mb-6">
          {t.title}
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          {t.desc}
        </p>
      </div>

      {/* Case studies grid */}
      <div className="mb-28">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.casesTitle}</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.casesDesc}
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

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((project: any) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-zinc-900/70 border border-zinc-850 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-zinc-800 transition-colors group shadow-2xl"
              >
                {/* visual image */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Magnetic>
                      <button
                        onClick={() => setDemoCase(project)}
                        className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold flex items-center gap-1.5 shadow-xl hover:bg-zinc-150 transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" /> {t.liveDemoBtn}
                      </button>
                    </Magnetic>
                  </div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[9px] text-zinc-400 font-extrabold uppercase tracking-widest bg-zinc-950/80 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full">
                    {project.niche}
                  </span>
                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-amber-400 font-bold font-mono bg-zinc-950/80 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    {project.rating.toFixed(1)}
                  </div>
                </div>

                {/* Metadata */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{project.desc}</p>
                    
                    {/* Technologies tags */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider block">{t.techStack}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tag: string) => (
                          <span key={tag} className="text-[9px] font-mono text-zinc-300 font-semibold border border-zinc-800 px-2 py-0.5 rounded bg-zinc-950/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Result */}
                    <div className="pt-2 border-t border-zinc-850/60 space-y-1">
                      <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider block">{t.resultLabel}</span>
                      <p className="text-zinc-300 text-xs leading-relaxed">{project.results}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-850/60 text-xs">
                    <span className="text-zinc-550 font-medium">
                      {lang === "sv" ? "Skräddarsydd kodlösning" : "Custom coded solution"}
                    </span>
                    <button
                      onClick={handleContactNav}
                      className="text-white font-bold hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer group"
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

      {/* Pricing Matrix Showcase */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.pricingTitle}</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.pricingDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.priceGrid.map((pkg: any, index: number) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between transition-all group animate-fade-in"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-zinc-400 text-xs mb-6 min-h-[40px] leading-relaxed">{pkg.desc}</p>
                  
                  <div className="flex items-baseline gap-1 mb-6 border-b border-zinc-850 pb-6">
                    <span className="text-3xl font-black text-white font-mono">{pkg.price}</span>
                    <span className="text-zinc-550 text-xs">/ {pkg.period}</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300 font-medium">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Magnetic className="w-full">
                  <button
                    onClick={handleContactNav}
                    className="w-full py-3 rounded-full text-center text-xs font-bold cursor-pointer transition-all bg-zinc-950/60 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
                  >
                    {t.contactBtn}
                  </button>
                </Magnetic>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simulated Live Demo Modal Overlay */}
      <AnimatePresence>
        {demoCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex flex-col p-4 md:p-8 overflow-y-auto"
          >
            {/* Header Control Panel */}
            <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-t-2xl px-6 py-4 w-full max-w-[1200px] mx-auto">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white">{demoCase.name}</span>
                <span className="text-xs text-zinc-550 font-mono hidden md:inline">21vision.se/cases/{demoCase.id}</span>
              </div>
              
              {/* Device Selector */}
              <div className="hidden sm:flex items-center gap-1.5 bg-zinc-950 p-1 id-devices rounded-lg border border-zinc-850">
                <button
                  onClick={() => setPreviewDevice("desktop")}
                  className={`p-1.5 rounded transition-all cursor-pointer ${previewDevice === "desktop" ? "bg-zinc-800 text-white" : "text-zinc-500"}`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
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
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-bold hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    {t.demoBookBtn}
                  </button>
                </Magnetic>
                <button
                  onClick={() => setDemoCase(null)}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Simulated Live Browser/Phone View */}
            <div className="flex-1 w-full max-w-[1200px] mx-auto bg-zinc-950 border-x border-b border-zinc-800 rounded-b-2xl overflow-y-auto flex items-start justify-center p-4 md:p-8">
              <motion.div
                layout
                className={`bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden transition-all shadow-2xl relative ${
                  previewDevice === "desktop" ? "w-full min-h-[500px]" : "w-[375px] min-h-[550px]"
                }`}
              >
                {/* CASE 1: SAAS PROJECT PLANNER */}
                {demoCase.id === "saas" && (
                  <div className="p-6 md:p-10 space-y-6 font-sans">
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                      <div className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-400" />
                        <span className="font-extrabold text-sm tracking-wider text-white">PLANNER PRO</span>
                      </div>
                      <span className="text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded">Realtid via WebSockets</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["todo", "progress", "done"].map(column => (
                        <div key={column} className="bg-zinc-950/60 border border-zinc-850 rounded-xl p-4 space-y-3">
                          <span className="text-[10px] uppercase font-bold text-zinc-550 tracking-wider block">
                            {column === "todo" ? "Att göra" : column === "progress" ? "Pågår" : "Klar"}
                          </span>
                          <div className="space-y-2">
                            {saasTasks.filter(t => t.col === column).map(task => (
                              <div 
                                key={task.id} 
                                onClick={() => handleMoveTask(task.id)}
                                className="p-3 bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 rounded-lg cursor-pointer transition-all group/task flex items-center justify-between"
                                title="Klicka för att flytta fas"
                              >
                                <span className="text-xs font-semibold text-zinc-200">{task.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-zinc-550 group-hover/task:text-blue-400 transition-colors" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-4 rounded-xl bg-zinc-950/40 border border-zinc-850 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-zinc-400 font-semibold">{lang === "sv" ? "Avklarade uppgifter:" : "Completed Tasks:"}</span>
                        <span className="text-xs font-bold text-white font-mono">{saasTasks.filter(t => t.col === "done").length} av {saasTasks.length}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-medium italic">{lang === "sv" ? "*Klicka på ett kort för att simulera Kanban-flödet" : "*Click a card to simulate flow"}</span>
                    </div>
                  </div>
                )}

                {/* CASE 2: PT COACHING APP */}
                {demoCase.id === "pt" && (
                  <div className="p-6 flex flex-col items-center justify-center font-sans max-w-[340px] mx-auto">
                    <div className="w-full bg-zinc-950/80 rounded-3xl p-5 border border-zinc-850 space-y-6">
                      <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                        <div className="flex items-center gap-2">
                          <Dumbbell className="w-4 h-4 text-emerald-400" />
                          <span className="text-xs font-bold text-white uppercase">CoachHub</span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>

                      <div className="p-4 bg-zinc-900/50 border border-zinc-850 rounded-2xl flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-zinc-550 block font-bold">Dagens framsteg</span>
                          <span className="text-sm font-bold text-white">{lang === "sv" ? "Benpass" : "Leg day"}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-black text-emerald-400 font-mono">{workoutProgress}%</span>
                          <span className="text-[9px] text-zinc-550 block font-bold">klart</span>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">{lang === "sv" ? "Träningslista" : "Workout plan"}</span>
                        {ptWorkout.map((exercise, index) => (
                          <div 
                            key={index}
                            onClick={() => handleToggleWorkout(index)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                              exercise.done 
                                ? "bg-emerald-500/5 border-emerald-500/20 text-zinc-400" 
                                : "bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors ${exercise.done ? "bg-emerald-500 border-emerald-400 text-black" : "border-zinc-750"}`}>
                                {exercise.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                              <span className="text-xs font-semibold">{exercise.name}</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-zinc-550 bg-zinc-950 px-2 py-0.5 rounded">{exercise.sets}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center text-[9px] text-zinc-550 italic">
                        {lang === "sv" ? "*Bocka för övningar för att se framsteg" : "*Check exercises to update progress"}
                      </div>
                    </div>
                  </div>
                )}

                {/* CASE 3: CAR CARE APP */}
                {demoCase.id === "car" && (
                  <div className="p-5 flex flex-col items-center justify-center font-sans max-w-[350px] mx-auto">
                    <div className="w-full bg-zinc-950/80 rounded-3xl p-5 border border-zinc-850 space-y-5">
                      <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
                        <div className="flex items-center gap-2">
                          <Car className="w-4.5 h-4.5 text-blue-400" />
                          <span className="text-xs font-bold text-white uppercase">CARCARE APP</span>
                        </div>
                        <span className="text-[8px] bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded">Allt-i-ett</span>
                      </div>

                      <div className="grid grid-cols-4 gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-850">
                        {[
                          { id: "wash", label: lang === "sv" ? "Tvätt" : "Wash" },
                          { id: "detail", label: lang === "sv" ? "Rekond" : "Detail" },
                          { id: "service", label: lang === "sv" ? "Serv." : "Serv." },
                          { id: "tires", label: lang === "sv" ? "Däck" : "Tire" }
                        ].map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => { setCarService(tab.id); setCarSelectedPkg(null); }}
                            className={`py-1.5 rounded-lg text-[9px] font-bold transition-all cursor-pointer ${carService === tab.id ? "bg-blue-500 text-white font-extrabold" : "text-zinc-550 hover:text-white"}`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2.5">
                        {carPackages[carService].map(pkg => (
                          <div 
                            key={pkg.id}
                            onClick={() => setCarSelectedPkg(pkg.id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col gap-1 ${
                              carSelectedPkg === pkg.id 
                                ? "bg-blue-500/5 border-blue-500/40" 
                                : "bg-zinc-900 border-zinc-800 hover:border-zinc-750"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-white">{pkg.name}</span>
                              <span className="text-xs font-mono font-bold text-blue-400">{pkg.price} kr</span>
                            </div>
                            <p className="text-[10px] text-zinc-400 leading-normal">{pkg.desc}</p>
                          </div>
                        ))}
                      </div>

                      {carSelectedPkg && (
                        <div className="space-y-2">
                          <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider block">{lang === "sv" ? "Välj Tid" : "Select Time"}</span>
                          <div className="grid grid-cols-3 gap-2">
                            {["09:00", "11:30", "14:00"].map(t => (
                              <button
                                key={t}
                                onClick={() => setCarTime(t)}
                                className={`py-2 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                                  carTime === t 
                                    ? "bg-blue-500 border-blue-400 text-white" 
                                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {carSelectedPkg && carTime && (
                        <div className="pt-2 border-t border-zinc-900">
                          {carBooked ? (
                            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>{lang === "sv" ? "Bokning bekräftad via Stripe!" : "Booking confirmed via Stripe!"}</span>
                            </div>
                          ) : (
                            <button
                              onClick={() => setCarBooked(true)}
                              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-xs font-extrabold shadow-lg transition-colors cursor-pointer"
                            >
                              {lang === "sv" ? "Boka & betala med Stripe" : "Book & pay with Stripe"}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* CASE 4: MOVING COMPANY / FLYTTFIRMA */}
                {demoCase.id === "moving" && (
                  <div className="p-6 md:p-10 space-y-6 font-sans">
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                      <div className="flex items-center gap-2">
                        <Truck className="w-5 h-5 text-emerald-400" />
                        <span className="font-extrabold text-sm tracking-wider text-white">EXPRESS FLYTT</span>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">{lang === "sv" ? "Direkt priskalkyl" : "Instant quote"}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-5 bg-zinc-950/40 p-5 rounded-2xl border border-zinc-850">
                        <h4 className="text-sm font-bold text-white">{lang === "sv" ? "Flyttkalkylator" : "Volume Estimator"}</h4>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-zinc-400">{lang === "sv" ? "Bostadsyta" : "Home size"}</span>
                            <span className="text-white font-mono">{movingKvm} kvm</span>
                          </div>
                          <input 
                            type="range" 
                            min="20" 
                            max="200" 
                            value={movingKvm} 
                            onChange={(e) => { setMovingKvm(Number(e.target.value)); setMovingSent(false); }}
                            className="w-full accent-emerald-400 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>

                        <div className="space-y-3 pt-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={movingPacking} 
                              onChange={() => { setMovingPacking(!movingPacking); setMovingSent(false); }}
                              className="w-4.5 h-4.5 rounded border-zinc-800 bg-zinc-900 accent-emerald-400 text-black cursor-pointer"
                            />
                            <span className="text-xs text-zinc-300 group-hover:text-white transition-colors">{lang === "sv" ? "Packhjälp (+1 500 kr)" : "Packing Service (+$150)"}</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={movingCleaning} 
                              onChange={() => { setMovingCleaning(!movingCleaning); setMovingSent(false); }}
                              className="w-4.5 h-4.5 rounded border-zinc-800 bg-zinc-900 accent-emerald-400 text-black cursor-pointer"
                            />
                            <span className="text-xs text-zinc-300 group-hover:text-white transition-colors">{lang === "sv" ? "Flyttstädning (+2 500 kr)" : "Move-out Cleaning (+$250)"}</span>
                          </label>
                        </div>
                      </div>

                      <div className="bg-zinc-950/60 p-6 rounded-2xl border border-zinc-850 flex flex-col justify-between h-full min-h-[220px]">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-zinc-550 tracking-wider block mb-2">{lang === "sv" ? "Estimerat Fast Pris" : "Estimated Fixed Price"}</span>
                          <span className="text-3xl font-black text-emerald-400 font-mono tracking-tight">{calcMovingPrice().toLocaleString()} kr</span>
                          <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">{lang === "sv" ? "Priset inkluderar basflytt och valt tillägg efter skattereduktion (RUT)." : "Price includes base moves and selected add-ons."}</p>
                        </div>

                        <div className="pt-4 border-t border-zinc-900 mt-6">
                          {movingSent ? (
                            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center rounded-xl text-xs font-semibold">
                              {lang === "sv" ? "Offertförfrågan skickad!" : "Quote request sent successfully!"}
                            </div>
                          ) : (
                            <div className="flex gap-2">
                              <input 
                                type="email" 
                                placeholder={lang === "sv" ? "Ange din e-post" : "Enter email"} 
                                className="flex-1 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                              />
                              <button 
                                onClick={() => setMovingSent(true)}
                                className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                              >
                                {lang === "sv" ? "Få offert" : "Get Quote"}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Simulated alert bar at bottom of live demo browser */}
                <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-[10px] font-semibold flex items-center justify-center gap-2 select-none px-4">
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
