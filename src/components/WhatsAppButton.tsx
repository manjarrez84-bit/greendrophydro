import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "528112345678"; // Reemplazar con el número real
  const message = encodeURIComponent("Hola Green Drop! Me interesa el kit hidropónico con el 20% de descuento.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        ¿Dudas? Escríbenos
      </span>
    </a>
  );
};

export default WhatsAppButton;