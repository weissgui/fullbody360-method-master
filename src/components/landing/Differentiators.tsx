
const differentiators = [
  { title: "Baseado em ciência", description: "Resultados sustentáveis e comprovados pela literatura científica." },
  { title: "Pensado para pessoas reais", description: "Funciona mesmo com trabalho, filhos e uma rotina corrida." },
  { title: "Sem radicalismos", description: "Não precisa cortar tudo que gosta para ter o corpo que deseja." },
  { title: "Estilo de vida, não projeto", description: "Construa um corpo atlético e saudável para a vida toda." },
  { title: "100% digital e prático", description: "Acesse de qualquer lugar, a qualquer hora, pelo celular ou computador." }
];

const Differentiators = () => {
  return (
    <section className="py-20">
      <div className="container text-center space-y-12">
        <h2 className="text-4xl font-bold">O que torna o FullBody360 diferente?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div key={item.title} className="bg-muted p-6 rounded-lg text-start">
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
