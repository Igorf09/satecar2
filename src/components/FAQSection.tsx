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
    <section id="duvidas" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Dúvidas Frequentes</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border border-border shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
