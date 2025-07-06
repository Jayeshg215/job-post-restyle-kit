import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Twitter, Linkedin, CheckCircle, Mail, Phone } from "lucide-react";

const HiringCard = () => {
  const handleApplyClick = () => {
    window.open("https://forms.gle/mMdqWxDwuW54if4q6", "_blank");
  };

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <Card className="w-full max-w-4xl overflow-hidden shadow-2xl border-0">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          {/* Yellow decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-full transform translate-x-40 -translate-y-40 opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow-400 rounded-full transform -translate-x-30 translate-y-30 opacity-70"></div>
          
          <CardContent className="relative z-10 p-8">
            {/* Top section with logo and social */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                <span className="text-lg font-bold">VERITECH SOFTWARE</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-75">Follow us on our socials</span>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <Twitter className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left content */}
              <div>
                <div className="mb-6">
                  <h1 className="text-white text-2xl mb-2">WE ARE</h1>
                  <h2 className="text-yellow-400 text-6xl font-bold mb-4">HIRING</h2>
                  <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
                  <p className="text-xl text-white/90 mb-8">
                    Come and Join our amazing team!
                  </p>
                </div>

                {/* Job vacancy section */}
                <div className="bg-yellow-400 text-black p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">JOB VACANCY DETAILS</h3>
                  <p className="mb-4 text-sm">We are looking for passionate individuals to join our diverse team</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Web Developer Intern</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Remote/WFH Position</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">One Month Duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">HTML, CSS, React/Angular</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content - Image */}
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=faces"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </div>

        {/* Bottom Contact Section */}
        <div className="bg-gray-900 text-white">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-yellow-400 font-semibold mb-2">Please send your CV to:</p>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>hr.veritech1@gmail.com</span>
                </div>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold mb-2">For more information:</p>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>+91 9371838418</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                onClick={handleApplyClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg text-lg"
              >
                APPLY NOW
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default HiringCard;