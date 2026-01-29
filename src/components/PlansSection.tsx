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
    <section id="planos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Nossos Planos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card flex flex-col">
              <div className="text-center mb-6">
                <h3 className="plan-title">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="flex-1 space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="plan-feature">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4 border-t border-border">
                <div className="plan-price mb-1">{plan.price}</div>
                <div className="text-sm text-muted-foreground mb-4">{plan.period}</div>
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
