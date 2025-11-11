import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Sobre a B & C
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excelência em iluminação com soluções personalizadas e compromisso com a qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">Missão</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Atender com qualidade e comprometimento, oferecendo soluções personalizadas e adequadas ao perfil de cada cliente.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">Visão</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Ser reconhecida como uma empresa de excelência em todas as etapas — do início do projeto à entrega final — alcançando resultados sustentáveis e saudáveis, com foco na inovação, nas novas tecnologias e nas tendências do mercado.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">Valores</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Honestidade, comprometimento e pontualidade nas relações com clientes, fornecedores e parceiros.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-8 md:p-12 rounded-lg border border-border">
            <p className="text-lg text-foreground leading-relaxed text-center">
              A <span className="font-bold text-primary">Bassani & Calegari Iluminação</span> conta com uma linha fabril própria, dedicada à produção de perfis de LED sob medida e à criação de soluções personalizadas em iluminação. Produzimos pendentes, arandelas e luminárias lineares com acabamento refinado, qualidade luminotécnica e design versátil, adaptáveis a diferentes estilos e ambientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
