
import { useEffect, useState } from 'react';
import { ChevronDown, Heart, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  language: 'ko' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    ko: {
      title: "사람을 이해하고 기술을 더해",
      subtitle: "건강하고 가치있는 삶에 기여합니다",
      description: "'Flow'는 완전히 몰입하여 활기차고 즐겁게 참여하는 상태를 뜻합니다. 앳플로우는 긍정의 몰입을 통해 디지털 헬스케어를 혁신하는 사용자 경험을 디자인합니다.",
      cta: "더 알아보기",
      features: [
        { icon: Heart, text: "마음건강" },
        { icon: Brain, text: "AI 기술" },
        { icon: Zap, text: "디지털 혁신" }
      ]
    },
    en: {
      title: "Understanding People, Adding Technology",
      subtitle: "Contributing to a healthy and valuable life",
      description: "'Flow' refers to a state of complete immersion, energetic and joyful participation. AtFlow designs user experiences that innovate digital healthcare through positive immersion.",
      cta: "Learn More",
      features: [
        { icon: Heart, text: "Mental Health" },
        { icon: Brain, text: "AI Technology" },
        { icon: Zap, text: "Digital Innovation" }
      ]
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-light">
            {content[language].subtitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content[language].description}
          </p>

          {/* Feature icons */}
          <div className="flex justify-center space-x-8 mb-12">
            {content[language].features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-2 transform hover:scale-110 transition-transform duration-300"
              >
                <div className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {content[language].cta}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
