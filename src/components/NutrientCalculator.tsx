import React, { useState } from "react";
import { Calculator, Droplets, Info } from "lucide-react";

const NutrientCalculator = () => {
  const [liters, setLiters] = useState<number>(20);
  
  // Assuming 5ml per 10 liters as a standard dose for HAGE 3
  const dosage = (liters / 10) * 5;

  return (
    <section id="calculadora" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-4 uppercase tracking-widest">
                Herramienta Gratuita
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Calculadora de Nutrientes</h2>
              <p className="text-gray-600 mb-6">
                Calcula la dosis exacta de solución nutritiva HAGE 3 para tu reservorio. Evita el desperdicio y asegura el crecimiento óptimo.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-white p-3 rounded-xl border border-gray-100">
                <Info size={16} className="text-blue-500 shrink-0" />
                <span>Dosis recomendada: 5ml por cada 10 litros de agua.</span>
              </div>
            </div>
            
            <div className="w-full md:w-80 bg-white p-8 rounded-3xl shadow-xl border border-green-50">
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Litros de Agua</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={liters}
                    onChange={(e) => setLiters(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-none text-lg font-bold"
                  />
                  <Droplets className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100 text-center">
                <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Dosis HAGE 3</span>
                <div className="text-4xl font-black text-green-600 flex items-center justify-center gap-2">
                  {dosage.toFixed(1)} <span className="text-xl">ml</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all">
                <Calculator size={18} /> Recalcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutrientCalculator;