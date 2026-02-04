import { useEffect, useRef, useState } from "react";
import { DollarSign, Headphones, Truck, Wrench } from "lucide-react";

const benefits = [
  { 
    icon: DollarSign, 
    title: "Custo Acessível",
    description: "Planos que cabem no seu bolso"
  },
  { 
    icon: Headphones, 
    title: "Assistência 24 Horas",
    description: "Suporte sempre disponível"
  },
  { 
    icon: Truck, 
    title: "Monitoramento de Frotas",
    description: "Controle total da sua frota"
  },
  { 
    icon: Wrench, 
    title: "Instalação Simplificada",
    description: "Rápida e sem complicações"
  },
];

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="vantagens" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Vantagens de Adquirir um<br />
          <span className="text-primary">rastreador para seu veículo</span>
        </h2>
        
        <p 
          className={`text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Descubra porque a Satecar é a escolha certa para proteger seu patrimônio
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 backdrop-blur-xl rounded-3xl p-8 border border-primary/10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="relative text-muted-foreground text-sm md:text-base leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
