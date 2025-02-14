
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-semibold text-primary">
            #ParaTodosVerem
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#como-usar" className="nav-link">
              Como Usar
            </a>
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
            <a href="#doacoes" className="nav-link">
              Doações
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#como-usar"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Como Usar
              </a>
              <a
                href="#sobre"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#doacoes"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Doações
              </a>
              <a
                href="#contato"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
