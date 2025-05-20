
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

// Sample event data
const events = [
  {
    id: 1,
    title: "Bitcoin Meetup",
    date: new Date(2025, 4, 25), // May 25, 2025
    location: "San Francisco, CA",
    description: "Join fellow Bitcoin enthusiasts for networking and discussions on the latest developments.",
    url: "#",
    type: "meetup"
  },
  {
    id: 2,
    title: "Bitcoin Developer Workshop",
    date: new Date(2025, 4, 28), // May 28, 2025
    location: "Online",
    description: "Learn Bitcoin development fundamentals in this hands-on workshop led by industry experts.",
    url: "#",
    type: "workshop"
  },
  {
    id: 3,
    title: "Bitcoin 2025 Conference",
    date: new Date(2025, 5, 10), // June 10, 2025
    location: "Miami, FL",
    description: "The world's largest Bitcoin conference featuring keynotes, panels, and networking opportunities.",
    url: "#",
    type: "conference"
  },
  {
    id: 4,
    title: "Lightning Network Hackathon",
    date: new Date(2025, 5, 15), // June 15, 2025
    location: "Berlin, Germany",
    description: "Build innovative applications on the Lightning Network in this 48-hour hackathon.",
    url: "#",
    type: "hackathon"
  },
  {
    id: 5,
    title: "Bitcoin Design Masterclass",
    date: new Date(2025, 5, 22), // June 22, 2025
    location: "Online",
    description: "Learn how to design better Bitcoin applications with a focus on user experience and best practices.",
    url: "#",
    type: "workshop"
  },
  {
    id: 6,
    title: "Bitcoin Mining Summit",
    date: new Date(2025, 6, 5), // July 5, 2025
    location: "Austin, TX",
    description: "Explore the latest in Bitcoin mining technology, sustainability, and industry trends.",
    url: "#",
    type: "conference"
  }
];

// Function to get event badge color based on type
const getEventBadgeColor = (eventType: string) => {
  switch(eventType) {
    case 'conference':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case 'workshop':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    case 'hackathon':
      return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
    case 'meetup':
      return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  }
};

// Function to check if a date has events
const hasEventOnDate = (date: Date) => {
  return events.some(event => 
    date.getDate() === event.date.getDate() && 
    date.getMonth() === event.date.getMonth() &&
    date.getFullYear() === event.date.getFullYear()
  );
};

// Function to get events for a specific date
const getEventsForDate = (date: Date) => {
  return events.filter(event => 
    date.getDate() === event.date.getDate() && 
    date.getMonth() === event.date.getMonth() &&
    date.getFullYear() === event.date.getFullYear()
  );
};

const EventsCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDateEvents, setSelectedDateEvents] = useState<typeof events>([]);
  
  useEffect(() => {
    document.title = "BitEdu - Bitcoin Events Calendar";
    
    // Add skip-to-content functionality for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-bitcoin focus:outline-none focus:shadow-lg';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
    
    // Set initial selected date events
    setSelectedDateEvents(getEventsForDate(date));
    
    return () => {
      skipLink.remove();
    };
  }, []);
  
  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
      setSelectedDateEvents(getEventsForDate(newDate));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Bitcoin Events Calendar</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with Bitcoin conferences, meetups, workshops, and hackathons happening around the world.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-bitcoin" />
                    Select Date
                  </CardTitle>
                  <CardDescription>Click on a date to see events happening then</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    className="rounded-md border"
                    modifiers={{
                      hasEvent: (date) => hasEventOnDate(date),
                    }}
                    modifiersStyles={{
                      hasEvent: {
                        fontWeight: 'bold',
                        color: '#F7931A',
                        backgroundColor: 'rgba(247, 147, 26, 0.1)',
                      },
                    }}
                  />
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Event Types:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200">Meetup</Badge>
                  <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">Workshop</Badge>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200">Conference</Badge>
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-200">Hackathon</Badge>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6">
                Events on {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </h2>
              
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map(event => (
                    <Card key={event.id} className="border-border hover:border-bitcoin/30 transition-all">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle>{event.title}</CardTitle>
                          <Badge variant="outline" className={getEventBadgeColor(event.type)}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock size={16} />
                            <span>{event.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                          <p className="text-muted-foreground">{event.description}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={event.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            View Details
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-dashed border-2 bg-muted">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <p className="text-muted-foreground mb-4">No events scheduled for this date</p>
                    <Button variant="outline" onClick={() => setDate(events[0].date)}>
                      View events on {events[0].date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </Button>
                  </CardContent>
                </Card>
              )}
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                <div className="space-y-4">
                  {events
                    .filter(event => event.date >= new Date())
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .slice(0, 3)
                    .map(event => (
                      <div key={event.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => handleDateChange(event.date)}>
                        <div className="bg-muted rounded-md w-14 h-14 flex flex-col items-center justify-center">
                          <span className="text-sm font-medium">{event.date.toLocaleDateString('en-US', { month: 'short' })}</span>
                          <span className="text-lg font-bold">{event.date.getDate()}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={14} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className={getEventBadgeColor(event.type)}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsCalendar;
