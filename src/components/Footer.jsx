import React from "react";
import { FiChevronDown, FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Верхняя линия по всей ширине */}
      <div className="border-t border-gray-200 w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Основные колонки футера */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 pt-8">
          {/* Языковой переключатель слева */}
          <div className="md:w-1/5">
            <div className="relative inline-block">
              <button className="flex items-center text-gray-900 font-medium">
                English (US)
                <FiChevronDown className="ml-2" />
              </button>
            </div>
          </div>

          {/* 4 колонки таблицы */}
          <div className="md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Колонка Company */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Career</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">News</a></li>
              </ul>
            </div>

            {/* Колонка Resources */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Accessibility</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Employers</a></li>
              </ul>
            </div>

            {/* Колонка Support */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms Of Use</a></li>
              </ul>
            </div>

            {/* Колонка About Us */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Us</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About EmployMe</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Work for EmployMe</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Линия перед соцсетями и копирайтом */}
        <div className="border-t border-gray-200 w-full"></div>
        
        {/* Нижняя секция с соцсетями и копирайтом */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} EmployMe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;