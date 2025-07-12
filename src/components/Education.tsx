import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Northwestern University",
      degree: "Master of Science in Artificial Intelligence (MSAI)",
      period: "Sep 2025 – Dec 2026",
      status: "Current"
    },
    {
      institution: "The University of Texas at Austin",
      degree: "Post Graduate Program, Artificial Intelligence & ML",
      period: "July 2022 – July 2023",
      cgpa: "CGPA: 4.21/5.0"
    },
    {
      institution: "Dayalbagh Educational Institute",
      degree: "B.Voc in AI & Robotics",
      period: "July 2018 – May 2021",
      cgpa: "CGPA: 9.21/10.0"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">
            Academic journey in Artificial Intelligence and Machine Learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <p className="text-lg font-medium text-primary mt-1">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    {edu.status && (
                      <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mt-1">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              {edu.cgpa && (
                <CardContent>
                  <p className="text-muted-foreground font-medium">{edu.cgpa}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;