import React from "react";
import { Users, FileText, UserCheck, DollarSign } from "lucide-react"; // lucide иконки

const reasons = [
  {
    icon: <Users className="w-17 h-17 text-[#ffffff] border-2 border-white rounded-full p-2" />,
    title: "EmployMe community",
  },
  {
    icon: <FileText className="w-17 h-17 text-[#ffffff] border-2 border-white rounded-full p-2" />,
    title: "Find job opportunities",
  },
  {
    icon: <UserCheck className="w-17 h-17 text-[#ffffff] border-2 border-white rounded-full p-2" />,
    title: "Find perfect clients",
  },
  {
    icon: <DollarSign className="w-17 h-17 text-[#ffffff] border-2 border-white rounded-full p-2" />,
    title: "Fast income",
  },
];

const ChooseUs = () => {
  return (
    <section
      className="bg-cover bg-center py-16 relative"
      style={{
        backgroundImage: "url('/src/assets/bg-image.png')", // Путь к картинке
        backgroundSize: "cover", // Растягиваем фон по размеру экрана
        backgroundPosition: "center center", // Центрируем картинку
      }}
    >
      {/* Картинка поверх фона, растянутая по размеру контейнера */}
      <img
        src="/src/assets/grayphone.png" // Путь к картинке
        alt="Gray Phone"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Контент */}
      <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
          So Why You Should Choose EmployMe ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{item.icon}</div>
              <p className="text-white text-lg font-poppins font-medium">{item.title}</p> {/* Используем text-lg и font-poppins */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
