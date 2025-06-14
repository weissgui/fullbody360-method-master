
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-black">
          <h1>
            Construa um Corpo{" "}
            <span className="text-primary">Atlético Naturalmente</span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Com apenas 3 a 4 treinos por semana, alimentação flexível e estratégia inteligente de cardio, o FullBody360 é o método científico e realista para ganhar massa muscular, queimar gordura e transformar seu corpo de forma sustentável.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-auto text-lg font-bold"
            size="lg"
          >
            QUERO TRANSFORMAR MEU CORPO
          </Button>
        </div>
      </div>

      <div className="w-full rounded-lg overflow-hidden aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/InEBeLcZFK0"
          title="Vídeo de Apresentação FullBody360"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
