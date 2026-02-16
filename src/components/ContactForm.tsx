import { MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">
                ¿Listo para empezar <br />
                <span className="text-green-400">tu cosecha?</span>
              </h2>
              <p className="text-green-100 text-lg mb-8">
                Estamos en Monterrey, N.L. Realizamos envíos locales y asesoría personalizada para que tu primera cosecha sea un éxito total.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <span className="font-bold">WhatsApp: +52 81 1234 5678</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wider">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 transition-all outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wider">WhatsApp / Teléfono</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 transition-all outline-none" placeholder="81..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wider">Mensaje</label>
                  <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 transition-all outline-none h-32" placeholder="Me interesa el kit con 20% de descuento..."></textarea>
                </div>
                <button className="w-full bg-green-600 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-100">
                  Enviar Pedido <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;