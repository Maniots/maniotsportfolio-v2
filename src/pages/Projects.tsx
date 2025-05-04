
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Clock, CheckCircle } from "lucide-react";
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
      title: "Runalys",
      description: "MedievalPunk Metroidvania 2D Pixel Art",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Unity", "C#", "2D Pixel Art"],
      status: "ongoing",
    },
    {
      title: "Ticketing Mobile App",
      description: "Cross-platform mobile application for ticket management and event organization",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["MAUI", "PostgreSQL", "Mobile Development"],
      status: "concluded",
    },
    {
      title: "SkylineProjects",
      description: "Freelancer site connecting clients with developers for web and app projects",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      tags: ["CSS", "HTML", "JS", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "concluded",
    },
    {
      title: "Interactive CCTV Building Map",
      description: "Dynamic building map with interactive CCTV camera locations and live feeds",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      tags: ["CSS", "HTML", "JS", "MySQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "ongoing",
    },
    {
      title: "3D Obstacle Course",
      description: "Challenging 3D game with physics-based obstacles and multiple levels",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Unity 3D", "C#", "Game Development"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "concluded",
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
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                    project.status === "ongoing"
                      ? "bg-amber-400/20 text-amber-400"
                      : "bg-green-500/20 text-green-500"
                  }`}>
                    {project.status === "ongoing" ? (
                      <>
                        <Clock className="w-3 h-3" />
                        Ongoing
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        Concluded
                      </>
                    )}
                  </div>
                </div>
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
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-4">
                    {project.githubUrl && (
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
                    )}
                    {project.liveUrl && (
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
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
