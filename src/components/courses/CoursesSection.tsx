
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: number;
  time: string;
  image: string;
  path: string;
}

const CoursesSection = () => {
  const { toast } = useToast();
  const location = useLocation();
  const isCoursesPage = location.pathname === "/courses";
  
  const [courses] = useState<Course[]>([
    {
      id: 1,
      title: "Bitcoin Fundamentals",
      description: "Learn the basics of Bitcoin, blockchain technology, and digital currencies.",
      level: "Beginner",
      modules: 8,
      time: "3 hours",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      path: "/courses/beginners"
    },
    {
      id: 2,
      title: "Secure Your Bitcoin",
      description: "Understanding wallet security, private keys, and best practices for keeping your Bitcoin safe.",
      level: "Beginner",
      modules: 6,
      time: "2.5 hours",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      path: "/courses/intermediate"
    },
    {
      id: 3,
      title: "Bitcoin Transactions Explained",
      description: "Deep dive into how Bitcoin transactions work, fees, and confirmation process.",
      level: "Intermediate",
      modules: 7,
      time: "4 hours",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      path: "/courses/advanced"
    },
    {
      id: 4,
      title: "Bitcoin Design",
      description: "Learn how to design intuitive, secure, and user-friendly Bitcoin wallets and applications.",
      level: "Intermediate",
      modules: 7,
      time: "8 weeks",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      path: "/courses/bitcoin-design"
    },
    {
      id: 5,
      title: "Stacks Primer",
      description: "Introduction to Stacks blockchain, smart contracts for Bitcoin, and building applications on Bitcoin.",
      level: "Intermediate",
      modules: 8,
      time: "5 hours",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      path: "/courses/stacks-primer"
    },
    {
      id: 6,
      title: "exSat Network",
      description: "Learn about the exSat protocol, a L2 scaling solution for Bitcoin with expressive smart contracts.",
      level: "Advanced",
      modules: 6,
      time: "4 hours",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      path: "/courses/exsat"
    }
  ]);

  const handleEnroll = (courseId: number) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    toast({
      title: `Enrolled in ${course.title}! 🎓`,
      description: "Your learning journey has just begun. Check your courses dashboard.",
      variant: "default",
    });

    setTimeout(() => {
      toast({
        title: "New Achievement! 🏆",
        description: "Course Explorer: You've enrolled in your first course!",
        variant: "default",
      });
    }, 1000);
  };

  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800", 
    Advanced: "bg-purple-100 text-purple-800"
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{isCoursesPage ? "All Courses" : "Featured Courses"}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start your Bitcoin education journey with our carefully designed courses for all knowledge levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border h-full flex flex-col">
              <Link to={course.path} className="aspect-video relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </Link>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={levelColor[course.level]} variant="outline">
                    {course.level}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {course.modules} modules • {course.time}
                  </div>
                </div>
                <Link to={course.path}>
                  <CardTitle className="hover:text-bitcoin transition-colors">{course.title}</CardTitle>
                </Link>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-bitcoin mr-2"></div>
                    <span>Interactive lessons</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-bitcoin mr-2"></div>
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-bitcoin mr-2"></div>
                    <span>Achievement rewards</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white"
                  onClick={() => handleEnroll(course.id)}
                >
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {!isCoursesPage && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
