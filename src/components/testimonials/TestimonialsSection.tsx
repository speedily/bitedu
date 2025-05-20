
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  avatar: string;
  image: string;
}

const TestimonialsSection = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      content: "I never thought learning about Bitcoin could be so easy! This site made complex concepts clear for someone like me who isn't tech-savvy at all.",
      name: "Sarah Johnson",
      role: "Retired Teacher",
      avatar: "SJ",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      content: "The interactive lessons and rewards kept me engaged. I actually understand how Bitcoin works now, and I've even set up my first wallet!",
      name: "Michael Davis",
      role: "College Student",
      avatar: "MD",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      content: "As someone who was intimidated by cryptocurrency, this platform broke everything down perfectly. The step-by-step approach is brilliant.",
      name: "Emily Wilson",
      role: "Marketing Professional",
      avatar: "EW",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop&q=80"
    }
  ]);

  return (
    <section className="py-24 bg-gray-50 border-y border-border">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands who have successfully learned Bitcoin basics through our accessible platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-bitcoin">★</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border border-border">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-bitcoin/10 text-bitcoin">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
