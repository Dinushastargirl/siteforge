import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

const genAI = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ForgeBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello! I'm Zolo. How can I help optimize your plumbing business today? We can discuss dispatching, lead automation, or high-conversion websites." 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await genAI.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, userMessage].map(m => ({ 
          role: m.role === 'assistant' ? 'model' : 'user', 
          parts: [{ text: m.content }] 
        })),
        config: {
          systemInstruction: "You are 'Zolo', the operations manager for SiteForge, a luxury software solutions provider for plumbing business owners in the USA. Your tone is professional, industrial, and results-driven. You represent T3 (The Lead Magnet), T2 (The Digital HQ), and Zolo AI (Automated Dispatching). Focus on how technology solves the problem of missed leads and dispatch inefficiencies in plumbing.",
        }
      });

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.text || "I'm having trouble connecting to my central processing unit. Please try again." 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('ForgeBot Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "An error occurred. Please ensure your API key is configured." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bubble Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#b87333] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#b87333]/20 z-50 overflow-hidden"
      >
        <MessageSquare className="w-6 h-6" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] bg-[#050505] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-bottom border-white/10 bg-[#b87333]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#00f3ff]/20 rounded-lg">
                  <Bot className="w-5 h-5 text-[#00f3ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Zolo AI</h3>
                  <span className="text-[10px] text-[#00f3ff] uppercase tracking-widest font-mono">Operations Manager</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-white/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-[#b87333] text-white rounded-tr-none' 
                      : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-none'
                  }`}>
                    <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] uppercase font-mono">
                      {m.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                      {m.role}
                    </div>
                    <div className="markdown-body">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-xl flex items-center gap-2 text-white/60">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs font-mono uppercase">Analyzing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02]">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Zolo about your business..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#00f3ff]/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#00f3ff] hover:bg-[#00f3ff]/10 rounded-lg transition-all disabled:opacity-30"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
