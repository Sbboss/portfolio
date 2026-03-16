import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "LLM Arena",
    subtitle: "Side-by-side model comparison with real-time streaming",
    description: "Compare 89+ LLMs across 10+ providers with live latency, token, and cost analytics.",
    technologies: ["React", "FastAPI", "SSE Streaming", "Docker"],
    link: "https://huggingface.co/spaces/Sbboss/LLM_Arena_ConcentrateAI"
  },
  {
    title: "PixelPilotAI",
    subtitle: "RAG-powered photo editing recommendation agent",
    description: "Retrieves expert edits via CLIP + Azure AI Search, generates personalized recommendations with GPT-4o.",
    technologies: ["CLIP", "Azure AI Search", "GPT-4o", "RAG"],
    link: "https://huggingface.co/spaces/Sbboss/PixelPilotAI"
  },
  {
    title: "Voice Agent",
    subtitle: "Speech AI assistant with tools and RAG",
    description: "Real-time voice conversations via Azure Speech with tool-calling, document RAG, and session memory.",
    technologies: ["Azure Speech", "FastAPI", "WebSocket", "FAISS"],
    link: "https://huggingface.co/spaces/Sbboss/voice-agent"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="relative pt-12 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/50 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-3">Systems I've Built</h2>
          <p className="text-muted-foreground">
            Production-grade AI systems with live demos
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in flex flex-col"
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-primary mb-1">{project.title}</h3>
                <p className="text-xs font-medium text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-3.5 w-3.5" />
                    Live Demo
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
