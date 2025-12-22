
import React from 'react';
import { Home, WifiOff, Wrench, Construction, AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorPageProps {
  type?: '404' | 'offline' | 'maintenance';
  onRetry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ type = '404', onRetry }) => {
  const isOffline = type === 'offline';
  const isMaintenance = type === 'maintenance';

  const getContent = () => {
    switch (type) {
      case 'offline':
        return {
          code: '503',
          label: 'OFFLINE',
          title: 'Koneksi Terputus',
          desc: 'Sepertinya sinyal Anda sedang tidak stabil. Silahkan cek koneksi internet Anda dan coba lagi.',
          icon: <WifiOff size={48} className="text-[#00D2B4]" />,
          buttonText: 'Coba Lagi'
        };
      case 'maintenance':
        return {
          code: 'WIP',
          label: 'FIXING',
          title: 'Sedang Diperbaiki',
          desc: 'Mohon maaf, fitur atau halaman ini sedang dalam tahap pengembangan atau pemeliharaan rutin untuk kenyamanan Anda.',
          icon: <Wrench size={48} className="text-[#00D2B4]" />,
          buttonText: 'Kembali Nanti'
        };
      default:
        return {
          code: '404',
          label: 'FORBIDDEN',
          title: 'Halaman Hilang',
          desc: 'Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan. Silahkan kembali ke halaman utama.',
          icon: <Construction size={48} className="text-[#00D2B4]" />,
          buttonText: 'Go Home'
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-6 animate-in fade-in duration-500 overflow-y-auto">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 py-10">
        
        {/* Left Side: Illustration */}
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center scale-90 md:scale-100">
          <div className="relative">
            {/* The Number Text */}
            <div className="absolute -top-24 -left-12 text-[140px] font-black text-[#00D2B4]/10 italic select-none tracking-tighter">
              {content.code}
            </div>
            
            {/* The Door Area */}
            <div className={`relative z-10 w-48 h-72 border-[6px] border-[#2C3E50] rounded-t-3xl bg-white shadow-2xl overflow-hidden flex flex-col items-center transition-all duration-500 ${isMaintenance ? 'border-yellow-500' : ''}`}>
               <div className={`w-full h-1/2 flex items-center justify-center ${isMaintenance ? 'bg-yellow-50' : 'bg-[#E0F7F5]'}`}>
                  <div className="bg-white px-3 py-1 border-2 border-[#2C3E50] shadow-md -rotate-12 animate-pulse">
                    <span className={`text-[10px] font-black ${isMaintenance ? 'text-yellow-600' : 'text-red-600'}`}>
                        {isMaintenance ? 'PROGRESS' : 'ERROR'}
                    </span>
                  </div>
               </div>
               <div className="w-full h-1/2 flex items-center justify-center p-4">
                  <div className={isMaintenance ? 'animate-spin-slow' : 'animate-bounce'}>
                    {content.icon}
                  </div>
               </div>
               
               {/* Police/Warning Tape Effect */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-8 rotate-[25deg] flex items-center justify-around overflow-hidden border-y-2 border-black/20 ${isMaintenance ? 'bg-yellow-400' : 'bg-[#00D2B4]'}`}>
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="text-[10px] font-black text-white uppercase whitespace-nowrap px-4 italic">
                        {content.label}
                    </span>
                  ))}
               </div>
            </div>

            {/* Character (Simplified Representation) */}
            <div className="absolute bottom-0 -right-16 md:-right-24 z-20 flex flex-col items-center">
               <div className="relative group">
                  <div className={`absolute -inset-6 rounded-full blur-2xl opacity-20 transition-all ${isMaintenance ? 'bg-yellow-400' : 'bg-[#00D2B4]'}`}></div>
                  <div className="w-16 h-44 bg-[#2C3E50] rounded-t-full relative flex flex-col items-center pt-2">
                     <div className="w-12 h-12 bg-[#FADBD8] rounded-full mb-2 border-2 border-white/20"></div>
                     <div className={`w-14 h-4 mb-4 rounded-sm ${isMaintenance ? 'bg-yellow-400' : 'bg-[#00D2B4]'}`}></div>
                     {/* Arm Signaling */}
                     <div className="absolute top-16 -right-12 w-16 h-4 bg-[#FADBD8] rounded-full rotate-[10deg] origin-left shadow-sm"></div>
                  </div>
               </div>
               {/* Speech Bubble */}
               <div className={`absolute -top-16 -right-10 text-white px-5 py-2.5 rounded-2xl rounded-bl-none shadow-xl transition-colors duration-500 ${isMaintenance ? 'bg-yellow-500' : 'bg-[#00D2B4]'}`}>
                  <span className="text-xs font-[950] uppercase tracking-widest">{content.label}</span>
               </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -left-16 bottom-0">
               <div className="w-16 h-20 bg-[#2C3E50] rounded-t-2xl flex flex-col items-center justify-start pt-2">
                  <div className={`w-12 h-12 rounded-full blur-lg opacity-30 ${isMaintenance ? 'bg-yellow-400' : 'bg-[#00D2B4]'}`}></div>
                  <div className="flex gap-1.5 mt-[-10px]">
                    <div className="w-2 h-10 bg-[#00D2B4] rounded-full -rotate-15"></div>
                    <div className="w-2.5 h-12 bg-[#00D2B4] rounded-full"></div>
                    <div className="w-2 h-10 bg-[#00D2B4] rounded-full rotate-15"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="text-center md:text-left animate-in slide-in-from-right-8 duration-700">
          <div className="inline-block mb-4 px-4 py-1.5 bg-gray-100 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                {isMaintenance ? <RefreshCw size={12} className="animate-spin" /> : <AlertTriangle size={12} />}
                System Status: {isMaintenance ? 'Maintenance' : 'Error'}
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl font-[1000] text-[#00D2B4] mb-4 tracking-tighter leading-none">
            Oops!!
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight leading-tight">
            {content.title}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md leading-relaxed mb-10">
            {content.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
                onClick={onRetry || (() => window.location.href = '/')}
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-4 text-white px-10 py-5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 ${isMaintenance ? 'bg-yellow-500 shadow-yellow-200' : 'bg-[#00D2B4] shadow-[#00D2B4]/20'}`}
            >
                <span className="text-lg font-black uppercase tracking-wider">
                {content.buttonText}
                </span>
                <Home size={22} className="group-hover:translate-y-[-2px] transition-transform" />
            </button>
            
            {isMaintenance && (
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Estimasi Selesai: Segera
                </p>
            )}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
        }
        .rotate-15 { transform: rotate(15deg); }
        .-rotate-15 { transform: rotate(-15deg); }
      `}</style>
    </div>
  );
};

export default ErrorPage;
