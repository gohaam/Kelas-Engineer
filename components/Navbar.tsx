
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Instagram, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  
  const layananRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (layananRef.current && !layananRef.current.contains(event.target as Node)) {
        setIsLayananOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const layananItems = [
    { title: "Online Training", isHeader: true },
    { title: "Private Training", isHeader: false },
    { title: "In-house Training", isHeader: false },
    { title: "E-Course", isHeader: false },
    { title: "Bimbingan & Konsultasi", isHeader: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-yellow-primary py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xl font-extrabold text-black">Kelas</span>
            <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-black">Engineer</span>
                <div className="flex gap-[1px]">
                    <div className="w-1 h-2 bg-black rounded-full"></div>
                    <div className="w-1 h-3 bg-black rounded-full"></div>
                    <div className="w-1 h-4 bg-black rounded-full"></div>
                </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-bold border-b-2 border-transparent hover:border-black transition-all">BERANDA</a>
          
          {/* Layanan Dropdown (Hover Trigger) */}
          <div 
            className="relative" 
            ref={layananRef}
            onMouseEnter={() => setIsLayananOpen(true)}
            onMouseLeave={() => setIsLayananOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-sm font-medium hover:text-gray-700 transition-colors py-2"
            >
              LAYANAN
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLayananOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLayananOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl border border-gray-100 rounded-sm py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
              >
                {layananItems.map((item, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${
                      item.isHeader 
                        ? 'font-bold underline decoration-2 underline-offset-4 mb-1' 
                        : 'font-normal text-gray-700'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="text-sm font-medium hover:text-gray-700">FITUR</a>
          
          {/* Contact (Simple Link) */}
          <a href="#contact" className="text-sm font-bold hover:text-gray-700 transition-colors py-2">
            CONTACT
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-1 text-sm font-bold text-black border border-black rounded hover:bg-black hover:text-white transition-all">
            Masuk
          </button>
          <button className="px-6 py-1 text-sm font-bold text-black bg-white rounded shadow-sm hover:bg-gray-100 transition-all">
            Daftar
          </button>
        </div>

        <button 
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-xl max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <a href="#" className="font-bold py-2 border-b">BERANDA</a>
            
            <div className="border-b">
              <button 
                className="w-full flex justify-between items-center font-medium py-2"
                onClick={() => setIsLayananOpen(!isLayananOpen)}
              >
                LAYANAN
                <ChevronDown size={18} className={`transition-transform ${isLayananOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLayananOpen && (
                <div className="pl-4 pb-4 flex flex-col gap-3 pt-2">
                  {layananItems.map((item, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className={`text-sm ${item.isHeader ? 'font-bold underline underline-offset-4 decoration-2' : 'text-gray-600'}`}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="font-medium py-2 border-b">FITUR</a>
            
            <a href="#contact" className="font-bold py-2 border-b">CONTACT</a>

            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full py-2 border border-black rounded font-bold">Masuk</button>
              <button className="w-full py-2 bg-yellow-primary rounded font-bold">Daftar</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
