import { Star, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

// DADOS DOS FEEDBACKS COM LINK REAL DO INSTAGRAM
// Preencha o campo 'link' com a URL do post/destaque ou perfil do cliente
const feedbacks = [
  {
    id: 1,
    name: "Arthur Volpe",
    trip: "Punta Cana - 14/11/2025",
    text: "Queria agradecer a Destino B&D que cuidou de tudo na minha viagem pra República Dominicana! Queria agradecer pois não é o primeiro passeio que fecho e todos foram muito atenciosos e prestaram todo o Suporte!",
    stars: 5,
    image: null,
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTUwOTU3MjgwOTU1ODg4?story_media_id=3765772437624372725&igsh=MTNnaWV2cXFxa21sbQ=="
  },
  {
    id: 2,
    name: "Paulo Lima",
    trip: "Roma (Itália) - 28/08/2025",
    text: "Queria agradecer meu amigo Daniel e a Destino B&D, ele me ajudou muito na minha trip com valores ótimos de passagem aéreas, podem chamar ele que é sucesso ❤️",
    stars: 5,
    image: null,
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTUwOTU3MjgwOTU1ODg4?story_media_id=3709259647326018302&igsh=MTNnaWV2cXFxa21sbQ==" // <--- CORRIGIDO AQUI (Aspas fechadas)
  },
  {
    id: 3,
    name: "Rogério Toledo",
    trip: "Paris (França) - 14/08/2025",
    text: "Queria agradecer a Destino B&D, por ter ajudado a gente a realizar nosso sonho e quem quiser, dá uma seguida no insta deles. Galera boa! Dani, obrigado pelo suporte!",
    stars: 5,
    image: null,
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTUwOTU3MjgwOTU1ODg4?story_media_id=3699066020862419468&igsh=MTNnaWV2cXFxa21sbQ=="
  },
  {
    id: 4,
    name: "Edmar C.",
    trip: "San Andrés (Colombia) - 25/11/2025",
    text: "Finalizando uma viagem incrível em um lugar paradisíaco, e para isso, contamos com toda ajuda da @destinobd que deu todo o suporte antes e durante nossa viagem💙",
    stars: 5,
    image: null,
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTUwOTU3MjgwOTU1ODg4?story_media_id=3699066020862419468&igsh=MTNnaWV2cXFxa21sbQ=="
  }
];

export default function Testimonials() {
  return (
    <section id="feedbacks" className="py-20 bg-gray-50 border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
            <MessageCircle size={16} /> QUEM VIAJOU, AMOU!
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Histórias Reais de Economia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra. Veja o que nossos viajantes dizem sobre a experiência Destino B&D.
          </p>
        </div>

        {/* Grid de Cards (Mobile vira scroll horizontal) */}
        {/* AJUSTE AQUI: Mudei 'pb-8' para 'py-10 px-4' para a sombra não cortar em cima */}
        <div className="flex overflow-x-auto py-10 px-4 gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory scrollbar-hide">
          {feedbacks.map((item) => (
            <a 
              key={item.id} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[280px] md:min-w-0 snap-center flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 hover:z-10 group cursor-pointer relative"
            >
              {/* Ícone de link externo discreto no topo */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-blue-400" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow italic">
                "{item.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto group-hover:border-blue-100 transition-colors">
                {/* Lógica da Imagem */}
                {item.image ? (
                   <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover border-2 border-blue-100" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    {item.name.charAt(0)}
                  </div>
                )}
                
                <div>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</p>
                  <p className="text-xs text-blue-600 font-medium">{item.trip}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Botão do Instagram */}
        <div className="text-center mt-10">
          <a 
            href="https://instagram.com/destinobd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 transition-all"
          >
            <Instagram size={20} />
            Ver mais Feedbacks no Instagram
          </a>
          <p className="text-xs text-gray-400 mt-3">Acompanhe nossos stories em tempo real!</p>
        </div>

      </div>
    </section>
  );
}   