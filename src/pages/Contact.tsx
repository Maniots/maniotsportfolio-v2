
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="container px-4 py-20">
        <div className="max-w-xl mx-auto animate-fade-in">
          <div className="flex items-center gap-2 mb-8">
            <Mail className="h-6 w-6 text-accent" />
            <h1 className="text-4xl font-bold">Get in Touch</h1>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-background border-accent/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-background border-accent/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md bg-background border border-accent/20 p-3 text-white"
                placeholder="Your message here..."
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
