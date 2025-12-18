
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      name: "Pahlevi",
      role: "Trainer",
      desc: "& National Trainer",
      img: "https://picsum.photos/seed/p1/300/300"
    },
    {
      name: "Eko Budi Utomo",
      role: "Trainer",
      desc: "Head Of The Mechatronics Lab",
      img: "https://picsum.photos/seed/p2/300/300"
    },
    {
      name: "Yogi Adi Wijaya, S.T.",
      role: "Trainer",
      desc: "CAE & Automotive Engineer Expertise",
      img: "https://picsum.photos/seed/p3/300/300"
    },
    {
      name: "Rendy Moneta",
      role: "Trainer",
      desc: "BIM Specialist & Structural Engineer",
      img: "https://picsum.photos/seed/p4/300/300"
    },
    {
      name: "Baskoro Ab",
      role: "Trainer",
      desc: "Lecturer Universitas Atm",
      img: "https://picsum.photos/seed/p5/300/300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16">
          Mentor & Tutor Terbaik Kelas Engineer
        </h2>
        
        <div className="relative overflow-visible group">
          {/* Navigation Arrows */}
          <button className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 text-gray-800 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 snap-center text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 group cursor-pointer">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200 translate-x-1 translate-y-1"></div>
                    <img 
                        src={mentor.img} 
                        alt={mentor.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase">
                        {mentor.role}
                    </div>
                </div>
                <h4 className="font-extrabold text-lg mb-1">{mentor.name}</h4>
                <p className="text-sm font-medium text-gray-500 px-4">{mentor.desc}</p>
              </div>
            ))}
          </div>

          <button className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 text-gray-800 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
