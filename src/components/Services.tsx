import { Plus, FileText, User } from 'lucide-react';

interface ServicesProps {
  language: 'ko' | 'en';
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    ko: {
      partnership: "PARTNERSHIP",
      title: "좋은 제품을 위한",
      subtitle: "경계없는 몰입.",
      description: "앳플로우와 함께하면 다릅니다.",
      services: [
        {
          icon: Plus,
          title: "PRODUCT CONSULTING",
          description: "디지털 헬스케어의 개발은 시작부터 달라야합니다. 다른 도메인과는 달리 다양한 이해 관계자들, 복잡한 구조와 데이터, 그리고 보안에 대한 철저한 관리가 필요하기 때문입니다. 앳플로우는 상위 컨셉 기획부터 프로덕트 관리까지 경험 많은 전문가들이 함께합니다.",
          tags: ["상위기획", "전략기획", "컨셉제안서", "사업기획서"]
        },
        {
          icon: FileText,
          title: "CONTENT CONSULTING",
          description: "헬스케어 콘텐츠는 질병에 대한 이해를 돕고, 이를 바탕으로 일상 생활에 적용할 수 있는 지침들을 쉽게 풀어서 전달할 수 있어야 합니다. 어려운 정보를 쉽게, 지루하지만 꼭 필요한 내용은 재미있게. 앳플로우가 추구하는 헬스케어 컨텐츠 철학입니다.",
          tags: ["콘텐츠기획서", "콘티제작", "콘텐츠제작"]
        },
        {
          icon: User,
          title: "USER EXPERIENCE CONSULTING",
          description: "사용자 경험 최적화된 설계, 체계적인 서비스 구조를 통해 사용하기 쉽고, 재미있는 프로덕트를 만듭니다. 인프라 백엔드 서비스부터 B2C 서비스까지 다양한 도메인에서 사용자 경험 위주의 프로덕트를 설계한 앳플로우의 전문가 그룹을 만나보세요.",
          tags: ["상세설계서", "IA", "프로토타이핑"]
        }
      ]
    },
    en: {
      partnership: "PARTNERSHIP",
      title: "Boundless immersion",
      subtitle: "for great products.",
      description: "It's different when you work with AtFlow.",
      services: [
        {
          icon: Plus,
          title: "PRODUCT CONSULTING",
          description: "Digital healthcare development must be different from the start. Unlike other domains, it requires various stakeholders, complex structures and data, and thorough security management. AtFlow brings together experienced experts from high-level concept planning to product management.",
          tags: ["Strategic Planning", "Concept Proposals", "Business Planning"]
        },
        {
          icon: FileText,
          title: "CONTENT CONSULTING",
          description: "Healthcare content should help understand diseases and easily convey guidelines that can be applied to daily life. Making difficult information easy, and necessary but boring content interesting. This is AtFlow's healthcare content philosophy.",
          tags: ["Content Planning", "Content Production", "Storyboarding"]
        },
        {
          icon: User,
          title: "USER EXPERIENCE CONSULTING",
          description: "We create easy-to-use and enjoyable products through user experience-optimized design and systematic service structure. Meet AtFlow's expert group that has designed user experience-focused products in various domains from infrastructure backend services to B2C services.",
          tags: ["Detailed Design", "Information Architecture", "Prototyping"]
        }
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal opacity-0 transform translate-y-12 transition-all duration-1000">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 tracking-wide uppercase mb-4">
              {content[language].partnership}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {content[language].title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content[language].subtitle}
            </h3>
            <p className="text-xl text-purple-600 font-medium">
              {content[language].description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content[language].services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-purple-600 text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
