import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Published 4+ papers on GenAI, multimodal video analytics, and NLP-based statistical modeling."
    },
    {
      icon: Code,
      title: "Full-Stack AI",
      description: "Building end-to-end AI solutions from RAG bots to multimodal video generation pipelines on AWS, GCP"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Passionate about building fast, interactive, context-aware AI tools deployed at scale using multi-GPU and cloud infra."
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in bg-white py-16 rounded-lg shadow-none">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Hi, I’m Shiva Baghel 👋</h2>
    <p className="text-lg text-muted-foreground mb-4">
      AI graduate student at Northwestern University, with 4+ years of experience building GenAI systems, vision-language pipelines, and RAG-based tools.
    </p>
    <p className="text-md text-gray-600 mb-4">
      Previously worked on enterprise AI agents, educational video generation, and multimodal learning. Currently seeking AI/ML/MLE internships for <span className="text-blue-600 font-medium">Summer 2026</span>.
    </p>
    <p className="text-md mt-8 text-gray-700">
  If you’re interested in hiring, collaborating, or just want to chat, feel free to <a href="mailto:shivabaghel203@gmail.com" className="underline text-blue-600 hover:text-blue-800">shoot me an email</a>.
</p>
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">LLMs</span>
      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">RAG</span>
      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GenAI</span>
      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PyTorch</span>
      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">FastAPI</span>
      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TensorRT</span>
    </div>
    <p className="text-sm mt-6 text-gray-500">
      → <a href="/publications" className="underline hover:text-blue-600">See my research and publications</a>
    </p>
  </div>
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
    </div>
  );
};

export default About;