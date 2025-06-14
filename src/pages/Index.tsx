
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import ProductIntro from "@/components/landing/ProductIntro";
import Benefits from "@/components/landing/Benefits";
import Differentiators from "@/components/landing/Differentiators";
import SocialProof from "@/components/landing/SocialProof";
import Objections from "@/components/landing/Objections";
import Offer from "@/components/landing/Offer";
import Guarantee from "@/components/landing/Guarantee";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans w-full">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <ProductIntro />
        <Benefits />
        <Differentiators />
        <SocialProof />
        <Objections />
        <Offer />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
