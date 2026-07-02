import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Zap, Sparkles, ShoppingBag, Palette, TrendingUp, Check } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import confetti from "canvas-confetti";

interface CaseData {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  stats: { value: string; label: string }[];
}

export function CaseDetails() {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  // Scroll to top when case changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const caseData: Record<string, { sv: CaseData; en: CaseData }> = {
    "fintech-revolution": {
      sv: {
        title: "Fintech Revolution",
        subtitle: "En mobilbank för nästa generation",
        category: "Webb- & Appdesign",
        image: "https://images.unsplash.com/photo-1695048064952-44b984f2af6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
        challenge: "Traditionella bankappar är ofta röriga, långsamma och misslyckas med att engagera den yngre generationen. Vår klient behövde en plattform som kändes moden, intuitiv och snabb, samtidigt som den upprätthåller högsta säkerhetsstandard.",
        solution: "Vi byggde en högteknologisk applikation med fokus på snabbhet och visualisering. Genom interaktiva grafer, smarta budgeteringsverktyg och en känsla av 'micro-rewards' vid sparande förvandlade vi en tråkig syssla till något engagerande.",
        results: [
          "250% ökning av dagliga aktiva användare",
          "Genomsnittlig transaktionshastighet under 80ms",
          "4.8/5 betyg på App Store baserat på 20,000+ recensioner",
          "Över 10 miljarder SEK säkert överförda på plattformen"
        ],
        stats: [
          { value: "250%", label: "Användartillväxt" },
          { value: "4.8", label: "App Store Betyg" },
          { value: "< 80ms", label: "Latens" },
          { value: "10B+", label: "Transaktionsvolym" }
        ]
      },
      en: {
        title: "Fintech Revolution",
        subtitle: "A next-generation mobile banking experience",
        category: "Web & App Design",
        image: "https://images.unsplash.com/photo-1695048064952-44b984f2af6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
        challenge: "Traditional banking applications are often cluttered, slow, and fail to engage younger demographics. Our client needed a platform that felt modern, intuitive, and fast, all while maintaining the highest standard of security.",
        solution: "We designed a high-tech application focused on speed and visualization. Through interactive charts, smart budgeting utilities, and custom 'micro-rewards' for saving goals, we transformed finance into an engaging experience.",
        results: [
          "250% increase in daily active users",
          "Average transaction time below 80ms",
          "4.8/5 rating on App Store based on 20,000+ reviews",
          "Over $1B+ USD safely processed on the platform"
        ],
        stats: [
          { value: "250%", label: "User Growth" },
          { value: "4.8", label: "App Store Rating" },
          { value: "< 80ms", label: "Latency" },
          { value: "$1B+", label: "Transaction Volume" }
        ]
      }
    },
    "minimalist-e-commerce": {
      sv: {
        title: "Minimalist E-Commerce",
        subtitle: "Ett digitalt hem för premiummode",
        category: "Webbdesign",
        image: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
        challenge: "Klienten, ett ledande svenskt klädmärke, led av höga avbrutna köp och en hemsida som inte speglade deras minimalistiska designfilosofi. Sidan laddade långsamt och kändes opersonlig.",
        solution: "Vi rensade bort allt brus och skapade en extremt snabb e-handel med fokus på stora, vackra produktbilder och en sömlös en-klicks-kassa. Genom dynamiska sidövergångar och en interaktiv lookbook skapade vi en butikskänsla online.",
        results: [
          "45% minskning av avbrutna köp i kassan",
          "85% förbättring i Core Web Vitals och sidhastighet",
          "60% ökning av det genomsnittliga ordervärdet",
          "Sömlös integration med moderna betalningsmetoder"
        ],
        stats: [
          { value: "-45%", label: "Avbrutna Köp" },
          { value: "+85%", label: "Laddtid" },
          { value: "+60%", label: "Ordervärde" },
          { value: "3.2x", label: "ROI första året" }
        ]
      },
      en: {
        title: "Minimalist E-Commerce",
        subtitle: "A digital home for premium fashion",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
        challenge: "The client, a premium apparel label, suffered from high checkout abandonment rates and a website that did not reflect their minimalist design values. The page loaded slowly and felt transactional.",
        solution: "We stripped away the noise and engineered an ultra-fast shopping experience focusing on high-quality visuals and a single-click checkout. Dynamic page transitions and an interactive lookbook created a boutique feel online.",
        results: [
          "45% reduction in checkout abandonment rate",
          "85% improvement in Core Web Vitals and load speeds",
          "60% increase in average order value (AOV)",
          "Seamless integration with modern payment protocols"
        ],
        stats: [
          { value: "-45%", label: "Abandonment Rate" },
          { value: "+85%", label: "Speed Index" },
          { value: "+60%", label: "Average Order Value" },
          { value: "3.2x", label: "ROI First Year" }
        ]
      }
    },
    "aura-identity": {
      sv: {
        title: "Aura Identity",
        subtitle: "Varumärkesidentitet för ekologisk skönhet",
        category: "Varumärkesbyggande",
        image: "https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
        challenge: "I en mättad industri för naturlig hudvård behövde Aura sticka ut och etablera sig som ett exklusivt, pålitligt och miljömedvetet alternativ. Deras befintliga identitet kändes generisk.",
        solution: "Vi tog fram en komplett visuel och konceptuell varumärkesidentitet. Vi kombinerade jordnära, mjuka färgpaletter med en lyxig och ren typografi. Vi designade förpackningar, logotyp och en digital designmanual.",
        results: [
          "Framgångsrik såddfinansiering på 50 miljoner SEK",
          "Omtalad i Vogue, GQ och Harper's Bazaar vid lansering",
          "100k+ följare på Instagram organiskt på 3 månader",
          "Vinnare av 'Best Brand Identity' i Nordic Design Awards"
        ],
        stats: [
          { value: "50M", label: "Såddfinansiering" },
          { value: "100k", label: "Följare på 3m" },
          { value: "Gold", label: "Design Award" },
          { value: "100%", label: "Ekologiskt fokus" }
        ]
      },
      en: {
        title: "Aura Identity",
        subtitle: "Brand identity for organic beauty",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
        challenge: "In a crowded market of natural cosmetics, Aura needed to stand out and establish themselves as a premium, organic, and trustworthy option. Their initial identity felt generic.",
        solution: "We curated a complete visual and conceptual brand system. Combining earthy tones with high-end, clean typography, we engineered everything from their logo and packaging to digital brand guidelines.",
        results: [
          "Successful seed funding round of $5M USD",
          "Featured in Vogue, GQ, and Harper's Bazaar upon release",
          "100k+ organic Instagram followers in the first 3 months",
          "Won 'Best Brand Identity' at the Nordic Design Awards"
        ],
        stats: [
          { value: "$5M", label: "Seed Funding" },
          { value: "100k", label: "Followers in 3m" },
          { value: "Gold", label: "Design Award" },
          { value: "100%", label: "Organic Focus" }
        ]
      }
    }
  };

  const currentCase = id ? caseData[id] : null;
  if (!currentCase) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Case not found / Case hittades inte</h1>
        <Link to="/" className="text-indigo-400 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Tillbaka till startsidan / Back to Home
        </Link>
      </div>
    );
  }

  const data = currentCase[lang];

  // Swedish & English labels for local subcomponents
  const localT = {
    sv: {
      challenge: "Utmaningen",
      solution: "Lösningen",
      results: "Mätbara resultat",
      back: "Tillbaka",
      exploreInteractive: "Interaktiv demonstration",
      ctaTitle: "Vill du nå liknande resultat?",
      ctaDesc: "Låt oss diskutera ditt nästa projekt. Boka en kostnadsfri strategisession idag.",
      ctaBtn: "Boka session nu",
      chartTitle: "Genomsnittlig transaktionshastighet (ms) vs. branschstandard",
      chartX: "Månad",
      chartY: "Latens (ms)",
      industryStd: "Branschstandard",
      ourSpeed: "Vår prestanda",
      lookbookTitle: "Interaktiv Lookbook (Klicka för att se produkt)",
      addToCart: "Lägg i varukorg",
      added: "Tillagd!",
      paletteTitle: "Interaktiv Brand Palette (Klicka för att kopiera färgkod)",
      copied: "Kopierad till urklipp!"
    },
    en: {
      challenge: "The Challenge",
      solution: "The Solution",
      results: "Measurable Results",
      back: "Back",
      exploreInteractive: "Interactive Demo",
      ctaTitle: "Ready to achieve similar results?",
      ctaDesc: "Let's discuss your next project. Book your free strategy session today.",
      ctaBtn: "Book Strategy Session",
      chartTitle: "Average Transaction Speed (ms) vs. Industry Standard",
      chartX: "Month",
      chartY: "Latency (ms)",
      industryStd: "Industry Standard",
      ourSpeed: "Our Performance",
      lookbookTitle: "Interactive Lookbook (Click to view product)",
      addToCart: "Add to Bag",
      added: "Added!",
      paletteTitle: "Interactive Brand Palette (Click to copy hex code)",
      copied: "Copied to clipboard!"
    }
  }[lang];

  // Fintech Chart Data
  const chartData = [
    { name: "Jan", standard: 350, ours: 95 },
    { name: "Feb", standard: 340, ours: 90 },
    { name: "Mar", standard: 320, ours: 85 },
    { name: "Apr", standard: 330, ours: 82 },
    { name: "May", standard: 310, ours: 78 },
    { name: "Jun", standard: 300, ours: 75 }
  ];

  // E-commerce products
  const products = [
    {
      name: lang === "sv" ? "Minimalistisk Rock" : "Minimalist Overcoat",
      price: "$299",
      img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      name: lang === "sv" ? "Ulltröja Alabaster" : "Alabaster Wool Knit",
      price: "$149",
      img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      name: lang === "sv" ? "Skräddarsydda Byxor" : "Tailored Trousers",
      price: "$189",
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  ];

  // Aura colors
  const brandColors = [
    { name: "Sage Green", hex: "#8A9A86", desc: lang === "sv" ? "Jordnära renhet" : "Earthy purity" },
    { name: "Pure Alabaster", hex: "#F3F1EC", desc: lang === "sv" ? "Renhet & ljus" : "Clarity & light" },
    { name: "Terracotta Earth", hex: "#C28C73", desc: lang === "sv" ? "Naturlig värme" : "Natural warmth" },
    { name: "Ocean Depth", hex: "#2E3E3D", desc: lang === "sv" ? "Djup & stabilitet" : "Depth & stability" }
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleCTAClick = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pb-24">
      {/* Immersive Header Banner */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 1.2 }}
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-6 md:left-12 z-30">
          <Link
            to="/"
            className="group flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-zinc-300 hover:text-white px-5 py-3 rounded-full text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {localT.back}
          </Link>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 md:px-12 pb-12 md:pb-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-6"
          >
            {data.category}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-zinc-300 max-w-2xl font-light font-serif italic"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-8 rounded-[2.5rem]">
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center p-4 border-r last:border-r-0 border-zinc-800/60 col-span-1"
            >
              <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-indigo-400" />
              {localT.challenge}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">{data.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-fuchsia-400" />
              {localT.solution}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">{data.solution}</p>
          </div>
        </motion.div>

        {/* Results Checkmarks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/20 border border-zinc-800/80 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            {localT.results}
          </h2>
          <div className="space-y-6">
            {data.results.map((result, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-zinc-300 font-medium text-lg leading-snug">{result}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Demonstration Panel */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {localT.exploreInteractive}
        </h2>

        {/* Fintech Interactive Demo: Recharts performance graph */}
        {id === "fintech-revolution" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 border border-zinc-800/85 p-6 md:p-10 rounded-[2.5rem]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                  {localT.chartTitle}
                </h3>
              </div>
              <div className="flex gap-4 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-600" />
                  <span className="text-zinc-400">{localT.industryStd}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                  <span className="text-white">{localT.ourSpeed}</span>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorOurs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "1rem" }}
                    labelStyle={{ color: "#a1a1aa", fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="standard"
                    stroke="#52525b"
                    strokeWidth={2}
                    fill="transparent"
                    strokeDasharray="4 4"
                    name={localT.industryStd}
                  />
                  <Area
                    type="monotone"
                    dataKey="ours"
                    stroke="#6366f1"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorOurs)"
                    name={localT.ourSpeed}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}

        {/* E-Commerce Interactive Demo: Product Lookbook */}
        {id === "minimalist-e-commerce" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 border border-zinc-800/85 p-8 rounded-[2.5rem] max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5 text-fuchsia-400" />
              {localT.lookbookTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Product Image View */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedProduct}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={products[selectedProduct].img}
                    alt={products[selectedProduct].name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Product Details & Selectors */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <span className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                    Autumn / Winter Collection
                  </span>
                  <h4 className="text-2xl font-bold text-white">
                    {products[selectedProduct].name}
                  </h4>
                  <div className="text-xl font-medium text-zinc-300">
                    {products[selectedProduct].price}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {products.map((prod, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedProduct(idx)}
                      className={`w-full text-left px-5 py-4 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                        selectedProduct === idx
                          ? "bg-zinc-800 border-zinc-600 text-white shadow-lg"
                          : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      <span className="font-medium text-sm">{prod.name}</span>
                      <span className="text-xs text-zinc-500">{prod.price}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full relative group overflow-hidden rounded-xl p-[1px] mt-4"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-zinc-950/90 rounded-xl py-4 text-center font-bold text-white group-hover:bg-transparent transition-colors">
                    {addedToCart ? localT.added : localT.addToCart}
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Aura Identity Interactive Demo: Palette copy */}
        {id === "aura-identity" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 border border-zinc-800/85 p-8 rounded-[2.5rem] max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <Palette className="w-5 h-5 text-amber-400" />
              {localT.paletteTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandColors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCopyColor(color.hex)}
                  className="group flex flex-col items-stretch text-left bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Swatch */}
                  <div
                    className="h-32 w-full transition-transform duration-300 group-hover:scale-102"
                    style={{ backgroundColor: color.hex }}
                  />
                  {/* Color Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{color.name}</h4>
                      <p className="text-xs text-zinc-500 mb-4">{color.desc}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-zinc-900 pt-3">
                      <span>{color.hex}</span>
                      <span className="text-indigo-400 font-sans group-hover:underline flex items-center gap-1">
                        {copiedColor === color.hex ? (
                          <span className="text-green-400 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          "Copy"
                        )}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence>
              {copiedColor && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full text-sm font-medium text-white shadow-2xl z-50 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {localT.copied} ({copiedColor})
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Call to Action Footer */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 rounded-[3rem] blur-2xl -z-10" />

        <div className="border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-12 md:p-20 rounded-[3rem]">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {localT.ctaTitle}
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {localT.ctaDesc}
          </p>

          <button
            onClick={handleCTAClick}
            className="relative group overflow-hidden rounded-full p-[1px] inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-zinc-950 px-10 py-5 rounded-full text-base font-bold text-white flex items-center gap-3 transition-colors group-hover:bg-transparent">
              {localT.ctaBtn}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
