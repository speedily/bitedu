
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoursesSection from '@/components/courses/CoursesSection';

const CoursesPage = () => {
  useEffect(() => {
    document.title = "BitEdu - Courses";
    
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
      
      <main id="main-content" className="flex-grow pt-24">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">All Courses</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Explore our comprehensive selection of courses designed to help you understand Bitcoin from the basics to advanced concepts.
          </p>
        </div>
        
        {/* Using a div wrapper and passing props as attributes */}
        <div className="container">
          <CoursesSection 
            hideViewAllButton 
            sectionTitle="All Courses" 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
