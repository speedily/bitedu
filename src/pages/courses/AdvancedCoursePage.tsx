
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Clock, Award, BookOpen, Video, Check, Lock, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const AdvancedCoursePage = () => {
  const { isAuthenticated, user } = useAuth();
  const courseId = "advanced-course";

  // Calculate user progress for this course
  const userProgress = isAuthenticated && user?.progress?.[courseId]
    ? user.progress[courseId].points
    : 0;

  useEffect(() => {
    document.title = "BitEdu - Advanced Bitcoin";
    
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
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Advanced Bitcoin</h1>
              <p className="text-lg text-muted-foreground mb-6">
                An in-depth exploration of Bitcoin's technical foundations, development, and future possibilities for experienced users.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-muted-foreground" />
                  <span>12 hours</span>
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
              
              <Card className="mb-8 border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="text-amber-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-medium mb-1">Advanced material</h3>
                      <p className="text-sm text-amber-700">
                        This course contains advanced technical concepts and assumes prior knowledge of Bitcoin fundamentals and 
                        intermediate concepts. We recommend completing the Beginners and Intermediate courses first.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
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
                  This advanced course delves deep into Bitcoin's technical architecture, cryptographic foundations, 
                  consensus mechanisms, and cutting-edge developments. Designed for those with a solid understanding of Bitcoin, 
                  this course will take you through complex topics and equip you with expert-level knowledge.
                </p>
                <p>
                  By the end of this course, you'll understand the intricate technical details of Bitcoin development, 
                  be familiar with current research areas, and have the knowledge to contribute to the Bitcoin ecosystem 
                  through development, research, or informed participation.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">What You'll Learn</h2>
                <ul>
                  <li>Bitcoin's cryptographic fundamentals in depth</li>
                  <li>Advanced consensus mechanisms and game theory</li>
                  <li>Bitcoin script and smart contract capabilities</li>
                  <li>Bitcoin Core codebase and protocol development</li>
                  <li>Layer 2 and Layer 3 technologies: Lightning, Liquid, RGB, and more</li>
                  <li>Bitcoin Improvement Proposals (BIPs) and the soft fork upgrade process</li>
                  <li>Advanced economic theories and long-term security model</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Who Is This Course For?</h2>
                <ul>
                  <li>Developers interested in contributing to Bitcoin</li>
                  <li>Technical professionals seeking deep blockchain understanding</li>
                  <li>Researchers focusing on cryptocurrency and distributed systems</li>
                  <li>Bitcoin enthusiasts who want to master all technical aspects</li>
                  <li>Security professionals working with cryptocurrency</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Prerequisites</h2>
                <p>
                  This course requires:
                </p>
                <ul>
                  <li>Solid understanding of Bitcoin fundamentals and intermediate concepts</li>
                  <li>Familiarity with basic cryptography concepts</li>
                  <li>Understanding of networking principles</li>
                  <li>Some programming knowledge (examples will use Python and C++)</li>
                  <li>Completion of our Intermediate Bitcoin course (or equivalent knowledge)</li>
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>6 modules • 22 lessons • 12 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <CourseModule 
                      number={1}
                      title="Cryptographic Foundations"
                      description="Deep dive into elliptic curve cryptography and hashing"
                      lessons={4}
                      duration="2h 30m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={2}
                      title="Consensus Mechanisms"
                      description="Proof-of-work, difficulty adjustment, and fork handling"
                      lessons={3}
                      duration="2h"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={3}
                      title="Bitcoin Script & Smart Contracts"
                      description="Advanced script operations and contract design"
                      lessons={4}
                      duration="2h 15m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={4}
                      title="Protocol Development"
                      description="Bitcoin Core codebase and contribution process"
                      lessons={4}
                      duration="2h 45m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={5}
                      title="Layer 2 & Layer 3 Technologies"
                      description="Lightning Network internals and beyond"
                      lessons={4}
                      duration="2h 30m"
                      isUnlocked={isAuthenticated}
                    />
                    
                    <Separator />
                    
                    <CourseModule 
                      number={6}
                      title="Advanced Bitcoin Economics"
                      description="Game theory and long-term security models"
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
          
          <Button variant="outline" asChild className="mb-8">
            <Link to="/courses/intermediate">
              <ChevronLeft size={16} className="mr-2" />
              Previous: Intermediate Bitcoin
            </Link>
          </Button>
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

export default AdvancedCoursePage;
