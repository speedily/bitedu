
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, Info, Calendar, ChevronLeft, Wallet, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const WalletsPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Bitcoin Wallets";
    
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
        <div className="container max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <Link to="/learn" className="text-sm text-muted-foreground hover:text-bitcoin flex items-center mb-2">
                <ChevronLeft size={16} className="mr-1" />
                Back to Learn
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">Bitcoin Wallets</h1>
            </div>
            <div className="flex items-center mt-4 sm:mt-0 space-x-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>Updated May 12, 2024</span>
            </div>
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
                    This guide explains what Bitcoin wallets are, the different types available, and how to keep your bitcoin secure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">What is a Bitcoin Wallet?</h2>
            <p>
              A Bitcoin wallet is a digital tool that allows you to store, send, and receive bitcoin. Despite the name, wallets don't actually store bitcoins. 
              Instead, they store the cryptographic keys that give you access to your bitcoin on the blockchain.
            </p>
            <p>
              These keys come in pairs: a public key, which is like your address where others can send bitcoin to you, 
              and a private key, which is what allows you to spend your bitcoin. Anyone with access to your private key can control your bitcoin, 
              so keeping it secure is extremely important.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Types of Bitcoin Wallets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 bg-muted rounded-lg">
                      <Wallet className="text-bitcoin" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Hot Wallets</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Connected to the internet and convenient for frequent transactions, but more vulnerable to attacks.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Mobile wallets:</strong> Apps on your smartphone</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Desktop wallets:</strong> Programs on your computer</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Web wallets:</strong> Browser-based services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 bg-muted rounded-lg">
                      <Shield className="text-bitcoin" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Cold Wallets</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Kept offline and more secure, better for storing larger amounts or long-term holdings.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Hardware wallets:</strong> Specialized physical devices</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Paper wallets:</strong> Physical documents with keys</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Steel wallets:</strong> Durable metal storage for backup</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Custody Models</h3>
            <p>
              Bitcoin wallets can also be categorized based on who controls the private keys:
            </p>
            <ul>
              <li>
                <strong>Custodial wallets:</strong> A third party (like an exchange) holds your private keys. These are easier to use but give you less control.
              </li>
              <li>
                <strong>Non-custodial wallets:</strong> You have full control of your private keys. This offers more security but also more responsibility.
              </li>
            </ul>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Securing Your Bitcoin Wallet</h2>
            <p>
              The security of your bitcoin depends largely on how well you protect your wallet. Here are some essential practices:
            </p>
            
            <div className="bg-muted p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="text-bitcoin mr-2" size={20} />
                Security Best Practices
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                  <div>
                    <strong>Backup your wallet:</strong> Create and safely store backup copies of your private keys or seed phrases.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                  <div>
                    <strong>Use a strong password:</strong> Protect your wallet with a unique, complex password.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                  <div>
                    <strong>Keep software updated:</strong> Always use the latest version of your wallet software.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                  <div>
                    <strong>Use two-factor authentication (2FA):</strong> Add an extra layer of security when available.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                  <div>
                    <strong>Consider multi-signature wallets:</strong> Require multiple keys to authorize a transaction.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                  <div>
                    <strong>Be wary of phishing:</strong> Only download wallet software from official sources.
                  </div>
                </li>
              </ul>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Seed Phrases</h3>
            <p>
              Many modern Bitcoin wallets use a seed phrase (also called a recovery phrase or mnemonic) to back up the wallet. This is typically a sequence of 12 or 24 random words that can regenerate all the private keys in the wallet.
            </p>
            <p>
              Treat your seed phrase with the utmost security—anyone who has it can access all the bitcoin in your wallet. Never store it digitally or share it with anyone.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Choosing the Right Wallet</h2>
            <p>
              When selecting a Bitcoin wallet, consider these factors:
            </p>
            <ul>
              <li><strong>Security needs:</strong> How much bitcoin will you store?</li>
              <li><strong>Convenience:</strong> How often will you use it?</li>
              <li><strong>Features:</strong> Do you need specific capabilities like Lightning Network support?</li>
              <li><strong>Platform:</strong> Which devices will you use to access your wallet?</li>
              <li><strong>Privacy:</strong> How important is privacy to you?</li>
            </ul>
            <p>
              For beginners, a reputable mobile wallet provides a good balance of security and convenience. As your holdings grow, consider moving a portion to a hardware wallet for enhanced security.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button variant="outline" asChild>
              <Link to="/learn/basics">
                <ChevronLeft size={16} className="mr-2" />
                Previous: Bitcoin Basics
              </Link>
            </Button>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
              <Link to="/learn/security">
                Next: Bitcoin Security
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

export default WalletsPage;
