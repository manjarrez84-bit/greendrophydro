import { Droplets, Rocket, Calendar, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  { title: "90% menos agua", icon: Droplets },
  { title: "Crecimiento 2x más rápido", icon: Rocket },
  { title: "Cosecha todo el año", icon: Calendar },
  { title: "Sin pesticidas", icon: ShieldCheck },
  { title: "Más nutrientes", icon: Zap }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
            5 Beneficios de la Hidroponía
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 shadow-inner">
                <benefit.icon size={32} />
              </div>
              <span className="text-sm font-bold text-gray-700 leading-tight">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;