
import { Dumbbell, UtensilsCrossed, HeartPulse } from "lucide-react";

const ProductIntro = () => {
  return (
    <section className="py-20">
      <div className="container text-center space-y-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold">FULLBODY360: Sua Solução Completa</h2>
          <p className="text-xl text-muted-foreground">
            O FullBody360 é um programa 100% online, com vídeos, planilhas, e-books e um sistema de acompanhamento que ensina como ganhar massa, perder gordura e manter os resultados sem depender de ninguém.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-3 p-6 bg-muted rounded-lg">
            <Dumbbell className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-bold">Treino Otimizado</h3>
            <p className="text-muted-foreground">Treine 3 a 4x por semana, com estratégia baseada em ciência para máxima hipertrofia e força.</p>
          </div>
          <div className="flex flex-col items-center space-y-3 p-6 bg-muted rounded-lg">
            <UtensilsCrossed className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-bold">Alimentação Flexível</h3>
            <p className="text-muted-foreground">Coma com prazer, sem terrorismo nutricional. Aprenda a encaixar o que gosta na sua dieta (IIFYM).</p>
          </div>
          <div className="flex flex-col items-center space-y-3 p-6 bg-muted rounded-lg">
            <HeartPulse className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-bold">Cardio Inteligente</h3>
            <p className="text-muted-foreground">Cardio eficaz para queima de gordura sem prejudicar sua recuperação muscular e ganhos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
