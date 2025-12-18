
import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10 leading-tight">
              kenapa Leararn from Expert<br />
              adalah Pilihan Terbaik?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold flex-shrink-0 mt-1">1.</div>
                <p className="font-bold text-lg">Belajar dari praktisi profesional</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold flex-shrink-0 mt-1">2.</div>
                <p className="font-bold text-lg">Sistem Belajar Live Online</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold flex-shrink-0 mt-1">3.</div>
                <p className="font-bold text-lg">Diskusi & Konsultasi Free Sesuai Kelas</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
              alt="Expert Instructor" 
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
