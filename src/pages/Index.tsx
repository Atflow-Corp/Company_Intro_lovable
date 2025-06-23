import { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import PurpleWhale from '@/components/PurpleWhale';
import AIInnovation from '@/components/AIInnovation';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { SetStateAction } from "react";

interface IndexProps {
  language: 'ko' | 'en';
  setLanguage: React.Dispatch<SetStateAction<'ko' | 'en'>>;
}

const Index = ({ language, setLanguage }: IndexProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero language={language} />
        <About language={language} />
        <Services language={language} />
        <PurpleWhale language={language} />
        <AIInnovation language={language} />
        <Portfolio language={language} />
        <Contact language={language} />
      </main>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </button>
    </div>
  );
};

export default Index;
