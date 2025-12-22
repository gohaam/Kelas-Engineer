
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "ahmad ghafari",
      text: "Materi pelatihan yang di bawakan di rangkum secara efektif dan komphersif dengan pembawa materi yang jelas oleh pemateri yang berkompeten"
    },
    {
      name: "siti aminah",
      text: "Sangat membantu untuk saya yang baru lulus. Penjelasan mentor sangat praktis dan langsung ke poin-poin yang dibutuhkan dunia kerja."
    },
    {
      name: "budi santoso",
      text: "Kelas Engineer memberikan pengalaman belajar yang berbeda. Sistem live online-nya interaktif dan ada sesi tanya jawab yang sangat membantu."
    },
    {
      name: "lina mulyadi",
      text: "Modul yang diberikan lengkap dan up-to-date. Sertifikatnya juga sangat berguna untuk upgrade portofolio di LinkedIn."
    },
    {
      name: "hendra wijaya",
      text: "Terima kasih Kelas Engineer! Berkat pelatihan SAP2000, saya sekarang lebih percaya diri mengerjakan proyek struktur gedung."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-yellow-primary">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16 uppercase tracking-tight">
          cerita alumni tentang Kelas Engineer
        </h2>
        
        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 text-black hover:opacity-70 transition-opacity p-2 bg-white/20 rounded-full md:bg-transparent"
          >
            <ChevronLeft size={48} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 no-scrollbar snap-x snap-mandatory"
          >
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] snap-center bg-white p-8 rounded-xl shadow-lg border-2 border-transparent hover:border-black transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                    <User size={20} />
                  </div>
                  <span className="font-bold text-sm uppercase">{item.name}</span>
                </div>
                <div className="h-[2px] bg-black/10 mb-6"></div>
                <p className="text-sm leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 text-black hover:opacity-70 transition-opacity p-2 bg-white/20 rounded-full md:bg-transparent"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
