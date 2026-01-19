import { Zap, Frame, Wrench, CheckCircle, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em iluminação, da fabricação à instalação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Fabricação própria</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Linha fabril dedicada à produção de perfis de LED sob medida e soluções personalizadas em iluminação.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Pendentes com design exclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Arandelas personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Luminárias lineares sob medida</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Perfis de LED personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Acabamento refinado e qualidade luminotécnica</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <Frame className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Telas tensionadas iluminadas</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comercialização e instalação especializada de telas tensionadas iluminadas, do projeto à execução final.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Projeto completo e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Fornecimento de materiais de qualidade</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Instalação técnica especializada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Acabamento refinado e precisão</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Iluminação LED difusa e uniforme</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-lg shadow-soft border border-border">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Instalação especializada</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Bassani & Calegari Iluminação atua com excelência na instalação de telas tensionadas iluminadas, uma solução moderna e de alto padrão técnico, cada vez mais utilizada em projetos residenciais, corporativos e comerciais.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Essa tecnologia combina estrutura em alumínio, membrana translúcida tensionada e iluminação LED difusa, proporcionando um efeito visual uniforme, sofisticado e funcional. Porém, sua instalação exige precisão e conhecimento técnico — fatores que fazem toda a diferença no resultado final.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Execução segura e limpa com acabamento refinado</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Tensionamento uniforme e distribuição homogênea da luz</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Integração perfeita com o projeto arquitetônico</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Cumprimento rigoroso de prazos e padrões de qualidade</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 text-center">
              <a href="https://wa.me/5541999287670" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale pelo WhatsApp
                </Button>
              </a>
              <span className="text-muted-foreground text-lg">(41) 9 9928-7670 - Silvio Calegari</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
