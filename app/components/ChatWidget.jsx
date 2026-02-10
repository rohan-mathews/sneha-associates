"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ UPDATED: Your specific Ngrok Link
const API_URL = "https://unvermiculated-freckly-kristel.ngrok-free.dev/chat"; 

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am Sneha AI. How can I help you with your construction project today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Auto-scroll to bottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Add User Message
    const userMessage = { text: inputValue, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // 2. Send to Ngrok API
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      // 3. Add AI Response
      const botMessage = { text: data.response || "I received your message!", isUser: false };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { text: "Sorry, I am having trouble connecting to the server right now.", isUser: false, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans">
      
      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[350px] md:w-[400px] h-[500px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-orange-600/20 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Sneha Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-green-500 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.isUser 
                        ? "bg-orange-600 text-white rounded-br-none shadow-lg shadow-orange-900/20" 
                        : msg.isError
                          ? "bg-red-900/50 border border-red-500/30 text-red-200 rounded-bl-none"
                          : "bg-white/10 text-gray-200 border border-white/5 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-2 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about construction..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 p-2 bg-orange-600 rounded-lg text-white hover:bg-orange-500 disabled:opacity-50 disabled:hover:bg-orange-600 transition-colors"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-gray-600 flex items-center justify-center gap-1">
                  <Sparkles size={8} /> Powered by Sneha AI
                </span>
              </div>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* TOGGLE BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center justify-center text-white border border-white/10 z-50 hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] transition-shadow"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} fill="currentColor" className="text-white" />}
      </motion.button>

    </div>
  );
}