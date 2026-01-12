import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  
  // Rola para o topo sempre que a tela abrir
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Barra de Navegação Simples */}
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
            <ShieldCheck className="text-blue-600" size={20} />
            <span className="hidden sm:inline">Política de Privacidade</span>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 my-8 md:my-12 rounded-xl shadow-sm border border-gray-100">
        
        {/* Cabeçalho do Documento */}
        <div className="mb-10 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Política de Privacidade</h1>
          <p className="text-gray-500">Última atualização: 12/01/2026</p>
        </div>

        {/* Introdução */}
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="leading-relaxed text-lg">
            Bem-vindo(a) à <span className="font-bold text-gray-900">Destino B&D</span>. Nós sabemos que planejar uma viagem envolve confiança. Por isso, a privacidade dos seus dados é tão importante quanto o roteiro das suas férias. Esta Política de Privacidade descreve, de forma transparente, como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/18).
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Quais dados coletamos?</h2>
          <p>Para oferecer cotações personalizadas e realizar reservas, precisamos de algumas informações essenciais. Coletamos apenas o necessário:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dados Pessoais de Contato:</strong> Nome completo, e-mail, número de telefone (WhatsApp) e CPF (exigido para emissão de passagens e reservas).</li>
            <li><strong>Dados da Viagem:</strong> Preferências de destino, datas, número de passageiros e orçamento estimado.</li>
            <li><strong>Dados de Pagamento:</strong> Importante: Nós não armazenamos os números do seu cartão de crédito em nossos servidores. Todas as transações são processadas por gateways de pagamento seguros e criptografados ou diretamente pelos fornecedores finais (cias aéreas/hotéis).</li>
            <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de dispositivo e páginas visitadas em nosso site (para melhorar sua experiência).</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Para que usamos seus dados?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Operacional:</strong> Processar orçamentos, efetuar reservas de voos, hotéis e passeios e enviar vouchers/comprovantes.</li>
            <li><strong>Atendimento:</strong> Entrar em contato via WhatsApp ou e-mail para tirar dúvidas e prestar suporte pré e pós-viagem.</li>
            <li><strong>Marketing (Opcional):</strong> Enviar ofertas exclusivas e novidades da Destino B&D. Você pode se descadastrar a qualquer momento.</li>
            <li><strong>Segurança e Legal:</strong> Prevenção à fraude, validação de identidade e cumprimento de normas legais e regulatórias do setor de turismo.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Compartilhamento de Dados</h2>
          <p>A Destino B&D preza pela confidencialidade. Não vendemos seus dados para terceiros. No entanto, para que sua viagem aconteça, precisamos compartilhar dados específicos com:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Fornecedores Essenciais:</strong> Companhias aéreas, redes hoteleiras, locadoras de veículos e seguradoras de viagem. Sem isso, não é possível confirmar sua reserva.</li>
            <li><strong>Processadores de Pagamento:</strong> Para garantir a transação financeira segura.</li>
            <li><strong>Autoridades:</strong> Apenas quando estritamente exigido por lei ou ordem judicial.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
          <p>Nosso site pode utilizar "Cookies" e pixels de rastreamento (como Google Analytics e Meta Ads) para entender como você interage com nosso conteúdo e apresentar anúncios relevantes para o seu perfil de viajante. Você pode gerenciar as permissões de cookies diretamente nas configurações do seu navegador.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Segurança dos Dados</h2>
          <p>Adotamos medidas técnicas de segurança (como protocolo HTTPS e criptografia) e práticas administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração indevida.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Seus Direitos (LGPD)</h2>
          <p>Como titular dos dados, você tem direito a:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Confirmar a existência de tratamento de dados.</li>
            <li>Acessar os dados que temos sobre você.</li>
            <li>Corrigir dados incompletos ou desatualizados.</li>
            <li>Solicitar a exclusão dos seus dados (exceto quando a manutenção for necessária por lei).</li>
          </ul>
          <p className="mt-4 italic text-sm">Para exercer qualquer um desses direitos, basta entrar em contato conosco.</p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-100">
            <h2 className="text-lg font-bold text-blue-900 mb-2">Contato</h2>
            <p className="text-blue-800 mb-1">Se você tiver qualquer dúvida sobre esta política ou sobre como tratamos seus dados, fale conosco:</p>
            <p className="text-blue-800"><strong>E-mail:</strong> destinobed@outlook.com</p>
            <p className="text-blue-800"><strong>WhatsApp:</strong> (11) 99180-5144</p>
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

export default PrivacyPolicy;