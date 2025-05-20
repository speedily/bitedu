
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessagesSquare, ThumbsUp, Star, Twitter, Mail } from "lucide-react";

const FeedbackPage = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "BitEdu - Feedback";
    
    // Add skip-to-content functionality for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-bitcoin focus:outline-none focus:shadow-lg';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
    
    return () => {
      skipLink.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for helping us improve BitEdu.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Share Your Feedback</h1>
            <p className="text-xl text-muted-foreground">
              Help us improve BitEdu by sharing your thoughts and suggestions
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Feedback Form</CardTitle>
              <CardDescription>
                Your feedback helps us create better Bitcoin education for everyone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="feedback-type">What type of feedback do you have?</Label>
                  <RadioGroup id="feedback-type" defaultValue="general" className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="cursor-pointer flex items-center gap-1">
                        <MessagesSquare className="h-4 w-4" />
                        General
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="suggestion" id="suggestion" />
                      <Label htmlFor="suggestion" className="cursor-pointer flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        Suggestion
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="course" id="course" />
                      <Label htmlFor="course" className="cursor-pointer flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        Course Feedback
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Name (optional)</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                  <p className="text-xs text-muted-foreground">We'll only use this to follow up on your feedback if needed</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your feedback" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Feedback Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please share your detailed feedback or suggestions..." 
                    rows={8} 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>How would you rate your overall experience with BitEdu?</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="hover:text-bitcoin transition-colors focus:outline-none focus:ring-2 focus:ring-bitcoin rounded-full p-1"
                        aria-label={`Rate ${rating} stars`}
                      >
                        <Star className="w-8 h-8" />
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                onClick={handleSubmit}
                className="bg-bitcoin hover:bg-bitcoin-dark text-white"
              >
                Submit Feedback
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Other Ways to Share Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-muted p-6 rounded-lg">
                <div className="w-12 h-12 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessagesSquare className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="font-bold mb-2">Community Forum</h3>
                <p className="text-muted-foreground mb-3">Join discussions and share ideas with other learners</p>
                <Button variant="outline" size="sm" className="w-full">Visit Forum</Button>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <div className="w-12 h-12 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Twitter className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="font-bold mb-2">Social Media</h3>
                <p className="text-muted-foreground mb-3">Tag us on Twitter with your feedback or suggestions</p>
                <Button variant="outline" size="sm" className="w-full">@BitEdu</Button>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <div className="w-12 h-12 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="font-bold mb-2">Direct Email</h3>
                <p className="text-muted-foreground mb-3">Send detailed feedback directly to our team</p>
                <Button variant="outline" size="sm" className="w-full">feedback@bitedu.com</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeedbackPage;
