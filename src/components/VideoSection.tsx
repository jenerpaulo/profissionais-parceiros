
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const VideoSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="video" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="space-y-4">
          {/* Title section - always at the top */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium w-fit">
              <Video size={14} />
              <span>Posicionamento no Google</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Deixe a captação de <span className="text-divino-purple"> Fluxo</span> com a gente!
            </h2>
          </div>
          
          {/* Image - shows below title on mobile, to the right on desktop */}
          <div className="md:hidden relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            <img alt="Posicionamento Google" src="/lovable-uploads/336d62ea-22aa-46a1-9a12-7c6748232b7e.png" className="w-full h-full object-contain" />
          </div>
          
          {/* Text and image container for desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-2">
            {/* Text content */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Digite "Namoro Católico" no Google. O primeiro resultado é fruto do trabalho da nossa agência. O mesmo estamos aplicando na Católicos Online, com centenas (ou milhares) de palavras-chave mapeadas para ranquear no topo e atrair o público certo.</p>
              <p className="text-lg text-gray-600">
              Em poucos meses, os resultados já começarão a aparecer. E desde já, contamos com o tráfego e a autoridade do Namoro Católico para impulsionar acessos à nova rede.


              </p>
              
              <div>
                <Button 
                  className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-2"
                  onClick={scrollToPricing}
                >
                  Não hesite, estamos no WhatsApp!
                </Button>
              </div>
            </div>
            
            {/* Image - only shown on desktop */}
            <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <img alt="Posicionamento Google" src="/lovable-uploads/336d62ea-22aa-46a1-9a12-7c6748232b7e.png" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
