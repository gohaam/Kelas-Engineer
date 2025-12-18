
import React from 'react';
import { 
  MessageCircle
} from 'lucide-react';

// Component Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Mentors from './components/Mentors';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-yellow-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <WhyUs />
        <Testimonials />
        <Mentors />
        <div className="bg-white py-8 text-center border-t border-gray-50">
            <a href="#" className="text-lg font-bold text-yellow-500 hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                <span>Bergabung Menjadi Trainer Sekarang</span>
                <span className="animate-bounce-x">→</span>
            </a>
        </div>
        <Partners />
        <ContactForm />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281355552114"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-105 z-40"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="font-bold">WhatsApp</span>
      </a>

      {/* AI Career Assistant Bonus */}
      <AIConsultant />
    </div>
  );
};

export default App;
