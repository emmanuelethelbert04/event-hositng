import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import eventVenueImage from "@/assets/event-venue.jpg";

const EventShowcase = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description: "Join industry leaders for cutting-edge insights into AI, blockchain, and emerging technologies.",
      date: "March 25, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Convention Center, Lagos",
      attendees: 250,
      price: "₦15,000",
      image: eventVenueImage,
      category: "Technology",
      status: "Early Bird"
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      description: "Learn proven strategies to grow your business online with hands-on workshops and expert guidance.",
      date: "April 12, 2024", 
      time: "2:00 PM - 8:00 PM",
      location: "Business Hub, Abuja",
      attendees: 120,
      price: "₦8,500",
      image: eventVenueImage,
      category: "Marketing",
      status: "Filling Fast"
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      description: "Watch emerging startups compete for funding and mentorship opportunities.",
      date: "May 8, 2024",
      time: "10:00 AM - 4:00 PM", 
      location: "Innovation Center, Port Harcourt",
      attendees: 300,
      price: "Free",
      image: eventVenueImage,
      category: "Entrepreneurship",
      status: "Free Event"
    }
  ];

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Featured
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Upcoming Events
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing events happening near you. From tech conferences to creative workshops, 
            find your next learning opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-card border rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Free Event' 
                      ? 'bg-success text-success-foreground'
                      : event.status === 'Early Bird'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-warning text-warning-foreground'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Meta */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      {event.price}
                    </span>
                    {event.price !== "Free" && (
                      <span className="text-sm text-muted-foreground ml-1">/ person</span>
                    )}
                  </div>
                  <Button variant="hero" size="sm">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventShowcase;