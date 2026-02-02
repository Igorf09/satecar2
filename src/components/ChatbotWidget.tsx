import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/cei0oz";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (action: string) => {
    if (action === "whatsapp") {
      window.open(WHATSAPP_LINK, "_blank");
    } else if (action === "planos") {
      const element = document.querySelector("#planos");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-navy rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="chatbot-widget animate-fade-in">
          {/* Header */}
          <div className="chatbot-header">
            <div className="w-10 h-10 bg-blue-accent rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold">Satecar</h4>
              <p className="text-xs text-white/80">Online agora</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="bg-muted rounded-2xl rounded-tl-sm p-4 mb-4">
              <p className="text-sm text-foreground">
                Olá! 👋 Posso te ajudar?
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleOptionClick("rastrear")}
                className="chatbot-option"
              >
                Quero rastrear meu veículo
              </button>
              <button
                onClick={() => handleOptionClick("frota")}
                className="chatbot-option"
              >
                Rastreamento para frota
              </button>
              <button
                onClick={() => handleOptionClick("planos")}
                className="chatbot-option"
              >
                Ver planos
              </button>
              <button
                onClick={() => handleOptionClick("whatsapp")}
                className="chatbot-option"
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
