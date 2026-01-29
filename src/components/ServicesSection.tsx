import { Network, Wallet, Clock, Download } from "lucide-react";
import robotImage from "@/assets/robot-satecar-clean.png";

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
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a4a6e 0%, #2a6a8e 50%, #1a5a7e 100%)' }}>
      {/* Background with truck silhouette effect */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(20,40,60,0.8) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Cards Grid - Left Side */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0d3555]/60 backdrop-blur-sm rounded-3xl p-5 border border-[#1a5577]/30 
                           hover:border-cyan-400/40 hover:bg-[#0d3555]/80
                           transition-all duration-300"
              >
                {/* Icon - Circle with border */}
                <div className="w-12 h-12 mb-4 rounded-full border-2 border-cyan-400/50 flex items-center justify-center
                              bg-transparent group-hover:border-cyan-300 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                <p className="text-gray-300/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Robot Image - Right Side - Positioned to overflow */}
          <div className="lg:col-span-6 relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img 
              src={robotImage} 
              alt="Robô Satecar - Rastreamento inteligente" 
              className="absolute top-0 right-0 lg:-right-20 xl:-right-32 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
