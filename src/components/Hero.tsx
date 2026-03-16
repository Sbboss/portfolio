import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleNetwork from "./ParticleNetwork";

const HuggingFaceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="currentColor">
    <path d="M37.2 48.8c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3zm45.6 0c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z" />
    <path d="M60 10C32.4 10 10 32.4 10 60s22.4 50 50 50 50-22.4 50-50S87.6 10 60 10zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" />
    <path d="M60 78c-11 0-20.5-6.3-25.2-15.5-.6-1.2.3-2.5 1.6-2.5h47.2c1.3 0 2.2 1.3 1.6 2.5C80.5 71.7 71 78 60 78z" />
  </svg>
);

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("featured-projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative pt-16 pb-20">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <ParticleNetwork />
      <div className="container mx-auto text-center relative z-10 px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent leading-[1.25] pb-3 overflow-visible">
            Shiva Baghel
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Machine Learning & Generative AI Engineer
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            AI Graduate Student @ Northwestern University
          </p>

          <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-2 leading-relaxed">
            I design production-grade AI systems — from scalable RAG architectures and LLM evaluation tools to multimodal generation pipelines. 4+ years building GenAI systems deployed across enterprise and education.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Technical writing on AI systems and GenAI at{" "}
            <a href="https://medium.com/@shivabaghel203" className="underline text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </p>

          <div className="flex justify-center items-center gap-4 mb-8">
            <a
              href="https://github.com/Sbboss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/shivabaghel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://huggingface.co/Sbboss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-colors"
              aria-label="Hugging Face"
            >
              <HuggingFaceIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:shivabaghel203@gmail.com"
              className="p-2.5 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              "LLM Systems",
              "RAG Architectures",
              "Multimodal AI",
              "Computer Vision",
              "PyTorch",
              "FastAPI",
              "TensorRT",
              "AWS/GCP",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-background/60 backdrop-blur-sm text-sm text-foreground rounded-full border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="max-w-lg mx-auto rounded-xl border border-primary/30 bg-background/70 backdrop-blur-sm p-6 shadow-card">
            <p className="font-semibold text-foreground text-lg mb-1">
              Open to Summer 2026 Internship Opportunities
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              AI/ML, GenAI, and MLOps roles
            </p>
            <Link to="/contact">
              <Button size="sm" className="shadow-primary">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all duration-500 cursor-pointer ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to projects"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-[2]" />
    </section>
  );
};

export default Hero;
