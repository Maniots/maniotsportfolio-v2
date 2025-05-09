
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create a language context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translations for both languages
export const translations = {
  en: {
    // Header
    'portfolio': 'Manuel Rizzo Portfolio',
    'projects': 'Projects',
    'skills': 'Skills',
    'about': 'About',
    'contact': 'Contact',
    
    // Hero
    'hi_im': 'Hi, I\'m',
    'it_student': 'IT Student &',
    'game_developer': 'Game Developer',
    'hero_description': 'Passionate about creating immersive gaming experiences through code. Currently studying Computer Science and developing indie games.',
    'view_projects': 'View Projects',
    'contact_me': 'Contact Me',
    
    // Projects
    'featured_projects': 'Featured Projects',
    'ongoing': 'Ongoing',
    'concluded': 'Concluded',
    'code': 'Code',
    'demo': 'Demo',
    
    // Skills
    'skills_title': 'Skills',
    'game_development': 'Game Development',
    'web_technologies': 'Web Technologies',
    'tools_technologies': 'Tools & Technologies',
    'databases': 'Databases',
    'programming_languages': 'Programming Languages & Frameworks',
    
    // About
    'about_me': 'About Me',
    'about_description_1': 'As an IT student with a passion for game development, I\'m constantly exploring the intersection of technology and creative storytelling. My journey in computer science has equipped me with strong programming fundamentals, while my game development projects have helped me develop practical skills in Unity and C#.',
    'about_description_2': 'I am a Computer Science student with a deep passion for game development. In my free time, I play video games, create small Unity and C# projects, and refine my expertise in game mechanics, UI design, and optimization. My long-term ambition is to build and lead my own video game development team, blending technical skills with creative storytelling to deliver immersive gaming experiences.',
    'quick_facts': 'Quick Facts',
    'fact_1': 'Computer Science Student',
    'fact_2': 'Game Development Enthusiast',
    'fact_3': 'Unity & C# Developer',
    'fact_4': 'Problem Solver',
    'fact_5': 'Italian',
    'fact_6': 'Team Player',
    
    // Contact
    'get_in_touch': 'Get in Touch',
    'name': 'Name',
    'name_placeholder': 'Your name',
    'email': 'Email',
    'email_placeholder': 'your.email@example.com',
    'message': 'Message',
    'message_placeholder': 'Your message here...',
    'sending': 'Sending...',
    'send_message': 'Send Message',
    'opening_email_client': 'Opening your email client',
    'thanks_for_reaching_out': 'Thanks for reaching out!'
  },
  it: {
    // Header
    'portfolio': 'Manuel Rizzo Portfolio',
    'projects': 'Progetti',
    'skills': 'Competenze',
    'about': 'Chi Sono',
    'contact': 'Contatti',
    
    // Hero
    'hi_im': 'Ciao, sono',
    'it_student': 'Studente IT &',
    'game_developer': 'Sviluppatore di Giochi',
    'hero_description': 'Appassionato di creare esperienze di gioco immersive attraverso il codice. Attualmente studio Informatica e sviluppo giochi indie.',
    'view_projects': 'Visualizza Progetti',
    'contact_me': 'Contattami',
    
    // Projects
    'featured_projects': 'Progetti in Evidenza',
    'ongoing': 'In Corso',
    'concluded': 'Concluso',
    'code': 'Codice',
    'demo': 'Demo',
    
    // Skills
    'skills_title': 'Competenze',
    'game_development': 'Sviluppo di Giochi',
    'web_technologies': 'Tecnologie Web',
    'tools_technologies': 'Strumenti & Tecnologie',
    'databases': 'Database',
    'programming_languages': 'Linguaggi & Framework',
    
    // About
    'about_me': 'Chi Sono',
    'about_description_1': 'Come studente di Informatica con una passione per lo sviluppo di giochi, esploro costantemente l\'intersezione tra tecnologia e narrazione creativa. Il mio percorso in informatica mi ha dotato di solide basi di programmazione, mentre i miei progetti di sviluppo di giochi mi hanno aiutato a sviluppare competenze pratiche in Unity e C#.',
    'about_description_2': 'Sono uno studente di Informatica con una forte passione per lo sviluppo di videogiochi. Nel tempo libero, approfondisco continuamente le mie competenze giocando ai videogiochi, realizzando piccoli progetti in Unity e C# e perfezionando il mio approccio al game design, all’interfaccia utente e all’ottimizzazione. Il mio obiettivo a lungo termine è fondare un team di sviluppo videoludico in cui unire competenze tecniche e creatività per realizzare esperienze di gioco coinvolgenti.',
    'quick_facts': 'Fatti Rapidi',
    'fact_1': 'Studente di Informatica',
    'fact_2': 'Appassionato di Sviluppo Giochi',
    'fact_3': 'Sviluppatore Unity & C#',
    'fact_4': 'Problem Solver',
    'fact_5': 'Italiano',
    'fact_6': 'Lavoro di Squadra',
    
    // Contact
    'get_in_touch': 'Contattami',
    'name': 'Nome',
    'name_placeholder': 'Il tuo nome',
    'email': 'Email',
    'email_placeholder': 'tua.email@esempio.com',
    'message': 'Messaggio',
    'message_placeholder': 'Il tuo messaggio qui...',
    'sending': 'Invio in corso...',
    'send_message': 'Invia Messaggio',
    'opening_email_client': 'Apertura del client email',
    'thanks_for_reaching_out': 'Grazie per avermi contattato!'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use localStorage if available to persist the language preference
  const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') as Language : null;
  const [language, setLanguageState] = useState<Language>(storedLanguage || 'en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Update language and store in localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  // Effect to set the html lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
