
import React from 'react';
import PartnerTextCarousel from './PartnerTextCarousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const UrgencySection = () => {
  const isMobile = useIsMobile();
  
  // List of Catholic partner organizations
  const partners = [
    "Psicólogos",
    "Advogados",
    "Nutricionistas",
    "Pediatras",
    "Ginecologistas",
    "Fonoaudiológos",
    "Contadores",
    "Terapeutas",
    "Psiquiatras"
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* For desktop: carousel on the left side */}
          {!isMobile && (
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <PartnerTextCarousel partners={partners} interval={2500} />
            </div>
          )}
          
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif">
              Limite de <span className="text-purple-400">20 Parceiros</span>.
            </h2>    
            
            {/* For mobile: carousel after the title */}
            {isMobile && (
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                <PartnerTextCarousel partners={partners} interval={2500} />
              </div>
            )}
            
            <p className="text-lg mb-6 text-gray-700">
              Existem milhares de profissionais católicos no Brasil, mas não queremos ser um espoaço onde só aparece quem paga caro por propaganda.              
            </p>
            
            <p className="text-lg mb-8 text-gray-700">
             Na rede, os membros saberão que temos parceiros que vivem e defendem sua fé também no trabalho. Por isso, temos convicção de que escolherão você em primeiro lugar
            </p>
            
            <div className="flex items-center mb-10">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <span className="text-3xl font-bold text-purple-500">20</span>
              </div>
              <span className="text-xl font-medium text-gray-700">Parceiros por Categoria </span>
            </div>
            
            <Button 
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-6 text-lg flex items-center gap-2"
              onClick={scrollToPricing}
            >
              Garanta sua Vaga
              <ExternalLink size={16} />
            </Button>                   
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencySection;
