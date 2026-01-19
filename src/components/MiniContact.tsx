import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MiniContact = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Entre em contato
            </h2>
            <p className="text-muted-foreground">
              Estamos prontos para transformar seu projeto em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column - Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border shadow-soft">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <a 
                    href="mailto:silvio@bassanicalegariiluminacao.com.br" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    silvio@bassanicalegariiluminacao.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border shadow-soft">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <a 
                    href="tel:+5541984125653" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (41) 98412-5653
                  </a>
                </div>
              </div>
            </div>

            {/* Right column - CTA card */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-accent p-8 rounded-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Solicite um orçamento
              </h3>
              <p className="text-white/90 mb-6">
                Entre em contato conosco e receba uma proposta personalizada para seu projeto de iluminação.
              </p>
              <a href="https://wa.me/5541984125653" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniContact;
