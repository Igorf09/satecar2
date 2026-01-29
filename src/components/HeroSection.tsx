const WHATSAPP_LINK = "https://wa.link/cei0oz";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center pt-20 md:pt-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Phone with Map */}
          <div className="hidden lg:flex justify-center lg:justify-start">
            <img
              src="/images/hand-phone.png"
              alt="Aplicativo de rastreamento veicular com mapa GPS"
              className="max-w-xs xl:max-w-sm h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="/images/logo-satecar.png"
                alt="Satecar Rastreamento Veicular"
                className="h-16 md:h-20 lg:h-24 w-auto mx-auto lg:mx-0 brightness-0 invert"
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 tracking-wide">
              RASTREAMENTO VEICULAR
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light">
              Controle e Segurança na palma de sua mão
            </p>

            {/* CTA Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-accent/30"
            >
              FAZER COTAÇÃO
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
