import { Ruler, Zap, Droplets, Shield } from "lucide-react";

const specs = [
  { label: "Capacidad del Reservorio", value: "20 Litros", icon: Droplets },
  { label: "Consumo Eléctrico", value: "2.5W (Bomba de aire)", icon: Zap },
  { label: "Dimensiones", value: "30cm x 30cm x 40cm", icon: Ruler },
  { label: "Material", value: "HDPE Grado Alimenticio (Opaco)", icon: Shield },
];

const TechnicalSpecs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">Ficha Técnica</h2>
          <p className="text-gray-600">Diseñado para durar y maximizar la eficiencia de tu cultivo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                <spec.icon size={24} />
              </div>
              <span className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">{spec.label}</span>
              <span className="text-xl font-black text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;