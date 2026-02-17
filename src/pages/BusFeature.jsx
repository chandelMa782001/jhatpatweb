import bus from '../assets/image/busImage.png';
const BusFeature = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
             
              <div className="relative h-40">
                <img 
                  src={bus} 
                  alt="Premium Bus Interior" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-white text-green-600 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  Premium AC
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Volvo Multi-Axle</h3>
                    <p className="text-gray-600 text-sm">AC Sleeper • WiFi Enabled • Water Bottles</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Available
                  </span>
                </div>

                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Departure</p>
                      <p className="text-xl font-bold text-gray-900">10:30 PM</p>
                      <p className="text-gray-600 text-sm">Delhi (Kashmere Gate)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs mb-1">Arrival</p>
                      <p className="text-xl font-bold text-gray-900">6:00 AM</p>
                      <p className="text-gray-600 text-sm">Jaipur (Sindhi Camp)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>7h 30m journey</span>
                  </div>
                </div>

             
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Price per seat</p>
                    <p className="text-3xl font-bold text-gray-900">₹850</p>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-600 text-sm font-semibold">15 seats left</p>
                    <p className="text-gray-500 text-xs">Book soon!</p>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Select Seat
                </button>
              </div>
            </div>
          </div>

          
          <div>
            <span className="text-green-600 text-sm font-semibold mb-4 inline-block">
              Bus Travel
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comfortable Bus Travel
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Travel comfortably with verified operators. Choose from AC sleeper, seater, and luxury coaches.
            </p>

   
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Wide Selection</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Choose from sleeper, semi-sleeper, and seater buses across all routes
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">500+</p>
                <p className="text-gray-600 text-sm">Routes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">100+</p>
                <p className="text-gray-600 text-sm">Operators</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">4.5★</p>
                <p className="text-gray-600 text-sm">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusFeature;
