import React from 'react';
import { motion } from 'framer-motion';

const portfolioData = {
  ko: {
    title: 'Portfolio',
    intro: '앳플로우와 함께한 즐거운 작업들을 소개합니다.',
    items: [
      {
        title: '아토마인드 (Atomind)',
        description: '아토피 환자들을 위한 8주간의 치료 여정, 아토마인드입니다. 피부과 전문의가 제공하는 정확한 정보를 바탕으로 생활 습관 교정을 위한 학습을 진행하고, 정신과 전문의가 설계한 인지행동치료(CBT)와 마음챙김 치료(MBCT)를 제공하여 증상 개선과 삶의 질 향상을 목표로 합니다.',
        tags: ['프로젝트 관리', '상위 기획', '상세 설계(App/Web)', '그래픽 디자인', '콘텐츠 기획/제작'],
        partners: '연세 의료원, 강남 세브란스 병원, 원주 기독 세브란스 병원, 휴레이포지티브',
        status: '임상 진행 중',
        image: '/placeholder.svg'
      },
      {
        title: '피치스 (PEACHIS)',
        description: '폐동맥고혈압(PAH)이라는 희귀 난치성 질환을 앓고 있는 분과 보호자들을 위한 서비스입니다. 생소한 질환명과 복잡한 검사 지표들을 한 눈에 쉽게 이해할 수 있도록 정리하고, 폐고혈압 진료지침 가이드를 기반으로 한 의학 정보들을 쉽게 설명한 다양한 콘텐트를 수록했습니다.',
        tags: ['프로젝트 관리', '상위 기획', '상세 설계(App/Web)', '그래픽 디자인', '콘텐츠 기획/제작'],
        partners: '사단법인 폐고혈압을 이기는 사람들, 휴레이포지티브',
        status: '서비스 운영 중',
        image: '/placeholder.svg'
      },
      {
        title: '에이미라클 (Eimiracle)',
        description: '무릎 전방십자인대(ACL) 부상 수술 후, 비대면으로 단계별 맞춤 재활 프로그램을 제공하는 솔루션입니다. 스포츠 재활센터와 연계하여 처방받은 운동 리스트를 바탕으로 매일 목표한 운동과 일상생활 움직임을 기록해 빠른 회복을 돕습니다.',
        tags: ['프로젝트 관리', '상위 기획', '상세 설계'],
        partners: '명지병원, 메트렉스 헬스케어, 휴레이포지티브',
        status: '서비스 운영 중',
        image: '/placeholder.svg'
      },
      {
        title: '앳플로우 (ATFLOW)',
        description: '디지털 치료기기에서 중요한 치료 프로토콜 디자인과 컨텐츠의 적합성을 사전 검증하고, 별도의 앱 개발 없이 디지털 치료 프로토콜을 환자에게 전달할 수 있는 플랫폼입니다. DtaaS(Dtx as a serivce)를 목표로 합니다.',
        tags: ['플랫폼 개발', '서비스 기획'],
        partners: '자체 프로젝트',
        status: '준비 중',
        image: '/placeholder.svg'
      }
    ]
  },
  en: {
    title: 'Portfolio',
    intro: 'Introducing the exciting projects we have worked on at AtFlow.',
    items: [
      {
        title: 'Atomind',
        description: 'An 8-week treatment journey for atopic dermatitis patients. It provides education for lifestyle modification based on accurate information from dermatologists, and offers Cognitive Behavioral Therapy (CBT) and Mindfulness-Based Cognitive Therapy (MBCT) designed by psychiatrists to improve symptoms and enhance quality of life.',
        tags: ['Project Management', 'High-level Planning', 'Detailed Design (App/Web)', 'Graphic Design', 'Content Planning/Production'],
        partners: 'Yonsei University Health System, Gangnam Severance Hospital, Wonju Severance Christian Hospital, Huray Positive',
        status: 'Clinical trials in progress',
        image: '/placeholder.svg'
      },
      {
        title: 'PEACHIS',
        description: 'A service for patients and guardians dealing with the rare intractable disease, Pulmonary Arterial Hypertension (PAH). It organizes unfamiliar disease names and complex test indicators for easy understanding and includes various content explaining medical information based on pulmonary hypertension treatment guidelines.',
        tags: ['Project Management', 'High-level Planning', 'Detailed Design (App/Web)', 'Graphic Design', 'Content Planning/Production'],
        partners: 'PHA Korea, Huray Positive',
        status: 'In service',
        image: '/placeholder.svg'
      },
      {
        title: 'Eimiracle',
        description: 'A solution that provides a non-face-to-face, step-by-step customized rehabilitation program after surgery for an anterior cruciate ligament (ACL) knee injury. It helps with rapid recovery by recording daily target exercises and daily life movements based on an exercise list prescribed in conjunction with a sports rehabilitation center.',
        tags: ['Project Management', 'High-level Planning', 'Detailed Design'],
        partners: 'Myongji Hospital, Metrex Healthcare, Huray Positive',
        status: 'In service',
        image: '/placeholder.svg'
      },
      {
        title: 'ATFLOW',
        description: 'A platform that pre-verifies the suitability of treatment protocol designs and content, which are crucial in digital therapeutics, and delivers digital treatment protocols to patients without separate app development. Aiming for DtaaS (Dtx as a service).',
        tags: ['Platform Development', 'Service Planning'],
        partners: 'Internal Project',
        status: 'In preparation',
        image: '/placeholder.svg'
      }
    ]
  }
};

const PortfolioCard = ({ item, language }: { item: any; language: 'ko' | 'en' }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative h-56">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">{language === 'ko' ? '참여 분야' : 'Contribution'}</h4>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag: string, index: number) => (
              <span key={index} className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">{language === 'ko' ? '함께한 분들' : 'Partners'}</h4>
          <p className="text-gray-600 text-sm">{item.partners}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">{language === 'ko' ? '현재 단계' : 'Current Status'}: {item.status}</span>
          <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300">
            {language === 'ko' ? '더 보기' : 'Read More'} &rarr;
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioPage = ({ language = 'ko' }: { language: 'ko' | 'en' }) => {
  const content = portfolioData[language];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {content.items.map((item, index) => (
            <PortfolioCard key={index} item={item} language={language} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage; 