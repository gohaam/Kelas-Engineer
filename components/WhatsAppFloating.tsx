
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloating: React.FC = () => {
  const phoneNumber = "6281355552114";
  const message = "Halo Admin Kelas Engineer, saya ingin bertanya tentang...";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button 
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        title="Hubungi kami via WhatsApp"
      >
        {/* Tooltip Label */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Chat Admin WA
        </span>
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></span>
        
        <MessageCircle size={28} fill="currentColor" className="relative z-10" />
      </button>
    </div>
  );
};

export default WhatsAppFloating;
