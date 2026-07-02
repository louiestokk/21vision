import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Send, Sparkles, RefreshCw } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { Magnetic } from "./ui/Magnetic";
import { ConfettiButton } from "./ui/ConfettiButton";
import confetti from "canvas-confetti";

export function Contact() {
  const { lang } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const t = {
    sv: {
      badge: "Begränsad tillgänglighet för Q3",
      titleStart: "Sluta smälta in.",
      titleEnd: "Börja dominera.",
      desc: "Förlora inte en till kund till en långsam hemsida eller dålig användarupplevelse. Samarbeta med oss för att bygga en digital närvaro som omedelbart bygger förtroende och aggressivt konverterar besökare till lojala kunder.",
      benefits: [
        "Kostnadsfri, rak strategisk rådgivning",
        "Konkret tillväxtplan inom 48 timmar",
        "Transparent prissättning, inga dolda avgifter",
        "Prisbelönt design- och utvecklingsteam"
      ],
      leaders: "Gå med 150+ marknadsledare",
      formTitle: "Boka din strategisession",
      formDesc: "Fyll i formuläret nedan så hör vi av oss inom 2 timmar.",
      nameLabel: "Fullständigt namn",
      namePh: "Förnamn Efternamn",
      emailLabel: "Jobbmejl",
      emailPh: "namn@foretag.se",
      servicesLabel: "Vad letar du efter?",
      services: ["UI/UX Design", "Webbutveckling", "Mobilapp", "Varumärke", "Marknadsföring", "Annat"],
      budgetLabel: "Uppskattad budget",
      projectLabel: "Berätta om ert projekt",
      projectPh: "Vi behöver en massiv översyn av vår kärnprodukt...",
      submitBtn: "Begär konsultation",
      secureInfo: "Din data är säker. Vi delar aldrig din information med tredje part.",
      successTitle: "Förfrågan inskickad!",
      successDesc: "Tack för ditt förtroende. Vårt team granskar dina uppgifter och återkommer till dig på e-post inom 2 timmar med en konkret handlingsplan.",
      newSubmit: "Skicka en till förfrågan"
    },
    en: {
      badge: "Limited Availability for Q3",
      titleStart: "Stop blending in.",
      titleEnd: "Start dominating.",
      desc: "Don't lose another customer to a slow website or poor user experience. Partner with us to engineer a digital presence that instantly builds trust and aggressively converts visitors into loyal clients.",
      benefits: [
        "Free, no-BS strategic consultation",
        "Actionable growth roadmap within 48 hours",
        "Transparent pricing, zero hidden fees",
        "Award-winning design & development team"
      ],
      leaders: "Join 150+ market leaders",
      formTitle: "Claim Your Strategy Session",
      formDesc: "Fill out the form below and we'll be in touch within 2 hours.",
      nameLabel: "Full Name",
      namePh: "John Doe",
      emailLabel: "Work Email",
      emailPh: "john@company.com",
      servicesLabel: "What are you looking for?",
      services: ["UI/UX Design", "Web Development", "Mobile App", "Branding", "Marketing", "Other"],
      budgetLabel: "Estimated Budget",
      projectLabel: "Tell us about your project",
      projectPh: "We need a massive overhaul of our core web product...",
      submitBtn: "Request Consultation",
      secureInfo: "Your data is secure. We never share your information with third parties.",
      successTitle: "Consultation Requested!",
      successDesc: "Thank you for reaching out. Our strategists are analyzing your profile and will email you within 2 hours to set up your free growth audit.",
      newSubmit: "Send another request"
    }
  }[lang];

  const budgets = ["< $10k", "$10k - $25k", "$25k - $50k", "$50k+"];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    
    setIsSubmitted(true);
    confetti({
      particleCount: 160,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#6366f1", "#d946ef", "#ec4899", "#3b82f6", "#ffffff"]
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
    setSelectedServices([]);
    setBudget(null);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-indigo-600/10 blur-[150px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium mb-8 text-indigo-400 self-start">
            <Sparkles className="w-4 h-4" />
            {t.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            {t.titleStart} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              {t.titleEnd}
            </span>
          </h2>
          
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            {t.desc}
          </p>

          <div className="space-y-6 mb-12">
            {t.benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="text-zinc-300 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center`}>
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
              ))}
            </div>
            <p>{t.leaders}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 rounded-[2.5rem] blur-xl" />
          
          <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl min-h-[500px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{t.formTitle}</h3>
                  <p className="text-zinc-400 mb-8">{t.formDesc}</p>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300 ml-1">{t.nameLabel}</label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.namePh}
                          className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-650 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all cursor-text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300 ml-1">{t.emailLabel}</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.emailPh} 
                          className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-650 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all cursor-text"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-medium text-zinc-300 ml-1">{t.servicesLabel}</label>
                      <div className="flex flex-wrap gap-3">
                        {t.services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                              selectedServices.includes(service)
                                ? "bg-indigo-500 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                                : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-medium text-zinc-300 ml-1">{t.budgetLabel}</label>
                      <div className="flex flex-wrap gap-3">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                              budget === b
                                ? "bg-fuchsia-500 border-fuchsia-500 text-white shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                                : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300 ml-1">{t.projectLabel}</label>
                      <textarea 
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.projectPh} 
                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-650 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none cursor-text"
                      />
                    </div>

                    <div className="w-full">
                      <Magnetic strength={0.12} range={50}>
                        <ConfettiButton>
                          <button 
                            type="submit"
                            className="w-full relative group overflow-hidden rounded-xl p-[1px] cursor-pointer"
                          >
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative bg-black/70 backdrop-blur-sm rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 group-hover:bg-transparent">
                              <span className="text-white font-semibold text-lg">{t.submitBtn}</span>
                              <Send className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                          </button>
                        </ConfettiButton>
                      </Magnetic>
                    </div>
                    
                    <p className="text-center text-xs text-zinc-600 mt-4">
                      {t.secureInfo}
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center p-4 md:p-8"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{t.successTitle}</h3>
                  <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-10">
                    {t.successDesc}
                  </p>

                  <Magnetic>
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 px-6 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4" />
                      {t.newSubmit}
                    </button>
                  </Magnetic>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
