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
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {prefix}{count.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Satecar em 2026</h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
