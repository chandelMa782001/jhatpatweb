const WalletRewards = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Card - Orange Wallet */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Wallet Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-8">Jhatpat Wallet</h3>

              {/* Balance Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                <p className="text-white/80 text-sm mb-2 text-center">Available Balance</p>
                <p className="text-5xl font-bold text-center mb-2">₹2,450</p>
                <div className="flex items-center justify-center gap-1 text-white/70 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>+₹450 this month</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <p className="text-2xl font-bold mb-1">15</p>
                  <p className="text-white/70 text-xs">Bookings</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <p className="text-2xl font-bold mb-1">5%</p>
                  <p className="text-white/70 text-xs">Cashback</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <p className="text-2xl font-bold mb-1">Gold</p>
                  <p className="text-white/70 text-xs">Tier</p>
                </div>
              </div>

              {/* Recent Rewards */}
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-white/20">
                  <span className="text-white text-sm">Flight cashback</span>
                  <span className="text-white font-bold">+₹150</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-white/20">
                  <span className="text-white text-sm">Hotel reward</span>
                  <span className="text-white font-bold">+₹100</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-white/20">
                  <span className="text-white text-sm">Referral bonus</span>
                  <span className="text-white font-bold">+₹50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Rewards Info */}
          <div>
            <span className="text-orange-500 text-sm font-semibold mb-4 inline-block">
              Wallet & Rewards
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Earn Rewards on Every Booking
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Get cashback, exclusive offers, and faster checkouts with Jhatpat Wallet.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Wallet Points</h4>
                <p className="text-gray-600 text-sm">Earn on every booking</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Quick Checkout</h4>
                <p className="text-gray-600 text-sm">Pay instantly</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Cashback Offers</h4>
                <p className="text-gray-600 text-sm">Exclusive deals</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Loyalty Tiers</h4>
                <p className="text-gray-600 text-sm">More rewards</p>
              </div>
            </div>

            {/* Payment Options Box */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Multiple Payment Options</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    UPI, Cards, Net Banking, and Wallet - all in one secure platform
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

export default WalletRewards;
