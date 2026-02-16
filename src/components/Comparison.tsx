import { XCircle, CheckCircle2 } from "lucide-react";

const Comparison = () => {
  return (
    <section id="comparativa" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            ¡Adiós Tierra, <span className="text-green-600">Hola Futuro!</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre por qué la hidroponía DWC es la forma más eficiente de cultivar en casa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-orange-50 p-8 rounded-[2rem] border-2 border-orange-100">
            <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center gap-2">
              <XCircle className="text-orange-500" /> Cultivo Tradicional
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-orange-900/70">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                Gasto excesivo de agua (desperdicio por filtración)
              </li>
              <li className="flex items-start gap-3 text-orange-900/70">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                Presencia de plagas y enfermedades del suelo
              </li>
              <li className="flex items-start gap-3 text-orange-900/70">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                Crecimiento más lento y dependiente del clima
              </li>
              <li className="flex items-start gap-3 text-orange-900/70">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                Requiere mucho espacio y mantenimiento constante
              </li>
            </ul>
          </div>

          <div className="bg-green-600 p-8 rounded-[2rem] text-white shadow-2xl shadow-green-200 relative">
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-green-900 font-black px-4 py-1 rounded-full text-sm rotate-12">
              90% MENOS AGUA
            </div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-green-200" /> Cultivo Green Drop
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-50">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-300" />
                Crecimiento 2x más rápido (Cosecha en 3 semanas)
              </li>
              <li className="flex items-start gap-3 text-green-50">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-300" />
                Sin pesticidas ni herbicidas (100% Limpio)
              </li>
              <li className="flex items-start gap-3 text-green-50">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-300" />
                Ideal para departamentos y espacios reducidos
              </li>
              <li className="flex items-start gap-3 text-green-50">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-300" />
                Control total de nutrientes y pH
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;