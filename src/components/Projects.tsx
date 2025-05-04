
import { Code, Gamepad, Globe, FileCode, Box } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

const Projects = () => {
  const projects = [
    {
      title: "Runalys",
      description: "Metroidvania 2D pixel art game",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      icon: <Gamepad className="h-6 w-6 text-accent" />,
      tags: ["Unity", "C#", "2D Pixel Art"],
    },
    {
      title: "Ticketing Mobile App",
      description: "Cross-platform mobile application for ticketing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      icon: <Code className="h-6 w-6 text-accent" />,
      tags: ["MAUI", "PostgreSQL", "Mobile Development"],
    },
    {
      title: "SkylineProjects",
      description: "Freelancer site school project",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      icon: <Globe className="h-6 w-6 text-accent" />,
      tags: ["CSS", "HTML", "JS", "PostgreSQL"],
    },
    {
      title: "Interactive CCTV Building Map",
      description: "Dynamic building map with CCTV locations",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      icon: <FileCode className="h-6 w-6 text-accent" />,
      tags: ["CSS", "HTML", "JS", "MySQL"],
    },
    {
      title: "3D Obstacle Course",
      description: "Interactive 3D obstacle game with physics challenges",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      icon: <Box className="h-6 w-6 text-accent" />,
      tags: ["Unity 3D", "C#", "Game Development"],
    },
  ];

  // Display only the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="bg-background border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
              <CardHeader>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
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
