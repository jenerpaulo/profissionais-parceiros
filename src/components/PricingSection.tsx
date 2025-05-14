import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const PricingSection = () => {
  return <section id="pricing" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            A Hora é <span className="text-divino-gold">Agora.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">Espaço para apenas 20 Profissionais!</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Basic Plan */}
          <Card className="relative border-divino-purple/20 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <div className="absolute top-0 right-0 bg-divino-purple/10 text-divino-purple text-sm py-1 px-3 rounded-bl-lg font-medium">
              <b>10 vagas</b> disponíveis
            </div>
            <CardHeader className="bg-gradient-to-b from-divino-light to-white text-center">
              <CardTitle className="text-2xl font-playfair">LOTE I</CardTitle>
              <CardDescription>
                Garanta um dos 10 lugares com o valor reduzido!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <span className="text-4xl font-bold text-gray-800">R$75</span>
                  <span className="text-gray-500 text-lg">/mês</span>
                  <div className="text-sm text-divino-purple font-medium mt-2">
                    até 31 de Dezembro
                  </div>
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  <p>A partir de 2026: <span className="font-semibold">R$150/mês</span></p>
                   <p>Taxa de Adesão e Suporte Inicial: <span className="font-semibold">R$99</span></p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-6">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Sua página na rede
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Suporte contínuo
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>                      
                      Sem contrato de fidelidade
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>                      
                      Mensalidade Zero após 2 anos
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <div className="text-center">
                <div className="text-xs text-divino-purple font-medium mb-3">
                  Aproveite, são poucas vagas!
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Right Column - Premium Plan */}
          <Card className="relative border-divino-gold/30 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <div className="absolute top-0 right-0 bg-divino-gold/10 text-divino-gold text-sm py-1 px-3 rounded-bl-lg font-medium">
              <b>10 vagas</b> disponíveis
            </div>
            <CardHeader className="bg-gradient-to-b from-divino-cream to-white text-center">
              <CardTitle className="text-2xl font-playfair">Lote II</CardTitle>
              <CardDescription>Este plano será disponibilizado após expirar as vagas promocionais.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <span className="text-4xl font-bold text-gray-800">R$95</span>
                  <span className="text-gray-500 text-lg">/mês</span>
                  <div className="text-sm text-divino-gold font-medium mt-2">
                    até 31 de Dezembro
                  </div>
                </div>
                <div className="text-gray-500 text-sm mt-2">
                   <p>A partir de 2026: <span className="font-semibold">R$190/mês</span></p>
                   <p>Taxa de Adesão e Suporte Inicial: <span className="font-semibold">R$99</span></p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-6">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-gold/10 text-divino-gold flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Sua página na rede
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-gold/10 text-divino-gold flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Suporte contínuo
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-gold/10 text-divino-gold flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Sem contrato de fidelidade
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-divino-gold/10 text-divino-gold flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Mensalidade zero após 2 anos
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <div></div> Você jamais viu uma proposta com estes benefícios!
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg">
            <a href="http://wa.me/5501152866640" target="_blank" rel="noopener noreferrer">Quero uma Vaga!</a>
          </Button>
        </div>
      </div>
    </section>;
};
export default PricingSection;
