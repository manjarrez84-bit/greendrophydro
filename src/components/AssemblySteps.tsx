import { Settings, Droplets, Sprout, Zap } from "lucide-react";

const steps = [
  {
    title: "Prepara el Equipo",
    desc: "Conecta la bomba de aire a la manguera y la piedra difusora.",
    icon: Settings
  },
  {
    title: "Agua y Nutrientes",
    desc: "Llena el reservorio y añade la solución nutritiva HAGE 3.",
    icon: Droplets
  },
  {
    title: "Coloca la Planta",
    desc: "Inserta la canastilla con arcilla y tu plántula en la tapa.",
    icon: Sprout
  },
  {
    title: "Conecta 24/7",
    desc: "Enciende la bomba. ¡Tu huerto ya está funcionando!",
    icon: Zap
  }
];

const AssemblySteps = () => {
  return (
    <section id="ensamblaje" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm tracking-[0.3em] uppercase mb-2 block">Guía Rápida</span>
          <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Ensamblaje en 4 Pasos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tan fácil que cualquiera puede hacerlo. Sin herramientas complicadas.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-100 -translate-y-1/2 -z-0" />
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:border-green-500 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-xl shadow-green-100/50">
                <step.icon size={32} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-900 text-white text-xs font-black flex items-center justify-center border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-green-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-green-900">¿Tienes dudas con tu kit?</h4>
            <p className="text-green-800/70">Asesoría personalizada incluida vía WhatsApp para clientes en Monterrey.</p>
          </div>
          <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-green-700 transition-all flex items-center gap-2 shadow-xl shadow-green-200">
            Contactar Asesor
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssemblySteps;