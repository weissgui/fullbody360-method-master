
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-wider">
          FULLBODY<span className="text-primary">360</span>
        </a>
        <Button>COMECE AGORA</Button>
      </div>
    </header>
  );
};

export default Header;
