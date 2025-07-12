import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research",
      description: "4 years of experience in GenAI, with published papers in statistical modeling and educational video analytics"
    },
    {
      icon: Code,
      title: "Full-Stack AI",
      description: "Building end-to-end AI solutions from RAG bots to multimodal video generation pipelines"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Exploring interactive and context-aware AI systems for real-world impact"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about building intelligent systems that bridge the gap between cutting-edge AI research 
            and practical applications. <strong>Currently pursuing my Master's in AI at Northwestern University while 
            actively seeking summer 2026 internship opportunities to build impactful AI tools.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;