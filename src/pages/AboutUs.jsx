import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutUsImage from '../assets/aboutus.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Image */}
        <div className="w-full h-96 overflow-hidden">
          <img 
            src={aboutUsImage} 
            alt="EmployMe platform" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Centered Content */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          {/* About Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About EmployMe</h1>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                EmployMe is a fast and flexible job-seeking platform designed to connect
                employers with part-time job seekers in real-time.
              </p>
              <p>
                Whether you're a business in urgent need of workers or an individual
                looking for quick and flexible job opportunities, we make the process
                effortless.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Vision</h2>
            <p className="text-lg text-gray-600">
              At EmployMe, we envision a world where job opportunities are instantly accessible, 
              and businesses can quickly find the right talent without unnecessary delays. 
              Our goal is to become the go-to platform for fast, flexible, and reliable employment.
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission</h2>
            <p className="text-lg text-gray-600">
              At EmployMe, our mission is to bridge the gap between employers and part-time 
              job seekers by providing a fast, reliable, and user-friendly platform.
            </p>
          </div>

          {/* Who We Are Section */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who are we?</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                EmployMe connects employers with part-time job seekers who are ready to work fast. 
                Whether you're a business looking for quick hires or an individual searching for 
                a flexible job opportunity, our platform makes the process seamless and efficient.
              </p>
              <p>
                We specialize in on-demand employment, helping companies fill urgent roles while 
                giving job seekers easy access to part-time, temporary, and gig-based work. 
                Our goal is to make job searching and hiring faster, smarter, and hassle-free.
              </p>
            </div>
          </div>
        </div>

        {/* Divider line before footer */}
        <div className="border-t border-gray-200 w-full"></div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;