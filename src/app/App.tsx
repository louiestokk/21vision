import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Cases } from "./components/Cases";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CaseDetails } from "./components/CaseDetails";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";
import { LanguageProvider } from "./LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Cases />
      <About />
      <Contact />
    </>
  );
}

function AppContent() {
  return (
    <div className="dark min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black cursor-none">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/case/:id" element={<CaseDetails />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
