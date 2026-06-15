import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, ChefHat, ExternalLink, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Message } from "../types";

export default function BiteBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greet",
      sender: "assistant",
      text: "Hi! Welcome to Momos Bite. What delicious dish can I help you discover today? 🍜\n\nI can suggest individual momos, detail our amazing Family Deals, or direct you to our branches!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Tell me about Special Platter",
    "What's inside Family Deal 1?",
    "Suggest spicy momos! 🔥",
    "Where is the Wazirabad Branch?",
    "How do I order on WhatsApp?"
  ];

  // Auto-scroll chat to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Package conversation history to keep the AI in context
      const historyContext = messages.map((msg) => ({
        role: msg.sender,
        text: msg.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyContext
        })
      });

      const data = await res.json();

      const botMessage: Message = {
        id: Math.random().toString(36).substring(7),
        sender: "assistant",
        text: data.text || data.responseText || "I couldn't process this right now. Please message us on WhatsApp!",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (err) {
      console.error("Chat error:", err);
      const errorMessage: Message = {
        id: "err",
        sender: "assistant",
        text: "I was unable to connect to the kitchen database right now. 🍳 Please contact us on WhatsApp directly at **0304-6986399**!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        
        {/* Chat window panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 120 }}
            className="w-[340px] sm:w-[380px] h-[520px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col justify-between mb-4 backdrop-blur-2xl"
            id="bitebot-window"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-white/[0.01] via-[#F97316]/10 to-white/[0.01] border-b border-white/10 py-4 px-6 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-[#F97316] text-white flex items-center justify-center shadow-[0_0_15px_#F97316] animate-pulse">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-sm tracking-wider flex items-center gap-1.5 leading-none">
                    <span>BiteBot</span>
                    <span className="text-[10px] bg-green-500/25 text-green-400 font-mono py-0.5 px-1.5 rounded-full uppercase scale-90">LIVE 🥟</span>
                  </h3>
                  <span className="text-[11px] text-gray-500 uppercase font-mono tracking-widest mt-1 block">One Bite, Endless Flavour</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/5 text-gray-500 hover:text-white rounded-xl transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Balloons list */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#F97316] text-white rounded-tr-none shadow-[0_4px_12px_rgba(249,115,22,0.25)]"
                        : "bg-white/5 text-gray-200 border border-white/5 rounded-tl-none font-sans"
                    }`}
                  >
                    {/* Preserve rich Markdown formatting/linebreaks with white-space style */}
                    <div className="whitespace-pre-line font-medium leading-relaxed">
                      {msg.text}
                    </div>
                    <span className="block text-[8px] sm:text-[9px] text-white/50 text-right mt-1.5 font-mono">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing simulation */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-4 max-w-[80%] flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4 text-[#F97316] animate-spin" />
                    <span className="text-xs text-gray-400 font-mono">BiteBot is cooking replies...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick action buttons, displayed only when client is not typing */}
            {!isLoading && messages.length < 15 && (
              <div className="px-5 py-2.5 bg-black/40 border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[10px] sm:text-xs font-semibold py-1.5 px-3 bg-white/5 hover:bg-orange-500/15 border border-white/5 hover:border-[#F97316]/30 text-gray-300 hover:text-[#F97316] rounded-full whitespace-nowrap transition-all duration-300 active:scale-95 shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Text entering field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="bg-black/20 border-t border-white/10 p-3.5 flex gap-2 items-center shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Momos, soup, Wazirabad branch..."
                disabled={isLoading}
                className="flex-1 bg-white/5 text-xs sm:text-sm text-white placeholder-gray-500 focus:placeholder-gray-400 py-3 px-4 rounded-xl border border-white/5 focus:border-[#F97316]/50 focus:outline-none focus:ring-1 focus:ring-[#F97316]/20 font-medium transition-all"
                id="bitebot-input-field"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-3 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed transition-all shadow-[0_2px_10px_rgba(249,115,22,0.2)]"
                aria-label="Send Message"
                id="bitebot-send-btn"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Real-time Order CTA banner */}
            <div className="bg-orange-500/10 py-2.5 px-6 text-center text-[10px] font-mono tracking-wider font-semibold border-t border-white/5 text-gray-400">
              🚀 DIRECT ORDER ON WHATSAPP: <a href="https://wa.me/923046986399" target="_blank" rel="noreferrer" className="text-[#F97316] hover:underline font-bold inline-flex items-center gap-0.5">0304-6986399 <ExternalLink className="w-2.5 h-2.5" /></a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher sphere button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-[#F97316] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(249,115,22,0.45)] hover:shadow-[0_8px_35px_rgba(249,115,22,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Toggle AI Chat Bot"
        id="bitebot-launcher"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center relative"
            >
              {/* Pulsing indicator on launcher */}
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#111111] rounded-full animate-bounce z-10" />
              <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
