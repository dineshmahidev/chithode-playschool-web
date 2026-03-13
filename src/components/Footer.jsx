import { useState } from 'react';
import { useContent } from '../context/ContentContext';

const staticFooterLinks = {
  'Play & Learn': ['Programs', 'Activities', 'Schedule', 'Events'],
  'Create & Share': ['Art Workshop', 'STEM Lab', 'Projects', 'Exhibitions'],
  'Popular Shows': ['Story Time', 'Music Class', 'Science Fun', 'Dance Class'],
  'School Events': ['Annual Day', 'Sports Day', 'Exhibitions', 'Parent Day'],
};

export default function Footer() {
  const { content } = useContent();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footer = content?.footer || {
    schoolEvents: staticFooterLinks['School Events'],
    quickLinks: staticFooterLinks['Play & Learn'],
    contact: {
      address: '37/2 No 1 Vinayaga Residency, Kumilamparappu Pirivu, Chithode, Erode',
      phone: '+91 97877 51430',
      email: 'chithodehappykids@gmail.com'
    }
  };

  const socials = content?.enquiry?.socials || [
    { icon: 'f', bg: 'bg-blue-600', link: '#' },
    { icon: 't', bg: 'bg-sky-500', link: '#' },
    { icon: '▶', bg: 'bg-red-600', link: '#' },
    { icon: '📷', bg: 'bg-pink-600', link: '#' },
  ];

  const footerLinks = {
    'Play & Learn': footer.quickLinks || staticFooterLinks['Play & Learn'],
    'Create & Share': staticFooterLinks['Create & Share'],
    'Popular Shows': staticFooterLinks['Popular Shows'],
    'School Events': footer.schoolEvents || staticFooterLinks['School Events'],
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Top newsletter bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Mascot + tagline */}
          <div className="flex items-center gap-5">
            <img src="/mascot.png" alt="Mascot" className="w-20 animate-float drop-shadow-xl hidden sm:block" />
            <div>
              <h3 className="font-fredoka text-2xl text-white">Stay In The Game</h3>
              <p className="text-white/50 text-xs mt-0.5">Subscribe to our newsletter for updates</p>
            </div>
          </div>
          {/* Newsletter form */}
          {subscribed ? (
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
              <span className="text-green-400">✓</span>
              <p className="text-green-400 font-semibold text-sm">Subscribed! Thank you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center gap-0 w-full max-w-sm">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Subscribe For Newsletter"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-full px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="bg-[#F5C518] text-gray-900 font-extrabold px-5 py-3 rounded-r-full hover:bg-yellow-400 transition-colors"
              >
                →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Middle links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Brand */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Chithode Happykids Logo" className="h-9 w-auto object-contain" />
              <span className="font-fredoka text-xl text-white">Chithode Happykids</span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-4 max-w-xs">
              Chithode Happykids is dedicated to nurturing young minds through innovative, play-based learning.
              Every child deserves to shine. 🌟
            </p>
            {/* Contact details */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2">
                <span className="text-xs mt-0.5">📍</span>
                <p className="text-white/50 text-xs leading-relaxed">{footer.contact.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">📞</span>
                <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="text-white/50 text-xs hover:text-[#F5C518] transition-colors">{footer.contact.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">📧</span>
                <a href={`mailto:${footer.contact.email}`} className="text-white/50 text-xs hover:text-[#F5C518] transition-colors">{footer.contact.email}</a>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 ${s.bg || s.color} rounded-full flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-extrabold text-sm text-white mb-4 uppercase tracking-wide">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/50 text-xs hover:text-[#F5C518] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">2026 © Chithode Happykids. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
