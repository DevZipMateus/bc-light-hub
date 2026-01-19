import { Button } from "@/components/ui/button";
import { Sparkles, Store } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,166,35,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(55,99,124,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Tudo de iluminação
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Luz sob medida que transforma espaços
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Soluções completas e personalizadas, com fabricação própria de perfis LED e instalação especializada em telas tensionadas iluminadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/5541984125653", "_blank")}
              className="border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8"
            >
              Fale pelo WhatsApp: (41) 98412-5653
            </Button>
          </div>

          <Link to="/vitrine">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-lg px-8 mb-12"
            >
              <Store className="mr-2 h-5 w-5" />
              Confira nossa vitrine
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
