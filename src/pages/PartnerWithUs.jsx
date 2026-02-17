const PartnerWithUs = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Card - Blue */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold mb-4">Own a Hotel or Venue?</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Partner with Jhatpat Booking and reach millions of travelers and event planners.
              </p>

              {/* Stats */}
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-4xl font-bold mb-1">10,000+</p>
                  <p className="text-blue-200 text-sm">Partner Properties</p>
                </div>

                <div>
                  <p className="text-4xl font-bold mb-1">1M+</p>
                  <p className="text-blue-200 text-sm">Monthly Bookings</p>
                </div>

                <div>
                  <p className="text-4xl font-bold mb-1">95%</p>
                  <p className="text-blue-200 text-sm">Partner Satisfaction</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors relative">
                <span className="block">List Your Property</span>
                <span className="block text-xs text-blue-400 mt-1">Coming Soon</span>
              </button>
            </div>
          </div>

          {/* Right Content - Partner Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Partner Benefits</h3>

            {/* Benefits List */}
            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Easy Onboarding</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get your property listed in under 24 hours with our simple verification process and dedicated support team.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-time Bookings</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Receive instant booking notifications and manage availability with our intuitive dashboard.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Track bookings, revenue, and performance metrics with detailed insights and reports.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing Support</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Benefit from our nationwide marketing campaigns and featured listings to boost visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
