import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a função do rastreador?",
    answer: "A principal função do rastreamento veicular é informar a localização exata de um carro, caminhão, motocicleta ou qualquer outro tipo de veículo.",
  },
  {
    question: "Quais as vantagens de Colocar um Rastreador Veícular?",
    answer: "Em caso de sinistro o proprietário do veículo deve acionar a Polícia Militar para sua própria segurança, após esta primeira ação, realize o bloqueio imediato do veículo através do aplicativo instalado em seu celular ou computador. Caso o cliente não consiga efetuar o bloqueio por meio do aplicativo de Rastreamento Veicular, o dono do automóvel poderá contatar a central de monitoramento da Satecar. Nossos profissionais farão o bloqueio de forma imediata de seu veículo.",
  },
  {
    question: "Onde é instalado o rastreador veicular?",
    answer: "Os rastreadores de veículos devem ser instalados por um técnico autorizado pela empresa de rastreamento que você contratar. Normalmente, os rastreadores de veículos são instalados dentro do painel do veículo, conectados à bateria e ao poste da chave. Recomendamos sempre consultar um técnico especializado para fazer a instalação.",
  },
  {
    question: "Qual a probabilidade de encontrar o veículo?",
    answer: "Com nosso índice de recuperação de 98%, as chances de localizar e recuperar seu veículo são extremamente altas. Nossa central de monitoramento 24 horas e rede de prestadores credenciados em todo o território nacional garantem uma resposta rápida e eficiente.",
  },
];

const FAQSection = () => {
  return (
    <section id="duvidas" className="py-24 md:py-36 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(215 45% 16%) 0%, hsl(215 50% 13%) 50%, hsl(215 45% 16%) 100%)'
      }}
    >
      {/* Premium ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse, hsl(195 85% 52% / 0.08) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">Dúvidas Frequentes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-7 transition-all duration-400 hover:border-primary/30"
                style={{
                  background: 'linear-gradient(145deg, hsl(215 48% 15% / 0.8) 0%, hsl(215 50% 12% / 0.5) 100%)',
                  borderColor: 'hsl(215 30% 22%)'
                }}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 transition-colors duration-300"
                  style={{ color: 'hsl(210 40% 98%)' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-relaxed" style={{ color: 'hsl(210 25% 70%)' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
