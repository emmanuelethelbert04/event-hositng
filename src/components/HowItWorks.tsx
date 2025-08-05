import { ArrowRight, Calendar, CreditCard, Users, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Create Your Event",
      description: "Fill in event details, set your ticket price, and customize your event page.",
      color: "primary"
    },
    {
      number: "02", 
      icon: CreditCard,
      title: "Complete Payment",
      description: "For paid events, securely pay the hosting fee through our integrated payment system.",
      color: "accent"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Get Approved",
      description: "Our admin team reviews your event to ensure quality and compliance.",
      color: "success"
    },
    {
      number: "04",
      icon: Users,
      title: "Welcome Attendees",
      description: "Your event goes live and attendees can discover and register for your event.",
      color: "warning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            How It
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your event live in four simple steps. Our streamlined process makes hosting events effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="bg-card border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-muted-foreground/30">
                    {step.number}
                  </div>
                  <div className={`bg-${step.color}/10 text-${step.color} rounded-lg p-3`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow - Hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-primary rounded-full p-2 shadow-medium">
                    <ArrowRight className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Host Your First Event?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of successful event organizers who trust our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-soft hover:shadow-medium">
                Start Creating Events
              </button>
              <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                Browse Existing Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;