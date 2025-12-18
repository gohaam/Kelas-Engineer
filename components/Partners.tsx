
import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-16">
          Mentor & Tutor Terbaik Kelas Engineer
        </h2>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            {/* Placeholder for real logos - in production replace with actual SVG/Images */}
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">PLN</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">KOMINFO</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">MONASH</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">PROGATE</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">PERTAMINA</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">BUKALAPAK</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">SKETCHUP</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">BOSCH</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">SOMA</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">LEICA</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">SONAR</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">TELKOM</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">IT JAKARTA</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">SCIENCE</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">BAWAH TANAH</div>
            <div className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">BLOCKDEV</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
