import { Target, Eye, Heart } from "lucide-react";

const MissionVisionValues = () => {
  const cards = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções completas em iluminação, unindo fornecimento multimarcas e fabricação própria de perfis de LED sob medida, com qualidade, comprometimento e atendimento especializado. Atender de forma personalizada cada projeto — da concepção à entrega final — garantindo eficiência, estética e satisfação aos nossos clientes.",
      gradient: "from-primary to-primary/80",
      iconBg: "bg-primary"
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecida como referência em iluminação em Curitiba e região metropolitana, destacando-se pela excelência técnica, inovação constante e crescimento sustentável, consolidando a Bassani & Calegari Iluminação como marca forte e confiável no mercado.",
      gradient: "from-accent to-accent/80",
      iconBg: "bg-accent"
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Integridade e transparência em todas as relações comerciais. Comprometimento com qualidade, prazos e resultados. Responsabilidade no cumprimento de acordos e obrigações. Respeito nas relações com clientes, fornecedores e parceiros. Evolução constante, acompanhando tendências e avanços tecnológicos do setor de iluminação.",
      gradient: "from-primary via-primary/90 to-accent",
      iconBg: "bg-primary"
    }
  ];

  return (
    <section id="missao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos pilares
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 group overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.gradient}`}></div>
              
              <div className={`flex items-center justify-center w-16 h-16 ${card.iconBg} rounded-full mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
