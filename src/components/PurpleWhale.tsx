
import { useState } from 'react';
import { Heart, Brain, MessageSquare, Activity, ExternalLink, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PurpleWhaleProps {
  language: 'ko' | 'en';
}

const PurpleWhale = ({ language }: PurpleWhaleProps) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const content = {
    ko: {
      title: "Purple Whale",
      subtitle: "신체 증상 장애를 위한 디지털 치료기기",
      description: "Purple Whale은 신체 증상 장애(Somatic Symptom Disorder) 환자들을 위한 혁신적인 디지털 치료 솔루션입니다. 전문가의 가이드와 함께 나를 관찰하고 깨달아가는 마음챙김 여정을 제공합니다.",
      cta: "자세히 알아보기",
      websiteText: "공식 웹사이트 방문",
      instagramText: "인스타툰 보러가기",
      features: [
        {
          icon: Heart,
          title: "감정 기록하기",
          description: "신체 반응과 그 때의 감정을 기록하며 알아가는 나의 패턴"
        },
        {
          icon: Brain,
          title: "감정, 감각, 생각 살펴보기",
          description: "전문가의 가이드에 맞춰 나를 관찰하고 깨닫는 마음챙김"
        },
        {
          icon: MessageSquare,
          title: "의견 전달하기",
          description: "하고 싶었던 말, 했어야 하는 말을 차근차근 정리해 전달하는 수용과 거절 훈련"
        },
        {
          icon: Activity,
          title: "움직여보기",
          description: "무기력함을 이길 수 있는 일상의 작은 움직임과 다양한 스트레칭"
        }
      ]
    },
    en: {
      title: "Purple Whale",
      subtitle: "Digital Therapeutic Device for Somatic Symptom Disorder",
      description: "Purple Whale is an innovative digital therapeutic solution for patients with Somatic Symptom Disorder. It provides a mindfulness journey of self-observation and awareness guided by experts.",
      cta: "Learn More",
      websiteText: "Visit Official Website",
      instagramText: "Check Instagram",
      features: [
        {
          icon: Heart,
          title: "Emotion Recording",
          description: "Record physical reactions and emotions to understand your patterns"
        },
        {
          icon: Brain,
          title: "Explore Emotions, Sensations, and Thoughts",
          description: "Mindfulness practice to observe and understand yourself with expert guidance"
        },
        {
          icon: MessageSquare,
          title: "Communication Training",
          description: "Acceptance and rejection training to organize and express what you wanted to say"
        },
        {
          icon: Activity,
          title: "Movement Practice",
          description: "Small daily movements and various stretches to overcome lethargy"
        }
      ]
    }
  };

  return (
    <section id="purple-whale" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal opacity-0 transform translate-y-12 transition-all duration-1000">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              {content[language].title}
            </h2>
            <h3 className="text-xl md:text-2xl text-purple-200 mb-8">
              {content[language].subtitle}
            </h3>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {content[language].description}
            </p>

            {/* Website and Instagram Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                onClick={() => window.open('https://purplewhale.care', '_blank')}
              >
                <ExternalLink className="w-5 h-5" />
                {content[language].websiteText}
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                onClick={() => window.open('https://instagram.com/purplewhale.care', '_blank')}
              >
                <Instagram className="w-5 h-5" />
                {content[language].instagramText}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Feature List */}
            <div className="space-y-4">
              {content[language].features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-white/20 shadow-xl scale-105' 
                      : 'bg-white/10 hover:bg-white/15'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-purple-400 scale-110' 
                        : 'bg-purple-500/50'
                    }`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-purple-200 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                <div className="relative">
                  {/* Animated Purple Whale illustration */}
                  <div className="w-full h-64 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-xl flex items-center justify-center border border-purple-300/30">
                    <div className="text-6xl animate-pulse">🐋</div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-500 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurpleWhale;
