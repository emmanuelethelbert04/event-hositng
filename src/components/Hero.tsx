import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-person.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4" />
              #1 Event Hosting Platform
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Host & Discover
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {" "}Amazing Events
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Create unforgettable experiences. Whether hosting a conference, workshop, or social gathering, 
                our platform makes event management seamless and professional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/host-event">
                <Button variant="hero" size="lg" className="group">
                  Start Hosting Events
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" size="lg">
                  Browse Events
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="bg-success/10 text-success p-2 rounded-lg">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent/10 text-accent p-2 rounded-lg">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">1,200+</p>
                  <p className="text-sm text-muted-foreground">Events Hosted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large animate-float">
              <img
                src={heroImage}
                alt="Professional event host"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card border shadow-medium rounded-xl p-4 animate-fade-in delay-300">
              <div className="flex items-center gap-3">
                <div className="bg-success rounded-lg p-2">
                  <Calendar className="h-4 w-4 text-success-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Event Created!</p>
                  <p className="text-xs text-muted-foreground">Ready for approval</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border shadow-medium rounded-xl p-4 animate-fade-in delay-500">
              <div className="flex items-center gap-3">
                <div className="bg-accent rounded-lg p-2">
                  <Users className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">150+ Attendees</p>
                  <p className="text-xs text-muted-foreground">Registered today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;