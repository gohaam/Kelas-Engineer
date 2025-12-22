
import React from 'react';
import { ArrowLeft, CheckCircle, User, ChevronLeft, BookOpen, Calendar, Award, Monitor, ChevronDown } from 'lucide-react';
import { Language } from '../App';

interface CourseDetailProps {
  course: any;
  lang: Language;
  onBack: () => void;
  onRegister: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course, lang, onBack, onRegister }) => {
  const isId = lang === 'id';

  const learningOutcomes = [
    "Conceptual explanation about equation used in engineering",
    "Practical Demo & Simulation using Industry Standards",
    "Watershed Definition & Parameter Analysis",
    "Routing & Transformation Techniques",
    "Result Analysis & Professional Reporting"
  ];

  const targetAudience = [
    "Mahasiswa Teknik",
    "Fresh Graduate",
    "Profesional Muda",
    "Engineer yang ingin update skill"
  ];

  const PricingCard = ({ title, price, oldPrice, benefits, bonus }: { title: string, price: string, oldPrice: string, benefits: string[], bonus: string }) => (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-yellow-primary p-4 flex justify-between items-center px-6">
        <span className="font-bold text-sm text-black">{title}</span>
        <ChevronDown size={20} className="text-black" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="font-black text-sm text-black pt-5">Harga Mulai</span>
          <div className="text-right">
            <p className="text-[10px] font-bold text-red-500 line-through mb-0.5">Rp. {oldPrice}</p>
            <p className="text-lg font-black text-black leading-none">Rp. {price}</p>
          </div>
        </div>

        <div className="space-y-1 mb-6">
          {benefits.map((b, i) => (
            <p key={i} className="text-xs font-medium text-gray-700">{b}</p>
          ))}
        </div>

        <div className="mb-8">
          <p className="text-xs font-black text-black mb-1">Bonus lainnya :</p>
          <p className="text-xs font-medium text-gray-700">{bonus}</p>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onRegister}
            className="bg-yellow-primary text-black font-black text-[10px] px-8 py-2.5 rounded-lg hover:bg-black hover:text-white transition-all uppercase tracking-wider"
          >
            DAFTAR SEKARANG
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
      {/* 1. TOP TITLE BANNER */}
      <div className="bg-yellow-primary py-8 md:py-12 border-b-4 border-black/5">
        <div className="container mx-auto px-4 md:px-12 flex items-center gap-6">
          <button 
            onClick={onBack}
            className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg group active:scale-90"
          >
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <h1 className="text-2xl md:text-4xl font-[950] uppercase tracking-tighter text-black leading-tight">
            {course.title || "POWER SYSTEM CLASS ( ELECTRICAL ENGINEERING )"}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-12 flex flex-col lg:flex-row gap-12">
        {/* 2. MAIN CONTENT AREA */}
        <div className="lg:w-2/3">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-900 aspect-video mb-12 border-8 border-gray-50 group">
            <img 
              src={course.image || "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974"} 
              alt="Class Session" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-primary rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-all border-4 border-white/20">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
             <div className="flex flex-col items-center text-center gap-2">
                <BookOpen size={24} className="text-slate-300" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Materi Pelatihan</span>
             </div>
             <div className="flex flex-col items-center text-center gap-2">
                <Calendar size={24} className="text-slate-300" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sabtu, 12 Oktober 2024</span>
             </div>
             <div className="flex flex-col items-center text-center gap-2">
                <Award size={24} className="text-slate-300" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">E-Certificate</span>
             </div>
             <div className="flex flex-col items-center text-center gap-2">
                <Monitor size={24} className="text-slate-300" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Online Learning</span>
             </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight border-b-4 border-yellow-primary w-fit pb-1">Deskripsi</h3>
            <p className="text-gray-600 leading-relaxed font-medium italic text-lg lg:text-xl">
              "Ayo bergabung dan daftarkan diri Anda sekarang dalam kelas {course.title || 'Sistem Tenaga'} ini! Jangan lewatkan kesempatan untuk mengembangkan pemahaman mendalam dalam bidang Teknik dan menjadi bagian dari komunitas belajar yang penuh semangat."
            </p>
          </div>

          <div className="mb-12">
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Tentang Pemateri</p>
            <div className="bg-gray-50 p-8 rounded-3xl flex items-center gap-6 border border-gray-100 shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-yellow-primary flex items-center justify-center overflow-hidden border-4 border-white shadow-xl rotate-3">
                <User size={40} className="text-black" />
              </div>
              <div>
                <h4 className="font-black text-xl uppercase tracking-tight text-black">{course.mentor || "Ir. Pahlevi, M.T."}</h4>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Konsultan & Praktisi Industri</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-gray-100">
            <div>
              <h4 className="text-xl font-black mb-8 uppercase tracking-tight text-gray-900 border-b-2 border-yellow-primary w-fit pb-1">Pelatihan ini cocok untuk :</h4>
              <ul className="space-y-4">
                {targetAudience.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-wide">
                    <div className="w-2 h-2 bg-yellow-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 uppercase tracking-tight text-gray-900 border-b-2 border-yellow-primary w-fit pb-1">Hasil Belajar :</h4>
              <ul className="space-y-4">
                {learningOutcomes.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-wide">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. SIDEBAR PRICING AREA */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 space-y-6">
            <div className="flex justify-end mb-2">
              <span className="bg-gray-200 text-black text-[10px] font-bold px-3 py-1 rounded-md">online class</span>
            </div>

            <PricingCard 
              title="Non-Bundle Price"
              price={course.price || "350.000"}
              oldPrice={course.oldPrice || "600.000"}
              benefits={["Benefit 1", "Benefit 2", "Benefit 3"]}
              bonus="Benefit bonus"
            />

            <PricingCard 
              title="Bundle Price"
              price="999.999"
              oldPrice="1.500.000"
              benefits={["Benefit 1", "Benefit 2", "Benefit 3"]}
              bonus="Benefit bonus"
            />
          </div>
        </div>
      </div>

      {/* Floating Global Back Button */}
      <button 
        onClick={onBack}
        className="fixed bottom-10 left-10 z-[100] bg-black text-white px-8 py-5 rounded-full font-[950] text-xs shadow-2xl hover:bg-yellow-primary hover:text-black transition-all uppercase flex items-center gap-3 active:scale-95 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Kembali Ke Halaman Sebelumnya
      </button>
    </div>
  );
};

export default CourseDetail;
