
import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Feature Card */}
        <div className="bg-[#f3f4f6] rounded-[32px] overflow-hidden shadow-sm flex flex-col md:flex-row mb-20">
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-black mb-12 leading-tight">
              kenapa Learn from Expert<br />
              adalah Pilihan Terbaik?
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-sm flex-shrink-0">1.</div>
                <p className="font-extrabold text-sm md:text-base">Belajar dari praktisi profesional</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-sm flex-shrink-0">2.</div>
                <p className="font-extrabold text-sm md:text-base">Sistem Belajar Live Online</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-sm flex-shrink-0">3.</div>
                <p className="font-extrabold text-sm md:text-base">Diskusi & Konsultasi Free Sesuai Kelas</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-end justify-center pt-10 md:pt-0">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
              alt="Expert Mentor" 
              className="max-h-[400px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Middle Alumni Text */}
        <div className="text-center max-w-4xl mx-auto mb-20 px-4">
          <h3 className="text-base md:text-lg font-black leading-relaxed">
            Anak Teknik telah membantu 45.000 alumni menemukan industri impiannya!<br />
            Serta memberikan peluang berkarya bagi<br />
            50 kreator dan 200 penulis dalam menebar inspirasi dan berita baik!
          </h3>
        </div>

        {/* Bottom Stats Banner */}
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center">
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")' 
                }}
            />
            <div className="container mx-auto px-8 md:px-16 relative z-10 text-white">
                <div className="max-w-2xl">
                    <p className="text-lg font-bold mb-2">Kami telah membantu</p>
                    <h2 className="text-4xl md:text-5xl font-black text-yellow-primary mb-6">
                        >30.000 Peserta
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed font-medium opacity-90">
                        dalam mengakselerasi berbagai ilmu keteknikan. Anak Teknik berkomitmen membantu para mahasiswa dan profesional di perusahaan untuk meningkatkan skill dan kompetensinya. Guna mengakselerasi skill yang selaras dengan pertumbuhan IPTEK di dunia.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
