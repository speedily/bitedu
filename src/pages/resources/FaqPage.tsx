
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Frequently Asked Questions";
    
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Find answers to the most common questions about Bitcoin
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Bitcoin?</AccordionTrigger>
                <AccordionContent>
                  Bitcoin is a decentralized digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses peer-to-peer technology to operate with no central authority: transaction management and money issuance are carried out collectively by the network.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does Bitcoin work?</AccordionTrigger>
                <AccordionContent>
                  Bitcoin works using a technology called blockchain, which is a distributed ledger enforced by a decentralized network of computers. Transactions are recorded in blocks that are linked in a chain of previous bitcoin transactions. All users can see these transactions, and new bitcoins are created through a process called mining.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is Bitcoin anonymous?</AccordionTrigger>
                <AccordionContent>
                  Bitcoin is pseudonymous rather than anonymous. All Bitcoin transactions are public, traceable, and permanently stored in the Bitcoin network. Bitcoin addresses are the only information used to define where bitcoins are allocated and where they are sent. These addresses are created privately by each user's wallets, but once used, they become associated with the history of all transactions they are involved with.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I get Bitcoin?</AccordionTrigger>
                <AccordionContent>
                  You can get Bitcoin by accepting it as payment for goods and services, buying it from a friend, or purchasing it on a cryptocurrency exchange. Additionally, you can earn Bitcoin through mining, but this requires specialized hardware and is increasingly difficult.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is a Bitcoin wallet?</AccordionTrigger>
                <AccordionContent>
                  A Bitcoin wallet is a digital wallet that allows you to send and receive Bitcoin. It stores your private keys, which are used to access your Bitcoin addresses and sign transactions. Wallets can be software, hardware, or paper-based.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is Bitcoin secure?</AccordionTrigger>
                <AccordionContent>
                  The Bitcoin technology itself is highly secure, using advanced cryptography. However, the security of your Bitcoin holdings depends on how you store them. Using secure wallets, maintaining good security practices, and being aware of potential scams are essential for keeping your Bitcoin safe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>What is Bitcoin mining?</AccordionTrigger>
                <AccordionContent>
                  Bitcoin mining is the process by which new bitcoins are entered into circulation, but it is also a critical component of the maintenance and development of the blockchain ledger. It is performed using very sophisticated computers that solve extremely complex computational math problems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>What is the Lightning Network?</AccordionTrigger>
                <AccordionContent>
                  The Lightning Network is a "second layer" payment protocol that operates on top of the Bitcoin blockchain. It enables fast transactions between participating nodes and has been proposed as a solution to the bitcoin scalability problem.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>How do Bitcoin transactions work?</AccordionTrigger>
                <AccordionContent>
                  Bitcoin transactions involve three main components: an input (the Bitcoin address from which the money is sent), an amount (the amount of Bitcoin being sent), and an output (the recipient's Bitcoin address). Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>What determines Bitcoin's price?</AccordionTrigger>
                <AccordionContent>
                  Bitcoin's price is determined by supply and demand in the market. Factors that influence its price include adoption rate, government regulations, media coverage, technological advancements, and macroeconomic factors. As with any asset, Bitcoin's price can be volatile and subject to market sentiment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-12 bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
              <p className="mb-4">Check our <Link to="/resources/glossary" className="text-bitcoin hover:underline">Bitcoin Glossary</Link> for terminology or explore our <Link to="/learn" className="text-bitcoin hover:underline">learning resources</Link> for more in-depth information.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FaqPage;
