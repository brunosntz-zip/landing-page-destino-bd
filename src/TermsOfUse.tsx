import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  
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
            <FileText className="text-blue-600" size={20} />
            <span className="hidden sm:inline">Termos de Uso</span>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 my-8 md:my-12 rounded-xl shadow-sm border border-gray-100">
        
        <div className="mb-10 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Termos e Condições de Uso</h1>
          <p className="text-gray-500">Última atualização: 12/01/2026</p>
        </div>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="leading-relaxed">
            Olá! Estes Termos de Uso regem a relação entre você (Cliente) e a <strong>Destino B&D</strong>. Ao solicitar nossos serviços, você concorda com as condições abaixo. Nosso objetivo é oferecer transparência e segurança para sua viagem.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">1. Natureza dos Serviços</h3>
          <p>
            A Destino B&D atua como <strong>intermediadora de serviços turísticos</strong>. Nosso trabalho consiste em pesquisar, planejar e facilitar a emissão de passagens aéreas, reservas de hospedagem e passeios, utilizando estratégias para otimização de custos (como milhas e tarifas promocionais).
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">2. Responsabilidades</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Da Destino B&D:</strong> Garantir a emissão correta dos bilhetes e vouchers conforme os dados fornecidos pelo cliente e prestar suporte pré e pós-venda para dúvidas e alterações.</li>
            <li><strong>Dos Fornecedores (Cias Aéreas/Hotéis):</strong> A execução do serviço final (transporte e hospedagem) é de responsabilidade exclusiva dos fornecedores. A Destino B&D <strong>não se responsabiliza</strong> por atrasos de voo, cancelamentos operacionais da cia aérea, overbooking, extravio de bagagem ou condições climáticas.</li>
            <li><strong>Do Cliente:</strong> Fornecer dados corretos (nomes conforme documento), possuir documentação válida para viagem (RG, Passaporte, Vistos, Vacinas) e conferir todos os dados no momento do recebimento dos vouchers.</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mt-6">3. Alterações e Cancelamentos</h3>
          <p>
            Toda solicitação de alteração ou cancelamento está sujeita às regras e multas definidas pelas companhias aéreas e hotéis contratados.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Passagens Promocionais:</strong> Muitas tarifas econômicas não permitem reembolso ou cobram multas elevadas para remarcação.</li>
            <li><strong>Taxa de Serviço:</strong> Em caso de cancelamento por parte do cliente, a taxa de serviço de consultoria da Destino B&D não é reembolsável, pois o serviço de inteligência e emissão já foi executado.</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mt-6">4. Preços e Pagamentos</h3>
          <p>
            Os orçamentos enviados têm validade limitada e estão sujeitos a alteração de preço e disponibilidade até o momento da confirmação do pagamento e emissão efetiva.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">5. Privacidade</h3>
          <p>
            Seus dados serão tratados conforme nossa <strong>Política de Privacidade</strong> e a Lei Geral de Proteção de Dados (LGPD), sendo compartilhados apenas com os fornecedores necessários para a execução da viagem.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">Dúvidas?</h4>
            <p className="text-sm">Para questões sobre estes termos, entre em contato através do e-mail <strong>destinobd@outlook.com</strong>.</p>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <button 
                onClick={onBack}
                className="text-blue-600 font-bold hover:underline"
            >
                Voltar para a Página Inicial
            </button>
        </div>

      </div>
    </div>
  );
};

export default TermsOfUse;