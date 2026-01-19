import { Mail, MapPin, Clock, Phone } from "lucide-react";
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
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.instagram.com/bassanicalegariiluminacao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg className="h-14 w-14" viewBox="0 0 48 48" fill="none">
                      <defs>
                        <linearGradient id="instagram-bg-contact" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FED576" />
                          <stop offset="10%" stopColor="#F47133" />
                          <stop offset="40%" stopColor="#BC3081" />
                          <stop offset="70%" stopColor="#4C63D2" />
                          <stop offset="100%" stopColor="#4C63D2" />
                        </linearGradient>
                      </defs>
                      <rect width="48" height="48" rx="11" fill="url(#instagram-bg-contact)"/>
                      <rect x="8" y="8" width="32" height="32" rx="8" stroke="white" strokeWidth="3" fill="none"/>
                      <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="3" fill="none"/>
                      <circle cx="35" cy="13" r="2.5" fill="white"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/ilumicentercuritiba?locale=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg className="h-14 w-14" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="22" fill="#1877F2"/>
                      <path d="M32.5 25.5H27.5V42H21V25.5H17V20H21V16.5C21 12.5 23.5 9 28.5 9C30.5 9 32 9.5 32 9.5V14.5H29.5C27.5 14.5 27 15.5 27 17V20H32L32.5 25.5Z" fill="white"/>
                    </svg>
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
