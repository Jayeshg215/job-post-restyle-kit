import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal, ThumbsUp, Share } from "lucide-react";

const LinkedInPost = () => {
  const handleApplyClick = () => {
    window.open("https://forms.gle/mMdqWxDwuW54if4q6", "_blank");
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-border">
      {/* Header */}
      <div className="p-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <Avatar className="w-12 h-12 ring-2 ring-gray-100 dark:ring-gray-800">
            <AvatarImage src="/lovable-uploads/13343726-0887-4ab9-8c2f-391147f0833d.png" alt="VeriTech Logo" />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">VT</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-foreground text-sm">VeriTech Software Services</h3>
              <Badge variant="secondary" className="text-xs px-2 py-0.5">Follow</Badge>
            </div>
            <p className="text-xs text-gray-600 dark:text-muted-foreground">IT Services and IT Consulting • 1,234 followers</p>
            <p className="text-xs text-gray-500 dark:text-muted-foreground flex items-center gap-1">
              2h • <span className="w-3 h-3 text-gray-400">🌐</span>
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 w-8 h-8">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <div className="text-sm text-gray-900 dark:text-foreground leading-relaxed space-y-3">
          <p>
            🚀 <span className="font-semibold">We're Hiring!</span> 🚀
          </p>
          
          <p>
            Looking for passionate <span className="font-semibold text-blue-600">Web Developer Interns</span> to join our dynamic team!
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border-l-4 border-blue-500">
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">📍 Location:</span> Remote/WFH</p>
              <p><span className="font-medium">⏰ Duration:</span> One month</p>
              <p><span className="font-medium">💻 Skills:</span> HTML, CSS, and basics of React/Angular</p>
              <p><span className="font-medium">🎯 Experience:</span> 0-1 year / Fresher welcome</p>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">What we offer:</p>
            <ul className="space-y-1 text-sm">
              <li>✅ Hands-on experience with modern web technologies</li>
              <li>✅ Mentorship from experienced developers</li>
              <li>✅ Opportunity to work on real projects</li>
              <li>✅ Collaborative learning environment</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Button 
              onClick={handleApplyClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Apply Now
            </Button>
            <span className="text-xs text-gray-500">Ready to kickstart your career? 🚀</span>
          </div>

          <div className="pt-2">
            <span className="text-blue-600 text-sm font-medium">
              #WebDeveloper #Internship #RemoteWork #FreshersWelcome #VeriTech
            </span>
          </div>
        </div>
      </div>

      {/* Engagement Stats */}
      <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 dark:border-border">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center border border-white">
                <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
              </div>
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border border-white">
                <Heart className="w-2.5 h-2.5 text-white fill-white" />
              </div>
            </div>
            <span>You and 47 others</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>12 comments</span>
          <span>•</span>
          <span>8 reposts</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center border-t border-gray-100 dark:border-border">
        <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-none">
          <ThumbsUp className="w-5 h-5" />
          <span className="text-sm font-medium">Like</span>
        </Button>
        <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-none">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Comment</span>
        </Button>
        <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-none">
          <Repeat2 className="w-5 h-5" />
          <span className="text-sm font-medium">Repost</span>
        </Button>
        <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-none">
          <Send className="w-5 h-5" />
          <span className="text-sm font-medium">Send</span>
        </Button>
      </div>
    </div>
  );
};

export default LinkedInPost;