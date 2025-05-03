
import { useTextAnimation } from "@/hooks/useTextAnimation";
import { Button } from "./ui/button";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { displayText, isAnimating, direction } = useTextAnimation(["Manuel Rizzo", "Maniots"], 3000);
  const [animationClass, setAnimationClass] = useState("opacity-100");
  const [containerWidth, setContainerWidth] = useState("auto");
  const nameRef = useRef<HTMLSpanElement>(null);
  
  // Calculate max width needed for names on initial render
  useEffect(() => {
    const names = ["Manuel Rizzo", "Maniots"];
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.fontSize = window.innerWidth >= 768 ? '4.5rem' : '3rem'; // Matching the text-5xl/text-7xl sizes
    tempSpan.style.fontWeight = 'bold';
    document.body.appendChild(tempSpan);
    
    // Find the longest width
    let maxWidth = 0;
    names.forEach(name => {
      tempSpan.innerText = name;
      const width = tempSpan.getBoundingClientRect().width;
      if (width > maxWidth) maxWidth = width;
    });
    
    document.body.removeChild(tempSpan);
    setContainerWidth(`${maxWidth + 10}px`); // Add a small buffer
  }, []);
  
  useEffect(() => {
    if (isAnimating) {
      // Start with slide out animation
      setAnimationClass("translate-x-[-100%] opacity-0");
      
      // After slide out completes, reset position and start slide in
      const timeout = setTimeout(() => {
        setAnimationClass("translate-x-0 opacity-100");
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [displayText, isAnimating]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 py-16 flex flex-col items-center text-center animate-fade-in">
        <div className="mb-8 w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 flex flex-wrap justify-center">
            <span className="mr-2">Hi, I'm</span>
            <span 
              ref={nameRef}
              className="inline-block overflow-hidden"
              style={{ width: containerWidth }}
            >
              <span 
                className={`inline-block transition-all duration-300 ease-out ${animationClass}`}
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
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
