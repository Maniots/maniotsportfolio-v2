import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Figma, FileCode, Github } from "lucide-react";
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
        { name: "Unity", icon: <Code className="w-6 h-6 text-accent" />, level: 90 },
        { name: "C#", icon: <FileCode className="w-6 h-6 text-accent" />, level: 85 },
        { name: "Game Design", icon: <Figma className="w-6 h-6 text-accent" />, level: 75 },
        { name: "Level Design", icon: <Code className="w-6 h-6 text-accent" />, level: 80 },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Java", icon: <Code className="w-6 h-6 text-accent" />, level: 85 },
        { name: "Python", icon: <Code className="w-6 h-6 text-accent" />, level: 80 },
        { name: "JavaScript", icon: <FileCode className="w-6 h-6 text-accent" />, level: 90 },
        { name: "TypeScript", icon: <FileCode className="w-6 h-6 text-accent" />, level: 85 },
      ],
    },
    {
      category: "Tools & Software",
      items: [
        { name: "Git", icon: <Github className="w-6 h-6 text-accent" />, level: 90 },
        { name: "Visual Studio", icon: <Code className="w-6 h-6 text-accent" />, level: 85 },
        { name: "Blender", icon: <Database className="w-6 h-6 text-accent" />, level: 70 },
        { name: "Adobe Creative Suite", icon: <Figma className="w-6 h-6 text-accent" />, level: 75 },
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
