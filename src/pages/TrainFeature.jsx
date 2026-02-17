import { useState } from 'react';
import train from '../assets/image/trainImage.png'
const TrainFeature = () => {
    const [pnrValue,setPnrValue]=useState('')
    const handlePnrCheck=(e)=>{
        e.preventDefault()
        console.log('Checking Pnr',pnrValue)
        setPnrValue('')
    }
  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
         
          <div>
            <span className="text-purple-600 text-sm font-semibold mb-4 inline-block">
              Train Bookings
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trains & PNR Status in One Place
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Book train tickets and check PNR status instantly. Get live updates on your journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-purple-50 rounded-lg p-5">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Train Ticket Booking</h4>
                  <p className="text-gray-600 text-sm">
                    Book tickets across all Indian railways with real-time availability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-purple-50 rounded-lg p-5">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">PNR Status Check</h4>
                  <p className="text-gray-600 text-sm">
                    Track your booking status and get instant confirmation updates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-purple-50 rounded-lg p-5">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Live Journey Tracking</h4>
                  <p className="text-gray-600 text-sm">
                    Real-time train location and arrival time predictions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-32">
                <img 
                  src={train} 
                  alt="Train Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Check PNR Status</h3>
                <div className="mb-6">
                  <label className="text-gray-600 text-sm mb-2 block">PNR Number</label>
                  <div className="flex gap-2">
                    <input 
                    value={pnrValue}
                    onChange={(e)=>setPnrValue(e.target.value)}
                      type="text" 
                      placeholder="Enter 10-digit PNR"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button onClick={handlePnrCheck} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Check
                    </button>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gray-600 text-sm">PNR: 1234567890</p>
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Confirmed
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Rajdhani Express</h4>
                  <p className="text-gray-600 text-sm mb-4">12301 • AC 2-Tier (A1)</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">From</p>
                      <p className="font-semibold text-gray-900">New Delhi</p>
                      <p className="text-gray-600 text-sm">18 Feb, 4:55 PM</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs mb-1">To</p>
                      <p className="font-semibold text-gray-900">Mumbai</p>
                      <p className="text-gray-600 text-sm">17 Feb, 8:35 AM</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="text-gray-900 text-sm">
                      <span className="font-semibold">Berth:</span> 24 (Lower) • Coach A1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainFeature;
