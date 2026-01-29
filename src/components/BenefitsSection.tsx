const benefits = [
  { image: "/images/benefit-1.png", alt: "Custo Acessível" },
  { image: "/images/benefit-2.png", alt: "Monitoramento 24h" },
  { image: "/images/benefit-3.png", alt: "Cobertura Nacional" },
  { image: "/images/benefit-4.png", alt: "Assistência Veicular" },
];

const BenefitsSection = () => {
  return (
    <section id="vantagens" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Vantagens de Adquirir um<br />rastreador para seu veículo
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <img
                src={benefit.image}
                alt={benefit.alt}
                className="w-full h-auto brightness-110 contrast-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
