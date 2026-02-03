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
    <section className="py-24 md:py-36 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(215 55% 11%) 0%, hsl(215 58% 9%) 50%, hsl(215 55% 11%) 100%)'
      }}
    >
      {/* Premium ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] opacity-35"
          style={{
            background: 'radial-gradient(circle, hsl(195 85% 52% / 0.12) 0%, transparent 50%)'
          }}
        />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(195 100% 60% / 0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10" style={{ letterSpacing: '-0.03em' }}>
              <span className="gradient-text">Tudo isso na palma</span>
              <br />
              <span style={{ color: 'hsl(210 40% 98%)' }}>de sua mão!</span>
            </h2>
            
            <ul className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-5 group transition-transform duration-300 hover:translate-x-3"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, hsl(195 85% 52%) 0%, hsl(200 90% 48%) 100%)',
                      boxShadow: '0 4px 15px -3px hsl(195 85% 52% / 0.4)'
                    }}
                  >
                    <Check className="w-5 h-5" style={{ color: 'hsl(215 60% 8%)' }} />
                  </div>
                  <span className="text-lg font-medium" style={{ color: 'hsl(210 30% 92%)' }}>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'hsl(210 40% 98%)', letterSpacing: '-0.02em' }}>
              Baixe agora mesmo!
            </h3>

            <div className="flex flex-wrap gap-5">
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

          {/* App Mockup with premium float animation */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Premium glow effect behind phone */}
              <div className="absolute inset-0 scale-90 opacity-60"
                style={{
                  background: 'radial-gradient(circle, hsl(195 85% 52% / 0.25) 0%, transparent 60%)',
                  filter: 'blur(40px)'
                }}
              />
              <img
                src="/images/hand-phone-new-cutout.png"
                alt="Aplicativo Satecar Mobile - Rastreamento veicular"
                className="relative max-w-md md:max-w-lg lg:max-w-xl w-full h-auto animate-float"
                style={{ filter: 'drop-shadow(0 30px 50px hsl(195 85% 52% / 0.25))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
