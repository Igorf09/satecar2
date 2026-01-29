const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="section-title">Sobre Nós</h2>
            <p className="section-subtitle">
              Contamos com cerca de 18.000 prestadores de serviço credenciados em todo o território nacional, além de uma equipe qualificada para pronto atendimento 24 horas por dia, sete dias por semana, com agilidade, segurança e qualidade.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="bg-card rounded-3xl shadow-xl p-4 md:p-6 max-w-lg w-full border border-border">
              <img
                src="/images/about-image.png"
                alt="Rastreamento veicular para carros, motos, caminhões e frotas em geral. Monitoramento veicular 24 horas por dia."
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
