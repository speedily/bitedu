
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, Info, Calendar, ChevronLeft, ArrowRight, Clock, Wallet, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransactionsPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Bitcoin Transactions";
    
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
              <h1 className="text-3xl md:text-4xl font-bold">Bitcoin Transactions</h1>
            </div>
            <div className="flex items-center mt-4 sm:mt-0 space-x-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>Updated May 8, 2024</span>
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
                    This guide explains how Bitcoin transactions work, how fees are calculated, 
                    confirmation times, and best practices for sending and receiving bitcoin.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">How Bitcoin Transactions Work</h2>
            <p>
              Bitcoin transactions are digital transfers of bitcoin between addresses on the blockchain. 
              Each transaction includes inputs (where the bitcoin is coming from), outputs (where the bitcoin is going to), 
              and a small fee paid to miners who include the transaction in a block.
            </p>
            
            <div className="my-6 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-4">Transaction Lifecycle</h3>
              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-bitcoin text-white rounded-full mr-4 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Creation</h4>
                    <p className="text-muted-foreground">
                      When you initiate a transfer, your wallet creates a transaction with the recipient's address, 
                      amount, and a fee. This is signed with your private key to prove ownership.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-bitcoin text-white rounded-full mr-4 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Broadcast</h4>
                    <p className="text-muted-foreground">
                      Your transaction is broadcast to the Bitcoin network where it sits in the "mempool" 
                      (memory pool) waiting to be picked up by miners.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-bitcoin text-white rounded-full mr-4 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Confirmation</h4>
                    <p className="text-muted-foreground">
                      Miners select transactions (usually prioritizing those with higher fees), verify them, and include them in a block.
                      When a block is mined (approximately every 10 minutes), your transaction receives its first confirmation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-bitcoin text-white rounded-full mr-4 font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Settlement</h4>
                    <p className="text-muted-foreground">
                      Each additional block adds another confirmation. Most services consider a transaction fully settled after 3-6 confirmations, 
                      though this varies based on the amount and security requirements.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Transaction Fees</h2>
            <p>
              Transaction fees are payments to miners for including your transaction in a block. They function as a market mechanism:
            </p>
            <ul>
              <li>Higher fees incentivize miners to prioritize your transaction, resulting in faster confirmation.</li>
              <li>Lower fees may result in longer wait times, especially during periods of network congestion.</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-3 mt-6">How Fees Are Calculated</h3>
            <p>
              Bitcoin transaction fees are typically calculated based on the size of the transaction in bytes, not the amount of bitcoin being sent. 
              Factors that affect transaction size include:
            </p>
            <ul>
              <li>Number of inputs (previous transactions you're spending)</li>
              <li>Number of outputs (addresses receiving bitcoin)</li>
              <li>Transaction type (legacy, SegWit, or native SegWit)</li>
            </ul>
            
            <div className="flex flex-col md:flex-row gap-6 my-6">
              <Card className="flex-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 bg-muted rounded-lg">
                      <ArrowRight className="text-bitcoin" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Fee Estimation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Most wallets automatically estimate an appropriate fee based on current network conditions, 
                    offering options like:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>High priority:</strong> Fast confirmation (1-2 blocks)</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Medium priority:</strong> Standard timing (3-6 blocks)</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-bitcoin mr-2" />
                      <span><strong>Low priority:</strong> Economical but slower (may take hours)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 bg-muted rounded-lg">
                      <Clock className="text-bitcoin" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Fee Saving Tips</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                      <span><strong>Batch transactions:</strong> Combine multiple payments into one transaction</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                      <span><strong>Use SegWit addresses:</strong> These create smaller transactions</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                      <span><strong>Time your transactions:</strong> Network is typically less congested on weekends</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={16} className="text-bitcoin mr-2 mt-1" />
                      <span><strong>Lightning Network:</strong> Use for small, frequent transactions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Sending and Receiving Bitcoin</h2>
            
            <div className="flex items-start mb-6">
              <div className="p-2 bg-muted rounded-lg mr-4">
                <Wallet className="text-bitcoin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sending Bitcoin</h3>
                <ol className="space-y-2">
                  <li>
                    <strong>1. Verify the recipient address</strong> - Double-check the entire address; even a small error will send your bitcoin to the wrong destination.
                  </li>
                  <li>
                    <strong>2. Select the amount</strong> - Specify how much bitcoin to send. Some wallets allow you to enter the amount in your local currency.
                  </li>
                  <li>
                    <strong>3. Choose the fee</strong> - Select a fee based on how quickly you need the transaction to confirm.
                  </li>
                  <li>
                    <strong>4. Review and confirm</strong> - Carefully check all details before confirming the transaction.
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-muted rounded-lg mr-4">
                <BadgeCheck className="text-bitcoin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Receiving Bitcoin</h3>
                <ol className="space-y-2">
                  <li>
                    <strong>1. Generate a receiving address</strong> - Most wallets can create multiple unique addresses for receiving bitcoin.
                  </li>
                  <li>
                    <strong>2. Share your address</strong> - Provide the address to the sender via text, email, QR code, etc.
                  </li>
                  <li>
                    <strong>3. Wait for confirmation</strong> - After the sender initiates the transaction, you'll see it as "pending" until it receives confirmations.
                  </li>
                </ol>
                <p className="mt-4">
                  For privacy and security, consider generating a new receiving address for each transaction.
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mb-4">Transaction Privacy</h2>
            <p>
              Bitcoin transactions are recorded on a public blockchain that anyone can view. While your real-world identity isn't directly linked to your Bitcoin address, 
              various techniques can potentially connect your transactions to your identity:
            </p>
            <ul>
              <li>
                <strong>Chain analysis:</strong> Tracing patterns of transactions across the blockchain.
              </li>
              <li>
                <strong>KYC requirements:</strong> When exchanges collect your identity information.
              </li>
              <li>
                <strong>Address reuse:</strong> Using the same address multiple times creates a transaction history.
              </li>
            </ul>
            <p>
              To enhance privacy, consider:
            </p>
            <ul>
              <li>Using a new address for each transaction</li>
              <li>Avoiding linking identifiable information to your Bitcoin addresses</li>
              <li>Using privacy-focused wallets that implement techniques like CoinJoin</li>
              <li>For high-privacy needs, exploring solutions like PayJoin or Lightning Network payments</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button variant="outline" asChild>
              <Link to="/learn/security">
                <ChevronLeft size={16} className="mr-2" />
                Previous: Bitcoin Security
              </Link>
            </Button>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white" asChild>
              <Link to="/courses">
                Next: Explore Courses
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

export default TransactionsPage;
