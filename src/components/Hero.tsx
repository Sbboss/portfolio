import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    // <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Shiva Baghel
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Graduate student in Artificial Intelligence at Northwestern University, passionate about building 
            intelligent systems that combine LLMs, multimodal models, and real-world applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="shadow-primary">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;