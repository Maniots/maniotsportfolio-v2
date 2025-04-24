
import { Code, Gamepad } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      title: "2D Platformer Game",
      description: "A retro-style platformer built with Unity and C#",
      icon: <Gamepad className="h-6 w-6 text-accent" />,
      tags: ["Unity", "C#", "2D Graphics"],
    },
    {
      title: "Game Physics Engine",
      description: "Custom physics engine implemented in C++",
      icon: <Code className="h-6 w-6 text-accent" />,
      tags: ["C++", "OpenGL", "Mathematics"],
    },
    {
      title: "RPG Inventory System",
      description: "Modular inventory system for RPG games",
      icon: <Gamepad className="h-6 w-6 text-accent" />,
      tags: ["Unity", "C#", "UI Design"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-background border border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {project.icon}
                </div>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
