
import React, { useState } from 'react';
import { Star, ArrowRight, Calendar, BookOpen, Award, Monitor } from 'lucide-react';
import { Language } from '../App';

interface ECourseProps {
  lang: Language;
  onBack: () => void;
  onRegister: () => void;
  onCourseSelect?: (course: any) => void;
}

const ECourse: React.FC<ECourseProps> = ({ lang, onBack, onRegister, onCourseSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const fallbackImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop";

  const courses = [
    {
      title: "POWER SYSTEM CLASS [ELECTRICAL ENGINEERING]",
      price: "300.000",
      oldPrice: "750.000",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "STRUCTURAL ANALYSIS [CIVIL ENGINEERING]",
      price: "350.000",
      oldPrice: "800.000",
      image: "https://images.unsplash.com/photo-1545138697-45eb2968b249?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "BIM ARCHITECTURE [REVIT MASTERY]",
      price: "250.000",
      oldPrice: "600.000",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "PIPING DESIGN [MECHANICAL SERIES]",
      price: "400.000",
      oldPrice: "900.000",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "GEOTECHNICAL EXPERT [CIVIL SERIES]",
      price: "320.000",
      oldPrice: "700.000",
      image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "AUTOMATION & PLC [ELECTRO SERIES]",
      price: "300.000",
      oldPrice: "750.000",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-700">
      <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-gray-900" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop")' }} />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-7xl font-black leading-tight max-w-3xl mx-auto uppercase tracking-tighter drop-shadow-2xl">
            AKSES TANPA BATAS <br />
            UNTUK <span className="text-yellow-primary">UPDATE SKILL</span>
          </h1>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())).map((course, idx) => (
            <div 
              key={idx} 
              onClick={() => onCourseSelect?.(course)}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer" 
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={handleImageError} />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-black text-lg mb-8 uppercase tracking-tight line-clamp-2 h-14 group-hover:text-yellow-primary transition-colors leading-tight">
                  {course.title}
                </h3>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                    <BookOpen size={18} className="text-slate-300" />
                    <span>Materi Pelatihan</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                    <Calendar size={18} className="text-slate-300" />
                    <span>Akses Selamanya</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                    <Award size={18} className="text-slate-300" />
                    <span>E-Certificate</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                    <Monitor size={18} className="text-slate-300" />
                    <span>Online Learning</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-6">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-primary text-yellow-primary" />
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-red-500 line-through mb-0.5">Rp {course.oldPrice}</p>
                      <div className="flex items-center gap-2 justify-end">
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Harga Mulai</span>
                         <span className="text-xl font-black text-black leading-none">Rp {course.price}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onCourseSelect?.(course); }}
                    className="w-full bg-yellow-primary text-black font-black py-4 rounded-xl hover:bg-black hover:text-white transition-all uppercase tracking-widest text-sm shadow-md"
                  >
                    DAFTAR SEKARANG
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button 
        onClick={onBack}
        className="fixed bottom-10 left-10 z-[100] bg-black text-white px-8 py-4 rounded-full font-black text-xs shadow-2xl hover:bg-yellow-primary hover:text-black transition-all uppercase flex items-center gap-3"
      >
        <ArrowRight className="rotate-180" size={18} /> Kembali ke Beranda
      </button>
    </div>
  );
};

export default ECourse;
