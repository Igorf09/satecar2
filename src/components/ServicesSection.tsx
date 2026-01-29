import { Truck, DollarSign, Clock, Wrench } from "lucide-react";

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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl scale-75"></div>
              
              {/* Robot/Tech illustration */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 rounded-full animate-pulse"></div>
                <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#1a3a5c] to-[#0d1e36] rounded-full 
                              flex items-center justify-center border border-blue-500/30 shadow-2xl shadow-blue-900/50">
                  {/* Tech Icon */}
                  <div className="text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 
                                  rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 rotate-12">
                      <svg className="w-14 h-14 md:w-20 md:h-20 text-white -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <p className="text-blue-300 font-semibold text-sm md:text-base">Tecnologia Avançada</p>
                    <p className="text-blue-400/60 text-xs md:text-sm">Rastreamento Inteligente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
