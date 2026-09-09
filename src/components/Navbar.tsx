import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (linkPath: string, sectionId: string) => {
    setIsOpen(false); // Close mobile menu

    if (location.pathname === linkPath) {
      // If already on the target page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate first, then scroll
      navigate(linkPath);
      // Use a timeout to ensure navigation completes and component renders before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page to render
    }
  };

  const navLinks = [
    { name: "Inicio", id: "inicio", path: "/" },
    { name: "Beneficios", id: "comparativa", path: "/" },
    { name: "Crecimiento", id: "velocidad-crecimiento", path: "/" },
    { name: "Ensamblaje", id: "ensamblaje", path: "/" },
    { name: "El Kit", id: "el-kit", path: "/" },
    { name: "Cuidados", id: "cuidados", path: "/" },
    { name: "FAQ", id: "preguntas-frecuentes", path: "/" },
    { name: "Sobre Nosotros", id: "about-us-hero", path: "/sobre-nosotros" }, // Link to About Us page
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavLinkClick('/', 'inicio')}>
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <img 
                src="/logo_green_drop.png" 
                alt="Green Drop Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-green-900 leading-none tracking-tight">GREEN DROP</span>
              <span className="text-[8px] font-bold text-green-600 tracking-[0.2em] uppercase">Hydro Systems</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-600 uppercase tracking-wider">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavLinkClick(link.path, link.id)} 
                className="hover:text-green-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavLinkClick('/', 'contacto')}
              className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 uppercase tracking-tighter"
            >
              Pedir en Monterrey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-green-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.path, link.id)}
                className="block w-full text-left px-4 py-3 text-base font-bold text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => handleNavLinkClick('/', 'contacto')}
                className="w-full bg-green-600 text-white px-6 py-4 rounded-xl text-base font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 uppercase"
              >
                Pedir en Monterrey
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;