import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'About', href: '#about' },
    { name: 'AI Assistant', href: '#assistant' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className={cn('w-8 h-8', isScrolled ? 'text-brand-gold' : 'text-white')} />
          <span className={cn('text-2xl font-serif font-bold tracking-tight', isScrolled ? 'text-white' : 'text-white')}>
            VOYAGEUR
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium tracking-widest uppercase transition-colors hover:text-brand-gold',
                isScrolled ? 'text-white/80' : 'text-white/90'
              )}
            >
              {link.name}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-brand-gold text-brand-dark px-5 py-2 rounded-full font-semibold text-sm hover:bg-white transition-colors">
            <User className="w-4 h-4" />
            SIGN IN
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 text-lg font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-gold text-brand-dark px-6 py-3 rounded-full font-bold text-center">
              SIGN IN
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
