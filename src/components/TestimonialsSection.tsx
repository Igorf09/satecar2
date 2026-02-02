import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Empresário",
    location: "São Paulo, SP",
    avatar: "CM",
    rating: 5,
    text: "Recuperaram meu carro em menos de 2 horas após o roubo. Serviço impecável e atendimento 24h de verdade. Recomendo a todos!",
  },
  {
    name: "Ana Paula Silva",
    role: "Motorista de Aplicativo",
    location: "Rio de Janeiro, RJ",
    avatar: "AS",
    rating: 5,
    text: "Uso o plano Plus há 1 ano. A assistência veicular já me salvou 3 vezes na estrada. Vale cada centavo do investimento.",
  },
  {
    name: "Roberto Ferreira",
    role: "Gestor de Frota",
    location: "Belo Horizonte, MG",
    avatar: "RF",
    rating: 5,
    text: "Gerencio 15 veículos com a Satecar. O app é muito intuitivo e os relatórios me ajudam a economizar combustível.",
  },
  {
    name: "Mariana Costa",
    role: "Autônoma",
    location: "Curitiba, PR",
    avatar: "MC",
    rating: 5,
    text: "Melhor custo-benefício do mercado. Já tive outras empresas, mas a Satecar é disparada a mais profissional.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(215 55% 11%) 0%, hsl(215 50% 13%) 50%, hsl(215 55% 11%) 100%)'
      }}
    >
      {/* Premium ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(195 85% 52% / 0.1) 0%, transparent 50%)'
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] opacity-25"
          style={{
            background: 'radial-gradient(circle, hsl(195 100% 60% / 0.08) 0%, transparent 50%)'
          }}
        />
        {/* Top line accent */}
        <div className="absolute top-0 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(195 85% 52% / 0.25) 50%, transparent 100%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">O Que Nossos Clientes Dizem</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Milhares de clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group glass-card p-7 transition-all duration-500 hover:-translate-y-3 relative"
              style={{
                background: 'linear-gradient(145deg, hsl(215 48% 15% / 0.8) 0%, hsl(215 50% 12% / 0.5) 100%)',
                borderColor: 'hsl(215 30% 22%)',
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-8 h-8" style={{ color: 'hsl(195 85% 52%)' }} />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: 'hsl(45 93% 58%)' }}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(210 30% 80%)' }}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5" style={{ borderTop: '1px solid hsl(215 30% 22%)' }}>
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, hsl(195 85% 52%) 0%, hsl(200 90% 48%) 100%)',
                    color: 'hsl(215 60% 8%)',
                    boxShadow: '0 4px 15px -3px hsl(195 85% 52% / 0.4)'
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'hsl(210 40% 98%)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs" style={{ color: 'hsl(210 25% 60%)' }}>
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black gradient-text">4.9/5</div>
            <div className="text-xs uppercase tracking-wider mt-2" style={{ color: 'hsl(210 25% 60%)' }}>
              Avaliação Média
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black gradient-text">+5.000</div>
            <div className="text-xs uppercase tracking-wider mt-2" style={{ color: 'hsl(210 25% 60%)' }}>
              Clientes Ativos
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black gradient-text">98%</div>
            <div className="text-xs uppercase tracking-wider mt-2" style={{ color: 'hsl(210 25% 60%)' }}>
              Satisfação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
