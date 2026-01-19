import { Target, Eye, Heart } from "lucide-react";

const MissionVisionValues = () => {
  const cards = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções completas e personalizadas em iluminação, combinando qualidade, inovação e atendimento excepcional para transformar ambientes e superar as expectativas dos nossos clientes."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência no mercado de iluminação, reconhecida pela excelência em fabricação própria de perfis LED e pela especialização em telas tensionadas iluminadas."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Comprometimento com a qualidade, inovação constante, respeito ao cliente, ética nos negócios e paixão por transformar espaços através da luz."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <card.icon className="w-8 h-8 text-primary" />
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
