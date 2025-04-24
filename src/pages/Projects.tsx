
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "2D Platformer Game",
      description: "A retro-style platformer built with Unity and C#",
      image: "/placeholder.svg",
      tags: ["Unity", "C#", "2D Graphics"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
    },
    {
      title: "Game Physics Engine",
      description: "Custom physics engine implemented in C++",
      image: "/placeholder.svg",
      tags: ["C++", "OpenGL", "Mathematics"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
    },
    {
      title: "RPG Inventory System",
      description: "Modular inventory system for RPG games",
      image: "/placeholder.svg",
      tags: ["Unity", "C#", "UI Design"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 animate-fade-in">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {projects.map((project) => (
            <Card key={project.title} className="bg-background border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
