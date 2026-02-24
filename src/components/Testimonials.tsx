import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Garza",
    role: "Cliente en San Pedro",
    content: "Increíble lo rápido que creció mi lechuga. En 3 semanas ya estaba cosechando. El sistema es súper limpio y no hace nada de ruido.",
    stars: 5
  },
  {
    name: "Ana Lucía",
    role: "Entusiasta de la cocina",
    content: "Tener albahaca fresca siempre a la mano cambió mis pastas. El kit es muy fácil de armar, me tomó menos de 10 minutos.",
    stars: 5
  },
  {
    name: "Héctor M.",
    role: "Papá primerizo en huertos",
    content: "A mis hijos les encanta ver cómo crecen las raíces en el agua. Es una excelente forma de enseñarles sobre naturaleza en el depa.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">Lo que dicen nuestros cultivadores</h2>
          <p className="text-gray-600">Únete a la comunidad Green Drop en Monterrey.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-green-50 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 text-green-200" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-green-600 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;