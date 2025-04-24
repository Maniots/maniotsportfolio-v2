
import { Code, Gamepad, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-accent/20">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Gamepad className="h-6 w-6 text-accent" />
          <span className="font-bold text-white">GameDev Portfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#projects" className="text-white hover:text-accent transition-colors">Projects</a>
          <a href="#skills" className="text-white hover:text-accent transition-colors">Skills</a>
          <a href="#about" className="text-white hover:text-accent transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-accent transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
