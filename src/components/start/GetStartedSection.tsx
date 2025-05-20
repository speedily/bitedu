
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import AchievementBadge from '../rewards/AchievementBadge';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const GetStartedSection = () => {
  const { toast } = useToast();
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementTitle, setAchievementTitle] = useState('');
  const { isAuthenticated, signIn, updateProgress } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      // Update progress for the introductory topic
      updateProgress('intro-to-bitcoin', true, 10);
      
      toast({
        title: "Journey Begins! 🚀",
        description: "You're on your way to becoming a Bitcoin expert!",
        variant: "default",
      });
      
      // Only show achievement when user completes something meaningful
      setAchievementTitle('First Step: Beginning Your Bitcoin Journey');
      setShowAchievement(true);
      
      // Navigate to courses page
      navigate('/courses');
    } else {
      // Simulate Google sign-in
      const userEmail = "user@example.com";
      signIn(userEmail, "Example User");
      
      toast({
        title: "Welcome!",
        description: "You've successfully signed in. Now you can track your learning progress.",
        variant: "default",
      });
    }
  };

  return (
    <section className="py-24 bg-bitcoin">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Bitcoin Journey?</h2>
          <p className="text-lg mb-8 text-white/80">
            Join thousands of others learning about Bitcoin in a way that's easy to understand, 
            engaging, and actually fun.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-bitcoin hover:bg-gray-100"
            onClick={handleGetStarted}
          >
            {isAuthenticated ? "Start Learning Now" : "Sign in to Start"}
          </Button>
        </div>
      </div>

      <AchievementBadge 
        title={achievementTitle}
        show={showAchievement}
        onClose={() => setShowAchievement(false)}
      />
    </section>
  );
};

export default GetStartedSection;
