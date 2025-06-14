
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Offer = () => {
    const included = [
        "Acesso vitalício ao Programa FullBody360",
        "Planilhas inteligentes para treino e dieta",
        "Acompanhamento estratégico com ajustes",
        "E-books e guias exclusivos",
        "Comunidade de suporte exclusiva",
    ];

    const bonuses = [
        "Guia de receitas flexíveis e práticas",
        "Mini-curso “Montando sua dieta do zero”",
        "Checklist “Transformação de 90 dias”",
    ]

    return (
        <section id="oferta" className="bg-muted py-20">
            <div className="container max-w-4xl mx-auto text-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-black text-primary">Sua Oportunidade Única de Transformação</h2>
                <div className="bg-background p-8 rounded-lg shadow-2xl border border-primary/20 text-start grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">O que você recebe:</h3>
                        <ul className="space-y-3">
                           {included.map(item => (
                               <li key={item} className="flex items-center gap-3">
                                   <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4">Bônus Exclusivos (Hoje):</h3>
                        <ul className="space-y-3">
                           {bonuses.map(item => (
                               <li key={item} className="flex items-center gap-3">
                                   <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                   <span className="font-semibold">{item}</span>
                               </li>
                           ))}
                        </ul>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-lg">De <span className="line-through">R$997</span> por apenas:</p>
                    <p className="text-6xl font-extrabold">12x de R$29,70</p>
                    <p className="text-lg">ou R$297 à vista</p>
                    <Button size="lg" className="w-full text-xl font-bold h-16 animate-pulse">
                        QUERO TRANSFORMAR MEU CORPO NATURALMENTE
                    </Button>
                    <p className="text-sm text-muted-foreground">Comece agora. Treinos otimizados, dieta flexível, resultados reais.</p>
                </div>
            </div>
        </section>
    );
};

export default Offer;
