import heroImage from '@/assets/hero-pos-system.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Revolutionize Your
              <span className="block text-accent">Business Sales</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Complete POS solutions that grow with your business. From small cafes to enterprise retail chains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                Schedule Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-primary-foreground/80">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>24/7 support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>30-day money back</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Modern POS System"
                className="w-full h-auto rounded-lg shadow-hero"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;