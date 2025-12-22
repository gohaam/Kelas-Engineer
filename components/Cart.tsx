
import React, { useState } from 'react';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

interface CartProps {
  items: any[];
  onRemove: (index: number) => void;
  onBack: () => void;
  onProceed: (data: any) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onBack, onProceed }) => {
  const [whatsapp, setWhatsapp] = useState('');
  const [voucher, setVoucher] = useState('');

  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/\./g, '')) || 0;
  };

  const totalPrice = items.reduce((acc, item) => acc + parsePrice(item.price), 0);
  const discount = voucher === 'PROMOENGINEER' ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('id-ID');
  };

  const handleCheckout = () => {
    if (!whatsapp) {
      alert("Harap masukkan nomor WhatsApp Anda.");
      return;
    }
    
    if (items.length === 0) {
      alert("Keranjang masih kosong.");
      return;
    }

    onProceed({
      items,
      totalPrice,
      discount,
      finalPrice,
      whatsapp,
      voucher
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-8">
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-black font-black uppercase text-xs mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Katalog
        </button>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT: Choosen Class */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <div className="p-6 border-b border-gray-200 bg-white">
                <h2 className="text-xl font-black text-black tracking-tight">Choosen Class</h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {items.length > 0 ? (
                  items.map((item, idx) => (
                    <div key={idx} className="p-6 flex items-center gap-6 group hover:bg-gray-50/50 transition-colors">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
                        <img 
                          src={item.image || "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=200"} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-black text-xs md:text-sm text-black uppercase leading-tight mb-2 max-w-md">
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium text-gray-500">Rp. {item.price}</p>
                      </div>
                      <button 
                        onClick={() => onRemove(idx)}
                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="p-20 text-center flex flex-col items-center gap-4">
                    <ShoppingBag size={48} className="text-gray-200" />
                    <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">Keranjang Kosong</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm sticky top-32">
              <div className="p-6 border-b border-gray-200 text-center">
                <h2 className="text-xs font-black text-black tracking-widest uppercase">Total Pembayaran</h2>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">No. Whatsapp</label>
                    <input 
                      type="text" 
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Contoh: 08123456789"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-xs focus:ring-0 focus:border-yellow-primary outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Kode Voucher</label>
                    <input 
                      type="text" 
                      value={voucher}
                      onChange={(e) => setVoucher(e.target.value)}
                      placeholder="Masukkan kode..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-xs focus:ring-0 focus:border-yellow-primary outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-xs font-medium text-gray-600">
                    <span>Total Harga</span>
                    <span>Rp. {formatCurrency(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-medium text-red-500">
                    <span>diskon</span>
                    <span className="line-through">Rp. {formatCurrency(discount)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-xs font-black text-black uppercase">Total Pembayaran</span>
                  <span className="text-sm font-black text-black">Rp. {formatCurrency(finalPrice)}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-yellow-primary text-black font-black text-xs py-4 rounded-lg shadow-md hover:bg-black hover:text-white transition-all uppercase tracking-widest active:scale-95"
                >
                  LANJUTKAN PEMBAYARAN
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
