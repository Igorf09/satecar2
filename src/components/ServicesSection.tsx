import { Network, Wallet, Clock, Download } from "lucide-react";
import robotImage from "@/assets/robot-transparent.png";

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
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a4a6e 0%, #2a6a8e 50%, #1a5a7e 100%)' }}>
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Cards Grid - Left Side */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group glass-card p-6 
                           hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20
                           transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon - Circle with glow effect */}
                <div className="w-14 h-14 mb-5 rounded-full border-2 border-cyan-400/50 flex items-center justify-center
                              bg-gradient-to-br from-cyan-400/20 to-transparent 
                              group-hover:border-cyan-300 group-hover:shadow-lg group-hover:shadow-cyan-400/30
                              transition-all duration-500">
                  <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Robot Image - Right Side with floating animation */}
          <div className="lg:col-span-6 relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img 
              src={robotImage} 
              alt="Robô Satecar - Rastreamento inteligente" 
              className="absolute top-0 right-0 lg:-right-20 xl:-right-32 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] object-contain
                         animate-float drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 180, 220, 0.3))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
