import { useState, useCallback } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope } from "react-icons/fa"; // Adicionando ícones

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Atualiza o item ativo
    }
  }, []);

  const handleClickOutside = (e) => {
    if (!e.target.closest('.sheet-content')) {
      setIsOpen(false); // Fecha o menu
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full border-b shadow-sm bg-primary md:text-xl dark:bg-gray-900 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 md:py-6 px-2">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl text-center text-white font-bold">
          Adrielle Oliveira Estética
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden text-white font-medium md:flex gap-6">
          <button
            onClick={() => scrollToSection('home')} // Início
            className={`hover:underline  ${activeSection === 'home' ? 'font-bold underline' : ''}`}
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className={`hover:underline ${activeSection === 'servicos' ? 'font-bold underline' : ''}`}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className={`hover:underline ${activeSection === 'sobre' ? 'font-bold underline' : ''}`}
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className={`hover:underline ${activeSection === 'contato' ? 'font-bold underline' : ''}`}
          >
            Contato
          </button>
        </nav>

        {/* Menu Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" onClick={handleClickOutside} className="bg-violet-900 text-white">
            {/* Título do Menu */}
            <h2 className="text-2xl font-semibold text-white mb-6">Menu</h2>
            
            <nav className="flex flex-col gap-4 mt-6 items-start px-4">
              <button
                onClick={() => {
                  scrollToSection('home');
                  setIsOpen(false);
                }}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-violet-800 ${activeSection === 'home' ? 'bg-violet-700' : ''}`}
              >
                <FaHome className="mr-3 inline" /> Início
              </button>
              <button
                onClick={() => {
                  scrollToSection('servicos');
                  setIsOpen(false);
                }}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-violet-800 ${activeSection === 'servicos' ? 'bg-violet-700' : ''}`}
              >
                <FaServicestack className="mr-3 inline" /> Serviços
              </button>
              <button
                onClick={() => {
                  scrollToSection('sobre');
                  setIsOpen(false);
                }}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-violet-800 ${activeSection === 'sobre' ? 'bg-violet-700' : ''}`}
              >
                <FaInfoCircle className="mr-3 inline" /> Sobre
              </button>
              <button
                onClick={() => {
                  scrollToSection('contato');
                  setIsOpen(false);
                }}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-violet-800 ${activeSection === 'contato' ? 'bg-violet-700' : ''}`}
              >
                <FaEnvelope className="mr-3 inline" /> Contato
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
