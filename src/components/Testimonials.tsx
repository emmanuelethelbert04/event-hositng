import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Organizer",
      company: "Tech Lagos",
      content: "EventFlow made hosting our annual tech conference incredibly smooth. The payment integration and admin approval process gave us confidence in the platform's professionalism.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6c6b45b?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Adebayo",
      role: "Workshop Facilitator", 
      company: "Digital Skills Academy",
      content: "The ease of creating events and managing attendees is outstanding. I've hosted over 20 workshops through EventFlow and the experience gets better each time.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amina Yusuf",
      role: "Community Manager",
      company: "Women in Tech",
      content: "As someone who organizes free community events, EventFlow's free tier is perfect. The platform is professional and the support team is always helpful.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Okonkwo", 
      role: "Business Coach",
      company: "Entrepreneur Hub",
      content: "The analytics and attendee management features help me understand my audience better. EventFlow has become an essential tool for my business.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Grace Okoro",
      role: "Conference Director",
      company: "Innovation Summit",
      content: "The premium features for paid events are worth every penny. From payment processing to advanced analytics, everything works seamlessly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ibrahim Hassan",
      role: "Training Coordinator",
      company: "Skills Development Center",
      content: "EventFlow transformed how we manage our training programs. The approval process ensures quality while the platform handles all the technical details.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            What Our
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Users Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful event organizers who trust EventFlow to power their events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-primary rounded-full p-2">
                <Quote className="h-4 w-4 text-primary-foreground" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 space-y-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">1,200+</div>
              <div className="text-sm text-muted-foreground">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Platform Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;