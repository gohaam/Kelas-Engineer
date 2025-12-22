import React, { useState } from 'react';
import { 
  ArrowLeft, Briefcase, Calculator, Users, ShieldCheck, 
  ChevronRight, ArrowRightLeft, Ruler, Wind, Zap, Building2, MapPin,
  ArrowRight
} from 'lucide-react';
import { Language } from '../App';

interface FeaturesHubProps {
  lang: Language;
  onBack: () => void;
}

const FeaturesHub: React.FC<FeaturesHubProps> = ({ lang, onBack }) => {
  const [activeTab, setActiveTab] = useState<'tools' | 'jobs' | 'community'>('tools');

  // --- UNIT CONVERTER LOGIC ---
  const [convValue, setConvValue] = useState<number>(1);
  const [convType, setConvType] = useState<'length' | 'pressure' | 'power'>('length');
  const [convResult, setConvResult] = useState<number>(0);

  const lengthUnits = { mm: 1, cm: 10, m: 1000, km: 1000000, in: 25.4, ft: 304.8 };
  const pressureUnits = { pascal: 1, bar: 100000, psi: 6894.76, atm: 101325 };
  
  const handleConvert = () => {
    // Simplified mockup conversion
    if (convType === 'length') setConvResult(convValue * 1000); // m to mm
    else if (convType === 'pressure') setConvResult(convValue * 1.01325); // atm to bar
    else setConvResult(convValue * 1.341); // kW to HP
  };

  const jobVacancies = [
    { title: "Senior Structural Engineer", company: "WIKA Gedung", location: "Jakarta (Remote)", type: "Full-time", salary: "IDR 15M - 20M" },
    { title: "Electrical Power System Specialist", company: "PT. PLN (Persero)", location: "Surabaya", type: "Full-time", salary: "Competitif" },
    { title: "BIM Modeller (Revit)", company: "Total Bangun Persada", location: "Tangerang", type: "Contract", salary: "IDR 8M - 12M" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* HEADER SECTION */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
             <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-400 hover:text-black font-black uppercase text-[10px] mb-4 transition-colors group"
             >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
             </button>
             <h1 className="text-4xl md:text-5xl font-[1000] uppercase tracking-tighter leading-none">
                ENGINEER'S <span className="text-yellow-primary">HUB</span>
             </h1>
             <p className="mt-4 text-gray-500 font-bold uppercase text-xs tracking-[0.2em]">
                Pusat Alat & Koneksi Eksklusif Kelas Engineer
             </p>
          </div>
          
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             {[
               { id: 'tools', label: 'TOOLKIT', icon: <Calculator size={14} /> },
               { id: 'jobs', label: 'JOB PORTAL', icon: <Briefcase size={14} /> },
               { id: 'community', label: 'FORUM', icon: <Users size={14} /> }
             ].map((tab) => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id as any)}
                 className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-yellow-primary text-black shadow-md' : 'text-gray-400 hover:text-black'}`}
               >
                 {tab.icon} {tab.label}
               </button>
             ))}
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* MAIN TAB CONTENT */}
           <div className="lg:col-span-8 space-y-8">
              
              {/* TOOLS SECTION */}
              {activeTab === 'tools' && (
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-12 animate-in slide-in-from-bottom-4 duration-500">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
                         <Ruler size={24} />
                      </div>
                      <div>
                         <h2 className="text-2xl font-black uppercase tracking-tight leading-none">Unit Converter</h2>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Tools untuk mempermudah hitungan lapangan</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                      <div 
                        onClick={() => setConvType('length')}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${convType === 'length' ? 'border-yellow-primary bg-yellow-primary/5 shadow-inner' : 'border-gray-100 hover:border-gray-200'}`}
                      >
                         <Ruler className="mb-4 text-gray-400" />
                         <span className="text-xs font-black uppercase tracking-wider block">Panjang</span>
                      </div>
                      <div 
                        onClick={() => setConvType('pressure')}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${convType === 'pressure' ? 'border-yellow-primary bg-yellow-primary/5 shadow-inner' : 'border-gray-100 hover:border-gray-200'}`}
                      >
                         <Wind className="mb-4 text-gray-400" />
                         <span className="text-xs font-black uppercase tracking-wider block">Tekanan</span>
                      </div>
                      <div 
                        onClick={() => setConvType('power')}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${convType === 'power' ? 'border-yellow-primary bg-yellow-primary/5 shadow-inner' : 'border-gray-100 hover:border-gray-200'}`}
                      >
                         <Zap className="mb-4 text-gray-400" />
                         <span className="text-xs font-black uppercase tracking-wider block">Daya</span>
                      </div>
                   </div>

                   <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200">
                      <div className="flex-grow w-full">
                         <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Input Nilai</label>
                         <div className="relative">
                            <input 
                               type="number" 
                               value={convValue}
                               onChange={(e) => setConvValue(Number(e.target.value))}
                               className="w-full bg-white border border-gray-300 rounded-xl px-6 py-4 font-black text-xl focus:ring-0 focus:border-yellow-primary outline-none"
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-gray-400 uppercase text-xs">
                               {convType === 'length' ? 'm' : convType === 'pressure' ? 'atm' : 'kW'}
                            </span>
                         </div>
                      </div>

                      <div className="bg-black text-white p-4 rounded-full shadow-lg group">
                         <ArrowRightLeft className="group-hover:rotate-180 transition-transform duration-500" />
                      </div>

                      <div className="flex-grow w-full">
                         <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Hasil Konversi</label>
                         <div className="relative">
                            <div className="w-full bg-white border border-gray-300 rounded-xl px-6 py-4 font-black text-xl flex items-center">
                               {convResult.toFixed(2)}
                            </div>
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-yellow-primary uppercase text-xs">
                               {convType === 'length' ? 'mm' : convType === 'pressure' ? 'bar' : 'HP'}
                            </span>
                         </div>
                      </div>
                   </div>
                   
                   <button 
                     onClick={handleConvert}
                     className="mt-8 w-full bg-black text-white font-black py-4 rounded-2xl hover:bg-yellow-primary hover:text-black transition-all uppercase tracking-[0.2em] shadow-xl"
                   >
                     HITUNG KONVERSI
                   </button>
                </div>
              )}

              {/* JOBS SECTION */}
              {activeTab === 'jobs' && (
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-500">
                   {jobVacancies.map((job, idx) => (
                     <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="flex items-center gap-8">
                           <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-yellow-primary/10 group-hover:border-yellow-primary transition-colors">
                              <Building2 className="text-gray-300 group-hover:text-black transition-colors" />
                           </div>
                           <div>
                              <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-yellow-primary transition-colors">{job.title}</h3>
                              <div className="flex items-center gap-4 mt-2">
                                 <span className="text-[10px] font-black text-black bg-yellow-primary px-2 py-0.5 rounded-sm uppercase tracking-tighter">{job.company}</span>
                                 <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1"><MapPin size={10} /> {job.location}</span>
                              </div>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-sm font-black text-black mb-1">{job.salary}</p>
                           <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black flex items-center gap-1 justify-end">
                              APPLY NOW <ChevronRight size={14} />
                           </button>
                        </div>
                     </div>
                   ))}
                   <button className="w-full bg-white border-2 border-dashed border-gray-200 p-8 rounded-[2rem] text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] hover:bg-gray-50 transition-colors">
                      LIHAT SEMUA LOWONGAN (42+)
                   </button>
                </div>
              )}

              {/* COMMUNITY SECTION (MOCKUP) */}
              {activeTab === 'community' && (
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-12 text-center animate-in zoom-in duration-500">
                   <Users size={64} className="mx-auto text-yellow-primary mb-8" />
                   <h2 className="text-3xl font-[1000] uppercase tracking-tighter mb-4">Engineering Community</h2>
                   <p className="text-gray-500 font-medium italic max-w-md mx-auto mb-10 leading-relaxed">
                      "Dapatkan akses ke ribuan insinyur di seluruh Indonesia untuk berdiskusi tentang standar desain terkini dan troubleshoot proyek."
                   </p>
                   <button className="bg-black text-white font-black px-12 py-4 rounded-2xl hover:bg-yellow-primary hover:text-black transition-all uppercase tracking-widest shadow-xl">
                      MASUK KE FORUM
                   </button>
                </div>
              )}

           </div>

           {/* SIDEBAR: EXTRA FEATURES */}
           <div className="lg:col-span-4 space-y-6">
              
              {/* CERTIFICATE VERIFIER */}
              <div className="bg-black text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-primary/10 rounded-full translate-x-16 -translate-y-16"></div>
                 <ShieldCheck size={48} className="text-yellow-primary mb-6 group-hover:scale-110 transition-transform" />
                 <h3 className="text-xl font-black uppercase tracking-tight mb-2">E-Cert Verifier</h3>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 italic leading-relaxed">
                    Pastikan keaslian sertifikat Kelas Engineer anda disini.
                 </p>
                 <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Masukkan Kode Sertifikat..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs focus:ring-0 focus:border-yellow-primary outline-none transition-all placeholder:text-white/20"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-primary text-black p-1.5 rounded-lg">
                       <ArrowRight size={16} strokeWidth={3} />
                    </button>
                 </div>
              </div>

              {/* STATS / TRENDING */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Trending Topics</h4>
                 <div className="space-y-4">
                    {[
                      { tag: "#BIM", count: 1200 },
                      { tag: "#SolarEnergy", count: 850 },
                      { tag: "#StructuralSafety", count: 430 }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center group cursor-pointer">
                         <span className="text-sm font-black group-hover:text-yellow-primary transition-colors">{item.tag}</span>
                         <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">{item.count} Discuss</span>
                      </div>
                    ))}
                 </div>
              </div>

           </div>

        </div>

        {/* BOTTOM BRANDING */}
        <div className="mt-20 text-center">
           <div className="flex items-center justify-center gap-4 opacity-10">
              <div className="h-[2px] w-12 bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.8em]">kelasengineer.id</span>
              <div className="h-[2px] w-12 bg-black"></div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesHub;