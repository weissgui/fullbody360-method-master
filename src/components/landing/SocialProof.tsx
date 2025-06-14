
const testimonials = [
  { name: "João P., Aluno", quote: "O FullBody360 mudou o jogo pra mim. Finalmente vejo resultados de verdade sem sacrificar minha vida social. O método é realista e funciona de verdade!" },
  { name: "Maria S., Aluna", quote: "Nunca pensei que conseguiria ter um corpo atlético com minha rotina de trabalho. Aprendi a treinar e comer de forma inteligente, sem loucuras." },
  { name: "Carlos L., Aluno", quote: "O melhor investimento que fiz na minha saúde. A autonomia que o programa te dá é incrível. Hoje eu sei exatamente o que fazer para evoluir." }
];

const SocialProof = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container text-center space-y-12">
        <h2 className="text-4xl font-bold">Milhares de pessoas já transformaram seus corpos</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Veja o que nossos alunos estão dizendo sobre o método.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-background p-6 rounded-lg flex flex-col items-start text-start">
              <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
