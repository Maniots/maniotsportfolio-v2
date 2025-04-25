
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "2D Platformer Game",
      description: "A retro-style platformer built with Unity and C#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Unity", "C#", "2D Graphics"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
    },
    {
      title: "Game Physics Engine",
      description: "Custom physics engine implemented in C++",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["C++", "OpenGL", "Mathematics"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
    },
    {
      title: "RPG Inventory System",
      description: "Modular inventory system for RPG games",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Unity", "C#", "UI Design"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <h1 
          className="text-4xl font-bold mb-12 animate-fade-in"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out',
          }}
        >
          Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 0.2}s`,
              }}
            >
              <CardHeader>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 transition-all duration-300 hover:scale-105 hover:bg-accent/10" 
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 transition-all duration-300 hover:scale-105 hover:bg-accent/10" 
                    asChild
                  >
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

