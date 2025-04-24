
import { Code, Gamepad, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-accent/20">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Gamepad className="h-6 w-6 text-accent" />
          <span className="font-bold text-white">GameDev Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/projects" className="text-white hover:text-accent transition-colors">Projects</Link>
          <Link to="/skills" className="text-white hover:text-accent transition-colors">Skills</Link>
          <Link to="/about" className="text-white hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-accent transition-colors">Contact</Link>
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
