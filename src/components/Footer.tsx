import { ShoppingCart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-8 w-8 text-accent mr-2" />
              <span className="text-2xl font-bold">EpiMAX VENTURES</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Empowering businesses with innovative POS solutions that drive growth and streamline operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Restaurant POS</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Retail POS</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mobile POS</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API Docs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm">
            © 2025 EpiMAX VENTURES. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;