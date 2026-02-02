import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Xéu Carlos Henrique",
    reviews: "10 avaliações",
    avatar: "XC",
    rating: 5,
    text: "Empresa séria que conheço há mais de 20 anos e indico de olho fechado, sem falar que o preço é bem em conta e o Serviço é de altíssima qualidade!!!",
    time: "um ano atrás"
  },
  {
    name: "Leonardo Medina",
    reviews: "13 avaliações",
    avatar: "LM",
    rating: 5,
    text: "Excelente empresa recomendo!! Presta um excelente trabalho, minha família utiliza seus serviços, não tenho nada a reclamar!! Recomendo essa empresa, pessoas sérias prestando um excelente trabalho de qualidade",
    time: "um ano atrás"
  },
  {
    name: "Everton Assis",
    reviews: "6 avaliações",
    avatar: "EA",
    rating: 5,
    text: "Pessoal a qualidade e a confiabilidade desta empresa são excepcionais. Levei meu carro para trocar o sistema de ar-condicionado e o serviço foi realizado com excelência. Além disso, fizeram uma limpeza do motor e verificaram o sistema de drenagem da água de chuva, que não estava incluso no serviço combinado. Satecar eu indico!",
    time: "um ano atrás"
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
              {/* Google icon badge */}
              <div className="absolute top-5 right-5">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Author at top */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm"
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
                    {testimonial.reviews}
                  </p>
                </div>
              </div>

              {/* Rating stars + time */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: 'hsl(45 93% 50%)' }}
                    />
                  ))}
                </div>
                <span className="text-xs" style={{ color: 'hsl(210 25% 55%)' }}>{testimonial.time}</span>
              </div>

              {/* Testimonial text */}
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(210 30% 80%)' }}>
                {testimonial.text}
              </p>
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
