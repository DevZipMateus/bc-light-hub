import { useState, useEffect } from "react";
import { Menu, X, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Bassani & Calegari Iluminação" className="h-28 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <Link to="/vitrine" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
              <Store size={18} />
              Vitrine
            </Link>
            <Button onClick={() => window.open("https://wa.me/5541999999999", "_blank")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Fale conosco
            </Button>
          </nav>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground" aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Contato
              </button>
              <Link to="/vitrine" className="text-foreground hover:text-primary transition-colors font-medium text-left flex items-center gap-1">
                <Store size={18} />
                Vitrine
              </Link>
              <Button onClick={() => window.open("https://wa.me/5541999999999", "_blank")} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Fale conosco
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;