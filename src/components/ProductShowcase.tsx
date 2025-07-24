import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import restaurantImage from '@/assets/restaurant-pos.jpg';
import retailImage from '@/assets/retail-pos.jpg';
import mobileImage from '@/assets/mobile-pos.jpg';

const ProductShowcase = () => {
  const products = [
    {
      name: "Restaurant POS",
      description: "All-in-one solution for restaurants, cafés, and hotels with kitchen display and waiter billing.",
      image: restaurantImage,
      price: "Starting at KES 7,000/month",
      features: [
        "Table & Waiter Management",
        "Kitchen Display System (KDS)",
        "Inventory & Stock Alerts",
        "Daily Z-Reports & eTIMS Receipts"
      ],
      badge: "Most Popular"
    },
    {
      name: "Retail POS",
      description: "Perfect for shops, boutiques, and supermarkets  barcode-ready and easy to scale.",
      image: retailImage,
      price: "Starting at KES 5,500/month",
      features: [
        "Barcode Scanning",
        "Customer Loyalty Program",
        "Multi-branch Sync",
        "KRA eTIMS Compliant"
      ],
      badge: "Best Value"
    },
    {
      name: "Mobile POS",
      description: "Great for hawkers, market vendors, food trucks, and events works even offline.",
      image: mobileImage,
      price: "Starting at KES 3,000/month",
      features: [
        "M-Pesa Payments",
        "Offline Mode for Remote Areas",
        "Cloud Backup",
        "Portable Bluetooth Printing"
      ],
      badge: "Flexible"
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tailored POS Solutions for Kenya
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're running a café in Nairobi, a shop in Eldoret, or a stall in Gikomba ,we’ve got the right system for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 animate-slide-up">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-primary group-hover:shadow-card transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
