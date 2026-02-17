const CabFeature = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
     
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-yellow-600 text-sm font-semibold mb-4 inline-block">
            Cab Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Cabs or Drive with Us
          </h2>
          <p className="text-gray-600 text-lg">
            Reliable rides for passengers. Flexible earning for drivers.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
         
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
         
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800" 
                alt="Black Cab" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
            </div>

         
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For Riders</h3>
              <p className="text-gray-600 mb-6">
                Book reliable cabs for city rides or outstation trips
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">City & outstation rides</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Transparent fare calculation</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Multiple vehicle options</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 availability</span>
                </div>
              </div>

           
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Estimated fare</span>
                  <span className="text-green-600 text-xs font-semibold">Best route</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">₹245</p>
                <p className="text-gray-600 text-sm">Airport → City Center • 15 km • 25 mins</p>
              </div>
            </div>
          </div>

       
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl shadow-xl overflow-hidden text-white p-8">
           
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <h3 className="text-3xl font-bold mb-3">For Drivers</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join as a driver partner and start earning on your schedule
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white">Quick & easy onboarding</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white">Flexible working hours</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white">Transparent earnings</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white">Weekly payouts</span>
              </div>
            </div>

       
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-white font-semibold">Earning Potential</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-white mb-1">₹40k+</p>
                  <p className="text-blue-200 text-sm">Avg. monthly earnings</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-1">500+</p>
                  <p className="text-blue-200 text-sm">Active drivers</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Become a Driver Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabFeature;
