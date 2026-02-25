const GrowthTimeline = () => {
  const weeks = [
    { 
      week: "Semana 0", 
      title: "¡La Semilla!", 
      desc: "Inicio del ciclo de vida en el sustrato inerte.", 
      img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      week: "Semana 1", 
      title: "Primeras Raíces", 
      desc: "Explosión radicular buscando el agua oxigenada.", 
      img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      week: "Semana 2", 
      title: "Explosión de Vida", 
      desc: "Crecimiento foliar acelerado gracias a los nutrientes.", 
      img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      week: "Semana 3", 
      title: "¡Cosecha!", 
      desc: "Producto fresco, crujiente y 100% libre de tierra.", 
      img: "https://images.unsplash.com/photo-1615485240384-552e4007b974?auto=format&fit=crop&q=80&w=400" 
    }
  ];

  return (
    <section className="py-24 bg-green-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Velocidad de Crecimiento</h2>
          <p className="text-green-200 max-w-2xl mx-auto text-lg">Mira cómo evoluciona tu cultivo en tiempo récord con nuestro sistema DWC.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-green-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {weeks.map((item, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border-4 border-green-800 group-hover:border-green-400 transition-all duration-500 shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-green-600 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {item.week}
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-black text-xl mb-2 group-hover:text-green-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-green-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;