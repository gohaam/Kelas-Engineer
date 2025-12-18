
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xl font-extrabold text-white">KelasEngineerid</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-yellow-primary">Branda</a>
            <a href="#" className="hover:text-yellow-primary">Layanan</a>
            <a href="#" className="hover:text-yellow-primary">Fitur</a>
            <a href="#" className="hover:text-yellow-primary">Kontak</a>
            <a href="#" className="hover:text-yellow-primary">Masuk</a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs opacity-60">Pembayaran :</span>
            <div className="flex gap-2">
                <div className="bg-white px-2 py-1 rounded">
                    <span className="text-black font-black text-xs">QRIS</span>
                </div>
                <div className="bg-white px-2 py-1 rounded">
                    <span className="text-blue-800 font-black text-xs italic">BCA</span>
                </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
          <p>@ Copyright KelasEngineerid All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
