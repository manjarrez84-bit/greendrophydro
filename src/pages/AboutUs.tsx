import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Lightbulb, HeartHandshake, Target, Award, ArrowRight } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import TeamSection from "@/components/TeamSection";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import BackToTopButton from "@/components/BackToTopButton"; // Import the new component

const AboutUs = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900 scroll-smooth">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="about-us-hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-green-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Nuestra Historia <br />
              <span className="text-green-600">Green Drop Hydroponics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformando la forma en que cultivas tus alimentos, un hogar a la vez.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1518837695005-2083293ca604?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hydroponic farm" 
                  className="rounded-3xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                  Nuestra Misión
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  En Green Drop Hydroponics, creemos que todos merecen acceso a alimentos frescos, saludables y cultivados de manera sostenible. Nuestra misión es empoderar a las personas para que cultiven sus propios alimentos en casa, sin importar el espacio o la experiencia.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ofrecemos sistemas hidropónicos DWC (Deep Water Culture) fáciles de usar, eficientes y diseñados para maximizar el crecimiento de tus plantas con un mínimo esfuerzo. Queremos hacer de la jardinería hidropónica una realidad accesible para todos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                Nuestros Valores
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Principios que guían todo lo que hacemos en Green Drop.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <Leaf size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sostenibilidad</h3>
                <p className="text-gray-600">
                  Promovemos prácticas de cultivo que ahorran agua y reducen el impacto ambiental.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovación</h3>
                <p className="text-gray-600">
                  Buscamos constantemente mejorar nuestros sistemas para ofrecer la mejor experiencia.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidad</h3>
                <p className="text-gray-600">
                  Apoyamos a nuestros cultivadores con asesoría y recursos para su éxito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                ¿Por Qué Elegir Green Drop?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                La diferencia está en la calidad, el soporte y los resultados.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enfoque en el Usuario</h3>
                  <p className="text-gray-700">
                    Diseñamos nuestros kits pensando en la facilidad de uso para principiantes y expertos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-700">
                    Utilizamos materiales duraderos y seguros para tus alimentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Call to Action Section */}
        <section className="py-24 bg-green-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">
              ¡Únete a la Revolución Verde!
            </h2>
            <p className="text-green-100 text-lg mb-10">
              ¿Listo para transformar tu forma de cultivar? Explora nuestros kits y comienza tu viaje hidropónico hoy mismo.
            </p>
            <button 
              onClick={() => scrollToSection('contacto', '/')}
              className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-200 mx-auto"
            >
              Comprar Ahora <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
      <BackToTopButton /> {/* Add the BackToTopButton here */}
    </div>
  );
};

export default AboutUs;