
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, Book, Globe, ChevronRight, ExternalLink, Shield, BrainCircuit, Code, Zap } from 'lucide-react';

const ResourcesPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Bitcoin Resources";
    
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Bitcoin Resources</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Explore our comprehensive collection of Bitcoin resources to enhance your knowledge and experience.
          </p>

          <Tabs defaultValue="wallets" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid sm:grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="wallets">Wallets</TabsTrigger>
              <TabsTrigger value="learn">Study Resources</TabsTrigger>
              <TabsTrigger value="ecosystem">Ecosystem Apps</TabsTrigger>
              <TabsTrigger value="reference">Reference</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wallets" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Bitcoin Wallets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <WalletCard 
                  title="BlueWallet" 
                  description="A simple and secure Bitcoin and Lightning wallet"
                  link="https://bluewallet.io/"
                  type="Mobile"
                />
                <WalletCard 
                  title="Muun Wallet" 
                  description="Self-custodial wallet with Lightning Network support"
                  link="https://muun.com/"
                  type="Mobile"
                />
                <WalletCard 
                  title="Electrum" 
                  description="Feature-rich Bitcoin wallet for desktop users"
                  link="https://electrum.org/"
                  type="Desktop"
                />
                <WalletCard 
                  title="Ledger" 
                  description="Hardware wallet for maximum security"
                  link="https://www.ledger.com/"
                  type="Hardware"
                />
                <WalletCard 
                  title="Trezor" 
                  description="Open-source hardware wallet"
                  link="https://trezor.io/"
                  type="Hardware"
                />
                <WalletCard 
                  title="Sparrow Wallet" 
                  description="Desktop Bitcoin wallet focused on security and privacy"
                  link="https://sparrowwallet.com/"
                  type="Desktop"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="learn" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Bitcoin Study Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResourceCard 
                  title="Bitcoin.org" 
                  description="The original Bitcoin website with extensive documentation"
                  link="https://bitcoin.org/"
                  icon={<Globe size={24} />}
                />
                <ResourceCard 
                  title="Mastering Bitcoin" 
                  description="Comprehensive technical guide to Bitcoin by Andreas Antonopoulos"
                  link="https://github.com/bitcoinbook/bitcoinbook"
                  icon={<Book size={24} />}
                />
                <ResourceCard 
                  title="Bitcoin Design" 
                  description="Open-source community focused on improving Bitcoin's user experience"
                  link="https://bitcoin.design/"
                  icon={<Book size={24} />}
                />
                <ResourceCard 
                  title="MIT's Digital Currency Initiative" 
                  description="Research and development for Bitcoin and blockchain technology"
                  link="https://dci.mit.edu/"
                  icon={<Globe size={24} />}
                />
                <ResourceCard 
                  title="Bitcoin Whitepaper" 
                  description="The original document by Satoshi Nakamoto"
                  link="https://bitcoin.org/bitcoin.pdf"
                  icon={<Book size={24} />}
                />
                <ResourceCard 
                  title="Nakamoto Institute" 
                  description="Advancing Bitcoin technology and Austrian economics"
                  link="https://nakamotoinstitute.org/"
                  icon={<Globe size={24} />}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="ecosystem" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Bitcoin Ecosystem Apps & Sidechains</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResourceCard 
                  title="Lightning Network" 
                  description="Layer 2 scaling solution for fast, low-cost Bitcoin transactions"
                  link="https://lightning.network/"
                  icon={<Zap size={24} />}
                />
                <ResourceCard 
                  title="exSat" 
                  description="A Bitcoin sidechain for cross-chain asset transfers"
                  link="https://exsat.network/"
                  icon={<Zap size={24} />}
                />
                <ResourceCard 
                  title="Stacks" 
                  description="Smart contracts and apps secured by Bitcoin"
                  link="https://www.stacks.co/"
                  icon={<Code size={24} />}
                />
                <ResourceCard 
                  title="Rebar Labs" 
                  description="Building Rebar Data and Rebar Shield for Bitcoin"
                  link="https://rebarlabs.io"
                  icon={<Shield size={24} />}
                />
                <ResourceCard 
                  title="BIP300" 
                  description="Drivechain proposal by Layer Two Labs"
                  link="https://LayerTwoLabs.com"
                  icon={<Code size={24} />}
                />
                <ResourceCard 
                  title="Bitcoin++" 
                  description="Developer conference focused on Bitcoin technology"
                  link="https://btcplusplus.dev"
                  icon={<BrainCircuit size={24} />}
                />
                <ResourceCard 
                  title="Liquid Network" 
                  description="A Bitcoin sidechain for traders and exchanges"
                  link="https://liquid.net/"
                  icon={<ExternalLink size={24} />}
                />
                <ResourceCard 
                  title="RSK" 
                  description="Smart contract platform secured by the Bitcoin network"
                  link="https://www.rsk.co/"
                  icon={<ExternalLink size={24} />}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="reference" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Reference Materials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/resources/glossary" className="group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Bitcoin Glossary
                        <ChevronRight size={20} className="text-muted-foreground group-hover:text-bitcoin transition-colors" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Comprehensive glossary of Bitcoin and cryptocurrency terms
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/resources/faq" className="group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Frequently Asked Questions
                        <ChevronRight size={20} className="text-muted-foreground group-hover:text-bitcoin transition-colors" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Answers to common questions about Bitcoin and cryptocurrency
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Bitcoin Community</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResourceCard 
                  title="Bitcoin 2025 Conference" 
                  description="Annual conference including hackathon and workshops"
                  link="https://b.tc/conference/2025/hackathon"
                  icon={<Globe size={24} />}
                />
                <ResourceCard 
                  title="Bitcoin Design Foundation" 
                  description="Promoting excellence in Bitcoin user experience design"
                  link="https://bitcoin.design"
                  icon={<Book size={24} />}
                />
                <ResourceCard 
                  title="Bitcoin Core" 
                  description="The primary open-source Bitcoin implementation"
                  link="https://bitcoincore.org/"
                  icon={<Code size={24} />}
                />
                <ResourceCard 
                  title="Bitcoin Optech" 
                  description="Working with Bitcoin businesses to improve scaling"
                  link="https://bitcoinops.org/"
                  icon={<Globe size={24} />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface WalletCardProps {
  title: string;
  description: string;
  link: string;
  type: string;
}

const WalletCard = ({ title, description, link, type }: WalletCardProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group">
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Wallet className="text-bitcoin" size={20} />
            {title}
          </CardTitle>
          <span className="text-xs bg-muted px-2 py-1 rounded-full">{type}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 text-sm text-bitcoin flex items-center group-hover:underline">
          Visit website <ExternalLink size={14} className="ml-1" />
        </div>
      </CardContent>
    </Card>
  </a>
);

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const ResourceCard = ({ title, description, link, icon }: ResourceCardProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group">
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-bitcoin">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 text-sm text-bitcoin flex items-center group-hover:underline">
          Visit website <ExternalLink size={14} className="ml-1" />
        </div>
      </CardContent>
    </Card>
  </a>
);

export default ResourcesPage;
