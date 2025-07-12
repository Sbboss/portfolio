import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Hexaware Technologies",
      role: "Associate Data Scientist",
      period: "August 2024 – present",
      location: "India",
      achievements: [
        "Built a domain-specific RAG AI Assistant leveraging RAG for querying legal contracts, invoices, and reports",
        "Engineered an Intelligent Document Processing (IDP) solution using AWS Bedrock with Claude Sonnet",
        "Collaborated with cross-functional teams to automate billing and accounting workflows, reducing manual effort by 50%"
      ],
      technologies: ["AWS Bedrock", "Claude Sonnet", "Lambda", "Appian", "MCP", "Vector DBs", "AI Agents", "NLP", "Prompt Engineering", "Git", "RAG"]
    },
    {
      company: "Extramarks Education",
      role: "Associate Data Scientist",
      period: "June 2022 – August 2024",
      location: "India",
      achievements: [
        "Developed and deployed an Answer-Sheet Assessment system using FastAPI for model inference, achieving 80% grading accuracy",
        "Optimized OCR-based handwriting recognition by implementing multiprocessing for fast inference",
        "Built an Agentic RAG Chatbot using LLaMA 2 and ChromaDB, deployed via FastAPI on multi-GPU infrastructure"
      ],
      technologies: ["FastAPI", "MLOps", "Multiprocessing", "Fine-tuning", "CNN", "LSTM", "Transformers", "GPU Optimization", "sklearn"]
    },
    {
      company: "mFilterIt",
      role: "Data Scientist",
      period: "June 2021 – June 2022",
      location: "India",
      achievements: [
        "Developed a YOLOv8-based content moderation system, deployed using Docker and AWS Fargate with ECR",
        "Optimized GPU inference pipeline using TensorRT, reducing latency <50ms",
        "Built and deployed production ML APIs using FastAPI, enabling low-latency, high-throughput model serving"
      ],
      technologies: ["AWS", "YOLO", "Multi-GPU Training", "ONNX", "TensorRT", "Computer Vision", "BERT", "Kubernetes", "Fargate", "SageMaker", "EC2"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building AI solutions across various industries and domains
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <p className="text-lg font-medium text-primary mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period} | {exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;