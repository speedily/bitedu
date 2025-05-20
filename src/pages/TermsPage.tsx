
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const TermsPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Terms of Service";
    
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">Last updated: May 19, 2024</p>
            
            <p>
              These Terms of Service ("Terms") govern your access to and use of the BitEdu website, services, and applications (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>
            
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">1. Use of Services</h2>
            
            <h3 className="text-xl font-bold mt-6">1.1 Eligibility</h3>
            <p>
              To use our Services, you must be at least 16 years old and capable of forming a binding contract with BitEdu. If you are accessing our Services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
            </p>
            
            <h3 className="text-xl font-bold mt-6">1.2 Account Registration</h3>
            <p>
              Some of our Services require you to create an account. You agree to provide accurate, current, and complete information during the registration process and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h3 className="text-xl font-bold mt-6">1.3 Prohibited Activities</h3>
            <p>
              When using our Services, you agree not to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Use our Services to distribute malware or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with the proper functioning of our Services</li>
              <li>Use automated methods to access or use our Services without our permission</li>
              <li>Create multiple accounts for abusive purposes</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">2. Educational Content</h2>
            
            <h3 className="text-xl font-bold mt-6">2.1 Informational Purposes Only</h3>
            <p>
              All educational content provided through our Services is for informational purposes only. It is not intended to be financial, investment, or legal advice. We do not endorse any specific investments or strategies.
            </p>
            
            <h3 className="text-xl font-bold mt-6">2.2 Risk Disclosure</h3>
            <p>
              Bitcoin and cryptocurrencies involve significant risks, including price volatility and potential loss of funds. You should conduct your own research and consider seeking advice from independent financial advisors before making any investment decisions.
            </p>
            
            <h3 className="text-xl font-bold mt-6">2.3 Accuracy</h3>
            <p>
              While we strive to provide accurate and up-to-date information, we make no representations or warranties about the accuracy, completeness, or reliability of any content provided through our Services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
            
            <h3 className="text-xl font-bold mt-6">3.1 Our Content</h3>
            <p>
              The content on our Services, including text, graphics, logos, images, videos, and educational materials, is owned by BitEdu or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works based on our content without our explicit permission.
            </p>
            
            <h3 className="text-xl font-bold mt-6">3.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for personal, non-commercial purposes in accordance with these Terms.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">4. Termination</h2>
            <p>
              We may terminate or suspend your access to our Services, with or without notice, for any reason, including if we believe you have violated these Terms. Upon termination, your right to use our Services will immediately cease.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">5. Disclaimer of Warranties</h2>
            <p>
              Our Services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BitEdu and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">8. Changes to Terms</h2>
            <p>
              We may revise these Terms at any time by updating this page. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: terms@bitedu.example.com<br />
              BitEdu<br />
              123 Bitcoin Avenue<br />
              Blockchain City, BC 12345
            </p>
            
            <div className="mt-12">
              <Link to="/privacy" className="text-bitcoin hover:underline">View our Privacy Policy</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
