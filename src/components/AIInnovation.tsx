
import { Bot, Heart, Users, Zap, Brain, MessageCircle, BarChart3, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AIInnovationProps {
  language: 'ko' | 'en';
}

const AIInnovation = ({ language }: AIInnovationProps) => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [emotionAnalysis, setEmotionAnalysis] = useState({
    excitement: 0,
    anxiety: 0,
    motivation: 0
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [flowIndex, setFlowIndex] = useState(87);
  const [processedConversations, setProcessedConversations] = useState(1247392);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setFlowIndex(prev => Math.max(70, Math.min(95, prev + (Math.random() - 0.5) * 4)));
      setProcessedConversations(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    ko: {
      title: "AI 혁신",
      subtitle: "Technology Innovation in Action",
      description: "실시간 AI 시스템이 사용자 감정과 어떻게 상호작용하는지 확인해보세요",
      demoTitle: "Real-time Emotion Analysis Experience",
      demoSubtitle: "Enter your mood or experience from today below",
      placeholder: "e.g., I started a new project today and I feel excited but also worried...",
      analyzeButton: "Analyze",
      resultTitle: "Emotion Analysis Results",
      flowTitle: "Real-time Flow State Visualization",
      flowSubtitle: "See how user interactions affect the Flow index in real-time",
      flowIndexLabel: "Flow Index",
      neuralActivityLabel: "Neural Activity",
      innovations: [
        {
          icon: Brain,
          title: "Emotion Labeling System",
          description: "A system where AI analyzes and labels emotions when events or experiences are entered",
          status: "BETA",
          accuracy: "92% accuracy in emotion recognition"
        },
        {
          icon: MessageCircle,
          title: "Comfort Guide Tool",
          description: "AI guides how to provide proper comfort and support to people around you",
          status: "LIVE",
          feature: "Try saying 'I understand how you feel'"
        },
        {
          icon: Activity,
          title: "Real-time Emotion Recognition",
          description: "Real-time emotion monitoring and flow state tracking system",
          status: "DEMO",
          stats: "Joy, Anxiety, Focus tracking"
        },
        {
          icon: BarChart3,
          title: "Data Analysis",
          description: "Comprehensive emotional pattern analysis and insights",
          status: "BETA",
          metrics: "98.7% emotion patterns, 0.3s response time"
        }
      ]
    },
    en: {
      title: "AI Innovation",
      subtitle: "Technology Innovation in Action",
      description: "See how real-time AI systems interact with user emotions",
      demoTitle: "Real-time Emotion Analysis Experience",
      demoSubtitle: "Enter your mood or experience from today below",
      placeholder: "e.g., I started a new project today and I feel excited but also worried...",
      analyzeButton: "Analyze",
      resultTitle: "Emotion Analysis Results",
      flowTitle: "Real-time Flow State Visualization",
      flowSubtitle: "See how user interactions affect the Flow index in real-time",
      flowIndexLabel: "Flow Index",
      neuralActivityLabel: "Neural Activity",
      innovations: [
        {
          icon: Brain,
          title: "Emotion Labeling System",
          description: "A system where AI analyzes and labels emotions when events or experiences are entered",
          status: "BETA",
          accuracy: "92% accuracy in emotion recognition"
        },
        {
          icon: MessageCircle,
          title: "Comfort Guide Tool",
          description: "AI guides how to provide proper comfort and support to people around you",
          status: "LIVE",
          feature: "Try saying 'I understand how you feel'"
        },
        {
          icon: Activity,
          title: "Real-time Emotion Recognition",
          description: "Real-time emotion monitoring and flow state tracking system",
          status: "DEMO",
          stats: "Joy, Anxiety, Focus tracking"
        },
        {
          icon: BarChart3,
          title: "Data Analysis",
          description: "Comprehensive emotional pattern analysis and insights",
          status: "BETA",
          metrics: "98.7% emotion patterns, 0.3s response time"
        }
      ]
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setEmotionAnalysis({
        excitement: Math.floor(Math.random() * 40) + 60,
        anxiety: Math.floor(Math.random() * 40) + 30,
        motivation: Math.floor(Math.random() * 30) + 70
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "BETA":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "LIVE":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "DEMO":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section id="ai-innovation" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal opacity-0 transform translate-y-12 transition-all duration-1000">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
              {content[language].title}
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-200 mb-4 font-semibold">
              {content[language].subtitle}
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {content[language].description}
            </p>
          </div>

          {/* Interactive Demo Section */}
          <div className="mb-20">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <CardContent className="space-y-8">
                {/* Live Demo */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-gray-800">
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    {content[language].demoTitle}
                  </h4>
                  <p className="text-center text-gray-600 mb-6">
                    {content[language].demoSubtitle}
                  </p>
                  
                  <div className="space-y-4">
                    <textarea
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                      placeholder={content[language].placeholder}
                    />
                    <div className="flex justify-center">
                      <Button 
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                      >
                        {isAnalyzing ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Analyzing...</span>
                          </div>
                        ) : (
                          content[language].analyzeButton
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Results */}
                  {(emotionAnalysis.excitement > 0 || isAnalyzing) && (
                    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                      <h5 className="text-lg font-semibold mb-4">{content[language].resultTitle}</h5>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl mb-2">😊</div>
                          <div className="font-semibold">Excitement {emotionAnalysis.excitement}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">😰</div>
                          <div className="font-semibold">Anxiety {emotionAnalysis.anxiety}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">💪</div>
                          <div className="font-semibold">Motivation {emotionAnalysis.motivation}%</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Flow State Visualization */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 text-gray-800">
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    {content[language].flowTitle}
                  </h4>
                  <p className="text-center text-gray-600 mb-6">
                    {content[language].flowSubtitle}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-12">
                    {/* Flow Index Circle */}
                    <div className="text-center">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                        <div 
                          className="absolute inset-0 rounded-full border-8 border-blue-500 transition-all duration-1000"
                          style={{
                            clipPath: `inset(0 ${100 - flowIndex}% 0 0)`
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold text-blue-600">{flowIndex.toFixed(1)}%</span>
                        </div>
                      </div>
                      <div className="mt-4 font-semibold">{content[language].flowIndexLabel}</div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Joy</span>
                          <span className="text-sm text-gray-500">85.2%</span>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{width: '85.2%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Anxiety</span>
                          <span className="text-sm text-gray-500">30.4%</span>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full transition-all duration-1000" style={{width: '30.4%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Focus</span>
                          <span className="text-sm text-gray-500">70.8%</span>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-cyan-500 h-2 rounded-full transition-all duration-1000" style={{width: '70.8%'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Neural Activity */}
                    <div className="text-center">
                      <div className="w-24 h-16 relative">
                        <svg className="w-full h-full" viewBox="0 0 100 60">
                          <path
                            d="M0,30 Q25,10 50,30 T100,30"
                            stroke="#8b5cf6"
                            strokeWidth="3"
                            fill="none"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 font-semibold">{content[language].neuralActivityLabel}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Innovation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {content[language].innovations.map((innovation, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
                onMouseEnter={() => setActiveDemo(index)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <innovation.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(innovation.status)}`}>
                      {innovation.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {innovation.title}
                  </h4>
                  
                  <p className="text-blue-200 leading-relaxed mb-4">
                    {innovation.description}
                  </p>

                  {innovation.accuracy && (
                    <div className="text-sm text-cyan-300 font-medium">
                      📊 {innovation.accuracy}
                    </div>
                  )}
                  
                  {innovation.feature && (
                    <div className="text-sm text-green-300 font-medium">
                      💡 {innovation.feature}
                    </div>
                  )}
                  
                  {innovation.stats && (
                    <div className="text-sm text-purple-300 font-medium">
                      📈 {innovation.stats}
                    </div>
                  )}
                  
                  {innovation.metrics && (
                    <div className="text-sm text-blue-300 font-medium">
                      ⚡ {innovation.metrics}
                    </div>
                  )}

                  {/* Animated progress bar */}
                  <div className="mt-6">
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div 
                        className={`bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full transition-all duration-2000 ${
                          activeDemo === index ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-blue-300 mb-2">{processedConversations.toLocaleString()}</div>
              <div className="text-blue-200">Processed conversations</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-purple-300 mb-2">98.7%</div>
              <div className="text-purple-200">Emotion patterns</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">0.3s</div>
              <div className="text-cyan-200">Response time</div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">
                {language === 'ko' ? 'AI 연구 진행 중' : 'AI Research in Progress'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovation;
