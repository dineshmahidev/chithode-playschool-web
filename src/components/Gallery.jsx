import { useState } from 'react';

const galleryItems = [
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
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#F5C518]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-3">OUR SCHOOL LIFE</p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-gray-800 mb-4">GALLERY</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A peek into the vibrant, joyful world of Chithode Happykids — where every day is an adventure.
          </p>
        </div>

        {/* Masonry Grid with real images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-4xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-card-lg hover:scale-[1.02] group`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Real image */}
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Always-visible label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                <p className="font-extrabold text-white text-sm drop-shadow">{item.label}</p>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
                  hovered === item.id ? 'bg-primary/75 opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-extrabold text-white text-base mb-1">{item.label}</p>
                <p className="text-white/80 text-xs">Click to view</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-primary text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-card hover:bg-primary-dark hover:scale-105 transition-all duration-200">
            View Full Gallery →
          </button>
        </div>
      </div>
    </section>
  );
}
