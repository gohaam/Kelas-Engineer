
import React from 'react';
import { ChevronRight, Zap, TrendingUp, Sparkles } from 'lucide-react';

const PromoCarousel: React.FC = () => {
  const promos = [
    {
      title: "Mastering Revit Architecture",
      subtitle: "Promo Bundling Early Bird",
      tag: "HOT",
      icon: <Zap size={20} className="text-yellow-400" />,
      color: "bg-blue-900",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Electrical Power System Design",
      subtitle: "Kelas Eksklusif Bersertifikat",
      tag: "NEW",
      icon: <Sparkles size={20} className="text-purple-400" />,
      color: "bg-emerald-900",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Civil 3D Road Design Expert",
      subtitle: "Belajar dari Praktisi Senior",
      tag: "BEST",
      icon: <TrendingUp size={20} className="text-orange-400" />,
      color: "bg-slate-900",
      image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Mechanical Piping Design",
        subtitle: "Software PDMS & E3D Mastery",
        tag: "LIMIT",
        icon: <Zap size={20} className="text-red-400" />,
        color: "bg-red-950",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
      }
  ];

  return (
    <section className="bg-white py-12 -mt-8 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-[2px] bg-yellow-primary"></span>
                PROMO UNGGULAN
            </h2>
            <div className="flex gap-2 text-xs font-bold text-gray-400">
                SCROLL KANAN <ChevronRight size={14} />
            </div>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x cursor-grab active:cursor-grabbing">
          {promos.map((promo, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 w-[300px] md:w-[420px] h-[240px] rounded-2xl overflow-hidden relative snap-center shadow-lg group transition-transform duration-300 hover:-translate-y-1 bg-gray-900`}
            >
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800`;
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity group-hover:opacity-95`}></div>
              
              <div className="absolute top-4 left-4 bg-yellow-primary text-black font-black text-[10px] px-3 py-1 rounded-full shadow-md z-10">
                {promo.tag}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <div className="flex items-center gap-2 mb-2">
                    {promo.icon}
                    <span className="text-xs font-bold opacity-80 uppercase tracking-widest">{promo.subtitle}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black leading-tight mb-4 drop-shadow-md">{promo.title}</h3>
                <button className="text-[10px] font-black border-2 border-white px-4 py-1 rounded hover:bg-white hover:text-black transition-colors uppercase">
                    Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoCarousel;
