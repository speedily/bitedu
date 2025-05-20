
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, Info, Calendar, ChevronLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import ConfettiExplosion from '@/components/rewards/ConfettiExplosion';
import { Progress } from "@/components/ui/progress";

const BitcoinBasics = () => {
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "BitEdu - Bitcoin Basics";
    
    // Add skip-to-content functionality for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-bitcoin focus:outline-none focus:shadow-lg';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
    
    // Set initial progress from localStorage or default to 0
    const savedProgress = localStorage.getItem('bitcoin-basics-progress');
    if (savedProgress) {
      setProgress(parseInt(savedProgress, 10));
    }
    
    // Check if lesson was previously completed
    const lessonStatus = localStorage.getItem('bitcoin-basics-completed');
    if (lessonStatus === 'true') {
      setLessonCompleted(true);
    }
    
    return () => {
      skipLink.remove();
    };
  }, []);

  // Update progress as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const currentProgress = Math.min(Math.floor((scrollPosition / totalHeight) * 100), 80);
      
      if (currentProgress > progress && !lessonCompleted) {
        setProgress(currentProgress);
        localStorage.setItem('bitcoin-basics-progress', currentProgress.toString());
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [progress, lessonCompleted]);

  const handleMarkFinish = () => {
    setLessonCompleted(true);
    setShowConfetti(true);
    setProgress(100);
    localStorage.setItem('bitcoin-basics-completed', 'true');
    localStorage.setItem('bitcoin-basics-progress', '100');
    
    toast({
      title: "Lesson Completed! 🎉",
      description: "You've earned 50 BitEdu points and an NFT reward for completing this lesson!",
      variant: "default",
    });
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div>
              <Link to="/learn" className="text-sm text-muted-foreground hover:text-bitcoin flex items-center mb-2">
                <ChevronLeft size={16} className="mr-1" />
                Back to Learn
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">Bitcoin Basics</h1>
            </div>
            <div className="flex items-center mt-4 sm:mt-0 space-x-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>Updated May 15, 2024</span>
            </div>
          </div>
          
          {/* Progress Tracker */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Your Progress</span>
              <span className="text-sm text-bitcoin font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Info className="text-blue-600" size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-medium mb-2">What you'll learn</h2>
                  <p className="text-muted-foreground">
                    This guide covers the fundamental concepts of Bitcoin, how it works, why it was created, and its key features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Video Lesson</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/s4g1XFU8Gto" 
                title="Bitcoin Basics" 
                className="w-full h-full" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <p className="text-sm text-muted-foreground">
              This video provides an introduction to Bitcoin fundamentals and core concepts.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">What is Bitcoin?</h2>
            <p>
              Bitcoin is a decentralized digital currency that operates without a central authority or intermediaries. 
              It was introduced in 2008 by an anonymous person or group using the pseudonym Satoshi Nakamoto.
            </p>
            <p>
              Bitcoin allows users to send value directly to each other through a peer-to-peer network, 
              without the need for traditional financial institutions like banks. All transactions are recorded on a public ledger called the blockchain.
            </p>
            
            {/* Diagram 1 - Bitcoin Network Visualization */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Bitcoin Network Visualization</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/tcb/refs/heads/main/src/images/bitcoinnetworkvisualization.webp" 
                  alt="Bitcoin Network Diagram" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  Visualization of the decentralized Bitcoin network, showing peer-to-peer connections instead of a centralized structure. Read More https://medium.com/@DataLion_EN/visualizing-the-blockchain-the-7-most-beautiful-bitcoin-visualizations-a73f8e58fe40
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Key Characteristics of Bitcoin</h2>
            <ul className="space-y-4">
              <li>
                <strong>Decentralized:</strong> No single entity controls Bitcoin. The network is maintained by thousands of computers (nodes) around the world.
              </li>
              <li>
                <strong>Limited Supply:</strong> There will only ever be 21 million bitcoins. This scarcity is built into the protocol.
              </li>
              <li>
                <strong>Transparency:</strong> All transactions are recorded on the public blockchain, making it possible to verify transactions.
              </li>
              <li>
                <strong>Pseudonymous:</strong> While transactions are public, they are not tied to real-world identities by default.
              </li>
              <li>
                <strong>Immutable:</strong> Once confirmed, transactions cannot be reversed or tampered with.
              </li>
              <li>
                <strong>Divisible:</strong> Each bitcoin can be divided into 100 million units (called satoshis).
              </li>
            </ul>

            {/* Diagram 2 - Bitcoin Supply Schedule */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Bitcoin Supply Schedule</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/tcb/refs/heads/main/src/images/bitcoinsupply.webp" 
                  alt="Bitcoin Supply Schedule" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  The Bitcoin emission schedule showing the decreasing rate of new bitcoin creation over time, reaching the 21 million cap. Read More https://medium.com/@PhillipNunn/the-bitcoin-supply-curve-513554e6588d
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">How Bitcoin Works</h2>
            <p>
              Bitcoin transactions are conducted directly between users and verified by network nodes through cryptography. These transactions are recorded on the blockchain, which serves as a distributed ledger.
            </p>
            <p>
              When someone sends bitcoin, the transaction is broadcast to the network and collected into blocks. Miners compete to solve a complex mathematical problem to add a new block to the blockchain. This process is known as "mining" and requires significant computational power.
            </p>
            <p>
              Once a miner solves the problem, the new block is added to the blockchain, and the miner is rewarded with newly created bitcoins and transaction fees. This process occurs approximately every 10 minutes.
            </p>

            {/* Diagram 3 - Bitcoin Blockchain Structure */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Bitcoin Blockchain Structure</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/tcb/refs/heads/main/src/images/blockchainoverview.png" 
                  alt="Bitcoin Blockchain Structure" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  The structure of blocks in the Bitcoin blockchain, each containing a reference to the previous block, forming a chain. Read more https://bitcoin.org/en/how-it-works
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">The Bitcoin Blockchain</h2>
            <p>
              The blockchain is a chronological chain of blocks, each containing a batch of transactions. Every block includes a reference to the previous block, forming a chain that goes back to the very first block (known as the "genesis block").
            </p>
            <p>
              This structure makes the blockchain highly resistant to modification. Once a block is added, changing it would require redoing the work for that block and all subsequent blocks, which becomes increasingly difficult as the chain grows longer.
            </p>

            {/* Diagram 4 - Bitcoin Transaction Process */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Bitcoin Transaction Process</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/tcb/refs/heads/main/src/images/bitcointransaction.jpg" 
                  alt="Bitcoin Transaction Process" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  The step-by-step process of a Bitcoin transaction, from creation to verification and addition to the blockchain. 
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Getting Started with Bitcoin</h2>
            <p>
              To start using Bitcoin, you'll need a digital wallet to store, receive, and send bitcoins. Wallets can be software applications on your computer or mobile device, hardware devices, or even paper wallets.
            </p>
            <p>
              Once you have a wallet, you can acquire bitcoin through:
            </p>
            <ul>
              <li>Purchasing from cryptocurrency exchanges</li>
              <li>Receiving as payment for goods or services</li>
              <li>Mining (though this requires specialized equipment)</li>
              <li>Buying from Bitcoin ATMs</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button variant="outline" asChild>
              <Link to="/learn">
                <ChevronLeft size={16} className="mr-2" />
                Back to Learning
              </Link>
            </Button>

            <div className="flex gap-3">
              {lessonCompleted ? (
                <Button disabled className="bg-green-500 hover:bg-green-600 text-white">
                  <Check size={16} className="mr-2" />
                  Lesson Completed
                </Button>
              ) : (
                <Button 
                  className="bg-bitcoin hover:bg-bitcoin-dark text-white"
                  onClick={handleMarkFinish}
                >
                  Mark as Complete
                </Button>
              )}

              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
                <Link to="/learn/wallets">
                  Next: Bitcoin Wallets
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      {showConfetti && <ConfettiExplosion />}
      <Footer />
    </div>
  );
};

export default BitcoinBasics;
