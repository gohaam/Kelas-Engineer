
import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Mail, CheckCircle2, Lock, Check } from 'lucide-react';
import { Language } from '../App';
import { translations } from '../translations';

interface LoginProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp?: () => void;
  onLoginSuccess?: () => void;
}

type ViewState = 'login' | 'forgot-password' | 'email-sent' | 'login-success';

const Login: React.FC<LoginProps> = ({ lang, isOpen, onClose, onSwitchToSignUp, onLoginSuccess }) => {
  const [view, setView] = useState<ViewState>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = translations[lang].login;

  useEffect(() => {
    if (!isOpen) {
      if (view !== 'login-success') {
        setView('login');
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setView('login-success');
      
      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess();
          setTimeout(() => setView('login'), 500);
        }
      }, 2000);
    }, 1000);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setView('email-sent');
    }, 1500);
  };

  const handleClose = () => {
    setView('login');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto py-10 px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center fixed transition-opacity duration-500"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1449156001533-cb39c771a364?q=80&w=2070&auto=format&fit=crop")' 
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-grayscale backdrop-blur-[2px]"></div>
      </div>

      <div className="relative w-full max-w-lg transition-all duration-500 flex items-center justify-center">
        
        {view === 'login' && (
          <div className="w-full bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <button onClick={handleClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-wider">{t.title}</h2>
            <p className="text-white/80 text-sm mb-12 uppercase font-bold tracking-widest">{t.subtitle}</p>

            <form className="w-full space-y-6" onSubmit={handleSubmitLogin}>
              <input 
                type="email" 
                placeholder={t.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-white/40 rounded-lg px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-primary transition-all"
              />
              <input 
                type="password" 
                placeholder={t.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent border border-white/40 rounded-lg px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-primary transition-all"
              />

              <div className="w-full flex justify-start">
                <button 
                  type="button"
                  onClick={() => setView('forgot-password')}
                  className="text-white/80 text-sm hover:text-yellow-primary transition-colors underline underline-offset-4"
                >
                  {t.forgot}
                </button>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-primary text-black font-black text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(244,206,20,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase flex items-center justify-center gap-2"
              >
                {isLoading ? (
                   <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : t.btn}
              </button>
            </form>

            <p className="mt-8 text-white/80 text-sm uppercase font-bold">
              {t.footer} <button onClick={onSwitchToSignUp} className="font-black text-yellow-primary hover:underline uppercase">{t.signup_btn}</button>
            </p>
          </div>
        )}

        {view === 'forgot-password' && (
          <div className="w-full bg-black/70 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-white/5 flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 duration-500">
            <button 
              onClick={() => setView('login')} 
              className="absolute top-8 left-8 text-white/40 hover:text-white flex items-center gap-2 text-xs font-bold uppercase transition-colors"
            >
              <ArrowLeft size={16} /> {t.forgot_back}
            </button>

            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <Lock size={48} className="text-black" strokeWidth={2.5} />
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">
                {t.forgot_title}
            </h2>

            <form className="w-full space-y-8" onSubmit={handleForgotPassword}>
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.email}
                  required
                  className="w-full bg-transparent border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-center md:text-left"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/60 transition-colors" size={20} />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-primary text-black font-extrabold text-xl py-5 rounded-2xl shadow-[0_10px_30px_rgba(244,206,20,0.4)] hover:bg-white hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-widest disabled:opacity-50"
              >
                {isLoading ? '...' : t.forgot_btn}
              </button>
            </form>

            <p className="mt-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                {t.forgot_desc}
            </p>
          </div>
        )}

        {view === 'email-sent' && (
          <div className="w-full bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 text-green-500 animate-bounce">
                <CheckCircle2 size={56} />
            </div>

            <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tight">{t.sent_title}</h2>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed max-w-xs mx-auto">
                {t.sent_desc} <span className="text-black font-bold">{email}</span>.
            </p>

            <div className="w-full space-y-4">
                <button 
                    onClick={() => setView('login')}
                    className="w-full bg-black text-white font-black py-4 rounded-2xl shadow-xl hover:bg-yellow-primary hover:text-black transition-all uppercase"
                >
                    {t.sent_back}
                </button>
            </div>
          </div>
        )}

        {view === 'login-success' && (
          <div className="w-full max-sm bg-white/20 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/30 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-bounce">
              <Check className="text-white" size={48} strokeWidth={4} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight text-center">
              {t.success}
            </h2>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
