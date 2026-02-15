import { Sun, Thermometer, FlaskConical, RefreshCw } from "lucide-react";

const tips = [
  {
    title: "Luz Directa",
    info: "6-8 horas diarias",
    icon: Sun,
    desc: "Esencial para el crecimiento vigoroso."
  },
  {
    title: "Temperatura",
    info: "18-24°C",
    icon: Thermometer,
    desc: "Rango ideal para la solución nutritiva."
  },
  {
    title: "Control pH",
    info: "Regularmente",
    icon: FlaskConical,
    desc: "Mantén el equilibrio para la absorción."
  },
  {
    title: "Renovación",
    info: "Cada 2 semanas",
    icon: RefreshCw,
    desc: "Cambia la solución para evitar carencias."
  }
];

const MaintenanceTips = () => {
  return (
    <section id="cuidados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cuidados y Mantenimiento</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Sigue estas recomendaciones para asegurar una cosecha exitosa y saludable.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="text-center p-6 border border-green-50 rounded-2xl hover:border-green-200 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
                <tip.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{tip.title}</h3>
              <p className="text-green-600 font-semibold mb-3">{tip.info}</p>
              <p className="text-sm text-gray-500">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceTips;