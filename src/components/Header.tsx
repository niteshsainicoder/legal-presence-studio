
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'About', href: '#about' },
    { label: 'Cases', href: '#cases' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      {/* Top bar - improved mobile handling */}
      <div className="bg-navy-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6 text-xs lg:text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>contact@johndoelegal.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+91 98765 43210</span>
            </div>
          </div>
          
          {/* Mobile contact menu */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsContactMenuOpen(!isContactMenuOpen)}
              className="flex items-center gap-2 text-sm hover:text-gold-300"
              aria-expanded={isContactMenuOpen}
              aria-label="Contact options"
            >
              Contact
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </button>
            {isContactMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-navy-800 rounded-lg shadow-lg p-3 min-w-48 z-10">
                <a href="tel:+919876543210" className="block py-2 px-3 hover:bg-navy-700 rounded text-sm">
                  <Phone className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  Call
                </a>
                <a href="mailto:contact@johndoelegal.com" className="block py-2 px-3 hover:bg-navy-700 rounded text-sm">
                  <Mail className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  Email
                </a>
              </div>
            )}
          </div>

          <Button 
            size="sm" 
            className="bg-gold-600 hover:bg-gold-700 text-white text-sm py-1 px-4 h-auto focus:ring-2 focus:ring-gold-300"
            onClick={() => scrollToSection('#contact')}
          >
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - TODO: Replace with actual logo/branding */}
          <div className="font-playfair text-2xl font-bold text-navy-900">
            Adv. John Doe
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-navy-900 font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-navy-500 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-slide-in-right">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-slate-700 hover:text-navy-900 font-medium transition-colors border-b border-slate-100 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-navy-500 rounded px-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
