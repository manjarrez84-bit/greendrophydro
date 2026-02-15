import { Droplets, Zap, Sprout } from "lucide-react";

const steps = [
  {
    title: "Llena el Cubo",
    description: "Añade agua limpia al reservorio siguiendo las marcas de nivel.",
    icon: Droplets,
    color: "bg-blue-500"
  },
  {
    title: "Nutrientes y Planta",
    description: "Añade la solución nutritiva y coloca tu planta en la canastilla.",
    icon: Sprout,
    color: "bg-green-500"
  },
  {
    title: "Conecta la Bomba",
    description: "Enciende el sistema de aire para oxigenar las raíces 24/7.",
    icon: Zap,
    color: "bg-yellow-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo empezar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tres simples pasos para iniciar tu propio huerto hidropónico en casa.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-6xl font-black text-gray-50 group-hover:text-green-50 transition-colors">
                0{index + 1}
              </div>
              <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6`}>
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;