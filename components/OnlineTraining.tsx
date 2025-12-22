
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Calendar, BookOpen, Award, Monitor } from 'lucide-react';

interface OnlineTrainingProps {
  onBack: () => void;
  onRegister: () => void;
  onCourseSelect?: (course: any) => void;
}

const OnlineTraining: React.FC<OnlineTrainingProps> = ({ onBack, onRegister, onCourseSelect }) => {
  const [currentFieldIdx, setCurrentFieldIdx] = useState(0);
  const engineeringFields = [
    "SIPIL", "ELEKTRO", "INDUSTRI", "ARSITEKTUR", "MESIN", "INFORMATIKA", "KIMIA", "PERKAPALAN"
  ];

  const fallbackImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFieldIdx((prev) => (prev + 1) % engineeringFields.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    }
  };

  const courses = [
    { title: "POWER SYSTEM CLASS ( ELECTRICAL ENGINEERING )", price: "300.000", oldPrice: "500.000", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop" },
    { title: "STRUCTURAL ANALYSIS ( CIVIL ENGINEERING )", price: "350.000", oldPrice: "600.000", image: "https://images.unsplash.com/photo-1545138697-45eb2968b249?q=80&w=800&auto=format&fit=crop" },
    { title: "PIPING DESIGN ( MECHANICAL ENGINEERING )", price: "300.000", oldPrice: "500.000", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" },
    { title: "BIM ARCHITECTURE MASTERCLASS", price: "300.000", oldPrice: "500.000", image: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=800&auto=format&fit=crop" },
    { title: "INDUSTRIAL AUTOMATION & PLC", price: "320.000", oldPrice: "550.000", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
    { title: "ROAD DESIGN EXPERT ( CIVIL SERIES )", price: "300.000", oldPrice: "500.000", image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-700">
      <section className="relative h-[600px] md:h-[750px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-900"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")' }}
        />
        <div className="container mx-auto px-4 md:px-12 relative z-10 text-white text-center">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 uppercase tracking-tighter">
              UPGRADE SKILL <br />
              TEKNIK "<span className="text-yellow-primary transition-all duration-500 inline-block min-w-[200px] animate-pulse">{engineeringFields[currentFieldIdx]}</span>" <br />
              DENGAN PARA EXPERT
            </h1>
        </div>
      </section>

      <section id="events" className="py-24 container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              onClick={() => onCourseSelect?.(course)}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  onError={handleImageError}
                />
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
                    <span>Sabtu, 12 Oktober 2024</span>
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
                      <p className="text-[10px] font-bold text-red-500 line-through mb-0.5">Rp.{course.oldPrice}</p>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Harga Mulai</span>
                        <span className="text-xl font-black text-black leading-none">Rp.{course.price}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onCourseSelect?.(course); }}
                    className="w-full bg-yellow-primary text-black font-black py-4 rounded-xl hover:bg-black hover:text-white transition-all shadow-lg uppercase text-sm tracking-widest"
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

export default OnlineTraining;
