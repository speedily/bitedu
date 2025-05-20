
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, FileQuestion, MessageCircle, BookOpen, Video, HeartHandshake } from "lucide-react";
import { Link } from 'react-router-dom';

const HelpPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Help Center";
    
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to your questions and get the support you need
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-muted rounded-lg p-6 md:p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">How can we help you today?</h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
                      <Link to="/contact">Contact Support</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/resources/faq">View FAQs</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-48 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=600&auto=format&fit=crop&q=80" 
                    alt="Help center illustration" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute -right-24 -top-24 w-64 h-64 bg-bitcoin/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-bitcoin/10 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-bitcoin" />
                    Getting Started
                  </CardTitle>
                  <CardDescription>New to BitEdu? Start here</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="hover:text-bitcoin transition-colors">
                      <Link to="/courses/beginners">Beginner Courses Overview</Link>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <Link to="/learn/basics">Understanding Bitcoin Basics</Link>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <Link to="/learn/wallets">Setting Up Your First Wallet</Link>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <Link to="/resources/glossary">Bitcoin Terminology Guide</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-bitcoin" />
                    Course Problems
                  </CardTitle>
                  <CardDescription>Help with courses and content</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Video Playback Issues</a>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Course Progress Not Saving</a>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Missing Course Materials</a>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Certificate Problems</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeartHandshake className="h-5 w-5 text-bitcoin" />
                    Account & Billing
                  </CardTitle>
                  <CardDescription>Manage your account and payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Change Password</a>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Update Payment Method</a>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Subscription Options</a>
                    </li>
                    <li className="hover:text-bitcoin transition-colors">
                      <a href="#">Delete Account</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <Tabs defaultValue="general" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is BitEdu?</AccordionTrigger>
                    <AccordionContent>
                      BitEdu is an online education platform dedicated to teaching Bitcoin concepts and technologies in an accessible, engaging way. We offer courses ranging from beginner to advanced levels, covering topics from basic Bitcoin understanding to technical development.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do I need any prior knowledge to start learning?</AccordionTrigger>
                    <AccordionContent>
                      Not at all! Our courses are designed for learners of all levels. Our beginner courses require no prior knowledge of Bitcoin or cryptocurrencies, while our advanced courses naturally build upon more fundamental concepts.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Are the courses free?</AccordionTrigger>
                    <AccordionContent>
                      We offer a mix of free and premium content. Many introductory materials and basic courses are free to access, while more specialized and advanced courses may require a subscription or one-time payment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I track my progress?</AccordionTrigger>
                    <AccordionContent>
                      When you create an account and log in, we automatically track your progress through courses. You can view your progress on your profile dashboard and pick up where you left off at any time.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="courses">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How long does each course take to complete?</AccordionTrigger>
                    <AccordionContent>
                      Course duration varies widely depending on the topic and depth. Beginner courses might take 2-4 hours to complete, while more comprehensive courses could take several weeks if followed at a recommended pace of 1-2 hours per day.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do I receive a certificate upon completion?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Upon successful completion of a course, you'll receive a digital certificate that you can share on your social media profiles or include in your resume.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I access course materials offline?</AccordionTrigger>
                    <AccordionContent>
                      Many course materials, such as reading materials and exercises, can be downloaded for offline use. However, video content and interactive elements typically require an internet connection.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What if I have questions during a course?</AccordionTrigger>
                    <AccordionContent>
                      Each course has a dedicated discussion forum where you can ask questions. Our instructors and community members actively participate in these forums to provide assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="technical">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What devices and browsers are supported?</AccordionTrigger>
                    <AccordionContent>
                      BitEdu works on all modern browsers (Chrome, Firefox, Safari, Edge) and devices (desktop, tablet, mobile). For the best experience, we recommend using the latest version of Chrome or Firefox on a desktop or laptop.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Are there any technical requirements for the courses?</AccordionTrigger>
                    <AccordionContent>
                      Basic courses have minimal requirements beyond a stable internet connection. More advanced technical courses might require specific software installations or hardware capabilities, which will be clearly indicated in the course prerequisites.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I report technical issues?</AccordionTrigger>
                    <AccordionContent>
                      If you encounter any technical problems, please visit our Contact Support page and submit a detailed description of the issue. Include information about your device, browser, and steps to reproduce the problem for faster resolution.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is my personal data secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your private information with third parties without your explicit consent. Please see our Privacy Policy for more details.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available to assist you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/feedback">
                  <FileQuestion className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpPage;
