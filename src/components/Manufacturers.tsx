const Manufacturers = () => {
  const categories = [
    {
      title: "Perfil",
      brands: "B&Cllu • Power Lume • Perfil e Led • Led Art • MisterLed • Pix • Moon • Usina"
    },
    {
      title: "Decorativo",
      brands: "SINDORA • SPOT LINE • SL IMPORT • NITROLUX • MONTARE • TKS • Vivend • Spotlux • Nova Home • Accord • Revoluz • Studioluce • Foco Metallo • Old Artizan • Munclair • Hewy • Attimo • Astraled • Bella Itália • Classic Lar • DNA Lustres • Itamonte • +Luz • Romalux • Santa Fé • Quarto Crescente • Skylight • Nordecor • GNH • Ratan • Usina Decor • Cinderela • Fox • All Lux"
    },
    {
      title: "Técnico",
      brands: "Stella • Power Lume • Impacto • Acend • Agile • Hewy • Femarte • Biancoluce • Belly • Attimo • Interlight • Romalux • LED ART • Vivend • Revoluz • Luminatti • Weg • Incolustre • Nordecor • SaveEnergy • Moon • Pix • Hled • Blumenau • Astraled • Gaya • Opus • Intral • Opl"
    },
    {
      title: "Tela tensionada",
      brands: "Alumiframe • Zuhflex"
    }
  ];

  return (
    <section id="fabricantes" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Fabricantes
            </h2>
            <p className="text-muted-foreground">
              Trabalhamos com as melhores marcas do mercado
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary mb-2">{category.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.brands}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;
