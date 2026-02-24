import React from "react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img 
                src="/logo_green_drop.png" 
                alt="Green Drop Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-green-900 leading-none tracking-tight">GREEN DROP</span>
              <span className="text-[10px] font-bold text-green-600 tracking-[0.2em] uppercase">Hydro Systems</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-600 uppercase tracking-wider">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-green-600 transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('comparativa')} className="hover:text-green-600 transition-colors">Beneficios</button>
            <button onClick={() => scrollToSection('ensamblaje')} className="hover:text-green-600 transition-colors">Ensamblaje</button>
            <button onClick={() => scrollToSection('cuidados')} className="hover:text-green-600 transition-colors">Cuidados</button>
          </div>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 uppercase tracking-tighter"
          >
            Pedir en Monterrey
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;