import { FileText } from "lucide-react";

const SEGUNDA_VIA_LINK = "https://wa.me/5531990726752?text=Ol%C3%A1%20gostaria%20de%20saber%20sobre%20o%20rastreador!";

const SegundaViaFloat = () => {
  return (
    <a
      href={SEGUNDA_VIA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-white border-2 border-foreground/20 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
      aria-label="Solicitar segunda via"
    >
      <FileText className="w-6 h-6 text-foreground" />
    </a>
  );
};

export default SegundaViaFloat;
