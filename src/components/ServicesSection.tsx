import { Network, Wallet, Clock, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background Image - BMW with Satecar logo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/images/services-bmw-bg.png)',
        }}
      />
      {/* Dark overlay for better contrast */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(160deg, hsl(200 45% 12% / 0.85) 0%, hsl(205 50% 15% / 0.8) 50%, hsl(200 48% 12% / 0.85) 100%)' 
        }}
      />
      
      {/* Premium ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                className={`group glass-card p-7 transition-all duration-500 hover:-translate-y-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
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
          <div className={`lg:col-span-6 relative h-[400px] md:h-[500px] lg:h-[650px] transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
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
