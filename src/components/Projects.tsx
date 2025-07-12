import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "StatNano: Multimodal Engagement Prediction",
      description: "Implemented a supervised learning framework to predict educational video effectiveness using multimodal features (audio, visual, motion), leveraging feature selection techniques, random forests and linear regression models.",
      achievements: [
        "Applied regression models, feature selection, and statistical validation to evaluate video effectiveness",
        "Demonstrated strong foundations in statistics, probability, linear algebra, and model interpretability for supervised learning tasks"
      ],
      technologies: ["Supervised Learning", "Feature Selection", "Random Forests", "Linear Regression", "Statistical Modeling"],
      link: "#"
    },
    {
      title: "EduGen: Gen-AI Educational Video Generation",
      description: "Developed a multimodal GenAI video generator using Stable Diffusion for visuals and LLaMA 2 for language generation, automating the creation of personalized educational content using multimodal prompts.",
      achievements: [
        "Deployed on interactive demo on Streamlit, improving content production efficiency by 30%",
        "Enabled rapid, user-driven generation of personalized learning materials"
      ],
      technologies: ["Stable Diffusion", "LLaMA 2", "Streamlit", "GenAI", "Multimodal AI"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Research and development projects showcasing AI innovation
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start text-sm">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;