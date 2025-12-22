
import React, { useState, useRef } from 'react';
import { ArrowLeft, Upload, Info } from 'lucide-react';

interface PaymentConfirmationProps {
  checkoutData: any;
  onBack: () => void;
  onConfirm: (finalData: any) => void;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({ checkoutData, onBack, onConfirm }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [infoSource, setInfoSource] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!checkoutData) return null;

  const handleConfirm = () => {
    if (!paymentMethod) {
      alert("Harap pilih metode pembayaran.");
      return;
    }
    if (!infoSource) {
      alert("Harap isi sumber informasi.");
      return;
    }

    // Pass the complete data including the new fields to the thank you page
    onConfirm({
      ...checkoutData,
      paymentMethod,
      selectedBank,
      infoSource,
      proofFileName: fileName
    });
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) + 
           ' ' + now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-in fade-in slide-in-from-bottom-5 duration-500">
      {/* Header Banner */}
      <div className="bg-yellow-primary py-4 text-center mb-8">
        <h1 className="text-sm md:text-base font-black text-black tracking-widest uppercase">
          TOTAL PEMBAYARAN
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center">
        
        {/* Main Selection Area */}
        <div className="w-full max-w-md space-y-8">
          
          {/* Default Illustration (Show only if no method selected) */}
          {!paymentMethod && (
            <div className="flex flex-col items-center">
              <div className="w-64 md:w-80 mb-8">
                <img 
                  src="https://img.freepik.com/free-vector/payment-concept-illustration_114360-1282.jpg?t=st=1740639000~exp=1740642600~hmac=8029d2011b9845763b0366164282046487e97475148679410118817294971871&w=826" 
                  alt="Payment Illustration" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-gray-700 text-xs md:text-sm font-medium mb-8 leading-relaxed">
                Lakukan pembayaran dibawah ini dan cantumkan bukti transfer di kolom bawah
              </p>
            </div>
          )}

          {/* Payment Method Selector */}
          <div className="relative">
            <select 
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                if (e.target.value !== 'Virtual Account') setSelectedBank('');
              }}
              className="w-full appearance-none bg-white border border-gray-300 rounded-sm px-4 py-2 text-[10px] font-medium text-gray-600 focus:outline-none focus:border-yellow-primary pr-12"
            >
              <option value="" disabled>Pilih Metode Pembayaran</option>
              <option value="Pembayaran QRIS">Pembayaran QRIS</option>
              <option value="Virtual Account">Virtual Account</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
              <span className="text-[8px] text-gray-400 font-bold uppercase">pilih</span>
              <div className="w-6 h-3 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Conditional: QRIS View */}
          {paymentMethod === 'Pembayaran QRIS' && (
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center animate-in zoom-in duration-300">
              <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-1">Pembayaran QRIS</h3>
              <div className="bg-white p-4 shadow-xl border border-gray-100 rounded-sm">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                  alt="QRIS Code" 
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
                <div className="mt-4 flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/1200px-Logo_QRIS.svg.png" alt="QRIS Logo" className="h-6 object-contain" />
                    <p className="text-[10px] font-black mt-2">KELAS ENGINEER INDONESIA</p>
                    <p className="text-[8px] text-gray-400">NMID : ID2022149391031</p>
                </div>
              </div>
            </div>
          )}

          {/* Conditional: VA View */}
          {paymentMethod === 'Virtual Account' && (
            <div className="space-y-6 animate-in zoom-in duration-300">
              {/* Bank Selector */}
              <div className="relative">
                <select 
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-sm px-4 py-2 text-[10px] font-medium text-gray-600 focus:outline-none focus:border-yellow-primary pr-12"
                >
                  <option value="" disabled>Pilih Bank Virtual Account</option>
                  <option value="BCA">BCA Virtual Account</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                  <span className="text-[8px] text-gray-400 font-bold uppercase">pilih</span>
                  <div className="w-6 h-3 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {selectedBank === 'BCA' && (
                <div className="bg-white p-6 border border-gray-100 shadow-lg rounded-sm space-y-6">
                  <span className="inline-block bg-yellow-primary px-4 py-1.5 rounded-sm text-[10px] font-black uppercase">
                    Pembayaran Virtual Account
                  </span>
                  
                  <div className="space-y-2">
                    <div className="flex gap-2 text-sm font-medium">
                        <span className="font-black">Tanggal :</span>
                        <span className="text-gray-600">{getCurrentDateTime()}</span>
                    </div>
                    <div className="flex gap-2 text-sm font-medium">
                        <span className="font-black">Bank :</span>
                        <span className="text-gray-600">Bank BCA</span>
                    </div>
                    <div className="flex gap-2 text-sm font-medium">
                        <span className="font-black">Jumlah :</span>
                        <span className="text-gray-600">{checkoutData.finalPrice.toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm font-black mb-4">Nomer Virtual</p>
                    <h3 className="text-2xl md:text-3xl font-black tracking-widest break-all">
                      081355552114332
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mt-2">
                      Atas Nama a/n KelasEngineer.id
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Proof of Payment Upload */}
          <div className="space-y-1">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full border border-gray-300 rounded-sm px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs font-medium text-gray-700">
                {fileName || "Bukti Pembayaran"}
              </span>
              <div className="bg-gray-200 px-3 py-1 text-[10px] font-bold rounded-sm uppercase tracking-tighter">
                Choose File
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
              className="hidden" 
              accept="image/*,.pdf"
            />
          </div>

          {/* Info Source Input */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-900 ml-1">sumber informasi</label>
            <input 
              type="text" 
              value={infoSource}
              onChange={(e) => setInfoSource(e.target.value)}
              placeholder="Sosial Media...."
              className="w-full border border-gray-300 rounded-sm px-4 py-2 text-xs focus:ring-0 focus:border-yellow-primary outline-none font-medium placeholder:text-gray-300"
            />
          </div>

          {/* Action Button */}
          <div className="pt-8 flex justify-center">
            <button 
              onClick={handleConfirm}
              className="bg-yellow-primary text-black font-black text-xs px-20 py-3 rounded-lg shadow-md hover:scale-105 transition-all uppercase tracking-widest active:scale-95"
            >
              KONFIRMASI
            </button>
          </div>

          {/* Back Link */}
          <button 
            onClick={onBack}
            className="w-full flex justify-center items-center gap-2 text-gray-400 hover:text-black font-black uppercase text-[10px] transition-colors mt-8"
          >
            <ArrowLeft size={14} /> Kembali ke Keranjang
          </button>

        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
