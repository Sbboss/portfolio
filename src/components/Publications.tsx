import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      year: "2024",
      venue: "ICPR '24",
      title: "Video Analysis Engine for Predicting Effectiveness",
      authors: "Shiva Baghel, et al.",
      abstract: "Presents a novel supervised-learning-based approach for predicting the effectiveness of K-12 science and mathematics videos using diverse features including image, spoken text, and audio analysis.",
      metrics: "76.1% accuracy, 80.6% F1 score",
      url: "https://dl.acm.org/doi/10.1007/978-3-031-78312-8_7",
      type: "Conference"
    },
    {
      year: "2024",
      venue: "AIED '24",
      title: "EDEN: Enhanced Database Expansion in eLearning: A Method for Automated Generation of Academic Videos",
      authors: "Shiva Baghel, et al.",
      abstract: "Introduces EDEN, an end-to-end method for expanding academic video databases that generates new videos in the same style as existing databases, adding 3134 videos across diverse K-12 subjects.",
      metrics: "+6% F1 BERTScore, +9.7% Image Visual Relevance",
      url: "https://doi.org/10.1007/978-3-031-64315-6_37",
      type: "Conference"
    },
    {
      year: "2024",
      venue: "LAK '24",
      title: "Effecti-Net: A Multimodal Framework and Database for Educational Content Effectiveness Analysis",
      authors: "Shiva Baghel, et al.",
      abstract: "Presents Effecti-Net architecture and DECEP dataset, leveraging physiological sensor data (EEG, Eye Tracker, GSR, PPG) to predict student-perceived content effectiveness.",
      metrics: "0.1651 MSE, 0.3544 MAE",
      url: "https://doi.org/10.1145/3636555.3636928",
      type: "Conference"
    },
    {
      year: "2023",
      venue: "ACL-BEA '23",
      title: "Auto-req: Automatic detection of pre-requisite dependencies between academic videos",
      authors: "Rushil Thareja, Ritik Garg, Shiva Baghel, Deep Dwivedi, Mukesh Mohania, Ritvik Kulshrestha",
      abstract: "Proposes a feature-based method for identifying pre-requisite dependencies between academic videos using transcript analysis and novel similarity-based features.",
      metrics: "+4.7%-10.24% F1-score improvement",
      url: "https://doi.org/10.18653/v1/2023.bea-1.45",
      type: "Workshop"
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Publications</h2>
          <p className="text-xl text-muted-foreground">
            Peer-reviewed research in AI/ML and Educational Technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {publications.map((paper, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {paper.venue}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {paper.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{paper.year}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2">
                      {paper.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-2">
                      {paper.authors}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={paper.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Paper
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {paper.abstract}
                </p>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Key Results: {paper.metrics}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;