import { Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#37637C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de contato */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:simone@ilumicenter.com.br" className="hover:text-primary transition-colors">
                simone@ilumicenter.com.br
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <span>Rua Capiberibe, 153 loja 02</span>
            </div>
          </div>

          {/* Horário de funcionamento */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Horário de funcionamento</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p>Segunda a sexta: 9:00 às 18:00</p>
                <p>Sábado: 9:00 às 14:00</p>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/bassanicalegariiluminacao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/ilumicentercuritiba?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} B & C - Tudo em iluminação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
