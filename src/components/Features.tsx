import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCard, 
  BarChart3, 
  Users, 
  Shield, 
  Cloud, 
  Smartphone,
  Zap,
  HeadphonesIcon
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "M-Pesa & Card Payments",
      description: "Easily accept M-Pesa, Airtel Money, card, and cash payments from your customers."
    },
    {
      icon: BarChart3,
      title: "Sales & Stock Reports",
      description: "Track sales and inventory in real-time. Get profit reports directly from your dashboard."
    },
    {
      icon: Users,
      title: "Customer Loyalty & Records",
      description: "Build customer databases, track purchases, and reward frequent buyers."
    },
    {
      icon: Shield,
      title: "KRA eTIMS Compliant",
      description: "Generate tax-compliant receipts that meet Kenya Revenue Authority requirements."
    },
    {
      icon: Cloud,
      title: "Cloud Backup & Sync",
      description: "Your data is automatically saved and accessible from any device, anytime."
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works seamlessly on smartphones, tablets, and desktops — perfect for field sales too."
    },
    {
      icon: Zap,
      title: "Works Offline",
      description: "No internet? No problem. Keep selling even in low-network areas and sync later."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our team is available on phone, WhatsApp, or in-person to support your business."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Kenyan Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From M-Pesa to KRA eTIMS, our POS is tailored to meet the unique needs of businesses in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 bg-gradient-card backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
