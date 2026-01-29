const WHATSAPP_LINK = "https://wa.link/cei0oz";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-end justify-center overflow-hidden">
      {/* Background Image - Full Hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg-new.png')" }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
              RASTREAMENTO VEICULAR
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 font-light drop-shadow-md">
              Controle e Segurança na palma de sua mão
            </p>

            {/* CTA Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold text-lg md:text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-wide"
            >
              FAZER COTAÇÃO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
