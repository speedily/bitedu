
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

const IntermediateCoursePage = () => {
  const { isAuthenticated, user } = useAuth();
  const courseId = "intermediate-course";

  // Calculate user progress for this course
  const userProgress = isAuthenticated && user?.progress?.[courseId]
    ? user.progress[courseId].points
    : 0;

  useEffect(() => {
    document.title = "BitEdu - Intermediate Bitcoin";
    
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
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Intermediate Bitcoin</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Take your Bitcoin knowledge to the next level with deeper insights into technical concepts and practical applications.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-muted-foreground" />
                  <span>10 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-muted-foreground" />
                  <span>5 modules</span>
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
                  This intermediate course is designed for those who already understand the basics of Bitcoin and want to deepen their knowledge.
                  We'll explore more technical aspects of how Bitcoin works under the hood, advanced security techniques, and practical ways to 
                  integrate Bitcoin into your life.
                </p>
                <p>
                  By the end of this course, you'll have a comprehensive understanding of Bitcoin's technical architecture, be familiar with various 
                  scaling solutions, understand advanced wallet techniques, and know how to analyze on-chain metrics.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">What You'll Learn</h2>
                <ul>
                  <li>Detailed understanding of Bitcoin's protocol and network</li>
                  <li>Advanced transaction types and script functionality</li>
                  <li>The Lightning Network and other scaling solutions</li>
                  <li>Bitcoin privacy techniques and considerations</li>
                  <li>Multi-signature wallets and advanced security setups</li>
                  <li>How to read and interpret blockchain data</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Who Is This Course For?</h2>
                <ul>
                  <li>Bitcoin users who understand the basics and want to build deeper knowledge</li>
                  <li>Developers curious about blockchain technology</li>
                  <li>Investors seeking to better understand the technical aspects of Bitcoin</li>
                  <li>Professionals working in related industries</li>
                  <li>Anyone who has completed the Bitcoin for Beginners course</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Prerequisites</h2>
                <p>
                  To get the most out of this course, you should already:
                </p>
                <ul>
                  <li>Understand what Bitcoin is and how blockchain works at a basic level</li>
                  <li>Have experience using a Bitcoin wallet</li>
                  <li>Know how to perform basic transactions</li>
                  <li>Be familiar with common terms like private keys, addresses, and mining</li>
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>5 modules • 16 lessons • 10 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <CourseModule 
                      number={1}
                      title="Bitcoin Protocol Deep Dive"
                      description="Understanding Bitcoin's underlying technology"
                      lessons={4}
                      duration="2h 30m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={2}
                      title="Advanced Transactions"
                      description="Script, SegWit, and transaction types"
                      lessons={3}
                      duration="2h 15m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={3}
                      title="The Lightning Network"
                      description="Bitcoin's layer 2 scaling solution"
                      lessons={3}
                      duration="1h 45m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={4}
                      title="Advanced Security Techniques"
                      description="Multi-signature wallets and secure setups"
                      lessons={3}
                      duration="1h 30m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={5}
                      title="Bitcoin Privacy"
                      description="Techniques and considerations for privacy"
                      lessons={3}
                      duration="2h"
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
              <Link to="/courses/beginners">
                <ChevronLeft size={16} className="mr-2" />
                Previous: Bitcoin for Beginners
              </Link>
            </Button>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
              <Link to="/courses/advanced">
                Next Course: Advanced Bitcoin
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

export default IntermediateCoursePage;
