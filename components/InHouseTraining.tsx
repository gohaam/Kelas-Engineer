
import React from 'react';
import { CheckCircle2, ArrowRight, BookOpen, Award, Users, ShieldCheck, Headphones, BarChart3, Search } from 'lucide-react';

interface InHouseTrainingProps {
  onBack: () => void;
  onRegister: () => void;
}

const InHouseTraining: React.FC<InHouseTrainingProps> = ({ onBack, onRegister }) => {
  const fasilitas = [
    { id: '01', title: 'Kurikulum', desc: 'Materi disusun sesuai dengan kebutuhan spesifik organisasi/perusahaan anda.', icon: <BookOpen size={20} /> },
    { id: '02', title: 'Sertifikat', desc: 'Mendapatkan sertifikat keahlian bagi setiap peserta yang lulus pelatihan.', icon: <Award size={20} /> },
    { id: '03', title: 'Harga Tetap', desc: 'Biaya lebih kompetitif dibandingkan dengan pengiriman peserta secara individu.', icon: <BarChart3 size={20} /> },
    { id: '04', title: 'Soft Copy', desc: 'Mendapatkan modul materi dan data pendukung pelatihan lainnya secara digital.', icon: <CheckCircle2 size={20} /> },
    { id: '05', title: 'Pelaporan', desc: 'Laporan evaluasi hasil pelatihan peserta diberikan kepada pihak manajemen.', icon: <ShieldCheck size={20} /> },
    { id: '06', title: 'Professional Mentor', desc: 'Trainer praktisi berpengalaman di bidangnya masing-masing.', icon: <Users size={20} /> },
    { id: '07', title: 'After-sales Service', desc: 'Konsultasi gratis setelah pelatihan selesai untuk implementasi di lapangan.', icon: <Headphones size={20} /> }
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
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 100%), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")' 
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase">
              KAMI SIAP <br />
              <span className="text-yellow-primary">MENGEKSELERASI</span> SKILL ORGANISASI ANDA.
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed font-medium">
              In-house training merupakan pelatihan khusus yang dirancang sesuai dengan kebutuhan spesifik organisasi atau perusahaan Anda.
            </p>
            <button 
              onClick={onRegister}
              className="bg-yellow-primary text-black font-black px-10 py-4 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-2xl uppercase tracking-wider"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: FASILITAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
              Fasilitas Inhouse<br />Training
            </h2>
            <div className="mt-8 w-24 h-2 bg-yellow-primary"></div>
          </div>
          
          <div className="lg:w-2/3 bg-yellow-primary p-8 md:p-12 rounded-[2rem] shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {fasilitas.map((item) => (
                <div key={item.id} className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-black opacity-30 group-hover:opacity-100 transition-opacity">{item.id}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black mb-2 uppercase flex items-center gap-2">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed opacity-80 italic">
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
                   <div className="absolute -inset-4 bg-gray-100 rounded-2xl rotate-3 transition-transform group-hover:rotate-0"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Problem" 
                    className="relative w-full aspect-square object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                   />
                </div>
             </div>
             <div className="flex-grow">
                <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">Kamu Mengalami Sesuatu?..</h3>
                <ul className="space-y-6">
                  {[
                    "Kualitas hasil kerja tim tidak seragam atau tidak sesuai standar industri?",
                    "Kesulitan dalam mengadopsi teknologi atau software teknik terbaru?",
                    "Target proyek sering tertunda karena kendala teknis yang sebenarnya bisa dihindari?",
                    "Membutuhkan mentor yang benar-benar praktisi untuk membimbing tim di lapangan?"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
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
      <section className="py-24 bg-yellow-primary overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 uppercase tracking-tighter">
              Kenapa Harus Inhouse Training?
            </h2>
            <p className="text-lg font-bold mb-10 leading-relaxed italic">
              In-house Training dapat menjadi solusi pelatihan ekonomi karena efisiensi biaya, waktu, dan tempat bagi organisasi anda. Perusahaan dapat menentukan jadwal sendiri dan dapat memilih topik materi kursus yang benar-benar dibutuhkan untuk meningkatkan kinerja operasional perusahaan secara tepat sasaran.
            </p>
          </div>
          <div className="md:w-1/2 relative">
             <div className="w-full aspect-[4/3] bg-white/20 rounded-[3rem] backdrop-blur-sm border-4 border-white flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Training" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <Users className="text-yellow-primary" size={40} />
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: STATS */}
      <section className="relative h-[450px] flex items-center">
         <div 
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop")' }}
         />
         <div className="container mx-auto px-4 text-center relative z-10 text-white">
            <p className="text-xl font-bold mb-4">Kami telah membantu</p>
            <h2 className="text-6xl md:text-8xl font-black text-yellow-primary mb-8 tracking-tighter">&gt;30.000 Peserta</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium opacity-80 leading-relaxed italic">
              Dalam mengakselerasi berbagai ilmu keteknikan. Kami berkomitmen membantu para mahasiswa dan profesional di perusahaan untuk meningkatkan skill dan kompetensinya guna menyongsong pertumbuhan IPTEK di dunia.
            </p>
         </div>
      </section>

      {/* SECTION 6: TOPICS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Topik Private Training yang Kami Sediakan
            </h2>
            <div className="w-24 h-1 bg-yellow-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <h4 className="text-xl font-black mb-6 text-gray-400 group-hover:text-yellow-primary transition-colors border-l-4 border-yellow-primary pl-4 uppercase">
                  {topic.category}
                </h4>
                <ul className="space-y-3">
                  {topic.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <div className="w-1.5 h-1.5 bg-yellow-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 text-xs font-black uppercase flex items-center gap-2 hover:gap-4 transition-all">
                  Lihat Detail Topik <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4">
           <div className="relative inline-block mb-12">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="CTA Person" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-gray-100 mx-auto object-cover grayscale"
              />
              <div className="absolute top-0 right-0 w-10 h-10 bg-yellow-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                 <Search size={20} className="text-black" />
              </div>
           </div>
           
           <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-none">
              Tunggu Apalagi?<br />
              <span className="text-yellow-primary">Tingkatkan Skill</span> Organisasi dan Perusahaanmu Bersama Kami
           </h2>
           
           <button 
              onClick={onRegister}
              className="bg-black text-white font-black px-12 py-5 rounded-2xl hover:bg-yellow-primary hover:text-black transition-all shadow-2xl uppercase text-xl tracking-widest active:scale-95"
           >
              Daftar Sekarang
           </button>
           
           <p className="mt-8 text-sm font-black text-gray-300 uppercase tracking-[0.3em]">Kelas Engineer Indonesia</p>
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

export default InHouseTraining;
