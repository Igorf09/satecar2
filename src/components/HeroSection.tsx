const WHATSAPP_LINK = "https://wa.link/cei0oz";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Full Hero */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat cursor-pointer"
        style={{ backgroundImage: "url('/images/hero-bg-new.png')" }}
        aria-label="Fazer cotação via WhatsApp"
      />
    </section>
  );
};

export default HeroSection;
