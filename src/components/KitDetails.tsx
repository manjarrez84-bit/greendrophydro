import { CheckCircle2 } from "lucide-react";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";

const components = [
  "Reservorio + Tapa (Durable y Opaco)",
  "Canastilla + Arcilla Expandida",
  "Bomba de Aire Silenciosa",
  "Manguera de Aire de Grado Alimenticio",
  "Piedra de Aire de Alta Difusión",
  "Sobre de Nutrientes Premium"
];

const KitDetails = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="el-kit" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Todo lo que necesitas en un solo paquete
              </h2>
              <div className="grid sm:grid-cols-1 gap-4">
                {components.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-green-100">
                    <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button 
                  onClick={() => scrollToSection('ficha-tecnica', '/')}
                  className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all"
                >
                  Ver Especificaciones Técnicas
                </button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto bg-green-800">
              <img 
                src="/kit-closeup.png" 
                alt="Detalle del Kit Green Drop" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitDetails;