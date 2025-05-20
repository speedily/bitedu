
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Clock, Award, BookOpen, Video, Check, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const BeginnersCoursePage = () => {
  const { isAuthenticated, user } = useAuth();
  const courseId = "beginners-course";

  // Calculate user progress for this course
  const userProgress = isAuthenticated && user?.progress?.[courseId]
    ? user.progress[courseId].points
    : 0;

  useEffect(() => {
    document.title = "BitEdu - Bitcoin for Beginners";
    
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-2/3">
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-bitcoin flex items-center mb-4">
                <ChevronLeft size={16} className="mr-1" />
                All Courses
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Bitcoin for Beginners</h1>
              <p className="text-lg text-muted-foreground mb-6">
                A comprehensive introduction to Bitcoin for those new to cryptocurrency. Learn the basics and build a strong foundation.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-muted-foreground" />
                  <span>8 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-muted-foreground" />
                  <span>6 modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-muted-foreground" />
                  <span>Certificate</span>
                </div>
              </div>
              
              {isAuthenticated && (
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium mb-2">Your progress</h3>
                        <Progress value={userProgress} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">{userProgress}% complete</p>
                      </div>
                      <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white">
                        {userProgress > 0 ? 'Continue Learning' : 'Start Course'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p>
                  This beginner-friendly course introduces you to the world of Bitcoin without assuming any prior knowledge. 
                  We'll take you through the basics of cryptocurrency, blockchain technology, and how to safely use and store Bitcoin.
                </p>
                <p>
                  By the end of this course, you'll understand what makes Bitcoin unique, how to set up your first wallet, 
                  make transactions, and protect your investment. You'll gain the confidence to participate in the Bitcoin ecosystem 
                  with a solid understanding of the fundamentals.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">What You'll Learn</h2>
                <ul>
                  <li>The history and purpose of Bitcoin</li>
                  <li>How blockchain technology works</li>
                  <li>Setting up your first Bitcoin wallet</li>
                  <li>How to buy, store, and send Bitcoin safely</li>
                  <li>Understanding Bitcoin security and best practices</li>
                  <li>Common terminology and concepts in the Bitcoin ecosystem</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Who Is This Course For?</h2>
                <ul>
                  <li>Absolute beginners with no prior knowledge of Bitcoin or cryptocurrency</li>
                  <li>Anyone curious about how Bitcoin works and its potential</li>
                  <li>People who want to start using Bitcoin but aren't sure where to begin</li>
                  <li>Those looking to understand digital currencies before investing</li>
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>6 modules • 18 lessons • 8 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <CourseModule 
                      number={1}
                      title="Introduction to Bitcoin"
                      description="Learn what Bitcoin is and why it was created"
                      lessons={3}
                      duration="1h 15m"
                      isUnlocked={true}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={2}
                      title="Blockchain Technology"
                      description="Understand how the blockchain works"
                      lessons={3}
                      duration="1h 30m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={3}
                      title="Bitcoin Wallets"
                      description="How to set up and use Bitcoin wallets safely"
                      lessons={4}
                      duration="1h 45m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={4}
                      title="Buying and Selling Bitcoin"
                      description="Different ways to acquire and trade Bitcoin"
                      lessons={3}
                      duration="1h 20m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={5}
                      title="Security Best Practices"
                      description="Keeping your Bitcoin safe from threats"
                      lessons={3}
                      duration="1h 10m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={6}
                      title="Bitcoin in Practice"
                      description="Real-world applications and use cases"
                      lessons={2}
                      duration="1h"
                      isUnlocked={isAuthenticated}
                    />
                  </div>
                </CardContent>
              </Card>
              
              {!isAuthenticated && (
                <Card className="mt-6 bg-bitcoin/5">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Sign in to access full course</h3>
                    <p className="text-muted-foreground mb-4">
                      Create a free account to track your progress and access all learning materials.
                    </p>
                    <Button className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white">
                      Sign In to Start Learning
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button variant="outline" asChild>
              <Link to="/courses">
                <ChevronLeft size={16} className="mr-2" />
                All Courses
              </Link>
            </Button>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
              <Link to="/courses/intermediate">
                Next Course: Intermediate Bitcoin
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface CourseModuleProps {
  number: number;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  isUnlocked: boolean;
}

const CourseModule = ({ number, title, description, lessons, duration, isUnlocked }: CourseModuleProps) => (
  <div className="group">
    <div className="flex items-start">
      <div className="min-w-8 h-8 flex items-center justify-center bg-muted rounded-full mr-3 text-sm font-medium">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium">{title}</h3>
          {isUnlocked ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Lock size={16} className="text-muted-foreground" />
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <div className="flex items-center mr-4">
            <Video size={14} className="mr-1" />
            {lessons} lessons
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {duration}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BeginnersCoursePage;
