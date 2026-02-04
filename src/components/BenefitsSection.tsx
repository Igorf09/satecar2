import { useEffect, useRef, useState } from "react";
import benefitCost from "@/assets/benefit-cost.jpg";
import benefitSupport from "@/assets/benefit-support.jpg";
import benefitFleet from "@/assets/benefit-fleet.jpg";
import benefitInstall from "@/assets/benefit-install.jpg";

const benefits = [
  { 
    image: benefitCost,
    title: "CUSTO\nACESSÍVEL",
  },
  { 
    image: benefitSupport,
    title: "ASSISTÊNCIA\n24 HORAS",
  },
  { 
    image: benefitFleet,
    title: "MONITORAMENTO\nDE FROTAS",
  },
  { 
    image: benefitInstall,
    title: "INSTALAÇÃO\nSIMPLIFICADA",
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
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Vantagens de Adquirir um<br />
          <span className="text-primary">rastreador para seu veículo</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Card with background image */}
                <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  {/* Background Image */}
                  <img 
                    src={benefit.image} 
                    alt={benefit.title.replace('\n', ' ')}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark blue overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#1e3a5f]/70 to-[#0f172a]/85" />
                  
                  {/* Additional gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-between p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight whitespace-pre-line drop-shadow-lg flex-1">
                      {benefit.title}
                    </h3>
                    
                    {/* Satecar Logo */}
                    <div className="flex-shrink-0 ml-4 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                      <img 
                        src="/images/logo-satecar.png" 
                        alt="Satecar"
                        className="h-10 md:h-12 w-auto brightness-0 invert object-contain"
                      />
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
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
