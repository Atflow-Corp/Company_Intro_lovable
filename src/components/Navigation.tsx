import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  language: 'ko' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'ko' | 'en'>>;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const isMobile = useIsMobile();

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  const navLinks = {
    ko: [
      { href: "#about", label: "소개" },
      { href: "#services", label: "서비스" },
      { href: "/portfolio", label: "포트폴리오" },
      { href: "#contact", label: "문의" }
    ],
    en: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "#contact", label: "Contact" }
    ]
  };

  const NavLink = ({ href, label }: { href: string, label: string }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (isHomePage && href.startsWith('#')) {
      return (
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-600 hover:text-purple-600 transition-colors"
        >
          {label}
        </a>
      );
    }

    return (
      <Link to={href.startsWith('#') ? `/${href}` : href} className="text-gray-600 hover:text-purple-600 transition-colors">
        {label}
      </Link>
    );
  };

  const currentNavLinks = navLinks[language];

  if (isMobile) {
    return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  {currentNavLinks.map(link => (
                    <NavLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/" className="text-2xl font-bold text-gray-900">
              ATFLOW
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleLanguage}>
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            ATFLOW
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {currentNavLinks.map(link => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage}>
              <Globe className="h-5 w-5" />
              <span className="ml-2 font-semibold">{language.toUpperCase()}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
