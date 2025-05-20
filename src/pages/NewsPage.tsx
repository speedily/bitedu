
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Send, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const NewsPage = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "BitEdu - Bitcoin News";
    
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

  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Bitcoin Breaks New All-Time High",
      date: "May 18, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Market News",
      excerpt: "Bitcoin has reached a new all-time high, surpassing previous records amid institutional adoption."
    },
    {
      id: 2,
      title: "New Bitcoin Improvement Proposal Gaining Support",
      date: "May 15, 2025",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "Development",
      excerpt: "The proposed BIP for enhancing transaction privacy is gaining widespread support from developers."
    },
    {
      id: 3,
      title: "BitEdu Launches Advanced Lightning Network Course",
      date: "May 12, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "Education",
      excerpt: "Our new advanced course covers all aspects of the Lightning Network for scaling Bitcoin payments."
    },
    {
      id: 4,
      title: "Major Retailer Announces Bitcoin Payment Integration",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Adoption",
      excerpt: "A Fortune 500 retailer has announced plans to accept Bitcoin payments at all locations starting next month."
    },
    {
      id: 5,
      title: "Bitcoin Mining Reaches New Sustainability Milestone",
      date: "May 8, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Mining",
      excerpt: "The Bitcoin mining industry has achieved a new record with 60% of hashrate now powered by renewable energy sources."
    },
    {
      id: 6,
      title: "Bitcoin Development Fund Raises $10 Million",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      category: "Development",
      excerpt: "A new funding initiative for Bitcoin core development has secured $10 million from industry supporters."
    }
  ];

  const handleNewsletterSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "Successfully Subscribed! 📬",
      description: "You're now subscribed to our newsletter. Watch your inbox for Bitcoin insights!",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Bitcoin News & Updates</h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest Bitcoin news, market updates, and educational resources.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search news articles..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter by Category
            </Button>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {newsItems.map(news => (
              <Link to={`/news/${news.id}`} key={news.id} className="group">
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-bitcoin/10 text-bitcoin rounded">
                        {news.category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-bitcoin transition-colors">
                      {news.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {news.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Newsletter Subscription */}
          <div className="bg-gray-50 border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter to receive the latest Bitcoin news, educational content, and exclusive resources.
                </p>
              </div>
              <div>
                <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email"
                    placeholder="Your email address"
                    required
                    className="flex-grow"
                  />
                  <Button type="submit" className="bg-bitcoin hover:bg-bitcoin-dark text-white">
                    Subscribe
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
