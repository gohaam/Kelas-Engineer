
import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center scale-105"
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' 
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-primary/20 backdrop-blur-sm border border-yellow-primary/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-widest text-yellow-primary">{t.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8">
            {t.title_part1} <br />
            <span className="text-yellow-primary italic">{t.title_part2}</span> {t.title_part3}
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-2xl leading-relaxed font-medium">
            {t.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={scrollToCourses}
              className="group w-full sm:w-auto bg-yellow-primary text-black font-black px-12 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:scale-105 transition-all shadow-2xl"
            >
              {t.cta}
              <ChevronRight size={20} />
            </button>
            
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 font-bold text-lg hover:text-yellow-primary transition-colors group">
              <PlayCircle className="text-yellow-primary group-hover:scale-110 transition-transform" size={32} />
              <span>{t.showreel}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
