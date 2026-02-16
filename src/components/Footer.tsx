import React from "react";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo_green_drop.png" 
                alt="Green Drop Logo" 
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold text-white tracking-tight">GREEN DROP</span>
            </div>
            <p className="max-w-sm mb-8">
              Llevamos la agricultura del futuro a tu hogar. Sistemas hidropónicos eficientes, sostenibles y fáciles de usar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-500 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Facebook /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Soporte</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><Phone size={16} /> +52 81 1234 5678</li>
              <li className="flex items-center gap-2"><Mail size={16} /> soporte@greendrop.com</li>
              <li><a href="#" className="hover:text-white transition-colors">Manuales PDF</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tutoriales</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Green Drop Hydroponics. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;