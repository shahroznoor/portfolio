'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Our Project' },
  { href: '#home', label: 'About us' },
];

const EnverLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_1_2)"/>
        <path d="M16.511 7.C16.511 7. 19.898 11.234 20.898 12.75C21.898 14.266 22.234 16.039 20.898 17.555C19.562 19.07 17.187 19.328 15.601 18.07C14.015 16.812 13.679 14.781 14.937 13.266C16.195 11.75 16.511 7. 16.511 7.Z" fill="white"/>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5454D4"/>
                <stop offset="1" stopColor="#5454D4" stopOpacity="0.5"/>
            </linearGradient>
        </defs>
    </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-border/10 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3 text-2xl font-bold font-headline text-white">
          <EnverLogo />
          Enver
        </a>
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild variant="outline">
                <a href="#contact">Contact us</a>
            </Button>
        </div>
      </div>
    </header>
  );
}
