import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingCart className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-foreground">EpiMAX VENTURES</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {location.pathname === '/' ? (
                <>
                  <a href="#products" className="text-foreground hover:text-primary transition-colors">
                    Products
                  </a>
                  <a href="#features" className="text-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                  <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                    Pricing
                  </a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/#products" className="text-foreground hover:text-primary transition-colors">
                    Products
                  </Link>
                  <Link to="/#features" className="text-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                  <Link to="/#pricing" className="text-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </>
              )}
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="outline">
              Sign In
            </Button> */}
            <Button className="bg-gradient-primary">
              Get Demo
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            {location.pathname === '/' ? (
              <>
                <a href="#products" className="block px-3 py-2 text-foreground hover:text-primary">
                  Products
                </a>
                <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary">
                  Features
                </a>
                <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary">
                  Pricing
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary">
                  Home
                </Link>
                <Link to="/#products" className="block px-3 py-2 text-foreground hover:text-primary">
                  Products
                </Link>
                <Link to="/#features" className="block px-3 py-2 text-foreground hover:text-primary">
                  Features
                </Link>
                <Link to="/#pricing" className="block px-3 py-2 text-foreground hover:text-primary">
                  Pricing
                </Link>
              </>
            )}
            <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary">
              About
            </Link>
            <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
              Contact
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button className="w-full bg-gradient-primary">
                Get Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;