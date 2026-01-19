import { Layers, Sparkles, Settings, Frame } from "lucide-react";

const Manufacturers = () => {
  const categories = [
    {
      title: "Perfil",
      icon: Layers,
      brands: "B&Cllu • Power Lume • Perfil e Led • Led Art • MisterLed • Pix • Moon • Usina"
    },
    {
      title: "Decorativo",
      icon: Sparkles,
      brands: "SINDORA • SPOT LINE • SL IMPORT • NITROLUX • MONTARE • TKS • Vivend • Spotlux • Nova Home • Accord • Revoluz • Studioluce • Foco Metallo • Old Artizan • Munclair • Hewy • Attimo • Astraled • Bella Itália • Classic Lar • DNA Lustres • Itamonte • +Luz • Romalux • Santa Fé • Quarto Crescente • Skylight • Nordecor • GNH • Ratan • Usina Decor • Cinderela • Fox • All Lux"
    },
    {
      title: "Técnico",
      icon: Settings,
      brands: "Stella • Power Lume • Impacto • Acend • Agile • Hewy • Femarte • Biancoluce • Belly • Attimo • Interlight • Romalux • LED ART • Vivend • Revoluz • Luminatti • Weg • Incolustre • Nordecor • SaveEnergy • Moon • Pix • Hled • Blumenau • Astraled • Gaya • Opus • Intral • Opl"
    },
    {
      title: "Tela tensionada",
      icon: Frame,
      brands: "Alumiframe • Zuhflex"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Fabricantes
            </h2>
            <p className="text-muted-foreground">
              Trabalhamos com as melhores marcas do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg border border-border shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {category.brands}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;
