import { useEffect, useRef } from 'react';
import { Award, Users, Calendar, Building, Rocket } from 'lucide-react';

interface AboutProps {
  language: 'ko' | 'en';
}

const About = ({ language }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const content = {
    ko: {
      title: "ABOUT US",
      subtitle: "앳플로우의 성장 여정",
      description: "앳플로우는 2020년 10월 창업부터 현재까지, 헬스케어 분야의 혁신을 위해 끊임없이 달려왔습니다. 주요 성과와 프로덕트 출시를 통해 걸어온 길을 확인해보세요.",
      timeline: [
        { year: "2025", text: "기업부설연구소 설립", type: "achievement", icon: Building },
        { year: "2024", text: "에이미라클(Eimiracle) 런칭", type: "launch", icon: Rocket },
        { year: "2023", text: "피치스(PEACHIS) 런칭", type: "launch", icon: Rocket },
        { year: "2022", text: "벤처기업 인증", type: "achievement", icon: Award },
        { year: "2021", text: "여성기업 인증", type: "achievement", icon: Users },
        { year: "2020", text: "앳플로우 창업", type: "achievement", icon: Calendar }
      ]
    },
    en: {
      title: "ABOUT US",
      subtitle: "The Journey of AtFlow",
      description: "Since its foundation in October 2020, AtFlow has been relentlessly driving innovation in the healthcare sector. Explore our journey through key achievements and product launches.",
      timeline: [
        { year: "2025", text: "Established Corporate Research Institute", type: "achievement", icon: Building },
        { year: "2024", text: "Launched Eimiracle", type: "launch", icon: Rocket },
        { year: "2023", text: "Launched PEACHIS", type: "launch", icon: Rocket },
        { year: "2022", text: "Certified as a Venture Company", type: "achievement", icon: Award },
        { year: "2021", text: "Certified as a Women-owned Business", type: "achievement", icon: Users },
        { year: "2020", text: "Founded AtFlow", type: "achievement", icon: Calendar }
      ]
    }
  };

  const getIconColor = (type: string) => {
    return type === 'launch' ? 'from-green-400 to-cyan-500' : 'from-purple-500 to-blue-500';
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal opacity-0 transform translate-y-12 transition-all duration-1000">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-purple-600 tracking-wide uppercase mb-4">
              {content[language].title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content[language].subtitle}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content[language].description}
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            {content[language].timeline.map((item, index) => (
              <div key={index} className="relative mb-8">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    {index % 2 === 0 && (
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">{item.year}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getIconColor(item.type)} rounded-full flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pl-8">
                    {index % 2 !== 0 && (
                       <div>
                        <h4 className="font-bold text-lg text-gray-800">{item.year}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
