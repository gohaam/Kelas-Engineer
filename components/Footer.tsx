
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onLoginClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLoginClick }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column: Brand & Socials */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-3 transition-transform hover:scale-105 origin-left">
                <div className="flex flex-col leading-[0.8] text-white">
                  <span className="text-2xl font-[950] uppercase tracking-tighter">Kelas</span>
                  <span className="text-2xl font-[950] uppercase tracking-tighter">Engineer</span>
                </div>
                <div className="flex items-end justify-center gap-[4px] h-10 pt-1">
                  <div className="w-[6px] h-6 bg-yellow-primary rounded-full"></div>
                  <div className="w-[6px] h-9 bg-yellow-primary rounded-full"></div>
                  <div className="w-[6px] h-4 bg-yellow-primary rounded-full"></div>
                  <div className="w-[6px] h-[6px] bg-yellow-primary rounded-full mb-[2px]"></div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 opacity-80">
              Leading engineering education platform providing technical training and engineering excellence since 2018. Based in the heart of Indonesia's industrial hub.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-primary hover:border-yellow-primary hover:text-black transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-primary hover:border-yellow-primary hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-primary hover:border-yellow-primary hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-primary hover:border-yellow-primary hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Right Column: Quick Links */}
          <div className="md:pl-20">
            <div className="border-l-4 border-yellow-primary pl-4 mb-8">
              <h3 className="text-xl font-black tracking-wider uppercase">QUICK LINKS</h3>
            </div>
            
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-yellow-primary transition-colors inline-block">Beranda</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-yellow-primary transition-colors inline-block">Layanan</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-primary transition-colors inline-block">Fitur</a>
              </li>
              <li>
                <button onClick={scrollToContact} className="hover:text-yellow-primary transition-colors inline-block text-left">Kontak</button>
              </li>
              <li>
                <button onClick={onLoginClick} className="hover:text-yellow-primary transition-colors inline-block text-left">Masuk / Daftar</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mb-12 flex flex-col items-center md:items-start">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Metode Pembayaran</p>
          <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <div className="bg-white px-3 py-1 rounded flex items-center gap-2">
                <span className="text-[#00529C] font-black text-sm italic">BCA</span>
             </div>
             <div className="bg-white px-3 py-1 rounded flex items-center gap-1">
                <span className="text-red-600 font-black text-xs">QRIS</span>
                <div className="w-2 h-2 bg-blue-900 rounded-sm"></div>
             </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium italic">
            &copy; {new Date().getFullYear()} KelasEngineerid. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Powered by Engineer Ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
