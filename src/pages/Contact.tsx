
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <div 
          className="max-w-xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out',
          }}
        >
          <div className="flex items-center gap-2 mb-8">
            <Mail className="h-6 w-6 text-accent animate-bounce" />
            <h1 className="text-4xl font-bold">Get in Touch</h1>
          </div>
          <form className="space-y-6">
            <div 
              className="space-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.5s ease-out 0.2s',
              }}
            >
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-background border-accent/20 transition-all duration-300 focus:border-accent hover:border-accent/40"
              />
            </div>
            <div 
              className="space-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.5s ease-out 0.3s',
              }}
            >
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-background border-accent/20 transition-all duration-300 focus:border-accent hover:border-accent/40"
              />
            </div>
            <div 
              className="space-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.5s ease-out 0.4s',
              }}
            >
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md bg-background border border-accent/20 p-3 text-white transition-all duration-300 focus:border-accent hover:border-accent/40"
                placeholder="Your message here..."
              />
            </div>
            <Button 
              className="w-full transition-all duration-300 hover:scale-105 hover:bg-accent/90"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out 0.5s',
              }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
