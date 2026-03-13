import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admission', href: '#admission' },
  { label: 'Enquiry', href: '#enquiry' },
  { label: 'Call Now', href: 'tel:+919787751430' },
];

export default function Navbar() {
  const { content } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update mobile status bar theme color dynamically
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', menuOpen ? '#c4156a' : '#E31C78');
    }
  }, [menuOpen]);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  const logo = content?.settings?.logo || '/logo.png';
  const siteName = content?.settings?.siteName || 'Chithode Happykids';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        menuOpen
          ? 'h-screen'
          : scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
      style={menuOpen ? { background: 'linear-gradient(135deg, #E31C78 0%, #c4156a 100%)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" onClick={() => handleNav('#home')}>
          <img
            src={logo}
            alt={`${siteName} Logo`}
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-md"
          />
          <span className={`font-fredoka text-2xl tracking-wide transition-colors ${menuOpen ? 'text-white' : scrolled ? 'text-primary' : 'text-white'}`}>
            {siteName}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`font-semibold text-sm transition-all duration-200 relative after:block after:absolute after:h-0.5 after:bg-[#F5C518] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:text-[#F5C518] ${
                  active === link.href
                    ? 'text-[#F5C518] after:w-full'
                    : `after:w-0 hover:after:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>



        {/* Hamburger */}
        <button
          className={`lg:hidden p-2.5 -mr-2 rounded-2xl transition-all duration-300 relative z-[110] flex items-center justify-center ${menuOpen ? 'text-white bg-white/10' : scrolled ? 'text-primary' : 'text-white'} active:scale-90`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Full-screen Mobile Menu Content */}
      <div
        className={`fixed inset-0 lg:hidden transition-all duration-500 flex flex-col items-center justify-center pointer-events-none ${
          menuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full'
        }`}
      >
        {/* Subtle background decoration for the fire look */}
        <div className="absolute inset-0 bg-hero-dots opacity-20" />
        <div className="absolute top-20 left-10 text-white/10 text-9xl font-fredoka select-none pointer-events-none">✦</div>
        
        <div className="flex flex-col items-center gap-8 relative z-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`font-fredoka text-3xl transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${active === link.href ? 'text-[#F5C518]' : 'text-white hover:text-[#F5C518]'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
