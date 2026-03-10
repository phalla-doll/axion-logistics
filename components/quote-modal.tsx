'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-6 py-4 bg-zinc-900 text-white rounded-full shadow-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 font-medium"
      >
        <MessageSquare className="w-5 h-5" />
        Get a Quote
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          {/* Modal Content */}
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <h2 className="text-2xl font-bold">Request a Quote</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form className="p-6 flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">First Name</label>
                  <input type="text" id="firstName" className="px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow" placeholder="John" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastName" className="text-sm font-medium text-zinc-700">Last Name</label>
                  <input type="text" id="lastName" className="px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                <input type="email" id="email" className="px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow" placeholder="john@company.com" required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-sm font-medium text-zinc-700">Service Required</label>
                <select id="service" defaultValue="" className="px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow bg-white" required>
                  <option value="" disabled>Select a service...</option>
                  <option value="international">International Shipping</option>
                  <option value="warehousing">Warehousing &amp; Distribution</option>
                  <option value="last-mile">Last-Mile Delivery</option>
                  <option value="supply-chain">Supply Chain Optimization</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700">Additional Details</label>
                <textarea id="message" rows={4} className="px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow resize-none" placeholder="Tell us about your shipment volume, frequency, and specific requirements..."></textarea>
              </div>

              <button type="submit" className="mt-2 w-full py-3.5 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
