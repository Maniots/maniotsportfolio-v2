
import { useTextAnimation } from "@/hooks/useTextAnimation";
import { Button } from "./ui/button";

const Hero = () => {
  const { displayText, isTransitioning } = useTextAnimation(["Manuel Rizzo", "Maniots"], 5000);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 py-16 flex flex-col items-center text-center animate-fade-in">
        <div className="mb-8 w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            Hi, I'm{" "}
            <span className="relative inline-block w-full md:w-auto overflow-hidden" style={{ minWidth: '250px', maxWidth: '100%', display: 'inline-block', verticalAlign: 'bottom' }}>
              <span
                className={`absolute left-0 transition-all duration-1000 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}
              >
                {displayText}
              </span>
            </span>
          </h1>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          IT Student & <span className="text-accent">Game Developer</span>
        </h2>
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
