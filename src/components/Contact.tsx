import { Mail, MapPin, Clock, Instagram, Facebook, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para transformar seu projeto em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">E-mail</h3>
                    <a 
                      href="mailto:silvio@bassanicalegariiluminacao.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      silvio@bassanicalegariiluminacao.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Telefone</h3>
                    <a 
                      href="https://wa.me/5541984125653"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (41) 98412-5653
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Capiberibe, 153 loja 02<br />
                      Bairro Santa Quitéria - Curitiba - PR
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Horário de funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a sexta: 9:00 às 18:00<br />
                      Sábado: 9:00 às 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary via-primary to-accent p-8 rounded-lg shadow-medium text-white">
                <h3 className="text-2xl font-bold mb-4">Solicite um orçamento</h3>
                <p className="mb-6 text-white/90">
                  Entre em contato conosco e receba uma proposta personalizada para seu projeto de iluminação.
                </p>
                <Button 
                  onClick={() => window.open("https://wa.me/5541984125653", "_blank")}
                  className="w-full bg-white text-primary hover:bg-white/90 transition-all duration-300"
                  size="lg"
                >
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
                <h3 className="text-xl font-bold mb-6 text-center text-foreground">Siga-nos nas redes sociais</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/bassanicalegariiluminacao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href="https://www.facebook.com/ilumicentercuritiba?locale=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Facebook className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </a>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">@bassanicalegariiluminacao</p>
                  <p className="text-sm text-muted-foreground">Bassani & Calegari Iluminação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
