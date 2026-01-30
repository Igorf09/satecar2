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
    <section id="planos" className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-4">
          <span className="gradient-text">Nossos Planos</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Escolha o plano ideal para proteger seu veículo
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card flex flex-col ${index === 2 ? 'ring-2 ring-primary/50 shadow-primary/20' : ''}`}
            >
              {/* Highlight badge for Plus plan */}
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MAIS POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="plan-title">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="flex-1 space-y-1 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="plan-feature group">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-blue-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-destructive" />
                      </div>
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground/60"}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-border/50">
                <div className="plan-price mb-1">{plan.price}</div>
                <div className="text-sm text-muted-foreground mb-6">{plan.period}</div>
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
