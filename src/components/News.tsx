import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Trophy, Star } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "August 2024",
      title: "Started Master's in Artificial Intelligence at Northwestern University",
      description: "Began pursuing MS in AI at Northwestern University, focusing on advanced machine learning, deep learning, and AI systems research.",
      type: "Education",
      icon: GraduationCap,
      highlight: true
    },
    {
      date: "January 2025",
      title: "Selected for Google GenAI Exchange Program 2025",
      description: "Accepted into Google's prestigious GenAI Exchange Program, focusing on cutting-edge generative AI technologies and applications.",
      type: "Achievement",
      icon: Star,
      highlight: true
    },
    {
      date: "December 2024",
      title: "Published Research at ICPR '24",
      description: "Successfully published paper on Video Analysis Engine for Predicting Effectiveness at the International Conference on Pattern Recognition 2024.",
      type: "Research",
      icon: Trophy,
      highlight: false
    }
  ];

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-xl text-muted-foreground">
            Recent achievements and milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in ${
                item.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    item.highlight ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <item.icon className={`h-6 w-6 ${
                      item.highlight ? 'text-primary' : 'text-primary/70'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <CardTitle className="text-lg leading-tight">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={item.highlight ? "default" : "secondary"} 
                          className="text-xs whitespace-nowrap"
                        >
                          {item.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;