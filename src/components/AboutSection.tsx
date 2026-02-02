import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="sobre" 
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(215 55% 11%) 0%, hsl(215 48% 14%) 50%, hsl(215 55% 11%) 100%)'
      }}
    >
      {/* Premium ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(195 85% 52% / 0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="section-title mb-8">
              <span className="gradient-text">Sobre Nós</span>
            </h2>
            <p className="section-subtitle text-lg leading-relaxed" style={{ color: 'hsl(210 30% 80%)' }}>
              Contamos com cerca de <span className="font-bold" style={{ color: 'hsl(195 85% 60%)' }}>18.000 prestadores de serviço</span> credenciados em todo o território nacional, além de uma equipe qualificada para pronto atendimento <span className="font-bold" style={{ color: 'hsl(195 85% 60%)' }}>24 horas por dia</span>, sete dias por semana, com agilidade, segurança e qualidade.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{
                  background: 'hsl(215 48% 16%)',
                  border: '1px solid hsl(195 85% 52% / 0.3)',
                  color: 'hsl(195 85% 70%)'
                }}
              >
                ✓ Cobertura Nacional
              </div>
              <div className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{
                  background: 'hsl(215 48% 16%)',
                  border: '1px solid hsl(195 85% 52% / 0.3)',
                  color: 'hsl(195 85% 70%)'
                }}
              >
                ✓ Atendimento 24/7
              </div>
              <div className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{
                  background: 'hsl(215 48% 16%)',
                  border: '1px solid hsl(195 85% 52% / 0.3)',
                  color: 'hsl(195 85% 70%)'
                }}
              >
                ✓ 98% Recuperação
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="glass-card p-5 md:p-7 max-w-lg w-full group hover:-translate-y-2 transition-transform duration-500"
              style={{
                background: 'linear-gradient(145deg, hsl(215 48% 15% / 0.8) 0%, hsl(215 50% 12% / 0.5) 100%)',
                boxShadow: '0 25px 50px -15px hsl(215 60% 5% / 0.6)'
              }}
            >
              <img
                src="/images/about-image.png"
                alt="Rastreamento veicular para carros, motos, caminhões e frotas em geral. Monitoramento veicular 24 horas por dia."
                className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
