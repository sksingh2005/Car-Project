import React from 'react';

export default function Footer  ()  {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Buy old car</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Car Air Conditioning service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Car Engine Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Car Brake Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Car Tyre</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Working Hours</h3>
            <p className="text-gray-400">9 AM to 5PM, Monday - Saturday</p>
            <p className="text-gray-400">Phone: +23333728832</p>
            <p className="text-gray-400">Our support and sales are available 24/7 to answer your queries.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
