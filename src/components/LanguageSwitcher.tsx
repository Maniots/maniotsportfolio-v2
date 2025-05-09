
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      title={language === 'en' ? 'Switch to Italian' : 'Passa all\'Inglese'}
      className="relative group"
    >
      <Languages className="h-5 w-5" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs bg-background/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {language === 'en' ? 'IT' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
