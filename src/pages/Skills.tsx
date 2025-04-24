
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      category: "Game Development",
      items: ["Unity", "C#", "Game Design", "Level Design"],
    },
    {
      category: "Programming",
      items: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Tools & Software",
      items: ["Git", "Visual Studio", "Blender", "Adobe Creative Suite"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 animate-fade-in">Skills</h1>
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          {skills.map((skillSet) => (
            <Card key={skillSet.category} className="bg-background border-accent/20">
              <CardHeader>
                <CardTitle className="text-white">{skillSet.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skillSet.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="text-accent">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;
