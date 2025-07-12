import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            Seeking for summer 2026 internship opportunities to build impactful AI tools
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:shivabaghel203@gmail.com" className="text-primary hover:underline">
                          shivabaghel203@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">USA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">Connect Online</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://linkedin.com/in/shivabaghel" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-3 h-5 w-5" />
                        LinkedIn Profile
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-3 h-5 w-5" />
                        GitHub Portfolio
                      </a>
                    </Button>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gradient-hero rounded-lg">
                    <h4 className="font-semibold mb-2">Open to Opportunities</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently seeking summer 2026 internship opportunities in AI/ML, GenAI, and MLOps. 
                      Let's discuss how I can contribute to your team!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;