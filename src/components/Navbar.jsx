import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" onClick={() => handleNav('#home')}>
          <img
            src="/logo.png"
            alt="Chithode Happykids Logo"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-md"
          />
          <span className={`font-fredoka text-2xl tracking-wide transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            Chithode Happykids
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#admission"
            className="bg-[#F5C518] text-gray-900 font-bold text-sm px-6 py-2.5 rounded-full shadow-yellow hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
          >
            ENROLL NOW
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              className={`font-semibold text-sm py-2 border-b border-gray-100 ${
                active === link.href ? 'text-primary' : 'text-gray-700'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admission"
            className="bg-[#F5C518] text-gray-900 font-bold text-sm px-6 py-3 rounded-full text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            ENROLL NOW
          </a>
        </div>
      </div>
    </nav>
  );
}
