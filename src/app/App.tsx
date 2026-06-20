import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Cases } from "./components/Cases";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { LanguageProvider, useLanguage } from "./LanguageContext";

function AppContent() {
  const { lang } = useLanguage();
  
  const footerText = {
    sv: `© ${new Date().getFullYear()} Agency. Alla rättigheter förbehållna.`,
    en: `© ${new Date().getFullYear()} Agency. All rights reserved.`
  }[lang];

  return (
    <div className="dark min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <About />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-zinc-900 mt-24 text-center">
        <p className="text-zinc-500">{footerText}</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
