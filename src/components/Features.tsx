import { Calendar, CreditCard, Shield, Users, Zap, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Event Creation",
      description: "Create and customize your events in minutes with our intuitive form builder and templates.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Integrated payment processing with Paystack and Flutterwave for seamless transactions.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Shield,
      title: "Admin Approval",
      description: "Quality control with admin review system ensuring only verified events go live.",
      color: "bg-success/10 text-success"
    },
    {
      icon: Users,
      title: "Attendee Management",
      description: "Track registrations, send updates, and manage attendee communications effortlessly.",
      color: "bg-warning/10 text-warning"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant notifications for event status changes, approvals, and attendee activities.",
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: CheckCircle,
      title: "Free & Paid Events",
      description: "Host both free community events and premium paid experiences on the same platform.",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Host Successfully
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools you need to create, manage, and monetize your events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${feature.color} rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;