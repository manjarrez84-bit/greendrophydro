import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Sprout, Target, Heart, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Nuestra <span className="text-green-600">Historia</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Green Drop nació en Monterrey con una idea simple: reconectar a las personas con su comida a través de la tecnología y la sostenibilidad.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800" 
                    alt="Cultivo hidropónico" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-green-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                  <p className="text-2xl font-black italic">"Cultivando el futuro, hoy."</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">¿Quiénes somos?</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Somos un equipo de entusiastas de la agricultura urbana y la tecnología. En una ciudad tan dinámica como Monterrey, entendemos que el espacio y el tiempo son valiosos. Por eso, diseñamos sistemas que permiten a cualquier persona, sin importar su experiencia, cultivar vegetales frescos y nutritivos en la comodidad de su hogar.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Creemos que la hidroponía no es solo una técnica de cultivo, sino una solución real para los desafíos ambientales actuales, ahorrando hasta un 90% de agua en comparación con la agricultura tradicional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Misión</h3>
                <p className="text-gray-500 text-sm">Empoderar a las familias urbanas para que produzcan sus propios alimentos de forma limpia y eficiente.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sprout size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sostenibilidad</h3>
                <p className="text-gray-500 text-sm">Promover el uso responsable del agua y la reducción de pesticidas en nuestra alimentación.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comunidad</h3>
                <p className="text-gray-500 text-sm">Brindar asesoría personalizada para asegurar el éxito de cada uno de nuestros cultivadores.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Calidad</h3>
                <p className="text-gray-500 text-sm">Utilizar materiales de grado alimenticio y tecnología de punta en cada kit que entregamos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <MadeWithDyad />
    </div>
  );
};

export default About;