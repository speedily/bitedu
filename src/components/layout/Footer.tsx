
import { BookOpen, GraduationCap, Rocket, Calendar, Github, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-bitcoin flex items-center justify-center text-white font-bold transform rotate-12">
                ₿
              </div>
              <span className="text-xl font-bold">BitEdu</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Making Bitcoin education accessible, enjoyable, and rewarding for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Learn</h3>
            <ul className="space-y-3">
              <li><Link to="/learn/basics" className="text-muted-foreground hover:text-bitcoin transition-colors">Bitcoin Basics</Link></li>
              <li><Link to="/learn/wallets" className="text-muted-foreground hover:text-bitcoin transition-colors">Wallets</Link></li>
              <li><Link to="/learn/security" className="text-muted-foreground hover:text-bitcoin transition-colors">Security</Link></li>
              <li><Link to="/learn/transactions" className="text-muted-foreground hover:text-bitcoin transition-colors">Transactions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Courses</h3>
            <ul className="space-y-3">
              <li><Link to="/courses/beginners" className="text-muted-foreground hover:text-bitcoin transition-colors">For Beginners</Link></li>
              <li><Link to="/courses/intermediate" className="text-muted-foreground hover:text-bitcoin transition-colors">Intermediate</Link></li>
              <li><Link to="/courses/advanced" className="text-muted-foreground hover:text-bitcoin transition-colors">Advanced Topics</Link></li>
              <li><Link to="/courses/bitcoin-design" className="text-muted-foreground hover:text-bitcoin transition-colors">Bitcoin Design</Link></li>
              <li><Link to="/courses/stacks-primer" className="text-muted-foreground hover:text-bitcoin transition-colors">Stacks Primer</Link></li>
              <li><Link to="/courses/exsat" className="text-muted-foreground hover:text-bitcoin transition-colors">exSat Network</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/resources" className="text-muted-foreground hover:text-bitcoin transition-colors">All Resources</Link></li>
              <li><Link to="/resources/glossary" className="text-muted-foreground hover:text-bitcoin transition-colors">Glossary</Link></li>
              <li><Link to="/resources/faq" className="text-muted-foreground hover:text-bitcoin transition-colors">FAQ</Link></li>
              <li><a href="https://bitcoin.design" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bitcoin transition-colors">Bitcoin Design</a></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-bitcoin transition-colors">Events Calendar</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Help & Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-muted-foreground hover:text-bitcoin transition-colors">Contact Us</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-bitcoin transition-colors">Help Center</Link></li>
              <li><Link to="/feedback" className="text-muted-foreground hover:text-bitcoin transition-colors">Feedback</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-bitcoin transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-bitcoin transition-colors">Terms</Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-bitcoin transition-colors">News</Link></li>
            </ul>
          </div>
        </div>
        
        {/* New row for stats, social media, and app stores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-bitcoin">24k+</p>
              <p className="text-xs text-muted-foreground">Total Students Enrolled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-bitcoin">2k+</p>
              <p className="text-xs text-muted-foreground">Daily Live Classes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-bitcoin">3.5M</p>
              <p className="text-xs text-muted-foreground">Video Lessons</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-bitcoin">75+</p>
              <p className="text-xs text-muted-foreground">Total Exam Categories</p>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 items-center">
              <a href="https://discord.gg/bitcoin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bitcoin transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="https://twitter.com/bitcoin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bitcoin transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://t.me/bitcoin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bitcoin transition-colors">
                <FaTelegram size={24} />
              </a>
              <a href="https://nosta.me/bitcoin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bitcoin transition-colors">
                <FontAwesomeIcon icon={faNoteSticky} size="xl" />
              </a>
              <a href="https://www.youtube.com/bitcoin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bitcoin transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://github.com/bitcoin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bitcoin transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
            
          {/* App Store Links */}
          <div className="flex flex-col space-y-2 items-center md:items-end">
            <a href="#" className="inline-block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on App Store" 
                className="h-10"
              />
            </a>
            <a href="#" className="inline-block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-10"
              />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm order-2 md:order-1">
            Copyright © {new Date().getFullYear()} BitEdu by <a href="https://www.abhishekjha.com" target="_blank" rel="noopener noreferrer" className="hover:text-bitcoin transition-colors">Abhishek Jha</a>. Thanks To Design Standards By: <a href="https://bitcoin.design" target="_blank" rel="noopener noreferrer" className="hover:text-bitcoin transition-colors">Bitcoin.Design</a>
          </p>
          <div className="flex space-x-6 mb-4 md:mb-0 order-1 md:order-2">
            <Link to="/privacy" className="text-muted-foreground hover:text-bitcoin transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-bitcoin transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
