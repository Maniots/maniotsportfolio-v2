
import { Code, Gamepad, LucideProps } from "lucide-react";
import { Button } from "./ui/button";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import { Github, FileCode, Database, Server } from "lucide-react";

const Hero = () => {
  const displayName = useTextAnimation(["Manuel Rizzo", "Maniots"], 3000);

  // Updated skills with correct icons from lucide-react
  const skills = [
    { icon: <FileCode className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "C#" },
    { icon: <Gamepad className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "Unity" },
    { icon: <Server className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "Docker" },
    { icon: <Code className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "Linux" },
    { icon: <Code className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "HTML" },
    { icon: <Code className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "CSS" },
    { icon: <Code className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "JavaScript" },
    { icon: <Github className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "Git" },
    { icon: <Database className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "PostgreSQL" },
    { icon: <Database className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "MongoDB" },
    { icon: <Code className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "Python" },
    { icon: <Server className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "Node.js" },
    { icon: <Github className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "GitHub" },
    { icon: <Server className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "AWS" },
    { icon: <Code className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: "MAUI" },
    { icon: <Code className="w-8 h-8 text-accent hover:scale-110 transition-transform" />, name: ".NET" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 py-16 flex flex-col items-center text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 transition-all duration-500">
            {displayName}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 my-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-1"
                style={{
                  animation: `fade-in 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                {skill.icon}
                <span className="text-xs text-muted">{skill.name}</span>
              </div>
            ))}
          </div>
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
