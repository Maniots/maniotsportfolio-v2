
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-muted">
              As an IT student with a passion for game development, I'm constantly exploring
              the intersection of technology and creative storytelling. My journey in
              computer science has equipped me with strong programming fundamentals,
              while my game development projects have helped me develop practical skills
              in Unity and C#.
            </p>
            <p className="text-lg text-muted">
              Currently pursuing my degree in Computer Science, I focus on game
              development in my free time, creating small but engaging projects that
              showcase my growing expertise in game mechanics, UI design, and optimization.
            </p>
          </div>
          <div className="bg-accent/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Computer Science Student
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Game Development Enthusiast
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Unity & C# Developer
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Problem Solver
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
