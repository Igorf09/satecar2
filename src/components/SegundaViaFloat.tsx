import { FileText } from "lucide-react";

const SEGUNDA_VIA_LINK = "https://wa.me/5531990726752?text=Ol%C3%A1%20gostaria%20de%20saber%20sobre%20o%20rastreador!";

const SegundaViaFloat = () => {
  return (
    <a
      href={SEGUNDA_VIA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-40 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
      aria-label="Solicitar segunda via"
    >
      <FileText className="w-5 h-5" />
      <span className="font-medium text-sm">2ª Via</span>
    </a>
  );
};

export default SegundaViaFloat;
