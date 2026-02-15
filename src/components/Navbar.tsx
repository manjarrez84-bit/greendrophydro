import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-green-600 h-8 w-8" />
            <span className="text-xl font-bold text-green-900 tracking-tight">GREEN DROP</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#inicio" className="hover:text-green-600 transition-colors">Inicio</a>
            <a href="#como-funciona" className="hover:text-green-600 transition-colors">Cómo Funciona</a>
            <a href="#el-kit" className="hover:text-green-600 transition-colors">El Kit</a>
            <a href="#cuidados" className="hover:text-green-600 transition-colors">Cuidados</a>
          </div>
          <button className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-200">
            Comprar Ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;