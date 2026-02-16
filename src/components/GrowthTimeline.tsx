const GrowthTimeline = () => {
  const weeks = [
    { week: "Semana 0", title: "¡La Semilla!", desc: "Inicio del ciclo de vida.", img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400" },
    { week: "Semana 1", title: "Primeras Raíces", desc: "Explosión radicular en el agua.", img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=400" },
    { week: "Semana 2", title: "Explosión de Vida", desc: "Crecimiento foliar acelerado.", img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=400" },
    { week: "Semana 3", title: "¡Lista para Cosechar!", desc: "Producto fresco y nutritivo.", img: "https://images.unsplash.com/photo-1615485240384-552e4007b974?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-24 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Velocidad de Crecimiento</h2>
          <p className="text-green-200 max-w-2xl mx-auto">Mira cómo evoluciona tu cultivo en tiempo récord con nuestro sistema DWC.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {weeks.map((item, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border-2 border-green-700 group-hover:border-green-400 transition-colors">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-green-600 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                  {item.week}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-green-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;