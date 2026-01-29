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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-foreground order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Tudo isso na palma<br />de sua mão!
            </h2>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base md:text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4">
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

          {/* App Mockup */}
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src="/images/app-phone-cutout.png"
              alt="Aplicativo Satecar Mobile - Rastreamento veicular"
              className="max-w-md md:max-w-lg lg:max-w-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
