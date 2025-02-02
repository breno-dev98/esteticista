import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid para informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-300">Rua Exemplo, 123 - Centro</p>
              </li>
              <li>
                <p className="text-gray-300">(11) 1234-5678</p>
              </li>
              <li>
                <p className="text-gray-300">contato@empresa.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Créditos */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Adrielle Oliveira Estética. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
