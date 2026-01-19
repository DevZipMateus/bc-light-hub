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
                    <radialGradient id="instagram-radial" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#FFDD55" />
                      <stop offset="10%" stopColor="#FFDD55" />
                      <stop offset="50%" stopColor="#FF543E" />
                      <stop offset="100%" stopColor="#C837AB" />
                    </radialGradient>
                    <radialGradient id="instagram-radial-2" cx="107.5%" cy="0%" r="150%">
                      <stop offset="0%" stopColor="#406ADC" />
                      <stop offset="50%" stopColor="#6A45BE" />
                      <stop offset="100%" stopColor="#6A45BE" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#instagram-radial)"/>
                  <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#instagram-radial-2)"/>
                  <circle cx="24" cy="24" r="9" stroke="white" strokeWidth="3" fill="none"/>
                  <circle cx="36" cy="12" r="2.5" fill="white"/>
                  <rect x="6" y="6" width="36" height="36" rx="9" stroke="white" strokeWidth="3" fill="none"/>
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
