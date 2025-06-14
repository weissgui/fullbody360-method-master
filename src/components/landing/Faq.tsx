
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  { q: "É só pra iniciantes?", a: "Não. O método é para qualquer pessoa, de qualquer nível, que quer melhorar seu físico com consistência e estratégia, seja você iniciante ou avançado." },
  { q: "Precisa de academia?", a: "O programa é otimizado para treinos em academia. No entanto, incluímos adaptações e um guia de treino com o mínimo de equipamentos para quem treina em casa." },
  { q: "Funciona pra quem tem metabolismo lento?", a: "Sim. O plano é 100% individualizado e ajustado para seu perfil calórico e gasto energético. Você aprenderá a manipular as variáveis para acelerar seus resultados." },
  { q: "Tenho pouco tempo, vale a pena?", a: "Definitivamente. A metodologia foi criada pensando em pessoas ocupadas, com treinos de alta eficiência que duram em média 60 minutos, 3 a 4 vezes por semana." }
];

const Faq = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div className="text-center">
            <h2 className="text-4xl font-bold">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-start">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
