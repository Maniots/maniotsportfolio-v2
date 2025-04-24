
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Figma, FileCode, Github } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Game Development",
      items: [
        { name: "Unity", icon: <Code className="w-6 h-6 text-accent" /> },
        { name: "C#", icon: <FileCode className="w-6 h-6 text-accent" /> },
        { name: "Game Design", icon: <Figma className="w-6 h-6 text-accent" /> },
        { name: "Level Design", icon: <Code className="w-6 h-6 text-accent" /> },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Java", icon: <Code className="w-6 h-6 text-accent" /> },
        { name: "Python", icon: <Code className="w-6 h-6 text-accent" /> },
        { name: "JavaScript", icon: <FileCode className="w-6 h-6 text-accent" /> },
        { name: "TypeScript", icon: <FileCode className="w-6 h-6 text-accent" /> },
      ],
    },
    {
      category: "Tools & Software",
      items: [
        { name: "Git", icon: <Github className="w-6 h-6 text-accent" /> },
        { name: "Visual Studio", icon: <Code className="w-6 h-6 text-accent" /> },
        { name: "Blender", icon: <Database className="w-6 h-6 text-accent" /> },
        { name: "Adobe Creative Suite", icon: <Figma className="w-6 h-6 text-accent" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 animate-fade-in">Skills</h1>
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          {skills.map((skillSet) => (
            <Card key={skillSet.category} className="bg-background border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-white">{skillSet.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skillSet.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
                    >
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
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
