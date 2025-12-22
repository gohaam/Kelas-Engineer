
import React, { useState, useRef, useEffect } from 'react';
import { X, Building2, User, GraduationCap, FileUp, CheckCircle2, ArrowLeft, AlertCircle, Loader2 } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../translations';

interface SignUpProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

type UserType = 'Company' | 'Pribadi' | 'Mahasiswa';
type ViewState = 'main-form' | 'ktm-upload';
type NotificationType = 'none' | 'success' | 'error' | 'ktm-success';

const SignUp: React.FC<SignUpProps> = ({ lang, isOpen, onClose, onSwitchToLogin }) => {
  const [selectedType, setSelectedType] = useState<UserType>('Pribadi');
  const [currentView, setCurrentView] = useState<ViewState>('main-form');
  const [ktmFile, setKtmFile] = useState<File | null>(null);
  const [ktmPreview, setKtmPreview] = useState<string | null>(null);
  const [notification, setNotification] = useState<NotificationType>('none');
  const [isKtmVerified, setIsKtmVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = translations[lang].signup;
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    institution: '',
    companyName: '',
    npwp: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setCurrentView('main-form');
      setNotification('none');
      setIsLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;
    
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      return { valid: false, message: t.validation };
    }
    
    if (password !== confirmPassword) {
      return { valid: false, message: t.match_error };
    }

    if (selectedType === 'Mahasiswa') {
      if (!formData.institution.trim()) return { valid: false, message: t.validation };
      if (!isKtmVerified) return { valid: false, message: t.validation };
    } else if (selectedType === 'Company') {
      if (!formData.companyName.trim() || !formData.npwp.trim()) return { valid: false, message: t.validation };
    }

    return { valid: true };
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateForm();
    if (!validation.valid) {
      setNotification('error');
      setTimeout(() => setNotification('none'), 4000);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setNotification('success');
      setTimeout(() => onSwitchToLogin(), 2500);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setKtmFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setKtmPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = () => {
    if (!ktmFile) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setNotification('ktm-success');
      setIsKtmVerified(true);
      setTimeout(() => {
        setNotification('none');
        setCurrentView('main-form');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto py-10 px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center fixed"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1449156001533-cb39c771a364?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-grayscale backdrop-blur-[2px]"></div>
      </div>

      {notification !== 'none' && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-10 duration-300 w-full max-w-sm px-4">
            {notification === 'success' && (
              <div className="bg-[#10b981] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
                  <CheckCircle2 size={24} />
                  <div className="flex flex-col">
                    <span className="font-black text-sm uppercase tracking-wider">{t.success_title}</span>
                    <span className="text-[10px] font-bold opacity-80 uppercase">{t.success_desc}</span>
                  </div>
              </div>
            )}
            {notification === 'error' && (
              <div className="bg-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-400">
                  <AlertCircle size={24} />
                  <span className="font-black text-sm uppercase tracking-wider">{t.validation}</span>
              </div>
            )}
        </div>
      )}

      <div className="relative w-full max-w-2xl transition-all duration-500 ease-in-out">
        {currentView === 'main-form' ? (
          <div className="bg-black/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-wider">{t.title}</h2>
            <p className="text-white/80 text-sm mb-8 uppercase tracking-widest font-bold">{t.subtitle}</p>

            <form className="w-full space-y-4" onSubmit={handleSignUpSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder={t.username} 
                  className="w-full bg-transparent border border-white/40 rounded-xl px-5 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-primary transition-all text-sm" 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.email} 
                  className="w-full bg-transparent border border-white/40 rounded-xl px-5 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-primary transition-all text-sm" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder={t.password} className="w-full bg-transparent border border-white/40 rounded-xl px-5 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-primary transition-all text-sm" />
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder={t.confirm} className="w-full bg-transparent border border-white/40 rounded-xl px-5 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-primary transition-all text-sm" />
              </div>

              <div className="flex justify-between items-center py-6 gap-2">
                {['Company', 'Pribadi', 'Mahasiswa'].map((id) => (
                  <button key={id} type="button" onClick={() => setSelectedType(id as UserType)} className={`flex flex-col items-center gap-1 flex-1 transition-all ${selectedType === id ? 'text-yellow-primary scale-110' : 'text-white/40'}`}>
                    <span className="text-[10px] font-bold uppercase">{id}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {selectedType === 'Mahasiswa' && (
                  <div className="space-y-4">
                    <input type="text" name="institution" value={formData.institution} onChange={handleInputChange} placeholder={t.institution} className="w-full bg-transparent border border-white/40 rounded-xl px-5 py-3.5 text-white text-sm" />
                    <button type="button" onClick={() => setCurrentView('ktm-upload')} className="w-full flex items-center justify-between px-6 py-4 rounded-xl border-2 border-dashed border-white/30 text-white/80">
                      <span className="text-sm font-bold uppercase">{isKtmVerified ? t.upload_ktm_done : t.upload_ktm}</span>
                      <span className="text-[10px] font-black underline">{t.upload_open}</span>
                    </button>
                  </div>
                )}
                {selectedType === 'Company' && (
                  <div className="space-y-4">
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder={t.company} className="w-full bg-transparent border border-white/40 rounded-xl px-5 py-3.5 text-white text-sm" />
                    <input type="text" name="npwp" value={formData.npwp} onChange={handleInputChange} placeholder={t.npwp} className="w-full bg-transparent border border-white/40 rounded-xl px-5 py-3.5 text-white text-sm" />
                  </div>
                )}
              </div>

              <button type="submit" disabled={isLoading} className="w-full bg-yellow-primary text-black font-black text-lg py-4 rounded-2xl shadow-xl mt-6">
                {isLoading ? t.processing : t.btn}
              </button>
            </form>

            <p className="mt-8 text-white/80 text-xs font-bold">
              {t.footer} <button onClick={onSwitchToLogin} className="font-black text-yellow-primary uppercase">{t.login_btn}</button>
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] p-8 md:p-12 text-black shadow-2xl relative animate-in fade-in slide-in-from-right-10 duration-500">
            <button onClick={() => setCurrentView('main-form')} className="absolute top-6 left-6 text-gray-400 hover:text-black flex items-center gap-2 text-xs font-bold uppercase transition-colors">
                <ArrowLeft size={16} /> {lang === 'id' ? 'Kembali' : 'Back'}
            </button>
            <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-[950] text-center mb-12 uppercase">FOTO KTM</h3>
                <button onClick={handleUploadSubmit} className="w-full bg-yellow-primary text-black font-black py-4 rounded-2xl shadow-xl">
                   {t.upload_ktm}
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
