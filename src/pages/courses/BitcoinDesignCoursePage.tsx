
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Wallet, Shield, Share2, LifeBuoy, Blocks, ListChecks } from 'lucide-react';

const BitcoinDesignCoursePage = () => {
  useEffect(() => {
    document.title = "BitEdu - Bitcoin Design Course";
    
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
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center mb-4 text-muted-foreground text-sm">
              <Link to="/courses" className="hover:text-bitcoin transition-colors">Courses</Link>
              <span className="mx-2">/</span>
              <span>Bitcoin Design</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Bitcoin Design Course</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Learn how to design intuitive, secure, and user-friendly Bitcoin wallets and applications based on the Bitcoin Design Guide principles.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Difficulty</p>
                <p className="font-medium">Intermediate</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">8 Weeks</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Topics</p>
                <p className="font-medium">7 Modules</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Source</p>
                <p className="font-medium">Bitcoin Design</p>
              </div>
            </div>
            
            <p className="mb-4">
              This course explores the principles and best practices of Bitcoin wallet design, based on the <a href="https://bitcoin.design/guide/" target="_blank" rel="noopener noreferrer" className="text-bitcoin hover:underline">Bitcoin Design Guide</a>, a comprehensive resource created by the Bitcoin Design Community.
            </p>
            
            <p className="mb-8">
              You'll learn how to create different types of Bitcoin wallets, each tailored to specific user needs, while adhering to security best practices and providing an excellent user experience.
            </p>
          </div>
          
          <Tabs defaultValue="daily" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8">
              <TabsTrigger value="daily">Daily Spending</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
              <TabsTrigger value="upgradeable">Upgradeable</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
              <TabsTrigger value="multiple">Multiple</TabsTrigger>
              <TabsTrigger value="inheritance">Inheritance</TabsTrigger>
              <TabsTrigger value="principles">Design Principles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="space-y-6">
              <ModuleCard 
                title="Daily Spending Wallet Design"
                description="Learn how to design wallets optimized for everyday Bitcoin transactions"
                link="https://bitcoin.design/guide/daily-spending-wallet/"
                icon={<Wallet size={24} />}
                lessons={[
                  "User needs for daily spending",
                  "Balance between security and convenience",
                  "Transaction management UI",
                  "Fee estimation interfaces",
                  "QR code implementation for payments"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="savings" className="space-y-6">
              <ModuleCard 
                title="Savings Wallet Design"
                description="Design secure wallets focused on long-term Bitcoin storage"
                link="https://bitcoin.design/guide/savings-wallet/"
                icon={<Shield size={24} />}
                lessons={[
                  "Cold storage fundamentals",
                  "Security-first interface design",
                  "Backup and recovery workflows",
                  "Multi-signature implementation",
                  "Hardware wallet integration"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="upgradeable" className="space-y-6">
              <ModuleCard 
                title="Upgradeable Wallet Design"
                description="Create wallets that can evolve with users' changing needs"
                link="https://bitcoin.design/guide/upgradeable-wallet/"
                icon={<Blocks size={24} />}
                lessons={[
                  "Progressive security models",
                  "Feature discovery interfaces",
                  "Guided upgrade paths",
                  "User education elements",
                  "Transitioning between wallet types"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="shared" className="space-y-6">
              <ModuleCard 
                title="Shared Wallet Design"
                description="Design wallets for collaborative Bitcoin management"
                link="https://bitcoin.design/guide/shared-wallet/"
                icon={<Share2 size={24} />}
                lessons={[
                  "Multi-user access controls",
                  "Collaborative transaction workflows",
                  "Activity tracking and transparency",
                  "Permission management interfaces",
                  "Account recovery options"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="multiple" className="space-y-6">
              <ModuleCard 
                title="Multiple Wallets Design"
                description="Create interfaces that manage several Bitcoin wallets seamlessly"
                link="https://bitcoin.design/guide/multiple-wallets/"
                icon={<ListChecks size={24} />}
                lessons={[
                  "Wallet organization strategies",
                  "Multi-wallet navigation patterns",
                  "Unified view implementations",
                  "Cross-wallet transfers",
                  "Contextual switching interfaces"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="inheritance" className="space-y-6">
              <ModuleCard 
                title="Inheritance Wallet Design"
                description="Design wallets with built-in inheritance planning features"
                link="https://bitcoin.design/guide/inheritance-wallet/"
                icon={<LifeBuoy size={24} />}
                lessons={[
                  "Time-locked inheritance mechanisms",
                  "Beneficiary management interfaces",
                  "Secret sharing implementations",
                  "Emergency access workflows",
                  "Legal considerations in wallet design"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="principles" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-bitcoin">📐</span>
                    Core Bitcoin Design Principles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Security First</h3>
                    <p className="text-muted-foreground">Implement secure-by-design practices that protect users' funds while maintaining usability</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Educational Integration</h3>
                    <p className="text-muted-foreground">Design interfaces that help users understand Bitcoin concepts as they interact with them</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Progressive Disclosure</h3>
                    <p className="text-muted-foreground">Reveal complexity gradually as users become more comfortable with basic functionality</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Empowering Control</h3>
                    <p className="text-muted-foreground">Give users appropriate control over their funds while preventing costly mistakes</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Accessibility</h3>
                    <p className="text-muted-foreground">Design for all users regardless of technical expertise, abilities, or background</p>
                  </div>
                  
                  <div className="pt-4">
                    <a href="https://bitcoin.design/guide/" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      Visit the Bitcoin Design Guide <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface ModuleCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  lessons: string[];
}

const ModuleCard = ({ title, description, link, icon, lessons }: ModuleCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <span className="text-bitcoin">{icon}</span>
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <h3 className="font-medium mb-3">Key Topics:</h3>
      <ul className="space-y-2 mb-6">
        {lessons.map((lesson, index) => (
          <li key={index} className="flex items-start">
            <span className="text-bitcoin mr-2">•</span>
            <span className="text-muted-foreground">{lesson}</span>
          </li>
        ))}
      </ul>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
        View complete module <ExternalLink size={14} className="ml-1" />
      </a>
    </CardContent>
  </Card>
);

export default BitcoinDesignCoursePage;
