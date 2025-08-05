import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account or events",
      contact: "support@eventflow.com",
      availability: "24/7 Response",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+234 901 234 5678",
      availability: "Mon-Fri, 9AM-6PM WAT",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Quick answers to your questions",
      contact: "Available on platform",
      availability: "24/7 Available",
      color: "bg-success/10 text-success"
    }
  ];

  const faqs = [
    {
      question: "How long does event approval take?",
      answer: "Most events are reviewed and approved within 24-48 hours."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We support all major cards through Paystack and Flutterwave."
    },
    {
      question: "Can I edit my event after submission?",
      answer: "Yes, you can request edits through our admin team before approval."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer full refunds if your event is not approved."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Get In
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our dedicated support team is here to help you succeed with your events.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card border rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className={`${method.color} rounded-lg p-3`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {method.description}
                    </p>
                    <p className="text-foreground font-medium">{method.contact}</p>
                    <p className="text-sm text-muted-foreground">{method.availability}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Info */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Our Office
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>EventFlow Technologies</p>
                <p>123 Innovation Drive, Victoria Island</p>
                <p>Lagos State, Nigeria</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Monday - Friday, 9:00 AM - 6:00 PM WAT</span>
              </div>
            </div>
          </div>

          {/* Contact Form & FAQs */}
          <div className="space-y-8">
            {/* Quick Contact Form */}
            <div className="bg-card border rounded-xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Send us a message
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-card border rounded-xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-foreground mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Button variant="outline" className="w-full">
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;