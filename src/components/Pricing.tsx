import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free Events",
      price: "₦0",
      period: "per event",
      description: "Perfect for community events, workshops, and meetups",
      features: [
        "Unlimited free event creation",
        "Basic event management tools",
        "Email notifications",
        "Admin review process",
        "Standard support",
        "Basic analytics"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Paid Events",
      price: "₦2,500",
      period: "per event",
      description: "For professional conferences, premium workshops, and exclusive events",
      features: [
        "Professional event listing",
        "Integrated payment processing",
        "Advanced analytics & reporting",
        "Priority admin review",
        "Premium support",
        "Custom branding options",
        "Attendee management tools",
        "Email marketing integration"
      ],
      buttonText: "Start Hosting",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations and event management companies",
      features: [
        "Everything in Paid Events",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 priority support",
        "Advanced reporting & insights",
        "Multi-event management",
        "Custom payment terms"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Simple
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your event hosting needs. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-primary/10 scale-105' : 'hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="bg-success/10 text-success rounded-full p-1 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground text-sm flex-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All plans include our core event hosting features and admin approval process.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Check className="h-3 w-3 text-success" />
              No setup fees
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-3 w-3 text-success" />
              Secure payment processing
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-3 w-3 text-success" />
              24/7 platform availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;