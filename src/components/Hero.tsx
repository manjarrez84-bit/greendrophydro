import { ArrowRight, Tag } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold mb-6 animate-bounce">
              <Tag size={16} /> LANZAMIENTO: 20% OFF EN TU PRIMER KIT
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              DE TU HUERTO <br />
              <span className="text-green-600">A TU MESA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Frescura garantizada. Cultiva tus propios alimentos de forma limpia y rápida con nuestro sistema de Hidroponía DWC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-200">
                Comprar Ahora <ArrowRight size={20} />
              </button>
              <a 
                href="/Kit_de_Marketing_Completo_Green_Drop_Hydroponics.pdf" 
                target="_blank"
                className="bg-white text-green-700 border-2 border-green-100 px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-50 transition-all text-center"
              >
                Ver Manual PDF
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-white p-4 rounded-[2.5rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800" 
                alt="Green Drop Lifestyle" 
                className="rounded-[2rem] w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;