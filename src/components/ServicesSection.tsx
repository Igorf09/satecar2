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
    <section className="py-24 md:py-36 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(160deg, hsl(200 45% 22%) 0%, hsl(205 50% 28%) 35%, hsl(200 48% 24%) 70%, hsl(205 45% 20%) 100%)' 
      }}
    >
      {/* Premium ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] opacity-50"
          style={{
            background: 'radial-gradient(circle, hsl(195 85% 52% / 0.15) 0%, transparent 50%)',
            transform: 'translate(20%, -30%)'
          }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-40"
          style={{
            background: 'radial-gradient(circle, hsl(195 100% 60% / 0.1) 0%, transparent 50%)',
            transform: 'translate(-20%, 30%)'
          }}
        />
        {/* Top line accent */}
        <div className="absolute top-0 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(195 85% 52% / 0.4) 50%, transparent 100%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Cards Grid - Left Side */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group glass-card p-7 transition-all duration-500 hover:-translate-y-3"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: 'linear-gradient(145deg, hsl(200 50% 18% / 0.7) 0%, hsl(205 50% 15% / 0.4) 100%)',
                  borderColor: 'hsl(195 85% 52% / 0.15)'
                }}
              >
                {/* Icon - Premium circle with glow */}
                <div className="w-14 h-14 mb-6 rounded-full flex items-center justify-center
                              transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, hsl(195 85% 52% / 0.2) 0%, transparent 100%)',
                    border: '2px solid hsl(195 85% 52% / 0.5)',
                    boxShadow: '0 0 20px -5px hsl(195 85% 52% / 0.3)'
                  }}
                >
                  <service.icon className="w-6 h-6 transition-colors duration-300"
                    style={{ color: 'hsl(195 85% 60%)' }}
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(210 30% 75%)' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Robot Image - Right Side with premium float animation */}
          <div className="lg:col-span-6 relative h-[400px] md:h-[500px] lg:h-[650px]">
            <img 
              src={robotImage} 
              alt="Robô Satecar - Rastreamento inteligente" 
              className="absolute top-0 right-0 lg:-right-16 xl:-right-24 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] object-contain animate-float"
              style={{ 
                filter: 'drop-shadow(0 30px 50px hsl(195 85% 52% / 0.25))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
