import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LLM Arena: Side-by-Side Model Comparison",
      description: "Built a real-time LLM comparison arena that streams responses from two models simultaneously, enabling side-by-side evaluation of 89+ models across 10+ providers (OpenAI, Anthropic, Google, xAI, Mistral, etc.) with live performance and cost analytics.",
      achievements: [
        "Engineered SSE streaming proxy with FastAPI, tracking time-to-first-token, total latency, and token counts with winner highlighting",
        "Supports document upload (PDF/DOCX/TXT) with text extraction for context-aware prompting and tunable parameters (temperature, top-p, max tokens)"
      ],
      technologies: ["React", "TypeScript", "FastAPI", "SSE Streaming", "Concentrate AI", "Docker", "Hugging Face Spaces"],
      link: "https://huggingface.co/spaces/Sbboss/LLM_Arena_ConcentrateAI"
    },
    {
      title: "PixelPilotAI: AI Photo Editing Recommendation Agent",
      description: "Built a RAG-based photo editing agent that retrieves similar expert-edited images from the MIT-Adobe FiveK dataset using CLIP embeddings, generates personalized edit recommendations via GPT-4o, and renders enhanced results automatically.",
      achievements: [
        "Designed end-to-end pipeline: CLIP embedding → Azure AI Search retrieval → GPT-4o recipe generation → deterministic edit rendering with before/after comparison",
        "Deployed interactive Streamlit UI with parameter analysis dashboard showing current vs. suggested edit deltas across 10 parameters"
      ],
      technologies: ["CLIP", "Azure AI Search", "Azure OpenAI (GPT-4o)", "RAG", "Streamlit", "OpenCV", "Docker", "Hugging Face Spaces"],
      link: "https://huggingface.co/spaces/Sbboss/PixelPilotAI"
    },
    {
      title: "Voice Agent: Speech AI Assistant with RAG",
      description: "Developed a voice-powered AI agent combining Azure Speech (STT/TTS) with Azure AI Foundry Agents, enabling real-time voice conversations with tool-calling, local RAG over uploaded documents, and session memory.",
      achievements: [
        "Implemented WebSocket streaming for real-time PCM audio processing with low-latency speech-to-speech pipeline",
        "Built local RAG pipeline using FAISS + Azure OpenAI embeddings supporting PDF, DOCX, CSV, and TXT uploads for context-grounded responses"
      ],
      technologies: ["Azure Speech", "Azure AI Foundry", "FastAPI", "WebSocket", "FAISS", "Streamlit", "Docker", "Hugging Face Spaces"],
      link: "https://huggingface.co/spaces/Sbboss/voice-agent"
    },
    {
      title: "FinAI-Agent: AI-Powered CFO Co-Pilot",
      description: "Built a chat-native financial analytics agent using LangChain ReAct framework with Gemini 2.5 Flash, enabling natural-language querying over Excel ledgers with automated tool routing across 7 custom financial analysis tools.",
      achievements: [
        "Implemented dynamic tool routing for revenue variance, gross margin, OpEx breakdown, EBITDA, cash runway analysis, and automated chart generation via Matplotlib",
        "Features smart currency handling (EUR→USD via FX sheet), date inference from natural language, and fallback PythonREPL for ad-hoc Pandas analysis"
      ],
      technologies: ["LangChain", "Gemini 2.5 Flash", "Streamlit", "Pandas", "Matplotlib", "Python", "Hugging Face Spaces"],
      link: "https://huggingface.co/spaces/Sbboss/FinAIAgent"
    },
    {
      title: "VidQuery: Semantic Video Search & Recommendation System",
      description: "Built a semantic video retrieval system using RAG to return relevant clips and timestamps based on natural language queries over transcribed video content.",
      achievements: [
        "Prototyping a chat-based assistant for personalized, context-aware video recommendations",
        "Enables automatic video segment sharing for collaborative learning and intelligent content discovery in educational environments"
      ],
      technologies: ["RAG", "Semantic Search", "NLP", "Video Analytics", "Chatbot"],
      link: ""
    },
    {
      title: "EduGen: Gen-AI Educational Video Generation",
      description: "Developed a multimodal GenAI video generator using Stable Diffusion for visuals and LLaMA 2 for language generation, automating the creation of personalized educational content using multimodal prompts.",
      achievements: [
        "Deployed interactive demo on Streamlit, improving content production efficiency by 30%",
        "Enabled rapid, user-driven generation of personalized learning materials"
      ],
      technologies: ["Stable Diffusion", "LLaMA 2", "Streamlit", "GenAI", "Multimodal AI"],
      link: ""
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start text-sm">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <div className="pt-2 mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;