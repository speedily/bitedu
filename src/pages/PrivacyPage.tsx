
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Privacy Policy";
    
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">Last updated: May 19, 2024</p>
            
            <p>
              At BitEdu, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul>
              <li>Create an account</li>
              <li>Use our educational services</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletters</li>
              <li>Complete forms on our website</li>
            </ul>
            
            <p>
              This information may include:
            </p>
            <ul>
              <li>Email address</li>
              <li>Name</li>
              <li>Learning progress and course completion data</li>
              <li>Usage data and interaction with our platform</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6">Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Time zone setting</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referral sources</li>
            </ul>
            
            <p>
              We use cookies and similar tracking technologies to collect this information. You can control cookies through your browser settings and other tools.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Track your progress in courses and provide certificates</li>
              <li>Personalize your experience on our platform</li>
              <li>Communicate with you about our services, updates, and offers</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect the security and integrity of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information to third parties. We may share your information in the following situations:
            </p>
            <ul>
              <li>With service providers who help us operate our business</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer (e.g., merger or acquisition)</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us at privacy@bitedu.example.com.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@bitedu.example.com<br />
              BitEdu<br />
              123 Bitcoin Avenue<br />
              Blockchain City, BC 12345
            </p>
            
            <div className="mt-12">
              <Link to="/terms" className="text-bitcoin hover:underline">View our Terms of Service</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
