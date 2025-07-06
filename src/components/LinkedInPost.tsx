import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from "lucide-react";

const LinkedInPost = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/lovable-uploads/13343726-0887-4ab9-8c2f-391147f0833d.png" alt="VeriTech Logo" />
              <AvatarFallback className="bg-primary text-primary-foreground">VT</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">VeriTech Software Services</h3>
              <p className="text-sm text-muted-foreground">IT Services and IT Consulting</p>
              <p className="text-xs text-muted-foreground">2h • 🌐</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-foreground leading-relaxed">
            🚀 <strong>We're Hiring!</strong> 🚀
            <br /><br />
            Looking for passionate <strong>Web Developer Interns</strong> to join our dynamic team! 
            <br /><br />
            📍 <strong>Location:</strong> Remote/WFH<br />
            ⏰ <strong>Duration:</strong> One month<br />
            💻 <strong>Skills:</strong> HTML, CSS, and basics of React/Angular<br />
            🎯 <strong>Experience:</strong> 0-1 year / Fresher welcome
            <br /><br />
            What we offer:
            <br />
            ✅ Hands-on experience with modern web technologies<br />
            ✅ Mentorship from experienced developers<br />
            ✅ Opportunity to work on real projects<br />
            ✅ Collaborative learning environment
            <br /><br />
            Ready to kickstart your career in web development? Apply now!
            <br /><br />
            <span className="text-primary">#WebDeveloper #Internship #RemoteWork #FreshersWelcome #VeriTech</span>
          </p>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-between py-3 border-t border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-2.5 h-2.5 text-white fill-white" />
              </div>
              <span>24</span>
            </div>
            <span>•</span>
            <span>8 comments</span>
            <span>•</span>
            <span>12 reposts</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-around pt-3">
          <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">Like</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Comment</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Repeat2 className="w-5 h-5" />
            <span className="text-sm font-medium">Repost</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Send className="w-5 h-5" />
            <span className="text-sm font-medium">Send</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInPost;