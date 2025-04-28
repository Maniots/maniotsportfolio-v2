
import { Gamepad, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-accent/20">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Gamepad className="h-6 w-6 text-accent" />
          <span className="font-bold text-white">
            Manuel Rizzo Portfolio
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { to: "/projects", label: "Projects" },
            { to: "/skills", label: "Skills" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" }
          ].map(({ to, label }) => (
            <Link 
              key={to} 
              to={to} 
              className="text-white relative group"
            >
              <span className="relative">
                {label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Navigation */}
          <MobileNav />
          
          {/* Social Links with updated URLs */}
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Maniots" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/manuel-rizzo/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
