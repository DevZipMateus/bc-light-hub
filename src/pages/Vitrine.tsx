import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoFinal from "@/assets/logo-final.png";

const Vitrine = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Header fixo - 80px */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-soft" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <img 
                src={logoFinal} 
                alt="Bassani & Calegari Iluminação" 
                className="h-16 w-auto" 
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
              >
                <Home size={18} />
                Voltar ao site
              </Link>
              <Button 
                onClick={() => window.open("https://wa.me/5541984125653", "_blank")} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Fale conosco
              </Button>
            </nav>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden text-foreground" 
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border bg-background">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-left flex items-center gap-2"
                >
                  <Home size={18} />
                  Voltar ao site
                </Link>
                <Button 
                  onClick={() => window.open("https://wa.me/5541984125653", "_blank")} 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                  Fale conosco
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Iframe - ocupa o espaço restante (100vh - 80px header) */}
      <main 
        className="w-full"
        style={{ 
          marginTop: '80px',
          height: 'calc(100vh - 80px)'
        }}
      >
        <iframe 
          src="https://bassanicalegari.egestor.com.br/vitrine/" 
          title="Demonstração de Vitrine"
          className="w-full h-full border-none"
        />
      </main>
    </div>
  );
};

export default Vitrine;
