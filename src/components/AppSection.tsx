import { Check } from "lucide-react";

const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.satecar.redeveiculos.rastreamento.veicular";
const APP_STORE_LINK = "https://apps.apple.com/us/app/satecar-mobile/id6504044162";

const features = [
  "Localização em tempo real",
  "Mapa de Terreno, Satélite e Tráfego",
  "Monitoramento",
  "Relatórios",
  "Históricos",
];

const AppSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-foreground order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              <span className="gradient-text">Tudo isso na palma</span>
              <br />
              <span className="text-foreground">de sua mão!</span>
            </h2>
            
            <ul className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-accent rounded-full flex items-center justify-center flex-shrink-0
                                shadow-lg shadow-primary/30 group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base md:text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Baixe agora mesmo!
            </h3>

            <div className="flex flex-wrap gap-4">
              <a
                href={PLAY_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-store"
              >
                Play Store
              </a>
              <a
                href={APP_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-store"
              >
                Apple Store
              </a>
            </div>
          </div>

          {/* App Mockup with float animation */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-accent/30 rounded-full blur-[60px] scale-75" />
              <img
                src="/images/app-phone-final.png"
                alt="Aplicativo Satecar Mobile - Rastreamento veicular"
                className="relative max-w-md md:max-w-lg lg:max-w-xl w-full h-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
