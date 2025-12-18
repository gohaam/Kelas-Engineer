
import React from 'react';
import { Linkedin, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")' }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              Butuh Konsultasi..?<br />
              Silahkan kontak kami<br />
              Kami Siap Membantu
            </h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Kontak</h3>
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
              <p className="mt-4 text-sm font-medium opacity-60">KelasEngineerid</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-extrabold text-yellow-500 mb-8 text-center">
                ada pertanyaan..?
              </h3>
              
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Masukan email anda disini..." 
                  className="w-full bg-gray-200 border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800"
                />
                <textarea 
                  placeholder="Pertanyaan Anda..." 
                  rows={4}
                  className="w-full bg-gray-200 border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800"
                ></textarea>
                <button className="w-full bg-yellow-primary text-black font-extrabold py-4 rounded-md shadow-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1">
                  Kirim
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
