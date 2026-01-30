import { useEffect, useState, useRef } from "react";

interface StatCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const StatCounter = ({ end, prefix = "", suffix = "", label }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = end / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="stat-card text-center group">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="stat-number">
          {prefix}{count.toLocaleString('pt-BR')}{suffix}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-4">
          <span className="gradient-text">Satecar em 2026</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Números que comprovam nossa excelência em rastreamento veicular
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <StatCounter
            end={98}
            suffix="%"
            label="Índice de Recuperação"
          />
          <StatCounter
            end={4}
            prefix="R$"
            suffix="Milhões"
            label="Patrimônio Recuperado"
          />
          <StatCounter
            end={15842}
            label="Alertas Tratados"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
