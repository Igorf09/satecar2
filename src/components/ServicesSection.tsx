import { Network, Wallet, Clock, Download } from "lucide-react";
import robotImage from "@/assets/robot-satecar.png";

const services = [
  {
    icon: Network,
    title: "Monitoramento de frotas",
    description: "Gestão inteligente e acompanhamento em tempo real dos seus veículos.",
  },
  {
    icon: Wallet,
    title: "Custo Acessível",
    description: "Planos econômicos com excelente custo-benefício para você ou sua empresa.",
  },
  {
    icon: Clock,
    title: "Monitoramento 24h",
    description: "Acompanhe seu veículo a qualquer hora do dia ou da noite.",
  },
  {
    icon: Download,
    title: "Instalação simplificada",
    description: "Instalação rápida, prática e sem complicações.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a3a5c] via-[#1e4a6e] to-[#1a3a5c] relative overflow-hidden">
      {/* Background with truck silhouette effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-transparent via-[#2a5a7e]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Cards Grid - Left Side (takes 3 columns) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0d2847]/70 backdrop-blur-sm rounded-3xl p-6 border border-[#2a5a7e]/40 
                           hover:border-cyan-400/50 hover:bg-[#0d2847]/90
                           transition-all duration-300"
              >
                {/* Icon - Circle with border */}
                <div className="w-14 h-14 mb-5 rounded-full border-2 border-cyan-400/60 flex items-center justify-center
                              group-hover:border-cyan-300 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300/80 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Robot Image - Right Side (takes 2 columns) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end relative">
            {/* Glow effect behind robot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
            
            {/* Robot Image - Large and positioned to overlap */}
            <img 
              src={robotImage} 
              alt="Robô Satecar - Rastreamento inteligente" 
              className="relative z-10 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
