
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import * as SimpleIcons from 'simple-icons';
import { LucideCode, Code2, Database, ServerCrash, Globe, Cpu } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Improved function to render icons from Simple Icons with fallback
  const renderIcon = (iconName: string, displayName: string) => {
    // Try to get the icon from Simple Icons
    const formattedIconName = `si${iconName}`;
    const icon = (SimpleIcons as any)[formattedIconName];
    
    if (icon) {
      return (
        <div 
          className="w-6 h-6 text-accent" 
          dangerouslySetInnerHTML={{ 
            __html: icon.svg.replace(/^<svg /, '<svg fill="currentColor" ') 
          }}
        />
      );
    }
    
    // Fallback to Lucide icons based on category
    const getFallbackIcon = () => {
      switch (true) {
        case /Game|Unity|C#|Sharp/.test(displayName):
          return <Code2 className="w-6 h-6 text-accent" />;
        case /HTML|CSS|JavaScript|Web|Node/.test(displayName):
          return <Globe className="w-6 h-6 text-accent" />;
        case /SQL|Mongo|Postgres|Database/.test(displayName):
          return <Database className="w-6 h-6 text-accent" />;
        case /Docker|AWS|Linux|Git/.test(displayName):
          return <ServerCrash className="w-6 h-6 text-accent" />;
        case /Python|NET|MAUI|Language/.test(displayName):
          return <LucideCode className="w-6 h-6 text-accent" />;
        default:
          return <Cpu className="w-6 h-6 text-accent" />;
      }
    };
    
    return getFallbackIcon();
  };

  const skills = [
    {
      category: "Game Development",
      items: [
        { icon: "CSharp", name: "C#", level: 80 },
        { icon: "Unity", name: "Unity", level: 65 },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { icon: "Html5", name: "HTML", level: 95 },
        { icon: "Css3", name: "CSS", level: 80 },
        { icon: "Javascript", name: "JavaScript", level: 85 },
        { icon: "Nodedotjs", name: "Node.js", level: 75 },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { icon: "Git", name: "Git", level: 85 },
        { icon: "Github", name: "GitHub", level: 85 },
        { icon: "Docker", name: "Docker", level: 80 },
        { icon: "Linux", name: "Linux", level: 65 },
        { icon: "Amazonaws", name: "AWS", level: 45 },
      ],
    },
    {
      category: "Databases",
      items: [
        { icon: "Postgresql", name: "PostgreSQL", level: 80 },
        { icon: "Mongodb", name: "MongoDB", level: 25 },
        { icon: "Mysql", name: "MySQL", level: 75 },
      ],
    },
    {
      category: "Programming Languages & Frameworks",
      items: [
        { icon: "Python", name: "Python", level: 15 },
        { icon: "Dotnet", name: "MAUI", level: 60 },
        { icon: "Dotnet", name: "NET", level: 50 },
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
                        {renderIcon(skill.icon, skill.name)}
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
