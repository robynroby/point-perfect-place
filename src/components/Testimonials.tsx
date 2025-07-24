import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Operations Manager",
        company: "Urban Bistro Chain",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b69c?w=150&h=150&fit=crop&crop=face",
        content: "Our restaurant chain has seen a 40% increase in order accuracy since implementing this POS system. The intuitive interface means our staff can focus on customer service instead of struggling with technology.",
        rating: 5,
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        role: "Store Owner",
        company: "Elite Fashion Boutique",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        content: "The inventory management features are game-changing. We've reduced stock-outs by 60% and our checkout process is now seamless. Customer satisfaction has never been higher.",
        rating: 5,
    },
    {
        id: 3,
        name: "Jennifer Walsh",
        role: "Regional Director",
        company: "QuickMart Convenience Stores",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        content: "Managing 15 locations used to be a nightmare. Now with real-time reporting and cloud synchronization, I have complete visibility across all stores. It's transformed our operations.",
        rating: 5,
    },
    {
        id: 4,
        name: "David Kim",
        role: "Franchise Owner",
        company: "Coffee Corner Cafés",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        content: "The mobile POS capabilities have been incredible for our busy café. We can take orders anywhere, reduce wait times, and the analytics help us optimize our menu offerings.",
        rating: 5,
    },
    {
        id: 5,
        name: "Rachel Thompson",
        role: "General Manager",
        company: "SportZone Equipment",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
        content: "Customer loyalty features and integrated payments have boosted our repeat business by 35%. The system pays for itself with the efficiency gains alone.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
                        Trusted by <span className="text-primary">10,000+</span> Businesses
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        See how leading businesses have transformed their operations with our POS solutions
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                        <Card className="h-full bg-gradient-card backdrop-blur-sm border-border/50 shadow-elevated hover:shadow-hero transition-all duration-300 hover:scale-105">
                                            <CardContent className="p-8 flex flex-col h-full">
                                                {/* Quote Icon */}
                                                <div className="mb-4">
                                                    <Quote className="h-8 w-8 text-primary opacity-60" />
                                                </div>

                                                {/* Rating */}
                                                <div className="flex mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="h-4 w-4 fill-accent text-accent"
                                                        />
                                                    ))}
                                                </div>

                                                {/* Testimonial Content */}
                                                <blockquote className="text-card-foreground leading-relaxed mb-6 flex-grow">
                                                    "{testimonial.content}"
                                                </blockquote>

                                                {/* Author Info */}
                                                <div className="flex items-center gap-4 mt-auto">
                                                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                                                        <AvatarImage
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                        />
                                                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-semibold text-card-foreground">
                                                            {testimonial.name}
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {testimonial.role}
                                                        </div>
                                                        <div className="text-sm text-primary font-medium">
                                                            {testimonial.company}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 bg-background hover:bg-primary hover:text-primary-foreground" />
                        <CarouselNext className="hidden md:flex -right-12 border-primary/20 bg-background hover:bg-primary hover:text-primary-foreground" />
                    </Carousel>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center animate-fade-in">
                    <p className="text-muted-foreground mb-8">Join thousands of satisfied customers</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-accent rounded-full"></div>
                            <span className="text-sm font-medium">99.9% Uptime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-accent rounded-full"></div>
                            <span className="text-sm font-medium">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-accent rounded-full"></div>
                            <span className="text-sm font-medium">ISO Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-accent rounded-full"></div>
                            <span className="text-sm font-medium">PCI Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;