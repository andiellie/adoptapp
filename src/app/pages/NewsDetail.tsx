import { useParams, Link, useNavigate } from "react-router";
import { newsData } from "../data/news";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter } from "lucide-react";

export function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = newsData.find(n => n.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Urbanist:Bold',sans-serif] text-[48px] text-[#1e1e1e] mb-4">
            Noticia no encontrada
          </h1>
          <button
            onClick={() => navigate("/noticias")}
            className="bg-[#4074d4] text-white px-8 py-3 rounded-[15px] font-['Urbanist:Bold',sans-serif] text-[18px] hover:bg-[#3064c4] transition-colors"
          >
            Volver a Noticias
          </button>
        </div>
      </div>
    );
  }

  const relatedNews = newsData
    .filter(n => n.id !== article.id && n.category === article.category)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate("/noticias")}
          className="flex items-center gap-2 text-[#4074d4] font-['Urbanist:Bold',sans-serif] text-[16px] mb-8 hover:underline transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a Noticias
        </button>

        {/* Article Header */}
        <div className="mb-8">
          <span className="inline-block bg-[#4074d4] text-white px-6 py-2 rounded-full text-[14px] font-['Urbanist:SemiBold',sans-serif] mb-4">
            {article.category}
          </span>
          
          <h1 className="font-['Urbanist:Bold',sans-serif] text-[32px] md:text-[48px] text-[#1e1e1e] mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 mb-6 text-[#666]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-['Urbanist:Medium',sans-serif] text-[16px]">
                {formatDate(article.date)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-['Urbanist:Medium',sans-serif] text-[16px]">
                {article.author}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#ebe8d6] text-[#1e1e1e] px-4 py-1 rounded-full text-[12px] font-['Urbanist:Medium',sans-serif] flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e]">
              Compartir:
            </span>
            <button
              onClick={() => handleShare('facebook')}
              className="bg-[#1877f2] text-white p-3 rounded-full hover:bg-[#166fe5] transition-colors"
              aria-label="Compartir en Facebook"
            >
              <Facebook className="w-5 h-5" fill="currentColor" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="bg-[#1da1f2] text-white p-3 rounded-full hover:bg-[#1a91da] transition-colors"
              aria-label="Compartir en Twitter"
            >
              <Twitter className="w-5 h-5" fill="currentColor" />
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('¡Enlace copiado al portapapeles!');
              }}
              className="bg-[#ebe8d6] text-[#1e1e1e] p-3 rounded-full hover:bg-[#ddd5c0] transition-colors"
              aria-label="Copiar enlace"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-[30px] overflow-hidden mb-12 shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-[30px] p-6 md:p-12 shadow-lg mb-12">
          <div className="prose max-w-none">
            {article.content.map((paragraph, index) => {
              // Check if paragraph is a list
              if (paragraph.includes('\n•')) {
                const parts = paragraph.split('\n');
                return (
                  <div key={index} className="mb-6">
                    <p className="font-['Urbanist:Regular',sans-serif] text-[18px] text-[#1e1e1e] leading-relaxed mb-3">
                      {parts[0]}
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      {parts.slice(1).map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="font-['Urbanist:Regular',sans-serif] text-[18px] text-[#1e1e1e] leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#4074d4] font-bold">•</span>
                          <span>{item.replace('•', '').trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              
              return (
                <p
                  key={index}
                  className="font-['Urbanist:Regular',sans-serif] text-[18px] text-[#1e1e1e] leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mb-12">
            <h2 className="font-['Urbanist:Bold',sans-serif] text-[36px] text-[#1e1e1e] mb-8">
              Noticias Relacionadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/noticias/${news.id}`}
                  className="group bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#ebe8d6] text-[#1e1e1e] px-3 py-1 rounded-full text-[12px] font-['Urbanist:SemiBold',sans-serif] mb-3">
                      {news.category}
                    </span>
                    <h3 className="font-['Urbanist:Bold',sans-serif] text-[18px] text-[#1e1e1e] mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-[#666] line-clamp-2">
                      {news.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#4074d4] to-[#5084e4] rounded-[30px] p-12 text-center text-white shadow-lg">
          <h3 className="font-['Urbanist:Bold',sans-serif] text-[32px] mb-4">
            ¿Te gustó esta noticia?
          </h3>
          <p className="font-['Urbanist:Regular',sans-serif] text-[18px] mb-6 max-w-[600px] mx-auto">
            Mantente informado sobre el bienestar animal y encuentra a tu compañero perfecto en AdoptApp.
          </p>
          <Link
            to="/adopta"
            className="inline-block bg-white text-[#4074d4] px-8 py-4 rounded-[15px] font-['Urbanist:Bold',sans-serif] text-[18px] hover:bg-[#f5f5f5] transition-colors"
          >
            Explorar Mascotas
          </Link>
        </div>
      </div>
    </div>
  );
}