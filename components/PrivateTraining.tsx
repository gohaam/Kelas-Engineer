
import React from 'react';
import { CheckCircle2, ArrowRight, BookOpen, Award, User, ShieldCheck, Headphones, Calendar, Target } from 'lucide-react';

interface PrivateTrainingProps {
  onBack: () => void;
  onRegister: () => void;
}

const PrivateTraining: React.FC<PrivateTrainingProps> = ({ onBack, onRegister }) => {
  const fasilitas = [
    { id: '01', title: 'Personalized Curriculum', desc: 'Materi disesuaikan dengan tingkat pemahaman dan target karier Anda.', icon: <Target size={20} /> },
    { id: '02', title: 'Flexible Schedule', desc: 'Waktu belajar fleksibel, bisa disesuaikan dengan jadwal kesibukan Anda.', icon: <Calendar size={20} /> },
    { id: '03', title: 'Direct Mentor Access', desc: 'Sesi privat 1-on-1 langsung dengan praktisi ahli di bidangnya.', icon: <User size={20} /> },
    { id: '04', title: 'Sertifikat Eksklusif', desc: 'Sertifikat kelulusan resmi untuk menunjang portofolio profesional Anda.', icon: <Award size={20} /> },
    { id: '05', title: 'Lifetime Support', desc: 'Grup diskusi eksklusif untuk konsultasi berkelanjutan setelah kelas selesai.', icon: <Headphones size={20} /> },
    { id: '06', title: 'Hands-on Project', desc: 'Belajar dengan studi kasus nyata yang relevan dengan kebutuhan industri.', icon: <BookOpen size={20} /> },
    { id: '07', title: 'Quality Assurance', desc: 'Jaminan pemahaman materi dengan metode pengajaran yang interaktif.', icon: <ShieldCheck size={20} /> }
  ];

  const topics = [
    { 
      category: "TEKNIK SIPIL / STRUKTUR", 
      items: ["Analisis Struktur Building (ETABS, SAP2000)", "Desain Jembatan (Bridge Engineering)", "Geoteknik & Pondasi", "Manajemen Proyek Konstruksi"]
    },
    { 
      category: "ARSITEKTUR & BIM", 
      items: ["BIM Implementation (Revit, Tekla)", "Pemodelan Arsitektur 3D", "Interior & Exterior Design", "Visualisasi Realistik"]
    },
    { 
      category: "TEKNIK ELEKTRO & OTOMASI", 
      items: ["PLC & SCADA Programming", "Sistem Kelistrikan Industri", "Power System Analysis (ETAP)", "Renewable Energy System"]
    },
    { 
      category: "TEKNIK MESIN & PIPING", 
      items: ["Piping & Pipeline Engineering", "HVAC Design & Maintenance", "Static & Rotating Equipment", "Analisis Tegangan Pipa"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-700">
      {/* SECTION 1: HERO */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 100%), url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop")' 
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase">
              TINGKATKAN <span className="text-yellow-primary">VALUE</span> <br />
              DIRI ANDA SECARA INTENSIF.
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed font-medium">
              Private Training memberikan pengalaman belajar personal yang dirancang khusus untuk mempercepat penguasaan skill teknis Anda bersama mentor elit.
            </p>
            <button 
              onClick={onRegister}
              className="bg-yellow-primary text-black font-black px-10 py-4 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-2xl uppercase tracking-wider"
            >
              Mulai Belajar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: FASILITAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
              Keunggulan Private<br />Training
            </h2>
            <div className="mt-8 w-24 h-2 bg-yellow-primary"></div>
            <p className="mt-8 text-gray-500 font-medium italic">
              Metode belajar yang fokus pada efektivitas dan hasil nyata untuk karier profesional Anda.
            </p>
          </div>
          
          <div className="lg:w-2/3 bg-black text-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {fasilitas.map((item) => (
                <div key={item.id} className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-black text-yellow-primary opacity-30 group-hover:opacity-100 transition-opacity">{item.id}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black mb-2 uppercase flex items-center gap-2 text-yellow-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed opacity-70 italic">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM POINT */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100">
             <div className="w-full md:w-1/3">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-yellow-primary/10 rounded-2xl -rotate-3 transition-transform group-hover:rotate-0"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Stuck Professional" 
                    className="relative w-full aspect-square object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                   />
                </div>
             </div>
             <div className="flex-grow">
                <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">Karier Anda Terasa Stuck?..</h3>
                <ul className="space-y-6">
                  {[
                    "Merasa kurang percaya diri dengan skill teknis saat menghadapi proyek besar?",
                    "Bingung harus mulai belajar dari mana di tengah banyaknya tutorial yang tidak terarah?",
                    "Butuh bimbingan intensif yang bisa menjawab pertanyaan spesifik Anda secara langsung?",
                    "Ingin menguasai software teknik terbaru dalam waktu singkat untuk promosi karier?"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-yellow-primary rounded-full flex items-center justify-center text-black transition-transform group-hover:scale-110">
                         <span className="text-[10px] font-black">{i+1}</span>
                      </div>
                      <p className="text-lg font-bold text-gray-700 italic leading-snug">{text}</p>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 uppercase tracking-tighter">
              Kenapa Harus <span className="text-yellow-primary">Private</span> Training?
            </h2>
            <p className="text-lg font-bold mb-10 leading-relaxed italic opacity-80">
              Belajar sendiri seringkali memakan waktu lama dan penuh trial-error. Dengan Private Training, Anda mendapatkan "jalan pintas" berupa pengalaman praktis mentor selama bertahun-tahun yang dipadatkan dalam sesi belajar intensif. Fokus kami adalah membuat Anda menjadi expert dalam waktu yang lebih singkat.
            </p>
            <div className="flex gap-4">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/5 flex-1">
                    <p className="text-3xl font-black text-yellow-primary mb-2">95%</p>
                    <p className="text-xs font-bold uppercase tracking-wider">Tingkat Kepuasan Alumni</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/5 flex-1">
                    <p className="text-3xl font-black text-yellow-primary mb-2">2x</p>
                    <p className="text-xs font-bold uppercase tracking-wider">Lebih Cepat Paham</p>
                </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="w-full aspect-[4/3] bg-yellow-primary/20 rounded-[3rem] backdrop-blur-sm border-4 border-yellow-primary/30 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Mentor Session" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-yellow-primary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <User className="text-black" size={40} />
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TOPICS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Topik Private Training yang Tersedia
            </h2>
            <div className="w-24 h-1 bg-yellow-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <h4 className="text-xl font-black mb-6 text-black group-hover:text-yellow-primary transition-colors border-l-4 border-yellow-primary pl-4 uppercase">
                  {topic.category}
                </h4>
                <ul className="space-y-3">
                  {topic.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 text-xs font-black uppercase flex items-center gap-2 hover:gap-4 transition-all text-black">
                  Cek Ketersediaan Mentor <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-32 bg-gray-50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-primary/5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-none">
              Jadilah <span className="text-yellow-primary">Expert</span> Di Bidangmu Sekarang Juga
           </h2>
           <p className="text-lg font-bold text-gray-500 mb-12 max-w-2xl mx-auto">
              Investasi terbaik adalah investasi pada diri sendiri. Mulai perjalanan karier teknik Anda ke level selanjutnya hari ini.
           </p>
           
           <button 
              onClick={onRegister}
              className="bg-black text-white font-black px-12 py-5 rounded-2xl hover:bg-yellow-primary hover:text-black transition-all shadow-2xl uppercase text-xl tracking-widest active:scale-95"
           >
              Booking Jadwal Privat
           </button>
           
           <p className="mt-12 text-sm font-black text-gray-300 uppercase tracking-[0.3em]">Authorized Private Training Provider</p>
        </div>
      </section>

      {/* Floating Back Button */}
      <button 
        onClick={onBack}
        className="fixed bottom-6 left-6 z-[100] bg-white/80 backdrop-blur-md border border-gray-200 text-black px-6 py-3 rounded-full font-black text-xs shadow-2xl hover:bg-black hover:text-white transition-all uppercase flex items-center gap-2"
      >
        <ArrowRight className="rotate-180" size={16} /> Kembali ke Beranda
      </button>
    </div>
  );
};

export default PrivateTraining;
