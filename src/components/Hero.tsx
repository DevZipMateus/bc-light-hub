import { Button } from "@/components/ui/button";
import { Store, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="inicio" className="relative py-16 md:py-24 pt-28 md:pt-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,166,35,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(55,99,124,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground mb-4 leading-relaxed">
            Tudo de iluminação
          </p>
          
          <p className="text-lg md:text-xl text-foreground mb-4 leading-relaxed">
            Luz sob medida que transforma espaços
          </p>
          
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
            Soluções completas e personalizadas, com fabricação própria de perfis LED e instalação especializada em telas tensionadas iluminadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/vitrine">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 shadow-lg"
              >
                <Store className="mr-2 h-5 w-5" />
                Acesse nossa Vitrine
              </Button>
            </Link>
            
            <Button 
              size="lg"
              onClick={() => window.open("https://wa.me/5541984125653", "_blank")}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-lg px-8 shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp: (41) 98412-5653
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
