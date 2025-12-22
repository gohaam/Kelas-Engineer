
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Languages, User, HelpCircle, LogOut, ShoppingCart, Bell, CheckCircle2, MessageSquare, Tag } from 'lucide-react';
import { translations } from '../translations';
import { Language, Notification } from '../App';

interface NavbarProps {
  lang: Language;
  onLanguageToggle: () => void;
  onLoginClick: () => void;
  onSignUpClick: () => void;
  onProfileClick: () => void;
  isLoggedIn?: boolean;
  user?: { name: string, avatar: string } | null;
  onLogout?: () => void;
  onViewChange?: (view: string) => void;
  cartCount?: number;
  onCartClick?: () => void;
  notifications?: Notification[];
  onMarkNotificationsRead?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  onLanguageToggle, 
  onLoginClick, 
  onSignUpClick, 
  onProfileClick, 
  isLoggedIn, 
  user, 
  onLogout, 
  onViewChange,
  cartCount = 0,
  onCartClick,
  notifications = [],
  onMarkNotificationsRead
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  
  const t = translations[lang].nav;
  const layananRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (event: MouseEvent) => {
      if (layananRef.current && !layananRef.current.contains(event.target as Node)) setIsLayananOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) setIsUserMenuOpen(false);
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) setIsNotifOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNotifClick = () => {
    setIsNotifOpen(!isNotifOpen);
    if (!isNotifOpen && unreadCount > 0) {
      onMarkNotificationsRead?.();
    }
  };

  const layananItems = [
    { name: t.online_training, view: "online" },
    { name: t.private_training, view: "private" },
    { name: t.inhouse_training, view: "inhouse" },
    { name: t.online_private, view: "online-private" },
    { name: t.ecourse, view: "ecourse" },
    { name: t.consultation, view: "contact-scroll" },
  ];

  const BrandLogo = ({ color = "black", size = "text-xl" }: { color?: string, size?: string }) => (
    <div className={`flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => { onViewChange?.('landing'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
      <div className={`flex flex-col leading-[0.8] text-${color}`}>
        <span className={`${size} font-[950] uppercase tracking-tighter`}>Kelas</span>
        <span className={`${size} font-[950] uppercase tracking-tighter`}>Engineer</span>
      </div>
      <div className="flex items-end justify-center gap-[3px] h-8 pt-1">
        <div className={`w-[5px] h-4 bg-${color} rounded-full`}></div>
        <div className={`w-[5px] h-6 bg-${color} rounded-full`}></div>
        <div className={`w-[5px] h-2.5 bg-${color} rounded-full`}></div>
        <div className={`w-[5px] h-[5px] bg-${color} rounded-full mb-[1px]`}></div>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-yellow-primary py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* LEFT SECTION: Profile (if logged in) + Logo */}
        <div className="flex items-center gap-4 relative" ref={userMenuRef}>
          {isLoggedIn && user && (
            <>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="w-10 h-10 rounded-full border-2 border-black/20 overflow-hidden hover:scale-110 transition-transform shadow-sm"
              >
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </button>

              {/* DROPDOWN MENU */}
              {isUserMenuOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white border-2 border-black rounded-sm shadow-2xl z-[100] animate-in fade-in zoom-in duration-200 origin-top-left overflow-hidden">
                  <div className="bg-yellow-primary p-4 h-20 flex justify-end items-start border-b border-black">
                    <BrandLogo size="text-sm" />
                  </div>
                  
                  <div className="absolute top-5 left-5">
                    <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="pt-12 px-6 pb-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-black text-black leading-none mb-1">
                        {user.name.split(' ')[0]}
                      </h3>
                      <h3 className="text-xl font-black text-black leading-none">
                        {user.name.split(' ').slice(1).join(' ')}
                      </h3>
                    </div>
                    
                    <div className="h-[1px] bg-gray-400 w-full mb-4"></div>

                    <div className="space-y-4">
                      <button 
                        onClick={() => { onProfileClick(); setIsUserMenuOpen(false); }}
                        className="flex items-center gap-3 w-full text-left font-bold text-gray-800 hover:text-black transition-all group"
                      >
                        <User size={20} className="text-black fill-black" />
                        <span className="text-sm">My Profile</span>
                      </button>
                      
                      <button className="flex items-center gap-3 w-full text-left font-bold text-gray-800 hover:text-black transition-all group">
                        <MessageSquareAIcon />
                        <span className="text-sm">FAQ</span>
                      </button>

                      <button 
                        onClick={() => { onLogout?.(); setIsUserMenuOpen(false); }}
                        className="flex items-center gap-3 w-full text-left font-bold text-gray-800 hover:text-red-600 transition-all group"
                      >
                        <LogOut size={20} className="text-black" />
                        <span className="text-sm">Log Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          <BrandLogo />
        </div>

        {/* MIDDLE SECTION: Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <button onClick={() => onViewChange?.('landing')} className="text-sm font-black border-b-2 border-transparent hover:border-black transition-all uppercase tracking-tight">{t.home}</button>
          
          <div className="relative" ref={layananRef} onMouseEnter={() => setIsLayananOpen(true)} onMouseLeave={() => setIsLayananOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-black hover:text-gray-700 transition-colors py-2 uppercase tracking-tight">
              {t.services}
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLayananOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLayananOpen && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-sm py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                {layananItems.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={(e) => { 
                      if (item.view === "contact-scroll") {
                        scrollToContact(e as any);
                      } else {
                        onViewChange?.(item.view); 
                      }
                      setIsLayananOpen(false); 
                    }} 
                    className="w-full text-left block px-6 py-2.5 text-base font-medium text-slate-700 transition-all hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => onViewChange?.('features')} className="text-sm font-black border-b-2 border-transparent hover:border-black transition-all uppercase tracking-tight">{t.features}</button>
          <button onClick={scrollToContact} className="text-sm font-black hover:text-gray-700 uppercase tracking-tight">{t.contact}</button>
        </div>

        {/* RIGHT SECTION: Cart + Notification + Language + Login/Out */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Icons only for Logged In users */}
          {isLoggedIn && (
            <>
              {/* Cart Icon with Badge */}
              <button 
                onClick={onCartClick}
                className="relative p-2 text-black hover:bg-black hover:text-white rounded-lg transition-all group"
              >
                <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[8px] font-black flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Notification Icon with Badge */}
              <div className="relative" ref={notifRef}>
                <button 
                  onClick={handleNotifClick}
                  className="relative p-2 text-black hover:bg-black hover:text-white rounded-lg transition-all group"
                >
                  <Bell size={22} className="group-hover:scale-110 transition-transform" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[8px] font-black flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* NOTIFICATION DROPDOWN */}
                {isNotifOpen && (
                  <div className="absolute top-full right-0 mt-3 w-80 bg-white border-2 border-black rounded-sm shadow-2xl z-[100] animate-in fade-in zoom-in duration-200 origin-top-right overflow-hidden">
                    <div className="bg-black p-4 flex justify-between items-center">
                      <h3 className="text-xs font-black text-white uppercase tracking-widest">Notifikasi</h3>
                      <span className="text-[10px] font-bold text-yellow-primary uppercase">{notifications.length} Total</span>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto divide-y divide-gray-100">
                      {notifications.length > 0 ? (
                        notifications.map((notif) => (
                          <div key={notif.id} className={`p-4 hover:bg-gray-50 transition-colors ${!notif.isRead ? 'bg-yellow-primary/5' : ''}`}>
                            <div className="flex gap-3">
                              <div className="mt-1">
                                {notif.type === 'payment' && <CheckCircle2 size={16} className="text-green-600" />}
                                {notif.type === 'admin' && <MessageSquare size={16} className="text-blue-600" />}
                                {notif.type === 'promo' && <Tag size={16} className="text-purple-600" />}
                              </div>
                              <div className="flex-grow">
                                <div className="flex justify-between items-start mb-1">
                                  <h4 className="text-xs font-black text-black uppercase tracking-tight">{notif.title}</h4>
                                  <span className="text-[8px] font-bold text-gray-400 uppercase">{notif.timestamp}</span>
                                </div>
                                <p className="text-[10px] font-medium text-gray-600 leading-relaxed">
                                  {notif.message}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-10 text-center flex flex-col items-center gap-2">
                           <Bell size={32} className="text-gray-200" />
                           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tidak ada notifikasi</p>
                        </div>
                      )}
                    </div>
                    
                    {notifications.length > 0 && (
                      <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
                        <button className="text-[9px] font-black text-black uppercase hover:underline">Lihat Semua</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}

          <button 
            onClick={onLanguageToggle}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-black text-white hover:bg-gray-800 transition-all group"
          >
            <div className="relative">
              <Languages size={20} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-2 text-[8px] font-black bg-yellow-primary text-black px-1 rounded-sm">
                {lang.toUpperCase()}
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn && (
              <>
                <button onClick={onLoginClick} className="px-6 py-1 text-sm font-bold text-black border border-black rounded hover:bg-black hover:text-white transition-all uppercase">
                  {t.login}
                </button>
                <button onClick={onSignUpClick} className="px-6 py-1 text-sm font-bold text-black bg-white rounded shadow-sm hover:bg-gray-100 transition-all uppercase">
                  {t.signup}
                </button>
              </>
            )}
          </div>

          <button className="lg:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-xl animate-in slide-in-from-top-5 duration-300">
           <div className="flex flex-col gap-4">
             <button onClick={() => {onViewChange?.('landing'); setIsMobileMenuOpen(false);}} className="text-left font-bold py-2 border-b uppercase">{t.home}</button>
             <button onClick={scrollToContact} className="text-left font-bold py-2 border-b uppercase">{t.contact}</button>
             <button onClick={() => {onCartClick?.(); setIsMobileMenuOpen(false);}} className="text-left font-bold py-2 border-b uppercase">KERANJANG ({cartCount})</button>
             {!isLoggedIn ? (
               <div className="flex flex-col gap-2 mt-2">
                 <button onClick={onLoginClick} className="w-full py-2 border border-black rounded font-bold uppercase">{t.login}</button>
                 <button onClick={onSignUpClick} className="w-full py-2 bg-yellow-primary rounded font-bold uppercase">{t.signup}</button>
               </div>
             ) : (
               <div className="flex flex-col gap-2 mt-2">
                 <button onClick={() => {onProfileClick(); setIsMobileMenuOpen(false);}} className="w-full py-2 border border-black rounded font-bold uppercase">PROFIL SAYA</button>
                 <button onClick={() => {onLogout?.(); setIsMobileMenuOpen(false);}} className="w-full py-2 bg-black text-white rounded font-bold uppercase">KELUAR</button>
               </div>
             )}
           </div>
        </div>
      )}
    </nav>
  );
};

const MessageSquareAIcon = () => (
  <div className="relative w-5 h-5">
    <div className="absolute -top-1 -left-1 bg-black text-white rounded-sm w-4 h-4 flex items-center justify-center text-[7px] font-black">A</div>
    <div className="absolute bottom-0 right-0 bg-black text-white rounded-sm w-4 h-4 flex items-center justify-center text-[7px] font-black">Q</div>
  </div>
);

export default Navbar;
