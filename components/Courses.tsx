
import React, { useState } from 'react';
import { Star, BookOpen, Calendar, Award, Monitor } from 'lucide-react';

interface CoursesProps {
  onCourseSelect?: (course: any) => void;
}

const Courses: React.FC<CoursesProps> = ({ onCourseSelect }) => {
  const [activeTab, setActiveTab] = useState('Semua');

  const categories = ['Semua', 'Teknik Sipil', 'Teknik Elektro', 'Teknik Mesin', 'Arsitektur'];

  const allCourses = [
    {
      title: "STRUCTURAL ANALYSIS ( CIVIL ENGINEERING )",
      category: "Teknik Sipil",
      price: "350.000",
      oldPrice: "600.000",
      rating: 5,
      image: "https://images.unsplash.com/photo-1545138697-45eb2968b249?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "PLC PROGRAMMING & INDUSTRIAL AUTOMATION",
      category: "Teknik Elektro",
      price: "549.000",
      oldPrice: "850.000",
      rating: 5,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "ADVANCED SOLIDWORKS FOR MECHANICAL DESIGN",
      category: "Teknik Mesin",
      price: "475.000",
      oldPrice: "750.000",
      rating: 5,
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredCourses = activeTab === 'Semua' 
    ? allCourses 
    : allCourses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
              Akselerasi Karier <span className="text-yellow-primary">Engineer</span> Anda
            </h2>
          </div>
          
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === cat 
                    ? 'bg-yellow-primary text-black shadow-sm' 
                    : 'text-gray-500 hover:text-black hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, i) => (
            <div 
              key={i} 
              onClick={() => onCourseSelect?.(course)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer animate-in fade-in"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-black text-lg mb-8 line-clamp-2 h-14 group-hover:text-yellow-primary transition-colors uppercase leading-tight">
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
                      {[...Array(5)].map((_, starI) => (
                        <Star key={starI} size={20} className="fill-yellow-primary text-yellow-primary" />
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-red-500 line-through mb-0.5">Rp.{course.oldPrice}</p>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Harga Mulai</span>
                        <span className="font-black text-xl text-black leading-none">Rp.{course.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); onCourseSelect?.(course); }}
                    className="w-full bg-yellow-primary text-black font-black py-4 rounded-xl hover:bg-black hover:text-white transition-all shadow-lg uppercase tracking-widest text-sm"
                  >
                    DAFTAR SEKARANG
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
