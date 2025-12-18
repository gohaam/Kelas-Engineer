
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' 
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            SELAMAT DATANG<br />
            di kelas enginer indonesia.
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90 max-w-xl">
            Upgrade your skill with kelas enginer By ZAADA <br />
            Kelas Engineer | Pelatihan & Training Ke teknikan
          </p>
          
          <button className="bg-yellow-primary text-black font-extrabold px-10 py-3 rounded-md mb-8 hover:bg-yellow-400 transition-all shadow-lg">
            Temukan Kelas
          </button>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base font-bold text-gray-200">
            <span>#tekniksipil</span>
            <span>#teknikelektro</span>
            <span>#teknikindustri</span>
            <span>#teknikarsitektur</span>
            <span>#teknikmesin</span>
            <span>#teknikkimia</span>
            <span>#teknikperkapalan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
