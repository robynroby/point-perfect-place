import { Users, Award, Shield, Zap, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
    { number: "14+", label: "Years in Kenya" },
    { number: "8,000+", label: "Businesses Empowered" },
    { number: "12M+", label: "Transactions Handled" },
    { number: "99.9%", label: "Uptime & Reliability" }
];

const values = [
    {
        icon: Target,
        title: "Locally Focused",
        description: "We build POS tools that meet the unique needs of Kenyan SMEs from retail to hospitality."
    },
    {
        icon: Heart,
        title: "Customer-Centric",
        description: "Our clients are at the heart of everything :we offer personal support, training, and guidance."
    },
    {
        icon: Shield,
        title: "Secure & Compliant",
        description: "Your data is protected with global grade encryption and locally relevant compliance practices."
    },
    {
        icon: Zap,
        title: "Reliable Performance",
        description: "Built to work even with low connectivity. Our offline-ready POS systems never let you down."
    }
];

const AboutUs = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Us</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We're committed to helping Kenyan businesses succeed with smart, affordable POS solutions.
                    </p>
                </div>

                {/* Hero Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="animate-fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Empowering Kenyan Businesses Since <span className="text-primary">2012</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                We're not just another POS provider, we're a trusted partner for thousands of Kenyan businesses. From Nairobi to Kisumu, we've helped business owners digitize, grow, and thrive.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8">
                                From corner shops to busy restaurants and salons, we enable real-time payments, inventory management, and performance insights to make day-to-day operations seamless.
                            </p>
                            <div className="flex items-center gap-4">
                                <Award className="h-12 w-12 text-accent bg-accent/10 p-2 rounded-lg" />
                                <div>
                                    <div className="font-semibold text-foreground">Trusted Locally</div>
                                    <div className="text-sm text-muted-foreground">Used by over 8,000 merchants in Kenya</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-slide-up">
                            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                                <img
                                    src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&h=400&fit=crop"
                                    alt="Kenyan business owner using POS"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated border">
                                <div className="flex items-center gap-3">
                                    <Users className="h-8 w-8 text-primary" />
                                    <div>
                                        <div className="font-bold text-2xl text-foreground">120+</div>
                                        <div className="text-sm text-muted-foreground">Team Members Nationwide</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative animate-slide-up">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                                alt="Technology and innovation"
                                className="rounded-2xl shadow-elevated w-full h-full object-cover"
                            />
                        </div>

                        <div className="animate-fade-in">
                            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                We believe Kenyan entrepreneurs deserve world-class POS tools that work with M-Pesa, local banks, and diverse business models. Our systems help businesses grow, save time, and improve customer experiences.
                            </p>

                            <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To empower every business owner in Kenya from the corner shop to high-end restaurants with technology that simplifies operations and boosts profits.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="mb-20">
                        <div className="text-center mb-16 animate-fade-in">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Our Core Values
                            </h3>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Principles that guide everything we do and every solution we create.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <Card key={index} className="h-full bg-gradient-card border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <CardContent className="p-8 text-center">
                                        <div className="mb-6">
                                            <value.icon className="h-12 w-12 text-primary mx-auto bg-primary/10 p-2 rounded-xl" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-foreground mb-4">
                                            {value.title}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Team Culture */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in">
                            <h3 className="text-3xl font-bold text-foreground mb-6">
                                Built by Passionate Experts
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Our team combines years of retail tech experience with local insights. We’re developers, business analysts, and support experts who genuinely care about your success.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                                    <span className="text-muted-foreground">Remote-first & local talent mix</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                                    <span className="text-muted-foreground">Constant innovation and training</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                                    <span className="text-muted-foreground">Customer-first in every decision</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-slide-up">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                                alt="Team member working"
                                className="rounded-2xl shadow-elevated w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
