
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="font-playfair text-2xl font-bold mb-4">
              Adv. John Doe
            </div>
            <p className="text-navy-200 mb-6 max-w-md">
              Trusted legal counsel providing comprehensive legal services to businesses 
              and individuals. Your success is our commitment.
            </p>
            
            {/* TODO: Replace with actual contact information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-navy-200">contact@johndoelegal.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-navy-200">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1" />
                <span className="text-navy-200">
                  12 Example Chambers, Connaught Place<br />
                  New Delhi 110001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Practice Areas', href: '#practice-areas' },
                { label: 'About', href: '#about' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-navy-200 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Disclaimer',
                'Cookie Policy'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-navy-200 hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {/* TODO: Replace with actual social media links */}
                <a
                  href="#"
                  className="p-2 bg-navy-800 hover:bg-gold-600 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-navy-800 hover:bg-gold-600 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-navy-800 hover:bg-gold-600 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-navy-300 text-sm">
              © {currentYear} Adv. John Doe. All rights reserved.
            </div>
            
            {/* Bar Council Disclosure */}
            <div className="text-navy-300 text-sm text-center md:text-right">
              <div>Bar Enrollment: D/1234/2015</div>
              <div>Registered with Bar Council of Delhi</div>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div className="mt-6 text-xs text-navy-400 text-center max-w-4xl mx-auto leading-relaxed">
            <p className="mb-2">
              <strong>Disclaimer:</strong> This website provides general information and is not legal advice. 
              No attorney-client relationship is formed by using this website or contacting via forms. 
              Past results do not guarantee future outcomes.
            </p>
            <p>
              The content of this website is for informational purposes only and should not be construed 
              as legal advice. Please consult with a qualified attorney for advice regarding your specific situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
