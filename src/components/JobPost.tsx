import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Phone, MapPin, Clock, Users, Calendar, Code } from "lucide-react";

const JobPost = () => {
  const handleApplyClick = () => {
    window.open("https://forms.gle/mMdqWxDwuW54if4q6", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 p-4 flex items-center justify-center">
      <Card className="w-full max-w-4xl overflow-hidden shadow-2xl border-0">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-primary to-primary-light p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-24 translate-y-24"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/13343726-0887-4ab9-8c2f-391147f0833d.png" 
                    alt="VeriTech Software Services Logo"
                    className="h-20 w-auto"
                  />
                </div>
                <div className="space-y-2">
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                    WE ARE HIRING
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    Web Developer Intern
                  </h1>
                  <p className="text-xl text-white/90">
                    Join our dynamic team and kickstart your career in web development
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=faces"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Open Position</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-lg">Web Developer Intern</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg">Location: Remotely / WFH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-lg">Duration: One month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-lg">Experience: 0-1 year / Fresher</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-lg">Skills: HTML, CSS and basics of React/Angular</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">What We Offer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Hands-on experience with modern web technologies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Mentorship from experienced developers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Opportunity to work on real projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Collaborative and learning-focused environment
                  </li>
                </ul>
              </div>

              <Button 
                onClick={handleApplyClick}
                size="lg"
                className="w-full lg:w-auto bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                APPLY NOW
              </Button>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">hr.veritech1@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">VeriTech Software IT Services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium">9371838418</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Ready to Start?</h4>
                <p className="text-sm text-muted-foreground">
                  Take the first step towards your web development career. Apply now and join our innovative team!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPost;