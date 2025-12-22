
import React from 'react';
import { translations } from '../translations';
import { Language } from '../App';

interface PartnersProps {
  lang: Language;
}

const Partners: React.FC<PartnersProps> = ({ lang }) => {
  const t = translations[lang].partners;

  // Menggunakan kombinasi Wikimedia, Clearbit Logo API, dan sumber publik lainnya untuk logo asli
  const partnerLogos = [
    { name: "UI", img: "https://upload.wikimedia.org/wikipedia/id/thumb/0/00/Lambang_Universitas_Indonesia.svg/800px-Lambang_Universitas_Indonesia.svg.png" },
    { name: "PLN", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_PLN.svg/800px-Logo_PLN.svg.png" },
    { name: "KOMINFO", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_Kementerian_Komunikasi_dan_Informatika_Indonesia.png/800px-Logo_Kementerian_Komunikasi_dan_Informatika_Indonesia.png" },
    { name: "MONASH", img: "https://logo.clearbit.com/monash.edu" },
    { name: "PROGATE", img: "https://logo.clearbit.com/progate.com" },
    { name: "PERTAMINA", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pertamina.svg/800px-Pertamina.svg.png" },
    { name: "BUKALAPAK", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bukalapak_logo.svg/800px-Bukalapak_logo.svg.png" },
    { name: "SKETCHUP", img: "https://logo.clearbit.com/sketchup.com" },
    { name: "BOSCH", img: "https://logo.clearbit.com/bosch.com" },
    { name: "LEICA", img: "https://logo.clearbit.com/leica-geosystems.com" },
    { name: "BARAYA", img: "https://api.dicebear.com/7.x/initials/svg?seed=BA&backgroundColor=000000" }, // Fallback for niche logos
    { name: "SCIENCE HUNTER", img: "https://api.dicebear.com/7.x/initials/svg?seed=SH&backgroundColor=2D3748" },
    { name: "RS KERJA", img: "https://api.dicebear.com/7.x/initials/svg?seed=RK&backgroundColor=3182CE" },
    { name: "SONAR", img: "https://api.dicebear.com/7.x/initials/svg?seed=SN&backgroundColor=2C5282" },
    { name: "IT TELKOM", img: "https://api.dicebear.com/7.x/initials/svg?seed=ITT&backgroundColor=E53E3E" },
    { name: "PII", img: "https://api.dicebear.com/7.x/initials/svg?seed=PII&backgroundColor=000000" },
    { name: "BLOCKDEV", img: "https://api.dicebear.com/7.x/initials/svg?seed=BD&backgroundColor=1A202C" },
    { name: "VEXA", img: "https://api.dicebear.com/7.x/initials/svg?seed=VX&backgroundColor=2D3748" },
    { name: "BAWAHTANAH", img: "https://api.dicebear.com/7.x/initials/svg?seed=BT&backgroundColor=744210" },
    { name: "SOMA", img: "https://api.dicebear.com/7.x/initials/svg?seed=SM&backgroundColor=000000" },
    { name: "ORANG SIBER", img: "https://api.dicebear.com/7.x/initials/svg?seed=OS&backgroundColor=2B6CB0" },
    { name: "ALAM ALSHAHARA", img: "https://api.dicebear.com/7.x/initials/svg?seed=AA&backgroundColor=C05621" },
    { name: "1000 STARTUP", img: "https://api.dicebear.com/7.x/initials/svg?seed=1000&backgroundColor=E53E3E" },
    { name: "BBS", img: "https://api.dicebear.com/7.x/initials/svg?seed=BBS&backgroundColor=2B6CB0" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-[1000] uppercase tracking-tighter mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.3em]">
            {t.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-yellow-primary mx-auto mt-6"></div>
        </div>
        
        <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-8 gap-y-12 items-center justify-items-center">
            {partnerLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-transparent rounded-xl p-2 transition-all">
                  <img 
                    src={logo.img} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${logo.name}`;
                    }}
                  />
                </div>
                <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-4">
           <div className="h-[1px] flex-grow bg-gray-100 max-w-[100px]"></div>
           <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">Bersinergi Membangun Insinyur Unggul</span>
           <div className="h-[1px] flex-grow bg-gray-100 max-w-[100px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
