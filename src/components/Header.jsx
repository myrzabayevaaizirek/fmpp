import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FiHelpCircle, FiLogIn } from "react-icons/fi";

const Header = () => {
  return (
    <header className="text-white font-sans">
      {/* Верхняя часть */}
      <div className="bg-[#070537]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Логотип */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-15 md:h-15" />
          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-4 text-sm">
            {/* ? иконка */}
            <div className="flex items-center gap-1">
              <FiHelpCircle className="text-lg" />
            </div>

            {/* Черта */}
            <div className="w-px h-5 bg-white opacity-30" />

            {/* Employers */}
            <span>Employers</span>

            {/* Черта */}
            <div className="w-px h-5 bg-white opacity-30" />

            {/* Sign Up кнопка */}
            <Link 
              to="/signup" 
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              <FiLogIn />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Навигация */}
      <div className="bg-white text-gray-700 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-8 justify-center font-medium text-sm">
          <Link to="#" className="hover:text-primary-100">Jobs</Link>
          <Link to="#" className="hover:text-primary-100">Companies</Link>
          <Link to="#" className="hover:text-primary-100">Create CV</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;