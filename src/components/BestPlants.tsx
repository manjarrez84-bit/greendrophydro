const plants = [
  { name: "Albahaca", img: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?auto=format&fit=crop&q=80&w=200" },
  { name: "Lechuga", img: "https://images.unsplash.com/photo-1622206141580-579f30d71751?auto=format&fit=crop&q=80&w=200" },
  { name: "Menta", img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=200" },
  { name: "Espinaca", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=200" },
  { name: "Cilantro", img: "https://images.unsplash.com/photo-1588873281272-04997af66383?auto=format&fit=crop&q=80&w=200" },
  { name: "Rúcula", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=200" }
];

const BestPlants = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Mejores Plantas para Principiantes
          </h2>
          <p className="text-gray-600">Perfectas para tu kit DWC. Resultados rápidos y deliciosos.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {plants.map((plant, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all text-center group">
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img src={plant.img} alt={plant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-green-900">{plant.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPlants;