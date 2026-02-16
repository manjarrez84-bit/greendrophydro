import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Consume mucha electricidad la bomba de aire?",
    a: "No, la bomba es de ultra bajo consumo (2.5W), similar a un cargador de celular. Puede estar encendida 24/7 sin afectar significativamente tu recibo de luz."
  },
  {
    q: "¿Qué mantenimiento requiere el sistema?",
    a: "Principalmente revisar el nivel de agua cada 2-3 días y cambiar la solución nutritiva por completo cada 2 semanas para asegurar que las plantas tengan todos los minerales necesarios."
  },
  {
    q: "¿Es ruidoso el sistema?",
    a: "Nuestras bombas están diseñadas para ser silenciosas. Emiten un ligero zumbido similar al de una pecera pequeña, ideal para interiores."
  },
  {
    q: "¿Puedo cultivar tomates o chiles?",
    a: "Sí, el sistema DWC es excelente para plantas de fruto, aunque requieren un poco más de espacio y soporte (tutores) a medida que crecen."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600">Todo lo que necesitas saber antes de empezar tu huerto.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-2xl border-none shadow-sm">
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;