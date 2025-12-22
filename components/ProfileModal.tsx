
import React, { useState, useEffect } from 'react';
import { X, Camera, Pencil, Save, CheckCircle2 } from 'lucide-react';
import { Language } from '../App';

interface ProfileModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  user: { name: string, avatar: string, email?: string, contact?: string, address?: string } | null;
  onUpdateUser: (updatedData: any) => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ lang, isOpen, onClose, user, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    contact: '',
    address: ''
  });
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Sync formData with user prop when modal opens
  useEffect(() => {
    if (user && isOpen) {
      setFormData({
        username: user.email || '',
        name: user.name || '',
        contact: user.contact || '',
        address: user.address || ''
      });
    }
  }, [user, isOpen]);

  if (!isOpen || !user) return null;

  const handleSave = () => {
    onUpdateUser({
      ...user,
      name: formData.name,
      email: formData.username,
      contact: formData.contact,
      address: formData.address
    });
    setIsEditing(null);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  const Field = ({ id, label, value, type = "text" }: { id: string, label: string, value: string, type?: string }) => (
    <div className="mb-6 group">
      <div className="flex items-center gap-2 mb-1">
        <label className="text-lg font-black text-black">{label} :</label>
        <button 
          onClick={() => setIsEditing(id)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black"
          title="Edit"
        >
          <Pencil size={14} />
        </button>
      </div>
      
      {isEditing === id ? (
        <div className="flex gap-2 animate-in fade-in duration-200">
          <input 
            autoFocus
            type={type}
            value={(formData as any)[id]}
            onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
            onBlur={() => setIsEditing(null)}
            onKeyDown={(e) => e.key === 'Enter' && setIsEditing(null)}
            className="flex-grow border-b-2 border-yellow-primary bg-yellow-primary/5 px-2 py-1 outline-none font-medium text-gray-700"
          />
        </div>
      ) : (
        <p className="text-gray-600 font-medium px-2 py-1">{value || '-'}</p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Success Toast */}
      {showSavedToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[80] bg-black text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-10">
          <CheckCircle2 className="text-yellow-primary" size={24} />
          <span className="text-sm font-black uppercase tracking-widest">Data Berhasil Disimpan!</span>
        </div>
      )}

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in fade-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 z-20 text-black/30 hover:text-black transition-all hover:rotate-90"
        >
          <X size={32} />
        </button>

        {/* Yellow Header Pattern */}
        <div className="h-24 bg-yellow-primary w-full relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex gap-4 rotate-12 -translate-y-10">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="w-10 h-64 bg-black rounded-full"></div>
             ))}
          </div>
        </div>

        <div className="p-8 md:p-16 pt-0 flex flex-col md:flex-row items-start gap-16">
          
          {/* Avatar Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center -mt-12">
            <div className="relative group cursor-pointer">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] bg-gray-100 border-8 border-white shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-all group-hover:scale-[1.02] group-hover:rotate-1">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-4">
                    <Camera size={48} className="text-gray-300 mx-auto mb-2" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity backdrop-blur-[2px]">
                   <Camera size={40} className="text-white mb-2" />
                   <p className="text-[10px] font-black uppercase text-white tracking-widest">Ganti Foto Profil</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
               <h3 className="text-2xl font-black uppercase tracking-tighter">{formData.name}</h3>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Level: Pro Engineer</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-grow w-full md:w-2/3">
            <div className="border-l-4 border-yellow-primary pl-8 space-y-2">
              <Field id="username" label="Username / Email" value={formData.username} type="email" />
              <Field id="name" label="Nama Lengkap" value={formData.name} />
              <Field id="contact" label="Nomor Kontak" value={formData.contact} />
              <Field id="address" label="Alamat Domisili" value={formData.address} />
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleSave}
                className="flex-grow bg-black text-white font-[950] py-5 rounded-2xl hover:bg-yellow-primary hover:text-black transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 uppercase tracking-widest"
              >
                <Save size={20} />
                SIMPAN PERUBAHAN
              </button>
              <button 
                onClick={onClose}
                className="px-10 py-5 border-2 border-gray-100 text-gray-400 font-black rounded-2xl hover:bg-gray-50 transition-all uppercase text-xs tracking-widest"
              >
                Batal
              </button>
            </div>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="bg-gray-50 py-4 px-12 flex justify-between items-center border-t border-gray-100">
           <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">Member of Kelas Engineer Indonesia</span>
           <span className="text-[9px] font-black text-yellow-primary uppercase tracking-widest italic">Est. 2018</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
