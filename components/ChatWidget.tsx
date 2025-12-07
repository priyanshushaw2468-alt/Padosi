import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Store } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: "👋 Hi there! Welcome to Padosi. How can we help you support your local community today?",
    sender: 'bot',
    timestamp: new Date()
  }
];

const QUICK_REPLIES = [
  "Where is my order?",
  "I want to sell on Padosi",
  "Is delivery free?"
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate Bot Response
    setTimeout(() => {
      let botResponseText = "Thanks for reaching out! A member of our local support team will be with you shortly.";
      
      if (text.toLowerCase().includes("sell")) {
        botResponseText = "That's great! We love helping new sellers. You can request a visit in the 'Seller Bridge' section, and we'll handle the rest (photos, listing, etc.)!";
      } else if (text.toLowerCase().includes("order") || text.toLowerCase().includes("delivery")) {
        botResponseText = "We typically deliver within 60 minutes! If you have an active order, please share your Order ID.";
      }

      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 animate-slide-in flex flex-col max-h-[600px] h-[500px]">
          
          {/* Header */}
          <div className="bg-padosi-green p-5 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-inner">
                <Store size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base tracking-wide">Padosi Support</h3>
                <span className="flex items-center text-xs text-green-200/80 font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  Online Now
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-5 overflow-y-auto bg-[#F9F9F9]">
            <div className="space-y-6">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-4 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-padosi-green text-white rounded-2xl rounded-tr-sm' 
                        : 'bg-white text-padosi-charcoal border border-gray-100 rounded-2xl rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex space-x-1.5 items-center">
                     <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                     <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                     <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {!isTyping && messages[messages.length - 1].sender === 'bot' && (
              <div className="mt-6 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-white border border-gray-200 text-padosi-green font-medium hover:bg-padosi-green hover:text-white hover:border-padosi-green px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-50">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputText); }}
              className="flex items-center space-x-3"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-gray-50 border border-gray-100 text-padosi-charcoal text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-gray-300 focus:bg-white transition-all placeholder-gray-400"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="bg-padosi-green disabled:bg-gray-200 disabled:cursor-not-allowed hover:bg-green-800 text-white p-3 rounded-xl shadow-md transition-colors flex-shrink-0"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-16 h-16 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-padosi-green'
        }`}
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageCircle size={32} className="text-white" />
        )}
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-padosi-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-padosi-orange border-2 border-white"></span>
          </span>
        )}
      </button>

    </div>
  );
};

export default ChatWidget;