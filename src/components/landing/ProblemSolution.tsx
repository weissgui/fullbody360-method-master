
const ProblemSolution = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold">Você se identifica com isso?</h2>
          <p className="text-xl text-muted-foreground">
            Você treina, tenta seguir dietas, mas os resultados são mínimos. Cansa de protocolos de atletas que não se encaixam na sua vida. Treinar todo dia, seguir dieta restrita, cortar tudo que gosta… e mesmo assim não ver resultado? Você não está fracassando — está seguindo métodos que não foram feitos para pessoas como você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-destructive">O Problema: Métodos Incompatíveis</h3>
            <p className="text-muted-foreground">
              A maioria dos programas fitness são criados para atletas hormonizados ou pessoas com tempo de sobra. Eles ignoram os limites, o estilo de vida e a realidade de pessoas naturais que têm trabalho, estudos e vida social.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-background rounded-lg shadow-lg border-2 border-primary">
            <h3 className="text-2xl font-bold text-primary">A Solução: Um Método Realista</h3>
            <p className="text-muted-foreground">
              Você precisa de um método ajustado à sua realidade: treinos eficientes, alimentação flexível e cardio inteligente — tudo validado pela ciência e pensado para aderência a longo prazo, para que você conquiste e mantenha seus resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
