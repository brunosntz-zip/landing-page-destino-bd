import { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import logoBD from './assets/logo-final.png';

import imgMaragogi from './assets/maragogi.jpg';
import imgNatal from './assets/natal.jpg';           
import imgSanAndres from './assets/sanandres.jpg';   
import imgOrlando from './assets/orlando.jpeg';      
import imgPortoSeguro from './assets/portoseguro.jpg'; 
import imgPuntaCana from './assets/puntacana.jpg';

import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import FAQ from './FAQ';
import FloatingWhatsApp from './FloatingWhatsapp';
import Testimonials from './Testimonials';

import { 
  Menu, 
  X, 
  Star, 
  Instagram, 
  Phone, 
  Mail,
  Plane,
  ShieldCheck,
  Heart,
  Zap,
  TrendingUp,
  MapPin,
  CheckCircle,
  Gem,
  Calendar,
  MessageCircle,
  Users,
  Clock
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [currentScreen, setCurrentScreen] = useState<'home' | 'privacy' | 'terms' | 'faq'>('home');

  // URL Detector
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageRequest = params.get('page');

    if (pageRequest === 'privacy') setCurrentScreen('privacy');
    if (pageRequest === 'terms') setCurrentScreen('terms');
    if (pageRequest === 'faq') setCurrentScreen('faq');
  }, []);

  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    pessoas: '',       
    origem: '',        
    destino: '',       
    datas: '',         
    prazo: 'Agora',    
    obs: ''            
  });

  const PHONE_NUMBER = '5511991805144'; 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form Submit Handler
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus('submitting');

    const text = `*Olá, Destino B&D!* 👋\n\nVim pelo formulário do site.\n\n*Nome:* ${formData.nome}\n*WhatsApp:* ${formData.whatsapp}\n*Viajantes:* ${formData.pessoas}\n*Saindo de:* ${formData.origem}\n*Indo para:* ${formData.destino}\n*Datas:* ${formData.datas}\n*Previsão de fechamento:* ${formData.prazo}\n*Obs:* ${formData.obs}`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.location.href = url; 

      setFormStatus('success');
      setFormData({ 
        nome: '', 
        whatsapp: '', 
        pessoas: '', 
        origem: '', 
        destino: '', 
        datas: '', 
        prazo: 'Agora', 
        obs: '' 
      });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 300);
  };

  // Package Click Handler
  const handlePackageClick = (destinationTitle: string) => {
    const text = `*Opa!* Gostei do pacote *${destinationTitle}* que vi no site e quero solicitar uma cotação.`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    
    window.location.href = url;
  }

  // Destinations Data
  const destinations = [
    {
      id: 1,
      title: 'Maragogi (AL)',
      tag: 'Caribe Brasileiro',
      image: imgMaragogi,
      days: '5 a 7 dias',
      rating: 4.9,
      custom: 'Piscinas Naturais, Praia de Antunes & Resort'
    },
    {
      id: 2,
      title: 'Natal (RN)',
      tag: 'Nordeste Premium',
      image: imgNatal, 
      days: '5 a 7 dias',
      rating: 4.9,
      custom: 'Passeio de Buggy, Dunas de Genipabu & Praias'
    },
    {
      id: 3,
      title: 'San Andrés (Caribe)',
      tag: 'Mar de 7 Cores',
      image: imgSanAndres,
      days: '5 a 7 dias',
      rating: 4.8,
      custom: 'Ilha Johnny Cay, Parasail & Mergulho'
    },
    {
      id: 4,
      title: 'Orlando & Disney',
      tag: 'Sonho Mágico',
      image: imgOrlando,
      days: '7 a 10 dias',
      rating: 5.0,
      custom: 'Parques Disney, Universal & Compras'
    },
    {
      id: 5,
      title: 'Porto Seguro (BA)',
      tag: 'Diversão & Praia',
      image: imgPortoSeguro,
      days: '5 a 7 dias',
      rating: 4.8,
      custom: 'Axé Moi, Trancoso & Arraial d\'Ajuda'
    },
    {
      id: 6,
      title: 'Punta Cana',
      tag: 'All-Inclusive',
      image: imgPuntaCana,
      days: '5 a 7 dias',
      rating: 4.9,
      custom: 'Resort All-Inclusive, Ilha Saona & Relax'
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: 'Economia de até 70%',
      desc: 'Usamos estratégias avançadas de emissão para otimizar seu orçamento. Viajar bem não significa, necessariamente, gastar muito.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: 'Roteiros Inteligentes',
      desc: 'Nada de pacote engessado. Você define as datas e o ritmo. Nós indicamos as melhores atrações.'
    },
    {
      icon: <Gem className="w-8 h-8 text-blue-500" />,
      title: 'Padrão Destino B&D',
      desc: 'Preço de oportunidade não significa baixa qualidade. Entregamos o melhor, pagando menos.'
    }
  ];

  if (currentScreen === 'privacy') return <PrivacyPolicy onBack={() => setCurrentScreen('home')} />;
  if (currentScreen === 'terms') return <TermsOfUse onBack={() => setCurrentScreen('home')} />;
  if (currentScreen === 'faq') return <FAQ onBack={() => setCurrentScreen('home')} />;

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      
      <FloatingWhatsApp />

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src={logoBD} 
                alt="Logo Destino B&D" 
                className="h-12 w-auto object-contain hover:opacity-90 transition-opacity" 
              />
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Destino <span className="text-blue-600">B&D</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#metodo" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Nosso Método</a>
              <a href="#destinos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Populares</a>
              <a href="#feedbacks" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Feedbacks</a>
              <a href="#contato" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5">
                Criar Meu Roteiro
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#metodo" onClick={toggleMenu} className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600">Diferencial</a>
              <a href="#destinos" onClick={toggleMenu} className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600">Destinos</a>
              <a href="#feedbacks" onClick={toggleMenu} className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600">Feedbacks</a>
              <a href="#contato" onClick={toggleMenu} className="block w-full text-center mt-4 bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 shadow-md">
                Criar Roteiro
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Background Travel" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide mb-6 border border-blue-100 animate-fade-in-up shadow-sm bg-white/80 backdrop-blur-sm">
            <Zap size={16} className="fill-current" /> ECONOMIA REAL + LIBERDADE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Sua viagem,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              do seu jeito.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            Personalizamos cada detalhe do seu roteiro com uma inteligência que garante <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded">muita economia</span> comparado a agências tradicionais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contato" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <MapPin size={20} /> Personalizar Agora
            </a>
            <a href="#destinos" className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-blue-200 hover:text-blue-600 transition-all">
              Ver Inspirações
            </a>
          </div>
        </div>
      </section>

      {/* Metodo Section */}
      <section id="metodo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que a Destino B&D é diferente?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Unimos o melhor de dois mundos: a exclusividade de um roteiro sob medida com preços incríveis!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-blue-100"></div>
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 relative z-10 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Chega de pacotes engessados!</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-800">Agência Comum</p>
                      <p className="text-sm text-gray-500">Datas inflexíveis, hotéis que eles escolhem, roteiros lotados e preços inflacionados.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-100"></div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-blue-600">Experiência Destino B&D</p>
                      <p className="text-sm text-gray-600">Você escolhe a data. Você aprova o hotel. Você define o ritmo. E nós encontramos o menor preço possível.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-blue-100 font-medium mb-2">RESULTADOS REAIS</p>
                  <p className="text-5xl font-extrabold mb-2">até 70%</p>
                  <p className="text-xl font-bold mb-6">Mais Barato</p>
                  <p className="text-sm text-blue-100 opacity-90">*em relação a pacotes tradicionais.</p>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-2xl -ml-16 -mt-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-2xl -mr-16 -mb-16 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Destinos Mais Procurados</h2>
            <p className="text-gray-500 text-center max-w-xl mb-8">
              Estes são os queridinhos do momento. Lembre-se: <strong>nós também criamos a viagem do zero para qualquer outro lugar.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination: any) => (
              <div key={destination.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full">
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-10 text-xs font-bold text-gray-800 shadow-sm">
                  <Star size={14} className="text-yellow-400 fill-current" /> {destination.rating}
                </div>
                
                <div className="h-64 overflow-hidden relative shrink-0">
                  <img 
                    src={destination.image} 
                    alt={destination.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded uppercase tracking-wider">
                        {destination.tag}
                      </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{destination.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <MapPin size={12} /> Destaques: <span className="text-gray-700 italic">{destination.custom}</span>
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pt-4 border-t border-gray-50">
                      <span className="flex items-center gap-1"><Calendar size={16} /> {destination.days}</span>
                      <span className="flex items-center gap-1"><Plane size={16} /> Aéreo Incluso</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => handlePackageClick(destination.title)} 
                        className="w-full px-5 py-3 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/10 flex items-center justify-center gap-2"
                      >
                        Cotar via WhatsApp
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-blue-300 font-bold tracking-wider text-sm uppercase mb-2 block">ATENDIMENTO PERSONALIZADO</span>
              <h2 className="text-4xl font-bold mb-6">Você sonha, nós viabilizamos!</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Preencha o formulário para um atendimento humanizado! Vamos entender seu perfil, suas datas e seu orçamento para criar algo único.
              </p>
              
              <div className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700 mb-8">
                <p className="text-sm font-medium text-blue-200 mb-2">Por que entrar em contato?</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-400" /> Consultoria 100% personalizada</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-400" /> Preços abaixo do padrão</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-400" /> Suporte humanizado de quem viaja</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div 
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => window.open(`https://wa.me/${PHONE_NUMBER}`, '_blank')}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Phone size={20} className="text-blue-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">WhatsApp / Telefone</p>
                    <p className="font-bold text-base group-hover:text-blue-300 transition-colors">(11) 99180-5144</p>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => window.location.href = 'mailto:destinobed@outlook.com'}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Mail size={20} className="text-blue-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">E-mail</p>
                    <p className="font-bold text-base group-hover:text-blue-300 transition-colors">destinobed@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tudo certo!</h3>
                  <p className="text-gray-600">Seu WhatsApp deve ter aberto com a mensagem pronta. É só enviar!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Comece seu Planejamento</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nome Completo</label>
                      <input 
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">WhatsApp</label>
                      <input 
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="(DD) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Quantas pessoas vão viajar?</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      <input 
                        type="text"
                        name="pessoas"
                        value={formData.pessoas}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Ex: 2 adultos e 1 criança"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Aeroporto de Saída</label>
                      <div className="relative">
                        <Plane className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input 
                          type="text"
                          name="origem"
                          value={formData.origem}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Ex: Guarulhos (GRU)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Qual seu destino?</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input 
                          type="text"
                          name="destino"
                          value={formData.destino}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Ex: Nordeste ou Europa"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Datas de Ida e Volta</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      <input 
                        type="text"
                        name="datas"
                        value={formData.datas}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Ex: 10/12/2026 a 20/12/2026"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Quando você quer fechar?</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      <select 
                        name="prazo"
                        value={formData.prazo}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none"
                      >
                        <option>Agora (Tenho urgência)</option>
                        <option>Daqui 1 mês</option>
                        <option>Só estou cotando</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Algum desejo específico?</label>
                    <textarea 
                      name="obs"
                      value={formData.obs}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Ex: Quero hotel com vista pro mar, voo executiva..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 rounded-lg font-bold text-lg text-white transition-all ${
                      formStatus === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20'
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Solicitar Cotação Gratuita'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <img 
                  src={logoBD} 
                  alt="Logo Destino B&D" 
                  className="h-10 w-auto object-contain hover:opacity-90 transition-opacity" 
                />
                <span className="font-bold text-xl">Destino B&D</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Consultoria especializada em roteiros sob medida com custos inteligentes. A liberdade de viajar como quiser, pagando muito menos.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Navegue</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#destinos" className="hover:text-blue-500 transition-colors">Populares</a></li>
                <li><a href="#metodo" className="hover:text-blue-500 transition-colors">Nosso Método</a></li>
                <li><a href="#contato" className="hover:text-blue-500 transition-colors">Consultoria</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => setCurrentScreen('faq')} 
                    className="hover:text-blue-500 transition-colors text-left"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentScreen('privacy')} 
                    className="hover:text-blue-500 transition-colors text-left"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentScreen('terms')} 
                    className="hover:text-blue-500 transition-colors text-left"
                  >
                    Termos de Uso
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Social</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/destinobd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex flex-col md:flex-row gap-4 items-center">
               <p>© 2026 Destino B&D. Todos os direitos reservados.</p>
               <span className="hidden md:block text-gray-700">|</span>
               <p className="font-mono">CNPJ: 58.046.864/0001-24</p>
            </div>
            
            <p className="flex items-center gap-1.5">
              <span className="opacity-70">coded with</span>
              <Heart size={10} className="text-red-500 fill-current animate-pulse" /> 
              <span className="opacity-70">by</span>
              <a 
                href="https://www.linkedin.com/in/brunosntz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-blue-600 hover:text-blue-500 transition-colors border-b border-transparent hover:border-blue-500 pb-0.5"
                title="Conectar no LinkedIn"
              >
                brunosntz
              </a>
            </p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}