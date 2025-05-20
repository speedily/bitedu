
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Code, LinkIcon, BookOpen, FileCode } from 'lucide-react';

const ExSatCoursePage = () => {
  useEffect(() => {
    document.title = "BitEdu - exSat Network Course";
    
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
              <span>exSat Network</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">exSat Network</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Learn about the exSat protocol, a Layer 2 scaling solution for Bitcoin with expressive smart contracts.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Difficulty</p>
                <p className="font-medium">Advanced</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">4 Hours</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Topics</p>
                <p className="font-medium">6 Modules</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Source</p>
                <p className="font-medium">exSat.network</p>
              </div>
            </div>
            
            <p className="mb-4">
              exSat is a Bitcoin Layer 2, bringing expressive smart contracts to Bitcoin. This course will introduce you to the exSat protocol and how to build applications with it.
            </p>
            
            <p className="mb-8">
              You'll learn about the architecture, how to write and deploy contracts, and how to interact with the exSat network.
            </p>
          </div>
          
          <Tabs defaultValue="introduction" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="introduction">Introduction</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="introduction" className="space-y-6">
              <ModuleCard 
                title="Introduction to exSat"
                description="Learn about the exSat network and architecture"
                link="https://exsat.network/"
                icon={<BookOpen size={24} />}
                lessons={[
                  "What is exSat and how it scales Bitcoin",
                  "Layer 2 architecture overview",
                  "exSat's expressive smart contract platform",
                  "Comparing exSat to other Bitcoin scaling solutions",
                  "How exSat enhances Bitcoin's functionality"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="development" className="space-y-6">
              <ModuleCard 
                title="exSat Development"
                description="Learn how to develop applications using exSat"
                link="https://docs.exsat.network/"
                icon={<Code size={24} />}
                lessons={[
                  "Setting up a development environment",
                  "Writing exSat smart contracts",
                  "Testing and deploying contracts",
                  "Interacting with the exSat network",
                  "Building dApps with exSat"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-bitcoin"><LinkIcon size={24} /></span>
                    exSat Learning Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Official exSat Documentation</h3>
                    <p className="text-muted-foreground mb-2">Comprehensive guide to the exSat network</p>
                    <a href="https://docs.exsat.network/" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      View Documentation <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">exSat GitHub Repository</h3>
                    <p className="text-muted-foreground mb-2">Source code and development resources</p>
                    <a href="https://github.com/exsat-network" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      Visit GitHub Repository <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Official exSat Website</h3>
                    <p className="text-muted-foreground mb-2">Latest information and updates about exSat</p>
                    <a href="https://exsat.network/" target="_blank" rel="noopener noreferrer" className="text-bitcoin flex items-center hover:underline">
                      Visit exSat Website <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-6">
              <ModuleCard 
                title="exSat Development Tools"
                description="Essential tools for building on exSat"
                link="https://faucet.exsat.network/"
                icon={<FileCode size={24} />}
                lessons={[
                  "exSat Faucet for testnet tokens",
                  "Development environment setup",
                  "Contract deployment tools",
                  "Debugging and testing utilities",
                  "Network monitoring tools"
                ]}
              />
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
        View resource <ExternalLink size={14} className="ml-1" />
      </a>
    </CardContent>
  </Card>
);

export default ExSatCoursePage;
