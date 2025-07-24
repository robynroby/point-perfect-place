import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "KES 3,500",
      period: "per month",
      description: "Best for small shops and kiosks",
      features: [
        "1 POS register",
        "Basic inventory management",
        "M-Pesa payment integration",
        "KRA eTIMS compliant receipts",
        "Email & WhatsApp support",
        "Free installation in Nairobi"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const
    },
    {
      name: "Growth",
      price: "KES 7,000",
      period: "per month",
      description: "Great for growing SMEs & retailers",
      features: [
        "Up to 5 POS registers",
        "Advanced stock control",
        "Sales & profit reports",
        "Multi-branch support",
        "Customer loyalty features",
        "Priority support via phone & WhatsApp",
        "Free staff training"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "KES 15,000",
      period: "per month",
      description: "For supermarkets & large chains",
      features: [
        "Unlimited POS terminals",
        "Chain store & multi-location support",
        "Dedicated account manager",
        "Custom system integrations",
        "24/7 phone support",
        "White-label branding",
        "Advanced analytics & BI reports",
        "On-site staff training nationwide"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Affordable, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed for Kenyan businesses of all sizes. All plans include tax-compliant receipts, M-Pesa integration, and local support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-elevated transition-all duration-300 animate-slide-up ${plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.buttonVariant === 'default' ? 'bg-gradient-primary' : ''}`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans come with a 30-day free trial, no contracts, and a money-back guarantee.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Talk to our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
