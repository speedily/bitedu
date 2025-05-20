
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import ConfettiExplosion from '../rewards/ConfettiExplosion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated, signIn } = useAuth();

  const handleGetStarted = () => {
    // Only show confetti for significant achievements, not button clicks
    toast({
      title: "Let's Begin! 🎉",
      description: "Ready to start your Bitcoin journey!",
      variant: "default",
    });
  };

  const handleGmailLogin = () => {
    // In a real app, this would integrate with Google OAuth
    // For now, we're simulating with a mock email
    const mockEmail = `user${Math.floor(Math.random() * 1000)}@gmail.com`;
    signIn(mockEmail);
    
    toast({
      title: "Successfully Signed In! 👍",
      description: "Welcome to BitEdu! You're ready to start learning.",
      variant: "default",
    });
  };

  const userAvatars = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50&h=50&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&auto=format&fit=crop&q=80"
  ];

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute transform rotate-12 left-1/4 -top-10">
          <div className="text-[350px] font-bold opacity-10">₿</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-bitcoin/10 text-bitcoin rounded-full text-sm font-medium mb-6">
              Start Your Bitcoin Journey
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Understand Bitcoin, <br /> 
              <span className="text-bitcoin">One Step</span> at a Time
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn Bitcoin fundamentals and advanced concepts through interactive lessons, tailored for everyone from your mom to your kid brother.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {isAuthenticated ? (
                <Button 
                  size="lg" 
                  className="bg-bitcoin hover:bg-bitcoin-dark text-white text-lg px-8"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  className="bg-bitcoin hover:bg-bitcoin-dark text-white text-lg px-8"
                  onClick={handleGmailLogin}
                >
                  Sign in with Gmail
                </Button>
              )}
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg"
                asChild
              >
                <Link to="/courses">Explore Lessons</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {userAvatars.map((avatar, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Avatar className="h-full w-full">
                      <AvatarImage src={avatar} alt={`User ${i+1}`} />
                      <AvatarFallback className="bg-gray-300" />
                    </Avatar>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">5,000+</span> people are learning today
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl bg-white border border-border shadow-lg p-4 transform md:rotate-2 transition-transform hover:rotate-0">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center relative">
                {/* Updated to a fully open MacBook Pro image */}
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80" 
                  alt="Fully open MacBook Pro with Bitcoin interface" 
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Bitcoin symbol floating above the laptop */}
                <div className="absolute w-16 h-16 rounded-full bg-bitcoin text-white flex items-center justify-center text-2xl font-bold animate-float">₿</div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-8 -left-8 w-48 p-4 bg-white shadow-lg rounded-lg border border-border transform -rotate-3 z-20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Your Progress</span>
                <span className="text-xs bg-bitcoin text-white px-2 py-0.5 rounded">NEW</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-bitcoin h-2 rounded-full w-[15%]"></div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 p-3 bg-white shadow-lg rounded-lg border border-border transform rotate-6 z-20">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-bitcoin/20 rounded-full flex items-center justify-center mb-1">
                  <span className="text-bitcoin text-sm">₿</span>
                </div>
                <span className="text-xs font-medium text-center">First Lesson Completed!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showConfetti && <ConfettiExplosion />}
    </div>
  );
};

export default Hero;
