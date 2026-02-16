import { useContext } from "react";
import { AppContextData } from "../Context/AppContext";
const Hero = () => {
  const {user}=useContext(AppContextData)
  return (
    <>
     <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="inline-block mb-8">
            <span className="bg-transparent border border-[#FF6B35] text-[#FF6B35] px-6 py-2 rounded-full text-sm font-medium">
              Coming Soon
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Book Everything.
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF6B35] mb-8">
            Jhatpat.
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 font-light">
            Hotels • Flights • Trains • Buses • Cabs • Events
          </p>
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
            India's most comprehensive booking platform. From travel and stays to venues
          </p>
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            and rides — experience seamless bookings designed for speed and simplicity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white px-8 py-3 rounded-lg text-base font-medium transition-colors shadow-lg">
              Notify Me at Launch
            </button>
            <span className="text-gray-300 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
              Launching March 2026
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">6+</h3>
              <p className="text-gray-300 text-sm">Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-300 text-sm">Secure</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300 text-sm">Support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">1</h3>
              <p className="text-gray-300 text-sm">Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Hero;
