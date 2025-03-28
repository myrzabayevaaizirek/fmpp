import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Star } from "lucide-react";

const OurPartners = () => {
  const partners = [
    {
      logo: "/src/assets/nava.png",
      name: "NAVA Company",
      rating: "3.4",
      line1: "10.000 To 100,000 Employs",
      line2: "6.988.877 Followers",
      line3: "74% Recommendation rate in last 2 years ",
    },
    {
      logo: "/src/assets/mohi.png",
      name: "MOHI Company",
      rating: "3.4",
      line1: "2000 To 5000 Employs",
      line2: "3,908.98 Followers",
      line3: "89% Recommendation rate in last 2 years ",
    },
    {
      logo: "/src/assets/fatima.png",
      name: "FATIMA Company",
      rating: "3.4",
      line1: "15.000 To 70,000 Employs",
      line2: "98,978.65 Followers",
      line3: "49% Recommendation rate in last 2 years с",
    },
    {
      logo: "/src/assets/asma.png",
      name: "ASMA Company",
      rating: "3.4",
      line1: "7.000 To 20,000 Employs",
      line2: "1,123.456 Followers",
      line3: "90% Recommendation rate in last 2 years ",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок и кнопки навигации */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-bold text-gray-900 inline-block">Our Partners</h2>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-gray-600 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <button className="bg-white text-gray-600 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Все карточки партнеров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col"
              style={{ minHeight: '280px' }}
            >
              {/* Логотип компании - сверху */}
              <div className="w-16 h-16 mb-4 mx-auto">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Название компании и рейтинг */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-gray-800">{partner.name}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-gray-600">{partner.rating}</span>
                </div>
              </div>

              {/* Текстовые блоки - выровнены по левому краю */}
              <div className="flex-grow space-y-4 mb-4 text-left">
                <p className="text-gray-800 font-medium">{partner.line1}</p>
                <p className="text-gray-800 font-medium">{partner.line2}</p>
                <p className="text-gray-500">{partner.line3}</p>
              </div>

              {/* Кнопки внизу */}
              <div className="flex space-x-3">
                <button className="bg-white text-blue-500 px-4 py-2 rounded-full text-sm border border-purple-200 hover:bg-purple-50 transition-colors">
                  Hiring
                </button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-full text-sm border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                  High Benefit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;