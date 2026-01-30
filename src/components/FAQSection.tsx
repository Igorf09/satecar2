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
    <section id="duvidas" className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-4">
          <span className="gradient-text">Dúvidas Frequentes</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Encontre respostas para as perguntas mais comuns sobre nossos serviços
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-white/10 hover:border-primary/30 transition-all duration-500"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6 hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
