
import { MapPin, Phone, Mail, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactProps {
  language: 'ko' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    ko: {
      title: "디지털 프로덕트 전문가를 모십니다",
      description: "디지털 헬스케어 분야는 단순히 일을 위한 일이 아니라, 일상의 의미를 발견하고 건강한 하루를 되찾는 데 기여하는 소명의식이 함께 합니다. 우리는 가정과 개인의 건강을 소중하게 여기는 문화를 추구합니다.",
      workCulture: "희망자에게는 재택 근무, 거점 오피스 근무, 육아기 단축근무, 선택시간 근무, 프리랜서 등 다양하고 유연한 인사 시스템을 제공합니다.",
      aboutTitle: "about ATFLOW",
      aboutDescription: "앳플로우는 디지털 치료기기 분야를 개척하고 있는 기획/UX 전문가 그룹입니다.",
      businessNumber: "사업자 등록번호: 385-88-01932",
      ceo: "대표: 이선영",
      contactButton: "문의하기"
    },
    en: {
      title: "We are recruiting digital product experts",
      description: "The digital healthcare field is not just work for work's sake, but comes with a sense of mission to discover meaning in daily life and contribute to regaining healthy days. We pursue a culture that values the health of families and individuals.",
      workCulture: "We provide various and flexible HR systems such as remote work, hub office work, shortened working hours during childcare, flexible working hours, and freelancing for those who wish.",
      aboutTitle: "about ATFLOW",
      aboutDescription: "AtFlow is a group of planning/UX experts pioneering the digital therapeutics field.",
      businessNumber: "Business Registration Number: 385-88-01932",
      ceo: "CEO: Lee Sun Young",
      contactButton: "Contact Us"
    }
  };

  const contactInfo = [
    { icon: MapPin, text: language === 'ko' ? '서울, 대한민국' : 'Seoul, South Korea' },
    { icon: Phone, text: '+82-2-XXXX-XXXX' },
    { icon: Mail, text: 'contact@atflow.co.kr' },
    { icon: Users, text: language === 'ko' ? '기획/UX 전문가 그룹' : 'Planning/UX Expert Group' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal opacity-0 transform translate-y-12 transition-all duration-1000">
          {/* Recruitment Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {content[language].title}
            </h2>
            <p className="text-lg text-purple-200 max-w-4xl mx-auto leading-relaxed mb-8">
              {content[language].description}
            </p>
            <p className="text-md text-purple-300 max-w-3xl mx-auto leading-relaxed">
              {content[language].workCulture}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-300">
                  {content[language].aboutTitle}
                </h3>
                <p className="text-purple-200 mb-8 leading-relaxed">
                  {content[language].aboutDescription}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600/30 rounded-full">
                      <info.icon className="w-5 h-5 text-purple-300" />
                    </div>
                    <span className="text-purple-200">{info.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-purple-600/30">
                <p className="text-sm text-purple-300 mb-2">{content[language].businessNumber}</p>
                <p className="text-sm text-purple-300">{content[language].ceo}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-white">
                {content[language].contactButton}
              </h3>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={language === 'ko' ? '이름' : 'Name'}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder={language === 'ko' ? '이메일' : 'Email'}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={4}
                    placeholder={language === 'ko' ? '메시지를 입력하세요' : 'Enter your message'}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  {language === 'ko' ? '메시지 보내기' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
