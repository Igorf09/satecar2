import { Truck, DollarSign, Clock, Wrench } from "lucide-react";
import robotImage from "@/assets/robot-tech.png";

const services = [
  {
    icon: Truck,
    title: "Monitoramento de frotas",
    description: "Gestão inteligente e acompanhamento em tempo real dos seus veículos.",
  },
  {
    icon: DollarSign,
    title: "Custo acessível",
    description: "Planos econômicos com excelente custo-benefício para você ou sua empresa.",
  },
  {
    icon: Clock,
    title: "Monitoramento 24h",
    description: "Acompanhe seu veículo a qualquer hora do dia ou da noite.",
  },
  {
    icon: Wrench,
    title: "Instalação simplificada",
    description: "Instalação rápida, prática e sem complicações.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1628] via-[#0d1e36] to-[#0a1628] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards Grid - Left Side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0d1e36]/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30 
                           hover:border-blue-500/50 hover:bg-[#122a4a]/80 hover:shadow-xl hover:shadow-blue-900/20
                           transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 bg-blue-500/20 rounded-xl flex items-center justify-center
                              group-hover:bg-blue-500/30 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Image - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl scale-90"></div>
              
              {/* Robot Image */}
              <img 
                src={robotImage} 
                alt="Robô tecnológico - Rastreamento inteligente" 
                className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
