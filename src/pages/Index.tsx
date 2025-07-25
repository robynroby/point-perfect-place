import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <Features />
      <Pricing />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
