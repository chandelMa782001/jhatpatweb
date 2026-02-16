const FlightFeature = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-32 bg-gradient-to-r from-teal-500 via-blue-400 to-orange-300">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800" 
                  alt="Flight Window View" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white text-xl font-bold">Your Journey Awaits</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between gap-4 mb-6">
                  <div>
                    <p className="text-gray-500 text-xs mb-2">From</p>
                    <h4 className="text-3xl font-bold text-gray-900">DEL</h4>
                    <p className="text-gray-600 text-sm">New Delhi</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-gray-500 text-xs mb-2">To</p>
                    <h4 className="text-3xl font-bold text-gray-900">BOM</h4>
                    <p className="text-gray-600 text-sm">Mumbai</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-500 text-xs">Date</p>
                      <p className="text-gray-900 font-semibold text-sm">15 Feb 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-500 text-xs">Travelers</p>
                      <p className="text-gray-900 font-semibold text-sm">2 Adults</p>
                    </div>
                  </div>
                </div>

      
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-xs mb-1">Best fare found</p>
                      <p className="text-3xl font-bold text-gray-900">₹3,450</p>
                      <p className="text-gray-600 text-sm">per person • Non-stop</p>
                    </div>
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Lowest
                    </span>
                  </div>
                </div>

        
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Search Flights
                </button>
              </div>
            </div>
          </div>

          <div>
            <span className="text-orange-500 text-sm font-semibold mb-4 inline-block">
              Flight Bookings
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flight Bookings Made Easy
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Compare fares from multiple airlines and book domestic & international flights with ease.
            </p>

   
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Real-time Fare Comparison</h4>
                <p className="text-gray-600 text-sm">
                  Get the best deals from all major airlines in one place
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Simple Booking Flow</h4>
                <p className="text-gray-600 text-sm">
                  Book your flight in under 3 minutes with our streamlined process
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Secure Payments</h4>
                <p className="text-gray-600 text-sm">
                  Multiple payment options with bank-grade security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FlightFeature;
