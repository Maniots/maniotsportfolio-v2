
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
