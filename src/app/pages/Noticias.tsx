import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { newsData } from "../data/news";

export function Noticias() {
  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Header */}
        <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[36px] sm:text-[52px] lg:text-[72px] text-[#1e1e1e] text-center mb-8 sm:mb-10 lg:mb-12 uppercase">
          Noticias y Comunidad
        </h1>

        {/* Featured Article */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center bg-white rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden shadow-lg">
            <div className="h-[300px] sm:h-[400px] lg:h-[500px]">
              <img
                src={newsData[0].image}
                alt={newsData[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-12">
              <span className="inline-block bg-[#4074d4] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[14px] font-['Neue Haas Grotesk Display',sans-serif] font-semibold mb-3 sm:mb-4">
                {newsData[0].category}
              </span>
              <h2 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-[#1e1e1e] mb-3 sm:mb-4">
                {newsData[0].title}
              </h2>
              <p className="font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e] mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                {newsData[0].excerpt}
              </p>
              <Link to={`/noticias/${newsData[0].id}`} className="text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[16px] sm:text-[18px] hover:underline">
                Leer más →
              </Link>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {newsData.slice(1).map((news) => (
            <div key={news.id} className="bg-white rounded-[15px] sm:rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-[180px] sm:h-[200px] overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <span className="inline-block bg-[#ebe8d6] text-[#1e1e1e] px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-['Neue Haas Grotesk Display',sans-serif] font-semibold mb-2 sm:mb-3">
                  {news.category}
                </span>
                <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e] mb-2 sm:mb-3">
                  {news.title}
                </h3>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[14px] sm:text-[16px] text-[#1e1e1e] mb-3 sm:mb-4 leading-relaxed">
                  {news.excerpt}
                </p>
                <Link to={`/noticias/${news.id}`} className="text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[14px] sm:text-[16px] hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#f5f5f5] rounded-[15px] font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[14px] sm:text-[16px] text-[#1e1e1e] hover:bg-[#ebe8d6] transition-colors">
            Anterior
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-[#4074d4] text-white rounded-full font-['Neue Haas Grotesk Display',sans-serif] font-bold">
              1
            </button>
            <button className="w-10 h-10 bg-[#f5f5f5] text-[#1e1e1e] rounded-full font-['Neue Haas Grotesk Display',sans-serif] font-bold hover:bg-[#ebe8d6] transition-colors">
              2
            </button>
            <button className="w-10 h-10 bg-[#f5f5f5] text-[#1e1e1e] rounded-full font-['Neue Haas Grotesk Display',sans-serif] font-bold hover:bg-[#ebe8d6] transition-colors">
              3
            </button>
          </div>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#f5f5f5] rounded-[15px] font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[14px] sm:text-[16px] text-[#1e1e1e] hover:bg-[#ebe8d6] transition-colors flex items-center justify-center gap-2">
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}