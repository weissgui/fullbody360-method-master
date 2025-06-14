
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Ganho de massa muscular real, estético e proporcional",
  "Redução de gordura corporal de forma sustentável",
  "Mais autoestima e confiança no espelho",
  "Liberdade alimentar com estratégia",
  "Autonomia total para montar seus treinos e dieta",
  "Clareza sobre o que realmente funciona para seu corpo"
];

const Benefits = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-80 lg:h-96 bg-background rounded-lg flex items-center justify-center">
          <div className="text-muted-foreground text-center">
            <p>[Imagem de Aluno Satisfeito]</p>
            <p className="text-sm">(Placeholder for benefits visualization)</p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">O que você vai conquistar</h2>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
