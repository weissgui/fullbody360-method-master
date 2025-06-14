
import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-muted p-8 rounded-lg text-center flex flex-col items-center space-y-4 border-2 border-dashed border-primary">
            <ShieldCheck className="w-16 h-16 text-primary" />
            <h2 className="text-3xl font-bold">Sua Garantia Incondicional de 7 Dias</h2>
            <p className="text-lg text-muted-foreground">
                Teste o FullBody360 por 7 dias completos. Se por qualquer motivo você não gostar ou achar que não é para você, basta enviar um único e-mail e nós devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Guarantee;
