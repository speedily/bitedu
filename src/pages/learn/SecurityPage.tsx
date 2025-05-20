
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, Info, Calendar, ChevronLeft, ShieldAlert, Eye, Lock, BrainCircuit, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import ConfettiExplosion from '@/components/rewards/ConfettiExplosion';
import { Progress } from "@/components/ui/progress";

const SecurityPage = () => {
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    document.title = "BitEdu - Bitcoin Security";
    
    // Add skip-to-content functionality for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-bitcoin focus:outline-none focus:shadow-lg';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
    
    // Set initial progress from localStorage or default to 0
    const savedProgress = localStorage.getItem('bitcoin-security-progress');
    if (savedProgress) {
      setProgress(parseInt(savedProgress, 10));
    }
    
    // Check if lesson was previously completed
    const lessonStatus = localStorage.getItem('bitcoin-security-completed');
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
        localStorage.setItem('bitcoin-security-progress', currentProgress.toString());
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
    localStorage.setItem('bitcoin-security-completed', 'true');
    localStorage.setItem('bitcoin-security-progress', '100');
    
    toast({
      title: "Lesson Completed! 🎉",
      description: "You've earned 75 BitEdu points and an NFT reward for completing this advanced security lesson!",
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
              <h1 className="text-3xl md:text-4xl font-bold">Bitcoin Security</h1>
            </div>
            <div className="flex items-center mt-4 sm:mt-0 space-x-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>Updated May 10, 2024</span>
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
                    This guide covers essential security practices for protecting your bitcoin, common threats to be aware of, 
                    and strategies for keeping your investments safe.
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
                src="https://www.youtube.com/embed/POXhTSHoVG4?si=UulKw_V8EhX16rHk" 
                title="Bitcoin Security Best Practices" 
                className="w-full h-full" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <p className="text-sm text-muted-foreground">
              This video covers essential security practices to protect your bitcoin holdings.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Importance of Bitcoin Security</h2>
            <p>
              While Bitcoin itself is secure by design, how you manage your bitcoin can introduce vulnerabilities. 
              Unlike traditional financial systems, Bitcoin transactions are irreversible and there's no central authority to recover lost or stolen funds. 
              You are your own bank—with all the responsibility that entails.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <div className="flex items-start">
                <ShieldAlert className="text-amber-600 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-medium mb-2 text-amber-800">Remember:</h3>
                  <p className="text-amber-700">
                    When it comes to Bitcoin, if you lose your private keys or someone else gains access to them, 
                    you could permanently lose access to your funds. There's no "forgot password" button or customer support to call.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Diagram 1 - Bitcoin Security Layers */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Bitcoin Security Layers</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/bitedu/refs/heads/main/src/images/layersofblockchain.png" 
                  alt="Bitcoin Security Layers" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  A visualization of the different security layers for protecting bitcoin, from basic to advanced measures. Read more https://zebpay.com/in/blog/what-is-blockchain-layer-0-1-2-and-3
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Common Bitcoin Security Threats</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-muted rounded-lg mr-4">
                  <Eye className="text-bitcoin" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phishing Attacks</h3>
                  <p>
                    Attackers create fake websites, emails, or messages that mimic legitimate services to trick you into revealing 
                    your private keys or seed phrases. Always verify the URL and be wary of unsolicited communications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-muted rounded-lg mr-4">
                  <Lock className="text-bitcoin" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Malware</h3>
                  <p>
                    Malicious software can monitor your clipboard for Bitcoin addresses and replace them with the attacker's address 
                    when you paste. It can also steal keys stored on your device. Keep your operating system and antivirus up to date.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-muted rounded-lg mr-4">
                  <BrainCircuit className="text-bitcoin" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Engineering</h3>
                  <p>
                    Scammers may pose as support staff or community members to gain your trust and manipulate you into 
                    revealing sensitive information. Be skeptical of anyone asking for your private keys or seed phrase.
                  </p>
                </div>
              </div>
            </div>

            {/* Diagram 2 - Bitcoin Wallet Security Comparison */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Bitcoin Wallet Security Comparison</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/bitedu/refs/heads/main/src/images/BitcoinWalletSecurityComparison.png" 
                  alt="Bitcoin Wallet Security Comparison" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  Comparison of different wallet types and their security levels, from most accessible to most secure. Read More https://www.rapidinnovation.io/post/cryptocurrency-wallet-security-best-practices-and-tips
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Best Practices for Bitcoin Security</h2>
            
            <h3 className="text-xl font-bold mb-3">1. Secure Storage</h3>
            <ul>
              <li>
                <strong>Use Hardware Wallets:</strong> For significant amounts of bitcoin, hardware wallets like Ledger or Trezor provide the highest security by keeping private keys offline.
              </li>
              <li>
                <strong>Consider Cold Storage:</strong> For long-term holdings, cold storage solutions (completely offline) offer excellent protection against online threats.
              </li>
              <li>
                <strong>Separate Funds:</strong> Consider using different wallets for different purposes—a small amount in a mobile wallet for everyday transactions and larger holdings in cold storage.
              </li>
            </ul>

            {/* Diagram 3 - Multi-Signature Security */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Multi-Signature Security</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/bitedu/refs/heads/main/src/images/how_multisig_wallets_work.webp" 
                  alt="Multi-Signature Security" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  How multi-signature addresses work, requiring multiple private keys to authorize a transaction. Read More https://bitcoinmagazine.com/guides/what-is-a-multisignature-wallet 
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 mt-6">2. Backup Strategies</h3>
            <ul>
              <li>
                <strong>Create Redundant Backups:</strong> Store copies of your seed phrase in multiple secure locations to protect against physical damage or loss.
              </li>
              <li>
                <strong>Use Durable Materials:</strong> Consider metal seed phrase storage for resistance to fire, water, and other physical damage.
              </li>
              <li>
                <strong>Test Recovery:</strong> Periodically verify that you can recover your wallet using your backup materials.
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mb-3 mt-6">3. Advanced Security Measures</h3>
            <ul>
              <li>
                <strong>Multi-signature Setups:</strong> Configure wallets to require multiple private keys to authorize transactions, distributing the security risk.
              </li>
              <li>
                <strong>Time-locked Transactions:</strong> For large holdings, consider using Bitcoin's time-lock feature to prevent immediate spending.
              </li>
              <li>
                <strong>Inheritance Planning:</strong> Set up a secure way for trusted heirs to access your bitcoin in case something happens to you.
              </li>
            </ul>

            {/* Diagram 4 - Seed Phrase Security */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Seed Phrase Security</h3>
              <div className="bg-muted p-6 rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/speedily/bitedu/refs/heads/main/src/images/WhatIsASeedPhrase.webp" 
                  alt="Seed Phrase Security" 
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  Best practices for securing your seed phrase and why it's critical to keep it safe. Read more https://transak.com/blog/what-is-a-seed-phrase-and-how-does-it-secure-your-cryptocurrency
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Operational Security (OpSec)</h2>
            <p>
              Beyond technical measures, how you operate also affects your security:
            </p>
            <ul>
              <li>
                <strong>Maintain Privacy:</strong> Be cautious about revealing how much bitcoin you own or details about your security setup.
              </li>
              <li>
                <strong>Use Secure Networks:</strong> Avoid conducting Bitcoin transactions over public Wi-Fi networks.
              </li>
              <li>
                <strong>Verify Transactions:</strong> Always double-check addresses before sending bitcoin, preferably using multiple devices or methods.
              </li>
              <li>
                <strong>Use a Dedicated Device:</strong> Consider having a separate device exclusively for managing significant bitcoin holdings.
              </li>
            </ul>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Exchange Security</h2>
            <p>
              If you use cryptocurrency exchanges:
            </p>
            <ul>
              <li>
                <strong>Choose Reputable Exchanges:</strong> Research the security track record and practices of any exchange you use.
              </li>
              <li>
                <strong>Enable All Security Features:</strong> Use two-factor authentication, email confirmations, and withdrawal whitelisting.
              </li>
              <li>
                <strong>Limit Exchange Holdings:</strong> Only keep on exchanges what you actively trade, withdrawing the rest to self-custody.
              </li>
              <li>
                <strong>Regular Withdrawals:</strong> Don't let large balances accumulate on exchanges—withdraw to your secure wallets regularly.
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button variant="outline" asChild>
              <Link to="/learn/wallets">
                <ChevronLeft size={16} className="mr-2" />
                Previous: Bitcoin Wallets
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
                <Link to="/learn/transactions">
                  Next: Bitcoin Transactions
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

export default SecurityPage;
