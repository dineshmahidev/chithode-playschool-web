import { useState } from 'react';
import { useContent } from '../context/ContentContext';

const staticGalleryItems = [
  { id: 1, label: 'Art Class',    img: '/gallery_art.png',     span: 'col-span-2 row-span-2' },
  { id: 2, label: 'Science Lab',  img: '/gallery_science.png', span: '' },
  { id: 3, label: 'Music Room',   img: '/gallery_music.png',   span: '' },
  { id: 4, label: 'Sports Day',   img: '/gallery_sports.png',  span: 'col-span-2' },
  { id: 5, label: 'Drama Club',   img: '/gallery_drama.png',   span: '' },
  { id: 6, label: 'Reading Time', img: '/gallery_reading.png', span: '' },
  { id: 7, label: 'Garden Club',  img: '/gallery_garden.png',  span: '' },
  { id: 8, label: 'Dance Class',  img: '/gallery_dance.png',   span: '' },
];

export default function Gallery() {
  const { content } = useContent();
  
  // Support both old array structure and new object structure
  const galleryData = content?.gallery?.items 
    ? content.gallery 
    : { items: Array.isArray(content?.gallery) ? content.gallery : staticGalleryItems };

  const galleryItems = galleryData.items || staticGalleryItems;
  const header = {
    eyebrow: galleryData.eyebrow || 'OUR SCHOOL LIFE',
    title: galleryData.title || 'GALLERY',
    desc: galleryData.desc || 'A peek into the vibrant, joyful world of Chithode Happykids — where every day is an adventure.'
  };

  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]" 
        style={{ 
          backgroundImage: 'url(/summer_pattern_clear.png)', 
          backgroundSize: '450px', 
          backgroundRepeat: 'repeat' 
        }} 
      />
      
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#F5C518]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-3">{header.eyebrow}</p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-gray-800 mb-4 uppercase">{header.title}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {header.desc}
          </p>
        </div>

        {/* Auto-Filling Mosaic Flex Layout */}
        <div className="flex flex-wrap gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="flex-grow basis-[300px] h-[250px] sm:h-[350px] relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-card-lg hover:scale-[1.02] group shadow-sm border border-white"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.label}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-5 py-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="font-fredoka font-bold text-white text-sm tracking-wide">{item.label}</p>
              </div>

              {/* Hover overlay with interaction */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  hovered === item.id ? 'bg-primary/80 backdrop-blur-[2px] opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`transform transition-all duration-500 delay-75 ${hovered === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                   <p className="font-fredoka font-bold text-white text-xl mb-1">{item.label}</p>
                   <p className="text-white/90 text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full text-center">Enlarge +</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Gallery Link */}
        <div className="text-center mt-12">
          <button className="group bg-white border-2 border-primary text-primary font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto">
            VIEW FULL GALLERY
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
