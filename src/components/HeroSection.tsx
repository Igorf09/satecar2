const WHATSAPP_LINK = "https://wa.link/cei0oz";

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center pt-20 md:pt-24 pb-8 bg-background">
      <div className="container mx-auto px-4 text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/images/logo-satecar.png"
            alt="Satecar - Rastreamento Veicular"
            className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto w-full h-auto"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
