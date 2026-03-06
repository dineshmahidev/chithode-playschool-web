import { useState } from 'react';

const tabs = [
  { id: 'enroll',  label: '📋 Enroll',    icon: '📋' },
  { id: 'visit',   label: '🏫 Visit Us',  icon: '🏫' },
  { id: 'join',    label: '🎒 Join Class', icon: '🎒' },
  { id: 'grow',    label: '🌟 Grow',       icon: '🌟' },
];

const tabContent = {
  enroll: {
    step: '01',
    title: 'FILL THE\nENROLLMENT FORM',
    desc: 'Start your child\'s journey by filling our simple online admission form. Share basic details about your child and we\'ll get back to you within 24 hours. No complicated paperwork — just a fresh start!',
    cta: 'Enroll Now →',
    highlight: 'Simple & Quick',
  },
  visit: {
    step: '02',
    title: 'VISIT OUR\nSCHOOL',
    desc: 'Come visit Chithode Happykids and see the magic in person! Our team will guide you through our colorful classrooms, play areas, and activity zones. Meet our caring teachers and explore what makes us special.',
    cta: 'Book a Visit →',
    highlight: '2-Day Free Trial',
  },
  join: {
    step: '03',
    title: 'JOIN THE\nHAPPY CLASS',
    desc: 'Once enrolled, your child steps into a world of joy and learning. From day one, they\'re welcomed by friendly teachers and fun activities designed to make every child feel safe, loved, and excited to learn.',
    cta: 'See Programs →',
    highlight: 'Day 1 Ready',
  },
  grow: {
    step: '04',
    title: 'WATCH YOUR\nCHILD GROW',
    desc: 'Track your child\'s progress through our digital parent app. Get daily activity reports, live monitoring, in/out notifications, and milestone updates — all in real time, right on your phone.',
    cta: 'Learn More →',
    highlight: 'Live App Access',
  },
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('enroll');
  const content = tabContent[activeTab];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #E31C78 0%, #c4156a 100%)' }}
    >
      {/* Bg decoration */}
      <div className="absolute inset-0 bg-hero-dots opacity-20 pointer-events-none" />
      <div className="absolute top-10 right-20 text-4xl opacity-40 animate-spin-slow">🪐</div>
      <div className="absolute bottom-20 left-10 text-white/10 text-6xl font-fredoka select-none">✦</div>
      <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full border border-white/20 animate-spin-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-white/60 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            SIMPLE PROCESS
          </p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-white leading-tight">
            HOW IT WORKS?
          </h2>
          <p className="text-white/70 text-sm mt-3 max-w-md leading-relaxed">
            Getting your child started at Chithode Happykids is easy — just 4 simple steps to begin an amazing journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Step Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:min-w-[200px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 text-left px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="flex-1 bg-white rounded-5xl p-8 sm:p-10 shadow-card-lg">
            {/* Step number */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-primary text-white font-fredoka text-lg flex items-center justify-center shadow-md">
                {content.step}
              </span>
              <span className="bg-[#F5C518]/20 text-yellow-700 font-bold text-xs px-3 py-1 rounded-full">
                {content.highlight}
              </span>
            </div>

            <h3 className="font-fredoka text-3xl sm:text-4xl text-gray-800 mb-4 whitespace-pre-line leading-tight">
              {content.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
              {content.desc}
            </p>

            {/* CTA bar */}
            <div
              className="rounded-2xl p-5 flex items-center justify-between"
              style={{ background: 'linear-gradient(90deg, #F5C518 0%, #f0b800 100%)' }}
            >
              <p className="font-bold text-gray-900 text-sm">Ready to get started?</p>
              <a
                href="#admission"
                className="bg-white text-primary font-bold text-sm px-5 py-2 rounded-full hover:scale-105 transition-transform shadow-sm"
              >
                {content.cta}
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex items-center justify-center lg:w-64">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <img
                src="/hero_slide3.png"
                alt="Happy kids growing together at Chithode Happykids"
                className="relative w-56 drop-shadow-2xl animate-float"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Wave divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12" fill="white">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
