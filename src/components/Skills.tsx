import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Database, Cloud, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "LLM & Generative AI",
      subtitle: "Production LLM systems and retrieval pipelines",
      skills: ["LLMs", "RAG Pipelines", "LLM Evaluation", "Prompt Engineering", "LangChain", "Agentic AI", "Multimodal AI", "Stable Diffusion"]
    },
    {
      icon: Eye,
      title: "Deep Learning & Computer Vision",
      subtitle: "Model training, optimization, and visual understanding",
      skills: ["PyTorch", "TensorFlow", "CNNs", "Transformers", "CLIP", "OpenCV", "TensorRT", "Quantization", "Multi-GPU Training"]
    },
    {
      icon: Database,
      title: "Data & Vector Systems",
      subtitle: "Retrieval infrastructure and data engineering",
      skills: ["Vector DBs", "FAISS", "Azure AI Search", "MySQL", "MongoDB", "Pandas", "Scikit-learn", "Statistical Modeling", "ETL"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      subtitle: "Deployment, orchestration, and serving",
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "FastAPI", "Streamlit", "Nginx", "WebSocket", "Git"]
    },
    {
      icon: Code,
      title: "Languages",
      subtitle: "Core programming languages",
      skills: ["Python", "C/C++", "JavaScript", "TypeScript", "SQL"]
    }
  ];

  const achievements = [
    "Google GenAI Exchange Program 2025",
    "Winner: 2 International Hackathons",
    "Published 4 peer-reviewed papers (ACL-BEA '23, LAK '24, AIED '24, ICPR '24)"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technical skills spanning the full AI/ML development lifecycle
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-0.5">{category.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Achievements & Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary mr-3">🏆</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
