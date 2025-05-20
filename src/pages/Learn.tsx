
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Sparkles, BookOpen, Star, Check } from 'lucide-react';
import AchievementBadge from '@/components/rewards/AchievementBadge';
import ConfettiExplosion from '@/components/rewards/ConfettiExplosion';
import { Link } from 'react-router-dom';

const Learn = () => {
  const { toast } = useToast();
  const [showAchievement, setShowAchievement] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [achievementTitle, setAchievementTitle] = useState('');
  const [modules, setModules] = useState([
    { id: 1, title: "What is Bitcoin?", progress: 0, locked: false, completed: false },
    { id: 2, title: "The Blockchain Explained", progress: 0, locked: true, completed: false },
    { id: 3, title: "Bitcoin Wallets", progress: 0, locked: true, completed: false },
    { id: 4, title: "Making Transactions", progress: 0, locked: true, completed: false },
    { id: 5, title: "Security Best Practices", progress: 0, locked: true, completed: false },
  ]);
  
  const [activeModule, setActiveModule] = useState(modules[0]);

  const handleStartLesson = (moduleId: number) => {
    if (moduleId === 1) {
      setAchievementTitle('First Lesson Started!');
      setShowAchievement(true);
      
      toast({
        title: "First Lesson Started! 🎉",
        description: "You're on your way to understanding Bitcoin fundamentals.",
        variant: "default",
      });
    }
  };

  const handleMarkFinish = () => {
    // Update the module's progress and completion status
    const updatedModules = modules.map(module => 
      module.id === activeModule.id 
        ? { ...module, progress: 100, completed: true }
        : module
    );
    
    // If this is the first module, unlock the second one
    if (activeModule.id === 1) {
      updatedModules[1].locked = false;
    }
    
    setModules(updatedModules);
    setShowConfetti(true);
    
    // Update the active module to reflect completion
    setActiveModule({...activeModule, progress: 100, completed: true});
    
    toast({
      title: "Module Completed! 🎉",
      description: `You've finished "${activeModule.title}" and earned 50 BitEdu points!`,
      variant: "default",
    });
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Learning path sidebar */}
            <div className="md:w-1/3">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-bitcoin" />
                    Learning Path
                  </CardTitle>
                  <CardDescription>Bitcoin Fundamentals Course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {modules.map((module) => (
                      <div 
                        key={module.id}
                        className={`p-3 rounded-lg border transition-colors ${
                          activeModule.id === module.id 
                            ? 'bg-bitcoin/5 border-bitcoin' 
                            : 'bg-white border-border hover:border-bitcoin/30'
                        } ${module.locked ? 'opacity-60' : 'cursor-pointer'}`}
                        onClick={() => !module.locked && setActiveModule(module)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium text-sm flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                              {module.completed ? <Check size={12} className="text-green-600" /> : module.id}
                            </div>
                            {module.title}
                          </div>
                          {module.locked && (
                            <div className="text-muted-foreground">
                              🔒
                            </div>
                          )}
                        </div>
                        <Progress value={module.progress} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div className="md:w-2/3">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{activeModule.title}</h1>
                <p className="text-muted-foreground">
                  Learn the fundamentals and build a solid foundation for your Bitcoin knowledge.
                </p>
              </div>
              
              <Card className="mb-8 border-border">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <iframe 
                      src="https://www.youtube-nocookie.com/embed/s4g1XFU8Gto?rel=0" 
                      title="Bitcoin Basics" 
                      className="absolute inset-0 w-full h-full" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Lesson Overview</h2>
                  <div className="space-y-4">
                    <p>
                      In this lesson, we'll introduce you to Bitcoin - what it is, how it works at a high level, 
                      and why it's important. You'll learn the basic concepts without getting overwhelmed by 
                      technical details.
                    </p>
                    <p>
                      By the end of this lesson, you'll understand:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>What makes Bitcoin different from traditional money</li>
                      <li>The basic problem Bitcoin solves</li>
                      <li>How to explain Bitcoin to friends and family in simple terms</li>
                      <li>Why Bitcoin has value</li>
                    </ul>
                  </div>
                </div>
                
                {/* Key Diagrams */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Key Diagrams</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="border-border">
                      <CardHeader className="pb-0">
                        <CardTitle className="text-lg">Bitcoin Network</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9Ka6ljT3yJQ84iVVQQXntQ.png" 
                            alt="Bitcoin Network" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          The decentralized nature of the Bitcoin network
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border">
                      <CardHeader className="pb-0">
                        <CardTitle className="text-lg">Bitcoin Supply</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://miro.medium.com/v2/resize:fit:1400/1*yGcwp5PtwDmkrX2FafYFHg.png" 
                            alt="Bitcoin Supply" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          Bitcoin's fixed supply schedule over time
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border">
                      <CardHeader className="pb-0">
                        <CardTitle className="text-lg">Blockchain Structure</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://bitcoin.org/img/dev/en-blockchain-overview.svg" 
                            alt="Blockchain Structure" 
                            className="w-full h-full object-contain bg-white"
                          />
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          How blocks connect in a chain to form the blockchain
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border">
                      <CardHeader className="pb-0">
                        <CardTitle className="text-lg">Transaction Flow</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://www.investopedia.com/thmb/DgmKuK6aoY6Jw3P4eox-oMEMvh0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg" 
                            alt="Transaction Flow" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          How Bitcoin transactions are processed and verified
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Interactive Elements</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="border-border hover:border-bitcoin/30 transition-all cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-bitcoin" />
                          Interactive Quiz
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Test your knowledge with a quick 5-question quiz about Bitcoin basics.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Start Quiz</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-border hover:border-bitcoin/30 transition-all cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Star className="h-5 w-5 text-bitcoin" />
                          Practice Activity
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Try a simulated Bitcoin transaction to see how the process works.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Try Activity</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                {activeModule.completed ? (
                  <Button 
                    disabled 
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Check className="mr-2 h-5 w-5" />
                    Module Completed
                  </Button>
                ) : (
                  <Button 
                    className="bg-bitcoin hover:bg-bitcoin-dark text-white"
                    onClick={handleMarkFinish}
                  >
                    Mark as Complete
                  </Button>
                )}
                
                <Button 
                  className="bg-bitcoin hover:bg-bitcoin-dark text-white"
                >
                  <Link to="/learn/basics">Continue to Lesson</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <AchievementBadge 
        title={achievementTitle}
        show={showAchievement}
        onClose={() => setShowAchievement(false)}
      />
      
      {showConfetti && <ConfettiExplosion />}
    </div>
  );
};

export default Learn;
