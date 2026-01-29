const services = [
  {
    title: "Rastreamento Veicular",
    description: "Tenha o nosso rastreador veicular com diversas funcionalidades para facilitar o seu dia a dia.",
    image: "/images/service-tracking.png",
  },
  {
    title: "Rastreamento de Frotas",
    description: "Tenha controle total sobre sua frota, aumente sua produtividade e reduza custos",
    image: "/images/service-fleet.png",
  },
  {
    title: "Assistência 24 horas",
    description: "Conte com uma equipe de pronta resposta presente em todo território nacional.",
    image: "/images/service-assistance.png",
  },
];

const ServicesDetailSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Excelência em serviços de rastreamento 24h.
        </h2>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  {service.description}
                </p>
              </div>
              <div className={`service-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
