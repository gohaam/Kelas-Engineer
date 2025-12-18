
import React from 'react';
import { Star, Users, Clock } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: "Mastering SAP2000 for Structural Analysis",
      category: "Teknik Sipil",
      price: "Rp 499.000",
      rating: 4.9,
      students: 1250,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "PLC Programming & Industrial Automation",
      category: "Teknik Elektro",
      price: "Rp 549.000",
      rating: 4.8,
      students: 850,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Advanced SolidWorks for Mechanical Design",
      category: "Teknik Mesin",
      price: "Rp 475.000",
      rating: 5.0,
      students: 2100,
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold mb-2 uppercase">Kelas Terpopuler</h2>
            <p className="text-gray-500">Mulai belajar dari skill yang paling banyak dicari saat ini.</p>
          </div>
          <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
            LIHAT SEMUA KELAS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-yellow-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold">{course.rating}</span>
                  <span className="text-xs text-gray-400 ml-1">({course.students} Siswa)</span>
                </div>
                <h3 className="font-extrabold text-lg mb-4 line-clamp-2 h-14">{course.title}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="font-black text-xl text-yellow-600">{course.price}</span>
                  <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded hover:bg-yellow-primary hover:text-black transition-colors">
                    DAFTAR
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
