import React from 'react'
import { Mail, Phone, Rocket } from "lucide-react";
const LaunchNotification = () => {
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f1b2d] to-[#14243d] p-6">
      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-br from-orange-500 to-red-500 text-white flex flex-col items-center justify-center p-12 text-center">
          <div className="bg-white/20 p-6 rounded-full mb-6">
            <Rocket size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Launching Soon</h2>
          <p className="text-white/90">February 2026</p>
        </div>
        <div className="md:w-1/2 bg-gray-100 p-10 md:p-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Be the First to Know
          </h2>

          <p className="text-gray-500 mb-6">
            Get exclusive early access and special launch offers when we go live.
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="flex items-center bg-white border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-orange-500">
              <Mail size={18} className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex items-center bg-white border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-orange-500">
              <Phone size={18} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="+91 98765 43210"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition duration-300">
            Notify Me at Launch
          </button>
          <p className="text-center text-gray-500 text-sm mt-6">
            We respect your privacy. No spam, only launch updates and exclusive offers.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default LaunchNotification
