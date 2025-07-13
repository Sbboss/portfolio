import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative pt-16 pb-20">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent leading-[1.25] pb-3 overflow-visible">
            Shiva Baghel
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            <strong>AI Grad Student @ Northwestern</strong>
          </p>

          {/* BUTTONS */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button size="lg" className="shadow-primary" asChild>
              <a href="mailto:shivabaghel203@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/sbaghel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/sbboss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div> */}

          {/* ABOUT ME PARAGRAPH */}
          <p className="text-md text-gray-700 max-w-2xl mx-auto mb-6">
            I’m a graduate student in Artificial Intelligence at Northwestern University with 4+ years of experience building GenAI systems, RAG-based tools, and vision-language pipelines. Passionate about applied research and building scalable, real-world AI. 
          </p>
          <p>Currently seeking <span className="text-blue-600 font-medium">AI/ML/MLE internships for Summer 2026</span>.</p>

          {/* SKILL TAGS */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[
              "LLMs",
              "GenAI",
              "RAG",
              "PyTorch",
              "FastAPI",
              "Statistical Modeling",
              "Stable Diffusion",
              "TensorRT",
              "AWS/GCP",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-black/10 text-sm text-black rounded-full border border-white/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CONTACT CTA */}
          <p className="text-sm mt-6 text-muted-foreground">
            If you're hiring, collaborating, or just want to chat, feel free to{" "}
            <a
              href="/contact"
              className="underline hover:text-blue-600"
            >
              reach out
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
