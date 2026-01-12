import React, { useEffect } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';

interface FAQProps {
  onBack: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  
  // Rola para o topo ao abrir
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Barra de Navegação */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para o Site
          </button>
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <HelpCircle className="text-blue-600" size={20} />
            <span className="hidden sm:inline">Perguntas Frequentes</span>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 my-8 md:my-12 rounded-xl shadow-sm border border-gray-100">
        
        <div className="mb-10 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Dúvidas Frequentes!</h1>
          <p className="text-gray-500">Tire suas dúvidas sobre a Destino B&D.</p>
        </div>

        <div className="space-y-8">
          
          {/* Pergunta 1 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              Por que os nossos preços são tão mais baixos?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nós utilizamos estratégias avançadas de emissão, monitoramento de tarifas promocionais e programas de fidelidade que não estão disponíveis no balcão comum das agências tradicionais. Basicamente, usamos inteligência de mercado para encontrar a mesma passagem que você compraria, mas com um custo muito menor.
            </p>
          </div>

          {/* Pergunta 2 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              É seguro? Como recebo minha passagem?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Totalmente seguro. Nós emitimos sua passagem diretamente no sistema da companhia aérea. Assim que a emissão é concluída, você recebe o <strong>código localizador</strong> oficial e pode consultar sua reserva no site da própria companhia (Latam, Azul, TAP, etc) na mesma hora.
            </p>
          </div>
          {/* Pergunta 4 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Quais são as formas de pagamento?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Aceitamos PIX e Cartão de Crédito. As transações são processadas por links de pagamento seguros, garantindo a proteção dos seus dados financeiros.
            </p>
          </div>

          {/* Pergunta 5 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              E se eu precisar cancelar ou remarcar?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nós seguimos rigorosamente as regras da tarifa que foi comprada. Se a tarifa for promocional, ela pode não permitir reembolso ou ter multas, conforme regra da companhia aérea. Nossa equipe dará todo o suporte para intermediar qualquer alteração necessária junto à empresa aérea.
            </p>
          </div>

          {/* Pergunta 6 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Vocês só vendem passagens ou pacotes completos?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fazemos tudo! Desde apenas o voo até a viagem completa com hotéis, passeios, seguro viagem e aluguel de carro. O diferencial é que montamos tudo de forma <strong>personalizada</strong>, e não aqueles pacotes "prontos" onde você fica preso a horários ruins.
            </p>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-4">Ainda tem dúvida?</p>
            <button 
                onClick={() => window.open('https://wa.me/5511991805144', '_blank')}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 mx-auto w-fit"
            >
                Chamar no WhatsApp
            </button>
            <button 
                onClick={onBack}
                className="text-blue-600 font-bold hover:underline mt-6 block mx-auto"
            >
                Voltar para a Página Inicial
            </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;