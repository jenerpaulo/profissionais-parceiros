
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Handshake, Users, RefreshCw, Crown, Rocket, ExternalLink } from "lucide-react";

const features = [
  {
    id: 1,
    name: "Conexão Natural",
    description: "Ao oferecer um espaço para múltiplas interações, a rede atrai diversos católicos que encontrarão sua página e conteúdo de forma mais orgânica — como pede o marketing moderno.",
    icon: <Users className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    name: "Construa Fidelidade",
    description: "Sua Página ficará em um espaço exclusivo e aproveitará a frequência das visitas dos membros. Afinal, quem não gosta de achar tudo num só lugar? Mais visitas, mais fidelização, mais negócios. 🤩",
    icon: <RefreshCw className="h-10 w-10 text-white" />
  },
  {
    id: 3,
    name: "Exclusividade",
    description: "Parceiros-Embaixadores terão 2 anos de exclusividade. Valorizamos quem reconhece o potencial da rede desde o início. Após isso, novos parceiros dependerão do equilíbrio entre oferta e demanda.",
    icon: <Crown className="h-10 w-10 text-white" />
  },
  {
    id: 4,
    name: "Mensalidade Zero",
    description: "Se já não bastasse a exclusividade, que tal ainda zerar sua mensalidade a partir de Julho de 2027? Voe ainda mais alto aproveitando o fluxo de católicos sem maiores investimentos. Sua fidelidade recompensada!",
    icon: <Rocket className="h-10 w-10 text-white" />
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-md group h-full">
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-divino-purple to-divino-burgundy rounded-full w-16 h-16 flex items-center justify-center mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-3">{feature.name}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const whatsappLink = "http://wa.me/5511968167007";
  
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Um Conceito <span className="text-divino-purple">Único</span> para Parceiros <span className="text-divino-purple">Seletos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Queremos qualidade, não quantidade. Conheça os benefícios de aderir agora.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg static items-center gap-2"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Tire suas Dúvidas pelo WhatsApp
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
