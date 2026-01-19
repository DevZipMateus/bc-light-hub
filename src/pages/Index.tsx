import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVisionValues from "@/components/MissionVisionValues";
import OurHistory from "@/components/OurHistory";
import Services from "@/components/Services";
import MiniContact from "@/components/MiniContact";
import Manufacturers from "@/components/Manufacturers";
import VitrineSection from "@/components/VitrineSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <MiniContact />
        <Manufacturers />
        <MissionVisionValues />
        <OurHistory />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
