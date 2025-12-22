
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Mentors: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const mentors = [
    {
      name: "Ir. Pahlevi, M.T.",
      role: "Trainer",
      desc: "Senior Structural Engineer & National Trainer",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Eko Budi Utomo",
      role: "Trainer",
      desc: "Head of Mechatronics Lab - Expert in Automation",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Yogi Adi Wijaya, S.T.",
      role: "Trainer",
      desc: "CAE & Automotive Engineering Expert",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Rendy Moneta",
      role: "Trainer",
      desc: "BIM Specialist & Senior Structural Engineer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Baskoro Ab, Ph.D.",
      role: "Trainer",
      desc: "Engineering Lecturer & Research Specialist",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
        name: "Ahmad Rizky, S.T.",
        role: "Trainer",
        desc: "Senior Civil Engineer & Project Manager",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
        name: "Maya Sari, M.Eng",
        role: "Trainer",
        desc: "Chemical Process & Sustainability Engineer",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight">
          Mentor & Tutor <span className="text-yellow-primary">Terbaik</span> Kami
        </h2>
        
        <div className="relative overflow-visible group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 text-gray-800 hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-10 pb-12 no-scrollbar snap-x snap-mandatory"
          >
            {mentors.map((mentor, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 snap-center text-center group/card">
                <div className="relative mb-8 mx-auto w-52 h-52">
                    {/* Decorative Background */}
                    <div className="absolute inset-0 rounded-full bg-yellow-primary translate-x-2 translate-y-2 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-black/5"></div>
                    
                    <img 
                        src={mentor.img} 
                        alt={mentor.name}
                        className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl transition-transform duration-500 group-hover/card:scale-105"
                    />
                    
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        {mentor.role}
                    </div>
                </div>
                <h4 className="font-black text-xl mb-2 group-hover/card:text-yellow-primary transition-colors">{mentor.name}</h4>
                <p className="text-xs font-bold text-gray-400 px-4 uppercase tracking-tighter line-clamp-2">{mentor.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 text-gray-800 hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
