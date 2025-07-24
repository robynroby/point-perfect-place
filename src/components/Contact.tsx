import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Contact us for a personalized demo and see how our POS system can work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Request a Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+254790772286" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="business" className="text-sm font-medium text-foreground">
                    Business Name
                  </Label>
                  <Input 
                    id="business" 
                    placeholder="Your Business Name" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business needs..." 
                    className="mt-1 min-h-[100px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary text-lg py-6">
                  Schedule Demo
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Phone Support</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Speak with our sales team
                </p>
                <p className="text-foreground font-medium">0700 200 200</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Email Support</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Get in touch via email
                </p>
                <p className="text-foreground font-medium">sales@epimaxven.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Office Location</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Visit our headquarters
                </p>
                <p className="text-foreground font-medium">
                  123 Business Ave<br />
                  Woodvale road, Westlands
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  We're here to help
                </p>
                <div className="text-foreground font-medium">
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;