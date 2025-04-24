
import { Code, Gamepad } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 py-16 flex flex-col items-center text-center animate-fade-in">
        <div className="flex items-center gap-2 mb-6">
          <Code className="h-8 w-8 text-accent" />
          <Gamepad className="h-8 w-8 text-accent" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          IT Student & <span className="text-accent">Game Developer</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-8">
          Passionate about creating immersive gaming experiences through code.
          Currently studying Computer Science and developing indie games.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
