const WHATSAPP_LINK = "https://wa.link/cei0oz";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-background">
      {/* Background Image - Full Hero */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full cursor-pointer"
        aria-label="Fazer cotação via WhatsApp"
      >
        <img 
          src="/images/hero-bg-new.png" 
          alt="Satecar - Rastreamento Veicular" 
          className="w-full h-auto object-contain"
        />
      </a>
    </section>
  );
};

export default HeroSection;
