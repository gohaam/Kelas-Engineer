
import React, { useState, useEffect } from 'react';
import { Linkedin, Facebook, Instagram, Youtube, MapPin, Phone, Mail, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Language } from '../App';

interface ContactFormProps {
  lang: Language;
  isLoggedIn?: boolean;
  user?: { name: string, email?: string } | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ lang, isLoggedIn, user }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const isId = lang === 'id';

  useEffect(() => {
    if (isLoggedIn && user?.email) {
      setEmail(user.email);
    } else {
      setEmail('');
    }
  }, [isLoggedIn, user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    setIsLoading(true);
    
    // Simulasi pengiriman pesan
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setMessage('');
      
      // Reset status sukses setelah 5 detik
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden scroll-mt-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")' }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              {isId ? 'Butuh Konsultasi..?' : 'Need Consultation..?'}<br />
              {isId ? 'Silahkan kontak kami' : 'Please contact us'}<br />
              {isId ? 'Kami Siap Membantu' : 'We are Ready to Help'}
            </h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">{isId ? 'Kontak' : 'Contact'}</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="text-yellow-primary flex-shrink-0" size={24} />
                  <span className="opacity-80 text-sm">Piranha Residence B9<br />Malang, East Java 65412, ID</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-yellow-primary flex-shrink-0" size={24} />
                  <span className="opacity-80 text-sm">+62 813-5555-2114</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-yellow-primary flex-shrink-0" size={24} />
                  <span className="opacity-80 text-sm">kelasengineerid@gmail.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-blue-700 rounded-md hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                <a href="#" className="p-2 bg-blue-600 rounded-md hover:scale-110 transition-transform"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-pink-600 rounded-md hover:scale-110 transition-transform"><Instagram size={20} /></a>
                <a href="#" className="p-2 bg-red-600 rounded-md hover:scale-110 transition-transform"><Youtube size={20} /></a>
                <a href="#" className="p-2 bg-black rounded-md hover:scale-110 transition-transform">
                  <span className="font-black text-xs">Tik</span>
                </a>
              </div>
              <p className="mt-4 text-sm font-medium opacity-60">@KelasEngineerid</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-2xl border-t-8 border-yellow-primary relative overflow-hidden">
              
              {/* Success Overlay */}
              {isSent && (
                <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 animate-bounce">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tight">
                    {isId ? 'Berhasil Terkirim!' : 'Sent Successfully!'}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm">
                    {isId 
                      ? 'Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda via email.' 
                      : 'Thank you for contacting us. Our team will respond to your message via email shortly.'}
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="mt-8 text-xs font-black uppercase underline tracking-widest hover:text-yellow-primary transition-colors"
                  >
                    {isId ? 'Kirim Pesan Lain' : 'Send Another Message'}
                  </button>
                </div>
              )}

              <h3 className="text-2xl font-extrabold text-black mb-8 text-center uppercase tracking-tight">
                {isId ? 'Ada Pertanyaan..?' : 'Any Questions..?'}
              </h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={isId ? "Masukan email anda disini..." : "Enter your email here..."} 
                    className={`w-full bg-gray-100 border-2 border-transparent rounded-xl px-6 py-4 focus:ring-0 focus:border-yellow-primary outline-none text-gray-800 transition-all font-medium ${isLoggedIn ? 'opacity-70 bg-gray-200' : ''}`}
                    required
                    readOnly={isLoggedIn}
                  />
                  {isLoggedIn && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/5 px-2 py-1 rounded text-[10px] font-black uppercase text-gray-400">
                      Auto-filled
                    </span>
                  )}
                </div>

                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={isId ? "Pertanyaan Anda..." : "Your Question..."} 
                  rows={4}
                  className="w-full bg-gray-100 border-2 border-transparent rounded-xl px-6 py-4 focus:ring-0 focus:border-yellow-primary outline-none text-gray-800 transition-all font-medium"
                  required
                ></textarea>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-black text-white font-black py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 uppercase tracking-widest flex items-center justify-center gap-3 ${isLoading ? 'opacity-70' : 'hover:bg-yellow-primary hover:text-black'}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      {isId ? 'Mengirim...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {isId ? 'Kirim Pesan' : 'Send Message'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
