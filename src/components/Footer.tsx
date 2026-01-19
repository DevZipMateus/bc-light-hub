import { Mail, MapPin, Clock } from "lucide-react";

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
              <a href="mailto:silvio@bassanicalegariiluminacao.com.br" className="hover:text-primary transition-colors">
                silvio@bassanicalegariiluminacao.com.br
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <span>Rua Capiberibe, 153 loja 02 - Bairro Santa Quitéria</span>
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
            <div className="flex gap-4 items-center">
              <a 
                href="https://www.instagram.com/bassanicalegariiluminacao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none">
                  <defs>
                    <linearGradient id="instagram-bg" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FED576" />
                      <stop offset="10%" stopColor="#F47133" />
                      <stop offset="40%" stopColor="#BC3081" />
                      <stop offset="70%" stopColor="#4C63D2" />
                      <stop offset="100%" stopColor="#4C63D2" />
                    </linearGradient>
                  </defs>
                  <rect width="48" height="48" rx="11" fill="url(#instagram-bg)"/>
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
                <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#1877F2"/>
                  <path d="M32.5 25.5H27.5V42H21V25.5H17V20H21V16.5C21 12.5 23.5 9 28.5 9C30.5 9 32 9.5 32 9.5V14.5H29.5C27.5 14.5 27 15.5 27 17V20H32L32.5 25.5Z" fill="white"/>
                </svg>
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
