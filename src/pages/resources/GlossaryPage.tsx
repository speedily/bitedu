
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GlossaryPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Bitcoin Glossary";
    
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Bitcoin Glossary</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            A comprehensive guide to Bitcoin terminology and concepts
          </p>

          <Tabs defaultValue="basics" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="basics">Basics</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="wallets">Wallets</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="space-y-4">
              <GlossaryItem 
                term="Bitcoin"
                definition="A decentralized digital currency that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
              />
              <GlossaryItem 
                term="Blockchain"
                definition="A public ledger that records bitcoin transactions. It is implemented as a chain of blocks, each block containing a hash of the previous block up to the genesis block."
              />
              <GlossaryItem 
                term="Satoshi"
                definition="The smallest unit of Bitcoin, equal to 0.00000001 BTC. Named after Bitcoin's creator, Satoshi Nakamoto."
              />
              <GlossaryItem 
                term="Private Key"
                definition="A secret piece of data that proves your right to spend bitcoins from a specific wallet through a cryptographic signature."
              />
              <GlossaryItem 
                term="Public Key"
                definition="A cryptographic code that allows a user to receive cryptocurrencies into their account."
              />
              <GlossaryItem 
                term="Mining"
                definition="The process by which new bitcoins are entered into circulation; it is also the way the network confirms new transactions and is a critical component of the blockchain ledger's maintenance and development."
              />
            </TabsContent>
            
            <TabsContent value="technical" className="space-y-4">
              <GlossaryItem 
                term="UTXO"
                definition="Unspent Transaction Output. Each bitcoin transaction creates outputs, which are referenced as inputs in new transactions."
              />
              <GlossaryItem 
                term="Script"
                definition="Bitcoin uses a scripting system for transactions. Scripts are simple, stack-based, and processed from left to right."
              />
              <GlossaryItem 
                term="SegWit"
                definition="Segregated Witness. A Bitcoin protocol upgrade that changes the way data is stored on the blockchain, enabling more transactions per block."
              />
              <GlossaryItem 
                term="Multisignature"
                definition="A technology that requires multiple signatures to authorize a bitcoin transaction, enhancing security."
              />
              <GlossaryItem 
                term="Nonce"
                definition="A number used once in Bitcoin mining to vary the input to a cryptographic hash function to find a specific hash."
              />
              <GlossaryItem 
                term="Hash Rate"
                definition="A measure of the computational power per second used when mining Bitcoin."
              />
            </TabsContent>
            
            <TabsContent value="wallets" className="space-y-4">
              <GlossaryItem 
                term="Hot Wallet"
                definition="A cryptocurrency wallet that is connected to the internet, making it easier to transact but more vulnerable to attacks."
              />
              <GlossaryItem 
                term="Cold Wallet"
                definition="A cryptocurrency wallet that is not connected to the internet, providing enhanced security against hacking."
              />
              <GlossaryItem 
                term="Hardware Wallet"
                definition="A physical device designed to store cryptocurrency private keys offline."
              />
              <GlossaryItem 
                term="Seed Phrase"
                definition="A series of words that store all the information needed to recover a bitcoin wallet."
              />
              <GlossaryItem 
                term="Hierarchical Deterministic (HD) Wallet"
                definition="A wallet that generates a hierarchical tree-like structure of keys, allowing for enhanced privacy and easier backup."
              />
              <GlossaryItem 
                term="Paper Wallet"
                definition="A physical document containing a public Bitcoin address and the corresponding private key."
              />
            </TabsContent>
            
            <TabsContent value="network" className="space-y-4">
              <GlossaryItem 
                term="Node"
                definition="Any computer that connects to the Bitcoin network and helps verify transactions."
              />
              <GlossaryItem 
                term="Full Node"
                definition="A program that fully validates transactions and blocks, enforcing all of Bitcoin's rules."
              />
              <GlossaryItem 
                term="Lightning Network"
                definition="A second layer protocol that operates on top of the Bitcoin blockchain to enable faster transactions with lower fees."
              />
              <GlossaryItem 
                term="Mempool"
                definition="A waiting area for Bitcoin transactions before they are confirmed by the network."
              />
              <GlossaryItem 
                term="Block Time"
                definition="The average time it takes for the network to generate a new block, approximately 10 minutes for Bitcoin."
              />
              <GlossaryItem 
                term="Difficulty"
                definition="A measure of how difficult it is to find a hash below a given target in Bitcoin mining."
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface GlossaryItemProps {
  term: string;
  definition: string;
}

const GlossaryItem = ({ term, definition }: GlossaryItemProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{term}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{definition}</p>
    </CardContent>
  </Card>
);

export default GlossaryPage;
