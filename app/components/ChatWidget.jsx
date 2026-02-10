"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles, Bot, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ YOUR NGROK URL
const API_URL = "https://unvermiculated-freckly-kristel.ngrok-free.dev/chat"; 

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am Sneha AI. Ask me about construction costs, timelines, or our services.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // 🚀 UPDATED FETCH REQUEST
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true", // 👈 THIS FIXES THE ERROR!
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) throw new Error("Server error");
      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "I'm having trouble connecting right now. Please try again in a moment.", isUser: false, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-4 font-sans">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[320px] md:w-[380px] h-[500px] bg-[#0F0F0F]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden origin-bottom-left"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-gradient-to-r from-orange-900/20 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-900/50 relative">
                  <Bot size={20} />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-[#0F0F0F] rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">Sneha Assistant</h3>
                  <div className="text-[10px] text-gray-400">Usually replies instantly</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
              <div className="text-center text-[10px] text-gray-600 font-medium uppercase tracking-widest mb-4">Today</div>
              
              {messages.map((msg, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.isUser 
                        ? "bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-br-none shadow-lg shadow-orange-900/20" 
                        : msg.isError
                          ? "bg-red-900/20 border border-red-500/20 text-red-200"
                          : "bg-[#1A1A1A] border border-white/5 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1A1A1A] px-4 py-3 rounded-2xl rounded-bl-none border border-white/5 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-[#0F0F0F] border-t border-white/5">
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question..."
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-[#202020] transition-all text-sm shadow-inner"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-600 rounded-lg text-white flex items-center justify-center hover:bg-orange-500 disabled:opacity-50 disabled:bg-gray-700 transition-colors shadow-lg shadow-orange-900/30"
                >
                  {isLoading ? <Loader2 size={14} className="animate-spin" /> : <CornerDownLeft size={16} />}
                </button>
              </div>
              <div className="text-center mt-3 flex items-center justify-center gap-1.5 opacity-50">
                <Sparkles size={10} className="text-orange-500" /> 
                <span className="text-[10px] text-gray-400">AI Assistant</span>
              </div>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-[0_8px_30px_rgba(234,88,12,0.3)] flex items-center justify-center text-white border border-white/10 relative z-50 group overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></span>
        {isOpen ? (
          <X size={24} className="relative z-10" />
        ) : (
          <MessageCircle size={28} fill="currentColor" className="relative z-10" />
        )}
      </motion.button>

    </div>
  );
}