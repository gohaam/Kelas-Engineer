
import React from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "ahmad ghafari",
      text: "Materi pelatihan yang di bawakan di rangkum secara efektif dan komphersif dengan pembawa materi yang jelas oleh pemateri yang berkompeten"
    },
    {
      name: "ahmad ghafari",
      text: "Materi pelatihan yang di bawakan di rangkum secara efektif dan komphersif dengan pembawa materi yang jelas oleh pemateri yang berkompeten"
    },
    {
      name: "ahmad ghafari",
      text: "Materi pelatihan yang di bawakan di rangkum secara efektif dan komphersif dengan pembawa materi yang jelas oleh pemateri yang berkompeten"
    }
  ];

  return (
    <section className="py-20 bg-yellow-primary">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16 uppercase tracking-tight">
          cerita alumni tentang Kelas Engineer
        </h2>
        
        <div className="relative flex items-center gap-4">
          <button className="hidden md:block text-black hover:opacity-70 transition-opacity">
            <ChevronLeft size={48} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-2 border-transparent hover:border-black transition-all">
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

          <button className="hidden md:block text-black hover:opacity-70 transition-opacity">
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
