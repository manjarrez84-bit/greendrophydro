import React from "react";

const teamMembers = [
  {
    name: "Juan Pérez",
    role: "Fundador & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    description: "Visionario detrás de Green Drop, apasionado por la agricultura sostenible y la tecnología hidropónica."
  },
  {
    name: "María García",
    role: "Directora de Operaciones",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
    description: "Encargada de que cada kit llegue a tiempo y en perfectas condiciones, optimizando procesos y logística."
  },
  {
    name: "Carlos Sánchez",
    role: "Especialista en Cultivo",
    image: "https://images.unsplash.com/photo-1507003211169-e695c31a617a?auto=format&fit=crop&q=80&w=300",
    description: "Nuestro experto en plantas, ofrece asesoría y desarrolla las mejores soluciones nutritivas para tus cultivos."
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detrás de cada kit Green Drop, hay un equipo dedicado a tu éxito.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col items-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-green-100 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-700 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;