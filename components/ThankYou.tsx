
import React from 'react';
import { Check, MessageSquare } from 'lucide-react';

interface ThankYouProps {
  checkoutData: any;
  user: any;
  onHome: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ checkoutData, user, onHome }) => {
  if (!checkoutData) return null;

  const handleHubungiAdmin = () => {
    const itemDetails = checkoutData.items.map((item: any) => `- ${item.title} (Rp. ${item.price})`).join('\n');
    const message = `Halo Admin Kelas Engineer, saya ingin mengonfirmasi pembayaran saya:\n\n*Data Diri:*\nNama: ${user?.name || '-'}\nWhatsApp: ${checkoutData.whatsapp}\nSumber Info: ${checkoutData.infoSource}\n\n*Rincian Pesanan:*\n${itemDetails}\n\n*Pembayaran:*\nMetode: ${checkoutData.paymentMethod} ${checkoutData.selectedBank ? `(${checkoutData.selectedBank})` : ''}\nTotal: Rp. ${checkoutData.finalPrice.toLocaleString('id-ID')}\nVoucher: ${checkoutData.voucher || '-'}\n\n*Bukti Transfer:* (Sudah saya lampirkan di chat ini)`;
    
    const url = `https://wa.me/6281355552114?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-20 pb-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-xl flex flex-col items-center text-center">
        
        {/* Success Icon */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-[10px] md:border-[16px] border-[#4CAF50] flex items-center justify-center mb-12 shadow-xl shadow-green-50">
          <Check size={80} className="text-[#4CAF50] md:w-24 md:h-24" strokeWidth={4} />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-4 uppercase">
          TERIMA KASIH!
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base font-medium mb-16 italic max-w-md leading-relaxed px-4">
          "Terima kasih atas pembayaran Anda. Silahkan menghubungi admin untuk melakukan konfirmasi pembayaran."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button 
            onClick={handleHubungiAdmin}
            className="w-full sm:w-auto bg-yellow-primary text-black font-black text-[10px] px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-all uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageSquare size={16} fill="black" />
            Hubungi Admin
          </button>
          
          <button 
            onClick={onHome}
            className="w-full sm:w-auto bg-gray-200 text-black font-black text-[10px] px-8 py-3 rounded-lg shadow-sm hover:bg-gray-300 transition-all uppercase tracking-widest active:scale-95"
          >
            Return to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;
