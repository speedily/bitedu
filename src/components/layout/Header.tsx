
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Rocket, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, signIn, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignIn = () => {
    // Simulate Google sign-in
    const userEmail = "user@example.com";
    signIn(userEmail, "Example User");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-bitcoin flex items-center justify-center text-white font-bold transform rotate-12">
            ₿
          </div>
          <span className="text-xl font-bold">BitEdu</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/learn" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
            <BookOpen size={18} />
            <span>Learn</span>
          </Link>
          <Link to="/courses" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
            <GraduationCap size={18} />
            <span>Courses</span>
          </Link>
          <Link to="/resources" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
            <Rocket size={18} />
            <span>Resources</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-sm hidden sm:block">{user?.email}</span>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1" 
                onClick={signOut}
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          ) : (
            <Button variant="outline" className="hidden sm:flex" onClick={handleSignIn}>Sign In</Button>
          )}
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in z-50">
          <nav className="container flex flex-col space-y-2">
            <Link 
              to="/learn" 
              className="px-4 py-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen size={18} />
              <span>Learn</span>
            </Link>
            <Link 
              to="/courses" 
              className="px-4 py-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GraduationCap size={18} />
              <span>Courses</span>
            </Link>
            <Link 
              to="/resources" 
              className="px-4 py-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Rocket size={18} />
              <span>Resources</span>
            </Link>
            {!isAuthenticated && (
              <Button 
                variant="outline" 
                className="mt-2 mx-4" 
                onClick={() => {
                  handleSignIn();
                  setMobileMenuOpen(false);
                }}
              >
                Sign In
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
