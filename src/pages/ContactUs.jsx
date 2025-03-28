import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactBoy from '../assets/contactboy.png';
import contactGirl from '../assets/contactgirl.png';

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+996',
    flag: 'https://flagcdn.com/w20/kg.png',
    name: 'Kyrgyzstan'
  });
  const [showCountryList, setShowCountryList] = useState(false);

  const countries = [
    { code: '+996', flag: 'https://flagcdn.com/w20/kg.png', name: 'Kyrgyzstan' },
    { code: '+7', flag: 'https://flagcdn.com/w20/ru.png', name: 'Russia' },
    { code: '+1', flag: 'https://flagcdn.com/w20/us.png', name: 'USA' },
    { code: '+86', flag: 'https://flagcdn.com/w20/cn.png', name: 'China' },
    { code: '+90', flag: 'https://flagcdn.com/w20/tr.png', name: 'Turkey' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section with Images and Centered Content */}
        <div className="relative bg-white">
          {/* Flex Container for Images and Content */}
          <div className="flex flex-col md:flex-row items-center justify-center py-12 px-4 bg-white">
            {/* Left Image */}
            <div className="md:w-1/4 flex justify-end">
              <img 
                src={contactBoy} 
                alt="Contact support" 
                className="h-64 object-contain"
              />
            </div>
            
            {/* Centered Content */}
            <div className="md:w-2/4 px-8 py-4 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">How can we help you?</h1>
              
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Q Search"
                  className="w-full p-4 pl-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/4 flex justify-start">
              <img 
                src={contactGirl} 
                alt="Contact support" 
                className="h-64 object-contain"
              />
            </div>
          </div>

          {/* Full-width divider line after images */}
          <div className="border-t border-gray-200 w-full"></div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              Fill in the fields below and we will be able to better respond to your request
            </p>
          </div>

          <form className="space-y-8">
            {/* Name Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name*</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name*</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Contact Info - Email and Phone side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email*</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number*</label>
                <div className="flex">
                  {/* Country Code Selector with Flag */}
                  <div className="relative mr-2 w-32">
                    <button
                      type="button"
                      className="w-full p-3 border border-gray-300 rounded-l-md bg-gray-50 flex items-center justify-between"
                      onClick={() => setShowCountryList(!showCountryList)}
                    >
                      <div className="flex items-center">
                        <img 
                          src={selectedCountry.flag} 
                          alt={selectedCountry.name} 
                          className="w-5 h-5 mr-2 rounded-sm"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = 'https://flagcdn.com/w20/unknown.png';
                          }}
                        />
                        <span>{selectedCountry.code}</span>
                      </div>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showCountryList && (
                      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                        {countries.map((country) => (
                          <div
                            key={country.code}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountryList(false);
                            }}
                          >
                            <img 
                              src={country.flag} 
                              alt={country.name} 
                              className="w-5 h-5 mr-2 rounded-sm"
                              onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = 'https://flagcdn.com/w20/unknown.png';
                              }}
                            />
                            <span className="mr-2">{country.code}</span>
                            <span className="text-gray-600 text-sm">{country.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    placeholder="505606600"
                    className="flex-1 p-3 border border-gray-300 rounded-r-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Upload File</label>
              <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Question Category */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                What is The Topic Of Your Question? *
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md" required>
                <option value="">Select Category</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing Question</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
              <input
                type="text"
                placeholder="Write The Subject Of Your Request Here"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Write Your Message</label>
              <textarea
                rows={5}
                placeholder="Write a letter"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                 className="w-full bg-blue-900 hover:bg-blue-950 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;