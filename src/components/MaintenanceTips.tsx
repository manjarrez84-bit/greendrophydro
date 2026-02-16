import { Droplets, Sun, RefreshCw, Thermometer, AlertTriangle, Sparkles, Sprout } from "lucide-react";

const MaintenanceTips = () => {
  return (
    <section id="cuidados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">Cuidados y Mantenimiento</h2>
          <p className="text-gray-600">Sigue estas reglas de oro para una cosecha exitosa.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
              <Sparkles className="text-green-500" /> Rutina de Cuidado
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Droplets size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Nivel de Agua</h4>
                  <p className="text-sm text-gray-500">Mantener siempre el nivel indicado.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl"><Sun size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Luz Directa</h4>
                  <p className="text-sm text-gray-500">6-8 horas diarias de sol.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl"><RefreshCw size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Renovación</h4>
                  <p className="text-sm text-gray-500">Cambiar solución cada 2 semanas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl"><Thermometer size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Temperatura</h4>
                  <p className="text-sm text-gray-500">Ideal entre 18-24°C.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-[2rem] border-2 border-green-100">
            <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="text-yellow-600" /> Consejos Importantes
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">!</div>
                <p className="text-gray-700 font-medium">Controlar el pH regularmente para asegurar la absorción de nutrientes.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">!</div>
                <p className="text-gray-700 font-medium">Realizar una limpieza profunda del equipo entre cada ciclo de cultivo.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">!</div>
                <p className="text-gray-700 font-medium">Elegir plantas adecuadas para hidroponía (ver lista arriba).</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceTips;