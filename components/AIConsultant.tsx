
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, Sparkles } from 'lucide-react';
import { streamCareerAdvice } from '../services/geminiService';
import { Language } from '../App';
import { translations } from '../translations';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface AIConsultantProps {
  lang: Language;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const t = translations[lang].ai;
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: t.welcome }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset welcome message on language change
    setMessages([{ role: 'ai', text: t.welcome }]);
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'ai', text: '' }]);

    let fullResponse = '';
    try {
      const stream = streamCareerAdvice(userMsg, lang);
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'ai', text: fullResponse };
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {isOpen ? (
        <div className="bg-white w-80 md:w-[400px] h-[550px] rounded-3xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-yellow-primary p-5 flex items-center justify-between text-black">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white p-2 rounded-xl"><Bot size={20} /></div>
              <div>
                <span className="font-black text-sm block leading-none">{t.title}</span>
                <span className="text-[10px] font-bold opacity-70 uppercase">{t.subtitle}</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm'}`}>
                  {msg.text || (isLoading && idx === messages.length - 1 ? t.loading : '')}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex flex-col gap-3">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="flex-grow bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-3 rounded-2xl bg-black text-white disabled:bg-gray-200"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-3"
        >
          <Bot size={24} />
          <span className="font-bold text-sm hidden md:inline">{t.advisor_btn}</span>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
