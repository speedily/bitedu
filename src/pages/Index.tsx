
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Hero from '@/components/hero/Hero';
import FeatureSection from '@/components/features/FeatureSection';
import CoursesSection from '@/components/courses/CoursesSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import GetStartedSection from '@/components/start/GetStartedSection';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ChevronRight, Send, BookOpen, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  
  // Enhance accessibility with proper focus management
  useEffect(() => {
    document.title = "BitEdu - Learn Bitcoin in the Most Accessible Way";
    
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

  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Bitcoin Fundamentals Workshop",
      date: "May 25, 2025",
      time: "10:00 AM - 12:00 PM EST",
      location: "Virtual",
      description: "Learn the basics of Bitcoin in this interactive workshop."
    },
    {
      id: 2,
      title: "Stacks Developer Meetup",
      date: "May 28, 2025",
      time: "6:00 PM - 8:00 PM EST",
      location: "New York, NY",
      description: "Connect with Stacks developers and learn about the latest developments."
    },
    {
      id: 3,
      title: "Bitcoin Security Best Practices",
      date: "June 2, 2025",
      time: "1:00 PM - 3:00 PM EST",
      location: "Virtual",
      description: "Learn how to secure your Bitcoin holdings from security experts."
    }
  ];
  
  // Sample news data
  const latestNews = [
    {
      id: 1,
      title: "Bitcoin Breaks New All-Time High",
      date: "May 18, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Market News",
      excerpt: "Bitcoin has reached a new all-time high, surpassing previous records amid institutional adoption."
    },
    {
      id: 2,
      title: "New Bitcoin Improvement Proposal Gaining Support",
      date: "May 15, 2025",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "Development",
      excerpt: "The proposed BIP for enhancing transaction privacy is gaining widespread support from developers."
    },
    {
      id: 3,
      title: "BitEdu Launches Advanced Lightning Network Course",
      date: "May 12, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "Education",
      excerpt: "Our new advanced course covers all aspects of the Lightning Network for scaling Bitcoin payments."
    }
  ];
  
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Bitcoin Educator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Bitcoin enthusiast since 2013, previously led education at the Bitcoin Foundation."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Technical Curriculum Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Former Bitcoin Core contributor with 7+ years of teaching experience."
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      bio: "Community building expert who organized 100+ Bitcoin meetups globally."
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
      bio: "Award-winning educational content producer with focus on accessibility."
    }
  ];
  
  // Learning process steps
  const learningSteps = [
    {
      icon: <BookOpen className="h-12 w-12 text-bitcoin" />,
      title: "Start with Fundamentals",
      description: "Begin your journey with our Bitcoin Basics course to build a solid foundation."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-bitcoin" />,
      title: "Advance Your Knowledge",
      description: "Move to intermediate and advanced courses as you progress in your learning."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-bitcoin" />,
      title: "Track Your Progress",
      description: "Complete lessons and earn NFT rewards to mark your achievements."
    },
    {
      icon: <Award className="h-12 w-12 text-bitcoin" />,
      title: "Become a Bitcoin Expert",
      description: "Apply your knowledge with real-world projects and community discussions."
    }
  ];

  const handleNewsletterSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed! 📬",
        description: "You're now subscribed to our newsletter. Watch your inbox for Bitcoin insights!",
        variant: "default",
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow">
        <Hero />
        <FeatureSection />
        
        {/* Learning Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Learn on BitEdu</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our structured approach makes learning Bitcoin accessible, enjoyable and rewarding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gray-50 rounded-full">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CoursesSection />
        
        {/* Latest News Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <Button variant="outline" asChild>
                <Link to="/news">
                  View All News
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {latestNews.map(news => (
                <Link to={`/news/${news.id}`} key={news.id} className="group">
                  <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium px-2 py-1 bg-bitcoin/10 text-bitcoin rounded">
                          {news.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-bitcoin transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {news.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Newsletter Subscription */}
            <div className="bg-gray-50 border border-border rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-muted-foreground">
                    Subscribe to our newsletter to receive the latest Bitcoin news, educational content, and exclusive resources.
                  </p>
                </div>
                <div>
                  <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-grow"
                    />
                    <Button type="submit" className="bg-bitcoin hover:bg-bitcoin-dark text-white">
                      Subscribe
                      <Send size={16} className="ml-2" />
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <Button variant="outline" asChild>
                <Link to="/events">
                  View All Events
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <div key={event.id} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="text-bitcoin">
                      <Calendar size={24} />
                    </div>
                    <div className="px-3 py-1 bg-bitcoin/10 text-bitcoin text-xs font-medium rounded-full">
                      {event.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{event.date}</span>
                      <span className="text-muted-foreground">{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
                <Link to="/events">
                  View All Events
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our passionate experts are dedicated to making Bitcoin education accessible to everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map(member => (
                <div key={member.id} className="text-center">
                  <div className="mb-4 mx-auto">
                    <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-bitcoin font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <GetStartedSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
