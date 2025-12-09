import { Button } from "@/components/ui/button";
import { Store, ShoppingBag, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
            <Store className="h-10 w-10 text-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça nossa vitrine online
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Explore nosso catálogo completo de produtos e soluções em iluminação. 
            Descubra perfis de LED, luminárias, pendentes, arandelas e muito mais, 
            tudo com a qualidade e o acabamento que só a B & C oferece.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Produtos exclusivos</h3>
              <p className="text-sm text-muted-foreground">
                Linha completa de iluminação com fabricação própria
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Visualize em detalhes</h3>
              <p className="text-sm text-muted-foreground">
                Fotos e especificações técnicas de cada produto
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Store className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fácil navegação</h3>
              <p className="text-sm text-muted-foreground">
                Encontre rapidamente o que procura
              </p>
            </div>
          </div>

          <Link to="/vitrine">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium hover:shadow-lg transition-all duration-300 text-lg px-10 py-6 group"
            >
              <Store className="mr-2 h-5 w-5" />
              Acessar vitrine
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
