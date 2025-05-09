
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Runalys",
      description: "Metroidvania 2D pixel art game",
      image: "https://i.ibb.co/8L1PBcNt/Runalys-Coming-Soon.png",
      icon: <Gamepad className="h-6 w-6 text-accent" />,
      tags: ["Unity", "C#", "2D Pixel Art"],
      status: "ongoing",
    },
    {
      title: "Ticketing Mobile App",
      description: "Cross-platform mobile application for ticketing",
      image: "/src/img/ticketing-app.png",
      icon: <Code className="h-6 w-6 text-accent" />,
      tags: ["MAUI", "PostgreSQL", "Mobile Development"],
      status: "concluded",
      githubUrl: "https://github.com",
    },
    {
      title: "SkylineProjects",
      description: "Freelancer site school project",
      image: "https://i.ibb.co/N2SCnTnb/Screenshot-2025-05-09-200836.png",
      icon: <Globe className="h-6 w-6 text-accent" />,
      tags: ["CSS", "HTML", "JS", "PostgreSQL"],
      status: "concluded",
      githubUrl: "https://github.com/Maniots/SkylineProjects",
      liveUrl: "skylineprojects.onrender.com",
    },
    {
      title: "Interactive CCTV Building Map",
      description: "Dynamic building map with CCTV locations",
      image: "https://i.ibb.co/cX3V7bzb/Sicurplan-Portfolio.png",
      icon: <FileCode className="h-6 w-6 text-accent" />,
      tags: ["CSS", "HTML", "JS", "MySQL"],
      status: "ongoing",
    },
    {
      title: "3D Obstacle Course",
      description: "Interactive 3D obstacle game with physics challenges",
      image: "/src/img/obstacle-course.png",
      icon: <Box className="h-6 w-6 text-accent" />,
      tags: ["Unity 3D", "C#", "Game Development"],
      status: "concluded",
      githubUrl:"https://github.com/Maniots/SchivaOstacoli3D",
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
          {t('projects')}
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
                        {t('ongoing')}
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        {t('concluded')}
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
                          {t('code')}
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
                          {t('demo')}
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
