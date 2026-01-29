import { Car, Truck, Bike, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Automóveis",
    description: "Você sabe a localização do seu veículo em tempo real 24 horas por dia.",
  },
  {
    icon: Truck,
    title: "Caminhões",
    description: "Não perca seu caminhão de vista, acompanhe o deslocamento.",
  },
  {
    icon: Bike,
    title: "Motocicletas",
    description: "Feito para todos os tipos, marcas e modelos de motocicletas.",
  },
  {
    icon: Users,
    title: "Frotas",
    description: "A gestão da sua frota precisa de um equipamento confiável.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">
            Segurança e comodidade para você, sua empresa e sua família!
          </h2>
          <p className="section-subtitle">
            Monitoramento Inteligente Através do Aplicativo ou do Acesso Web. Você poderá monitorar o seu veículo ou frota, extrair relatórios de percurso, definir limites de velocidade, receber notificações e muito mais!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
