
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, FileCode, Gamepad, Github, Server } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      category: "Game Development",
      items: [
        { icon: <FileCode className="w-6 h-6 text-accent" />, name: "C#", level: 90 },
        { icon: <Gamepad className="w-6 h-6 text-accent" />, name: "Unity", level: 85 },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { icon: <Code className="w-6 h-6 text-accent" />, name: "HTML", level: 85 },
        { icon: <Code className="w-6 h-6 text-accent" />, name: "CSS", level: 80 },
        { icon: <Code className="w-6 h-6 text-accent" />, name: "JavaScript", level: 85 },
        { icon: <Server className="w-6 h-6 text-accent" />, name: "Node.js", level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { icon: <Github className="w-6 h-6 text-accent" />, name: "Git", level: 85 },
        { icon: <Github className="w-6 h-6 text-accent" />, name: "GitHub", level: 85 },
        { icon: <Server className="w-6 h-6 text-accent" />, name: "Docker", level: 75 },
        { icon: <Code className="w-6 h-6 text-accent" />, name: "Linux", level: 80 },
        { icon: <Server className="w-6 h-6 text-accent" />, name: "AWS", level: 70 },
      ],
    },
    {
      category: "Databases",
      items: [
        { icon: <Database className="w-6 h-6 text-accent" />, name: "PostgreSQL", level: 80 },
        { icon: <Database className="w-6 h-6 text-accent" />, name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Programming Languages & Frameworks",
      items: [
        { icon: <Code className="w-6 h-6 text-accent" />, name: "Python", level: 80 },
        { icon: <Code className="w-6 h-6 text-accent" />, name: "MAUI", level: 75 },
        { icon: <Code className="w-6 h-6 text-accent" />, name: ".NET", level: 85 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 animate-fade-in">Skills</h1>
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          {skills.map((skillSet, index) => (
            <Card 
              key={skillSet.category} 
              className="bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 0.2}s`,
              }}
            >
              <CardHeader>
                <CardTitle className="text-white">{skillSet.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-all duration-300"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `all 0.5s ease-out ${(index * 0.2 + skillIndex * 0.1)}s`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {skill.icon}
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-accent ml-auto">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-2 transition-all duration-1000"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;
