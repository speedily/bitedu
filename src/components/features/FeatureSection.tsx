
import { BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureSection = () => {
  const { toast } = useToast();
  const [features] = useState<Feature[]>([
    {
      icon: <BookOpen className="w-8 h-8 text-bitcoin" />,
      title: "Beginner-Friendly Tutorials",
      description: "Start with the basics and build a solid understanding of Bitcoin with clear, jargon-free explanations."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-bitcoin" />,
      title: "Interactive Learning",
      description: "Learn by doing with hands-on exercises and simulations that make complex concepts easy to understand."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-bitcoin" />,
      title: "Achievement System",
      description: "Earn rewards as you progress through lessons and complete challenges to stay motivated."
    }
  ]);

  const handleFeatureClick = (index: number) => {
    toast({
      title: "Feature Explored! 🌟",
      description: `You've discovered our ${features[index].title.toLowerCase()}. Keep exploring!`,
      variant: "default",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Learn With Us?</h2>
          <p className="text-lg text-muted-foreground">
            Our platform is designed to make learning about Bitcoin accessible, enjoyable, and rewarding for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bitcoin-card hover:border-bitcoin/30 cursor-pointer"
              onClick={() => handleFeatureClick(index)}
            >
              <div className="mb-4 w-16 h-16 bg-bitcoin/10 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
