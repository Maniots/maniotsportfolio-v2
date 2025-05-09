
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const facts = [
    t('fact_1'),
    t('fact_2'),
    t('fact_3'),
    t('fact_4'),
    t('fact_5'),
    t('fact_6')
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <h1 
          className="text-4xl font-bold mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out',
          }}
        >
          {t('about_me')}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.5s ease-out 0.2s',
            }}
          >
            <p className="text-lg text-muted hover:text-white transition-colors duration-300">
              {t('about_description_1')}
            </p>
            <p className="text-lg text-muted hover:text-white transition-colors duration-300">
              {t('about_description_2')}
            </p>
          </div>
          <div 
            className="bg-accent/10 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-accent/20"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.5s ease-out 0.3s',
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">{t('quick_facts')}</h2>
            <ul className="space-y-2">
              {facts.map((fact, index) => (
                <li 
                  key={fact}
                  className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `all 0.5s ease-out ${0.4 + index * 0.1}s`,
                  }}
                >
                  <span className="text-accent">•</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
