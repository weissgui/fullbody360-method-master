
const objections = [
    { q: "Isso funciona pra quem não é iniciante?", a: "Sim. O método é escalável e inclui progressões de carga e volume para todos os níveis, do iniciante ao avançado." },
    { q: "Não tenho tempo para treinar todo dia.", a: "Perfeito! O método foi desenhado para quem tem pouco tempo. Você só precisa de 3 a 4 treinos por semana para ter excelentes resultados." },
    { q: "E se eu não conseguir seguir a dieta?", a: "A metodologia de alimentação flexível foca em aderência. Você vai aprender a incluir os alimentos que gosta, tornando o processo prazeroso e sustentável." },
    { q: "Preciso tomar algum suplemento?", a: "Não. O programa é 100% focado em resultados naturais com treino e dieta. Suplementos são opcionais e ensinamos quais realmente valem a pena." },
];

const Objections = () => {
    return (
        <section className="py-20">
            <div className="container max-w-4xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Principais Dúvidas Respondidas</h2>
                    <p className="text-xl text-muted-foreground mt-4">Quebrando os mitos que te impedem de começar.</p>
                </div>
                <div className="space-y-6">
                    {objections.map((obj, index) => (
                        <div key={index} className="p-6 bg-muted rounded-lg">
                            <h3 className="text-xl font-bold text-primary mb-2">{obj.q}</h3>
                            <p className="text-muted-foreground">{obj.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Objections;
