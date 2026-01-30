import { Check, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/cei0oz";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  subtitle: string;
  features: PlanFeature[];
  price: string;
  period: string;
}

const plans: Plan[] = [
  {
    name: "Plano Basic",
    subtitle: "Serviço de Rastreamento + Central 24 horas",
    features: [
      { text: "Monitoramento", included: true },
      { text: "Aplicativo para celular (Android e iOS)", included: true },
      { text: "Central 0800 (Suporte a Sinistro)", included: true },
      { text: "Alerta de carro ligado", included: true },
      { text: "Alerta de cerca virtual", included: true },
      { text: "Alerta Velocidade", included: true },
      { text: "Controle de manutenção de veículo", included: true },
      { text: "Cobertura Nacional", included: true },
      { text: "Bloqueador Inteligente", included: false },
      { text: "Chaveiro", included: false },
      { text: "6 Reboques até 100 KM", included: false },
      { text: "1 Recarga de Bateria", included: false },
      { text: "1 Troca de Pneu", included: false },
      { text: "Meio de Transporte Alternativo", included: false },
      { text: "Hospedagem", included: false },
      { text: "Remoção inter-hospitalar", included: false },
      { text: "Translado Do Corpo", included: false },
      { text: "Carro Reserva 7 Dias", included: false },
      { text: "Seguro Morte Acidental R$3.000,00", included: false },
    ],
    price: "R$49,90",
    period: "mensal",
  },
  {
    name: "Plano Block",
    subtitle: "Serviço de Rastreamento + Central 24 horas",
    features: [
      { text: "Monitoramento", included: true },
      { text: "Aplicativo para celular (Android e iOS)", included: true },
      { text: "Central 0800 (Suporte a Sinistro)", included: true },
      { text: "Alerta de carro ligado", included: true },
      { text: "Alerta de cerca virtual", included: true },
      { text: "Alerta Velocidade", included: true },
      { text: "Controle de manutenção de veículo", included: true },
      { text: "Cobertura Nacional", included: true },
      { text: "Bloqueador Inteligente", included: true },
      { text: "Chaveiro", included: false },
      { text: "6 Reboques até 100 KM", included: false },
      { text: "1 Recarga de Bateria", included: false },
      { text: "1 Troca de Pneu", included: false },
      { text: "Meio de Transporte Alternativo", included: false },
      { text: "Hospedagem", included: false },
      { text: "Remoção inter-hospitalar", included: false },
      { text: "Translado Do Corpo", included: false },
      { text: "Carro Reserva 7 Dias", included: false },
      { text: "Seguro Morte Acidental R$3.000,00", included: false },
    ],
    price: "R$59,90",
    period: "mensal",
  },
  {
    name: "Plano Plus",
    subtitle: "Serviço de Rastreamento + Bloqueador + Assistência Veicular 24h",
    features: [
      { text: "Monitoramento", included: true },
      { text: "Aplicativo para celular (Android e iOS)", included: true },
      { text: "Central 0800 (Suporte a Sinistro)", included: true },
      { text: "Alerta de carro ligado", included: true },
      { text: "Alerta de cerca virtual", included: true },
      { text: "Alerta Velocidade", included: true },
      { text: "Controle de manutenção de veículo", included: true },
      { text: "Cobertura Nacional", included: true },
      { text: "Bloqueador Inteligente", included: true },
      { text: "Chaveiro", included: true },
      { text: "6 Reboques até 100 KM", included: true },
      { text: "1 Recarga de Bateria", included: true },
      { text: "1 Troca de Pneu", included: true },
      { text: "Meio de Transporte Alternativo", included: true },
      { text: "Hospedagem", included: true },
      { text: "Remoção inter-hospitalar", included: true },
      { text: "Translado Do Corpo", included: true },
      { text: "Carro Reserva 7 Dias", included: true },
      { text: "Seguro Morte Acidental R$3.000,00", included: true },
    ],
    price: "R$99,90",
    period: "mensal",
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-24 md:py-36 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(215 45% 16%) 0%, hsl(215 48% 14%) 50%, hsl(215 45% 16%) 100%)'
      }}
    >
      {/* Premium ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] opacity-40"
          style={{
            background: 'radial-gradient(circle, hsl(195 85% 52% / 0.1) 0%, transparent 50%)',
            transform: 'translateX(-30%)'
          }}
        />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] opacity-35"
          style={{
            background: 'radial-gradient(circle, hsl(195 100% 60% / 0.08) 0%, transparent 50%)',
            transform: 'translateX(30%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">Nossos Planos</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Escolha o plano ideal para proteger seu veículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card flex flex-col ${index === 2 ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={index === 2 ? {
                border: '1px solid hsl(195 85% 52% / 0.4)',
                boxShadow: '0 30px 60px -20px hsl(215 60% 5% / 0.6), 0 0 50px -15px hsl(195 85% 52% / 0.2)'
              } : {}}
            >
              {/* Highlight badge for Plus plan */}
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(135deg, hsl(195 85% 52%) 0%, hsl(200 90% 48%) 100%)',
                    color: 'hsl(215 60% 8%)',
                    boxShadow: '0 4px 15px -3px hsl(195 85% 52% / 0.5)'
                  }}
                >
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="plan-title">{plan.name}</h3>
                <p className="text-sm" style={{ color: 'hsl(210 25% 60%)' }}>{plan.subtitle}</p>
              </div>

              <div className="flex-1 space-y-1 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="plan-feature group">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, hsl(195 85% 52%) 0%, hsl(200 90% 48%) 100%)',
                          boxShadow: '0 2px 8px -2px hsl(195 85% 52% / 0.5)'
                        }}
                      >
                        <Check className="w-3 h-3" style={{ color: 'hsl(215 60% 8%)' }} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'hsl(0 72% 51% / 0.2)' }}
                      >
                        <X className="w-3 h-3" style={{ color: 'hsl(0 72% 60%)' }} />
                      </div>
                    )}
                    <span style={{ color: feature.included ? 'hsl(210 30% 90%)' : 'hsl(210 20% 50%)' }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-8" style={{ borderTop: '1px solid hsl(215 30% 22%)' }}>
                <div className="plan-price mb-1">{plan.price}</div>
                <div className="text-sm mb-8" style={{ color: 'hsl(210 25% 55%)' }}>{plan.period}</div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contract inline-block"
                >
                  CONTRATE AQUI
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
