
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = `RizzoPortfolio | ${t('home')}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
