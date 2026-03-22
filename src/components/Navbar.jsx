import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Summer Camp', href: '/summer-camp', isNew: true },
  { label: 'Admission', href: '/#admission' },
  { label: 'Enquiry', href: '/#enquiry' },
];

export default function Navbar() {
  const { content } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if scrolling up or down
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setVisible(isVisible);
      setScrolled(currentScrollPos > 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Update mobile status bar theme color dynamically
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', menuOpen ? '#c4156a' : '#E31C78');
    }
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    setActive(href);
    
    // Explicitly scroll for anchor links if on the same page
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const logo = '/chk-logo.jpg';
  const siteName = content?.settings?.siteName || 'Chithode Happykids';

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-500 w-full ${
        visible || menuOpen ? 'translate-y-0' : '-translate-y-full'
      } ${
        menuOpen
          ? 'h-screen'
          : scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-1.5'
          : 'bg-white py-2'
      }`}
      style={menuOpen ? { background: 'linear-gradient(135deg, #E31C78 0%, #c4156a 100%)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className={`flex items-center gap-2 group transition-all duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
          onClick={() => handleNav('#home')}
        >
          <img
            src={logo}
            alt={`${siteName} Logo`}
            className="h-10 sm:h-14 w-auto object-contain group-hover:scale-110 transition-transform"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`font-semibold text-sm transition-all duration-200 relative after:block after:absolute after:h-0.5 after:bg-[#F5C518] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:text-[#F5C518] flex items-center gap-1 ${
                  active === link.href
                    ? 'text-[#F5C518] after:w-full'
                    : `after:w-0 hover:after:w-full ${menuOpen ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-[#E31C78]'}`
                }`}
              >
                {link.label}
                {link.isNew && (
                  <span className="bg-[#F5C518] text-gray-900 text-[10px] font-black px-1.5 py-0.5 rounded-md leading-none animate-pulse">
                    NEW
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>



        {/* Hamburger Menu (Hides when open) */}
        <button
          className={`lg:hidden p-2.5 -mr-2 rounded-2xl transition-all duration-300 relative z-[110] flex items-center justify-center ${menuOpen ? 'opacity-0 scale-50 pointer-events-none' : 'text-[#E31C78]'} active:scale-90`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>

        {/* Vertically Centered Left Side 'Slide' Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className={`fixed left-0 top-1/2 -translate-y-1/2 h-44 w-14 bg-white/20 backdrop-blur-xl rounded-r-[2.5rem] border-y-2 border-r-2 border-white/30 flex items-center justify-center group transition-all duration-500 z-[200] overflow-hidden ${
            menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
          aria-label="Close Menu"
        >
          {/* Internal Double 'Slide' Bar Elements */}
          <div className="flex flex-col items-center gap-5 translate-x-[-2px]">
            <div className="flex flex-col gap-1.5 h-16 w-1 items-center">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full animate-ping" />
              <div className="w-1 bg-white/40 h-full rounded-full relative">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full group-hover:h-full transition-all duration-500" />
              </div>
            </div>
            <span className="[writing-mode:vertical-lr] text-white font-black text-[12px] uppercase tracking-[0.4em] rotate-180 drop-shadow-lg">
              CLOSE
            </span>
          </div>
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
              className={`font-fredoka text-3xl transition-all duration-500 flex items-center gap-3 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${active === link.href ? 'text-[#F5C518]' : 'text-white hover:text-[#F5C518]'}`}
            >
              {link.label}
              {link.isNew && (
                <span className="bg-[#F5C518] text-gray-900 text-[10px] font-black px-1.5 py-0.5 rounded-md leading-none animate-bounce">
                  NEW
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
