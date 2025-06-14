
const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} FullBody360. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</p>
      </div>
    </footer>
  );
};

export default Footer;
