import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logoBranca from "@/assets/logo-branca.png";

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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,166,35,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(44,95,124,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <img src={logoBranca} alt="B & C Iluminação" className="h-64 md:h-80 w-auto drop-shadow-lg" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            B & C - Tudo em iluminação
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Soluções completas e personalizadas em iluminação com fabricação própria de perfis LED e instalação especializada em telas tensionadas iluminadas
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-lg transition-all duration-300 text-lg px-8"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Solicite um orçamento
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/5541999999999", "_blank")}
              className="border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8"
            >
              Fale pelo WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Fabricação própria</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projetos realizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
