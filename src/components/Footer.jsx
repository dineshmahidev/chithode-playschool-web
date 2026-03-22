import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { 
  Instagram, Youtube, Facebook, Send, MapPin, Phone, Mail, 
  Heart, Star, Music, Palette, Rocket, GraduationCap 
} from 'lucide-react';

const staticFooterLinks = {
  'Programs': ['Playschool', 'Pre-KG', 'Daycare', 'Summer Camp'],
  'Activities': ['Art & Craft', 'Music & Dance', 'STEM Lab', 'Indoor Play'],
  'Resources': ['Parent Portal', 'Photo Gallery', 'School Calendar', 'Fee Structure'],
  'Company': ['About Us', 'Our Vision', 'Terms & Privacy', 'Contact Us'],
};

export default function Footer() {
  const { content } = useContent();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footer = content?.footer || {
    contact: {
      address: '37/2 No 1 Vinayaga Residency, Kumilamparappu Pirivu, Chithode, Erode',
      phone: '+91 97877 51430',
      email: 'chithodehappykids@gmail.com'
    }
  };

  const socials = [
    { icon: <Facebook className="w-4 h-4" />, bg: 'bg-[#1877F2]', link: '#' },
    { icon: <Youtube className="w-4 h-4" />, bg: 'bg-[#FF0000]', link: '#' },
    { icon: <Instagram className="w-4 h-4" />, bg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', link: '#' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden pt-12">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'url(/summer_pattern_clear.png)', 
          backgroundSize: '400px', 
          backgroundRepeat: 'repeat' 
        }} 
      />

      {/* Decorative Floating Playschool Elements */}
      <div className="absolute top-20 left-[5%] text-primary/10 animate-float pointer-events-none">
        <Heart size={48} />
      </div>
      <div className="absolute top-40 right-[10%] text-[#F5C518]/10 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }}>
        <Music size={56} />
      </div>
      <div className="absolute bottom-40 left-[15%] text-blue-400/10 animate-spin-slow pointer-events-none">
        <Palette size={64} />
      </div>
      <div className="absolute bottom-20 right-[5%] text-green-400/10 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
        <Rocket size={72} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Feature Bar */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group hover:scale-110 transition-transform">
                <GraduationCap size={32} className="group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <h3 className="font-fredoka text-2xl mb-1 text-white">Join Our Family</h3>
              <p className="text-white/50 text-xs">Stay updated with our little learners' journey.</p>
            </div>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-4 text-green-400 font-bold text-sm h-[60px]">
                <Send size={18} />
                Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center h-[60px]">
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address..." 
                  className="w-full h-full bg-white/5 border border-white/10 rounded-full px-8 pr-20 text-sm outline-none focus:bg-white/10 focus:border-white/20 transition-all font-medium"
                />
                <button type="submit" className="absolute right-2 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center transition-all shadow-lg active:scale-95">
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Brand and Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-glow">
                <img src="/fav/apple-touch-icon.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-fredoka text-2xl tracking-tight text-white">Chithode <span className="text-primary">Happykids</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
              A vibrant world where every child is a star. We provide a nurturing environment filled with play, discovery, and the magic of early learning to build a bright future for your little one.
            </p>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={16} />
                <p className="text-white/50 text-[13px] leading-relaxed">{footer.contact.address}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" size={16} />
                  <a href={`tel:${footer.contact.phone}`} className="text-white/50 text-[13px] hover:text-white transition-colors">{footer.contact.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={16} />
                  <a href={`mailto:${footer.contact.email}`} className="text-white/50 text-[13px] hover:text-white transition-colors break-all">{footer.contact.email}</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socials.map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center text-white shadow-xl hover:scale-110 hover:-translate-y-1 transition-all`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(staticFooterLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-fredoka text-lg text-white mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 group">
                      <div className="h-0.5 w-0 bg-primary group-hover:w-2 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-white/30 text-xs">
            © 2026 <span className="text-white/50 font-bold">Chithode Happykids.</span> Made with ❤️ for our little stars.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
