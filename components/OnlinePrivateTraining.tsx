
import React from 'react';
import { CheckCircle2, ArrowRight, Video, Monitor, Cloud, Download, Laptop, Clock, Globe } from 'lucide-react';

interface OnlinePrivateTrainingProps {
  onBack: () => void;
  onRegister: () => void;
}

const OnlinePrivateTraining: React.FC<OnlinePrivateTrainingProps> = ({ onBack, onRegister }) => {
  const fasilitas = [
    { id: '01', title: 'Interactive Virtual Class', desc: 'Sesi live 1-on-1 via Zoom/Meet premium dengan fitur screen-sharing interaktif.', icon: <Monitor size={20} /> },
    { id: '02', title: 'Session Recording', desc: 'Setiap sesi direkam agar Anda bisa mengulas kembali materi kapan saja tanpa batas.', icon: <Video size={20} /> },
    { id: '03', title: 'Cloud Learning Module', desc: 'Akses modul, data latihan, dan software pendukung via cloud storage eksklusif.', icon: <Cloud size={20} /> },
    { id: '04', title: 'Flexible Timezone', desc: 'Jadwal fleksibel yang bisa menyesuaikan waktu luang Anda, dari pagi hingga malam.', icon: <Clock size={20} /> },
    { id: '05', title: 'Anywhere Access', desc: 'Belajar nyaman dari rumah, kantor, atau kafe tanpa perlu repot transportasi.', icon: <Globe size={20} /> },
    { id: '06', title: 'Direct WhatsApp Support', desc: 'Tanya jawab langsung dengan mentor via WhatsApp untuk kendala teknis harian.', icon: <CheckCircle2 size={20} /> },
    { id: '07', title: 'E-Certificate', desc: 'Sertifikat digital resmi yang dapat langsung diverifikasi di LinkedIn Anda.', icon: <Download size={20} /> }
  ];

  const topics = [
    { 
      category: "CIVIL & STRUCTURAL (VIRTUAL)", 
      items: ["Modelling Struktur Gedung Bertingkat", "Analisis Statik & Dinamik (ETABS)", "Desain Penulangan Otomatis", "Penyusunan Laporan Perhitungan"]
    },
    { 
      category: "BIM & ARCHITECTURE (VIRTUAL)", 
      items: ["Workflow BIM for Professionals", "High-End Rendering (Enscape/Lumion)", "Parametric Design Mastery", "Collaborative Working in Cloud"]
    },
    { 
      category: "ELECTRICAL & AUTOMATION (VIRTUAL)", 
      items: ["Simulasi PLC & HMI Pro", "Single Line Diagram Expert", "Analisis Aliran Daya (ETAP)", "Industrial IoT Fundamentals"]
    },
    { 
      category: "MECHANICAL & PIPING (VIRTUAL)", 
      items: ["3D Piping Modelling Mastery", "Isometrics Extraction", "Stress Analysis Simulation", "Material Take-Off Automation"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-700">
      {/* SECTION 1: HERO */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.5) 100%), url("https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop")' 
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-primary text-black rounded-full mb-6 font-black text-xs uppercase tracking-widest">
                <Laptop size={14} /> 100% Online & Private
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6 uppercase tracking-tighter">
              KUASAI SKILL TEKNIK <br />
              <span className="text-yellow-primary italic">DARI MANA SAJA.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed font-medium max-w-xl">
              Dapatkan bimbingan privat eksklusif secara online. Tanpa macet, tanpa batas jarak, hanya Anda dan mentor ahli di depan layar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onRegister}
                  className="bg-yellow-primary text-black font-black px-10 py-4 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-2xl uppercase tracking-wider text-sm"
                >
                  Booking Sesi Virtual
                </button>
                <div className="flex items-center gap-3 px-6 py-4 border border-white/20 rounded-xl bg-white/5 backdrop-blur-md">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold uppercase">Mentor Online Sekarang</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FASILITAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
              Fitur Belajar<br />Virtual Kami
            </h2>
            <div className="mt-8 w-24 h-2 bg-yellow-primary"></div>
            <p className="mt-8 text-gray-400 font-medium italic">
              Kami menggunakan teknologi terbaru untuk memastikan pengalaman belajar online terasa seperti tatap muka langsung.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {fasilitas.map((item) => (
              <div key={item.id} className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-yellow-primary hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-primary group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM POINT */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="w-full md:w-1/2">
                <h3 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">
                  Capek Belajar Sendiri <br />via YouTube??
                </h3>
                <div className="space-y-8">
                  {[
                    { q: "Nonton tutorial tapi kalau ada error bingung tanya siapa?", a: "Mentor kami standby memandu klik demi klik via screen-share." },
                    { q: "Materi YouTube terlalu umum & tidak sesuai kasus proyek Anda?", a: "Bawa file proyek Anda ke kelas, kita bedah bersama secara privat." },
                    { q: "Sudah beli kursus rekaman tapi tidak pernah selesai dipelajari?", a: "Sesi Live memaksa Anda untuk fokus dan disiplin hingga tuntas." }
                  ].map((item, i) => (
                    <div key={i} className="group border-l-4 border-yellow-primary pl-6 py-2">
                      <p className="text-lg font-black mb-1 opacity-60 group-hover:opacity-100 transition-opacity">{item.q}</p>
                      <p className="text-sm font-bold text-yellow-primary italic">{item.a}</p>
                    </div>
                  ))}
                </div>
             </div>
             <div className="w-full md:w-1/2 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                        alt="Online Session" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-yellow-primary/10 mix-blend-multiply"></div>
                </div>
                {/* Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-primary rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-primary rounded-full blur-3xl opacity-20"></div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TOPICS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Kurikulum Online Private
            </h2>
            <div className="w-24 h-1 bg-yellow-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-primary/5 rounded-full translate-x-16 -translate-y-16"></div>
                <h4 className="text-xl font-black mb-6 text-black group-hover:text-yellow-primary transition-colors border-l-4 border-yellow-primary pl-4 uppercase relative z-10">
                  {topic.category}
                </h4>
                <ul className="space-y-4 relative z-10">
                  {topic.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                      <div className="w-2 h-2 bg-yellow-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-10 text-xs font-black uppercase flex items-center gap-2 hover:gap-4 transition-all text-black border-b-2 border-black/10 pb-1">
                  Mulai Konsultasi Online <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-4xl md:text-7xl font-[1000] uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-none">
              BELAJAR DARI MANA SAJA,<br />
              <span className="text-yellow-primary">JADI EXPERT</span> SECEPATNYA.
           </h2>
           <p className="text-xl font-bold text-gray-400 mb-12 max-w-2xl mx-auto">
              Hanya butuh koneksi internet dan semangat belajar. Biarkan mentor kami yang membawa keahliannya langsung ke layar komputer Anda.
           </p>
           
           <div className="flex flex-col items-center gap-6">
                <button 
                onClick={onRegister}
                className="bg-black text-white font-black px-16 py-6 rounded-2xl hover:bg-yellow-primary hover:text-black transition-all shadow-2xl uppercase text-xl tracking-[0.15em] active:scale-95"
                >
                DAFTAR ONLINE SEKARANG
                </button>
                <p className="text-sm font-black text-gray-300 uppercase tracking-[0.4em]">Sesi Privat Terbatas Setiap Minggunya</p>
           </div>
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

export default OnlinePrivateTraining;
