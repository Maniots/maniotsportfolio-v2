
import Header from "@/components/Header";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
          About Me
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
              As an IT student with a passion for game development, I'm constantly exploring
              the intersection of technology and creative storytelling. My journey in
              computer science has equipped me with strong programming fundamentals,
              while my game development projects have helped me develop practical skills
              in Unity and C#.
            </p>
            <p className="text-lg text-muted hover:text-white transition-colors duration-300">
              Currently pursuing my degree in Computer Science, I focus on game
              development in my free time, creating small but engaging projects that
              showcase my growing expertise in game mechanics, UI design, and optimization.
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
            <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
            <ul className="space-y-2">
              {["Computer Science Student", "Game Development Enthusiast", "Unity & C# Developer", "Problem Solver", "Italian", "Team Player"].map((fact, index) => (
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
