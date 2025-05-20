
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, BookOpen, Code, Layers, LinkIcon } from 'lucide-react';

const StacksPrimerCoursePage = () => {
  useEffect(() => {
    document.title = "BitEdu - Stacks Primer Course";
    
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
              <span>Stacks Primer</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Stacks Primer</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Introduction to Stacks blockchain, smart contracts for Bitcoin, and building applications on Bitcoin.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Difficulty</p>
                <p className="font-medium">Intermediate</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">5 Hours</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Topics</p>
                <p className="font-medium">8 Modules</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Source</p>
                <p className="font-medium">Stacks.org</p>
              </div>
            </div>
            
            <p className="mb-4">
              Stacks is a platform that enables smart contracts and decentralized applications to be built on Bitcoin. This course explores the fundamentals of Stacks and how to build with it.
            </p>
            
            <p className="mb-8">
              You'll learn about Proof of Transfer (PoX), Clarity smart contracts, and how Stacks connects to Bitcoin to provide a platform for building powerful, secure applications.
            </p>
          </div>
          
          <Tabs defaultValue="introduction" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="introduction">Introduction</TabsTrigger>
              <TabsTrigger value="clarity">Clarity Language</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="introduction" className="space-y-6">
              <ModuleCard 
                title="Introduction to Stacks"
                description="Learn about the Stacks blockchain and its connection to Bitcoin"
                link="https://stacks.org/dev"
                icon={<Layers size={24} />}
                lessons={[
                  "What is Stacks and how it works with Bitcoin",
                  "Proof of Transfer (PoX) consensus mechanism",
                  "Stacks 2.0 architecture overview",
                  "Stacks tokens and tokenomics",
                  "Building apps that harness Bitcoin's security"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="clarity" className="space-y-6">
              <ModuleCard 
                title="Clarity Smart Contract Language"
                description="Learn the Clarity language for writing secure Bitcoin smart contracts"
                link="https://docs.stacks.co/write-smart-contracts/overview"
                icon={<Code size={24} />}
                lessons={[
                  "Clarity language fundamentals",
                  "Predictable, decidable smart contracts",
                  "Writing and testing Clarity contracts",
                  "Security features of Clarity",
                  "Deploying contracts to the Stacks blockchain"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="development" className="space-y-6">
              <ModuleCard 
                title="Stacks Development"
                description="Build decentralized applications on Bitcoin using Stacks"
                link="https://www.stacks.co/build/get-started"
                icon={<BookOpen size={24} />}
                lessons={[
                  "Setting up a Stacks development environment",
                  "Building a full-stack dApp with Stacks.js",
                  "Working with the Stacks blockchain API",
                  "Implementing authentication with Stacks",
                  "Deploying your app to production"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-bitcoin"><LinkIcon size={24} /></span>
                    Stacks Learning Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">LearnWeb3 Stacks Developer Degree</h3>
                    <p className="text-muted-foreground mb-2">A comprehensive program to learn building on Stacks</p>
                    <a href="https://learnweb3.io/degrees/stacks-developer-degree/" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      View LearnWeb3 Stacks Developer Degree <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Stacks Documentation</h3>
                    <p className="text-muted-foreground mb-2">Official documentation for developers</p>
                    <a href="https://docs.stacks.co" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      View Stacks Documentation <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Stacks Hackathon Resources</h3>
                    <p className="text-muted-foreground mb-2">Resources for participating in Stacks hackathons</p>
                    <a href="https://stacksfoundation.notion.site/Stacks-Track-Bitcoin-Vegas-Hackathon-1ced6d1686088003a94afaaaae03ed69" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      View Hackathon Guide <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Stacks Developer Portal</h3>
                    <p className="text-muted-foreground mb-2">Central hub for all Stacks development resources</p>
                    <a href="https://stacks.org/dev" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      Visit Developer Portal <ExternalLink size={14} className="ml-1" />
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

export default StacksPrimerCoursePage;
