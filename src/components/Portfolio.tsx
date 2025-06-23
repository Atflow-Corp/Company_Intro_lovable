
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PortfolioProps {
  language: 'ko' | 'en';
}

const Portfolio = ({ language }: PortfolioProps) => {
  const content = {
    ko: {
      title: "PORTFOLIO",
      subtitle: "앳플로우는 디지털 헬스케어 업계의 다양한 파트너들과 협력하고 있습니다.",
      linkText: "자세히 보기"
    },
    en: {
      title: "PORTFOLIO",
      subtitle: "AtFlow collaborates with various partners in the digital healthcare industry.",
      linkText: "Learn More"
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-64 bg-blue-500 rounded-lg transform rotate-12"></div>
        <div className="absolute top-20 right-20 w-32 h-64 bg-green-500 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-32 h-64 bg-purple-500 rounded-lg transform rotate-6"></div>
        <div className="absolute bottom-10 right-10 w-32 h-64 bg-pink-500 rounded-lg transform -rotate-6"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-64 bg-yellow-500 rounded-lg transform rotate-3 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-64 bg-indigo-500 rounded-lg transform -rotate-9"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-64 bg-red-500 rounded-lg transform rotate-9"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal opacity-0 transform translate-y-12 transition-all duration-1000">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content[language].title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              {content[language].subtitle}
            </p>
            
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {content[language].linkText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
