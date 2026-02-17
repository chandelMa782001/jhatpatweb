import Banquet from "../assets/image/BanquetImage.png"
const EventFeature = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-purple-600 text-sm font-semibold mb-4 inline-block">
            Events & Venues
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Venues for Every Occasion
          </h2>
          <p className="text-gray-600 text-lg">
            From weddings to corporate events, find and book the perfect venue.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Marriage Halls</h3>
            <p className="text-gray-600 text-sm mb-3">
              Grand banquet halls for your special day
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>100-1000 guests</span>
            </div>
          </div>

        
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Party Venues</h3>
            <p className="text-gray-600 text-sm mb-3">
              Celebrate birthdays and special occasions
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>50-300 guests</span>
            </div>
          </div>

         
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Spaces</h3>
            <p className="text-gray-600 text-sm mb-3">
              Professional venues for business events
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>20-500 guests</span>
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
              <img 
                src={Banquet}
                alt="Elegant Banquet Hall" 
                className="w-full h-full object-cover min-h-[600px]"
              />
              <span className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Coming Soon
              </span>
            </div>
          </div>

         
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Venues</h3>

        
            <div className="pb-6 mb-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Grand Celebration Hall</h4>
                  <p className="text-gray-600 text-sm mb-2">South Delhi</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Up to 500 guests</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₹75,000</p>
                  <p className="text-gray-500 text-xs">per event</p>
                </div>
              </div>
            </div>

      
            <div className="pb-6 mb-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Royal Banquet</h4>
                  <p className="text-gray-600 text-sm mb-2">Connaught Place</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Up to 800 guests</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₹1,20,000</p>
                  <p className="text-gray-500 text-xs">per event</p>
                </div>
              </div>
            </div>

       
            <div className="pb-6 mb-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Garden View Resort</h4>
                  <p className="text-gray-600 text-sm mb-2">Gurgaon</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Up to 300 guests</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₹50,000</p>
                  <p className="text-gray-500 text-xs">per event</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Why Book with Jhatpat?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Verified venues with transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Virtual tours and real photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Flexible booking and cancellation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventFeature;
