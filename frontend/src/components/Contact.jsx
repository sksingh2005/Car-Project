import React, { lazy, Suspense } from "react";

// Lazy loaded components
const Footer = lazy(() => import("./Footer"));
const Navbar = lazy(() => import("./Navbar"));

export default  function Contact(){
    return <div>
        <div className="p-2">
            <Navbar/>
        </div>
        <div className="flex justify-center pt-2">
            <p className="text-4xl font-bold">CONTACT US </p>
        </div>
        <div>
        <div className="bg-white shadow-lg rounded-lg p-6 mx-auto w-full">
      {/* Email Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12L12 15.5 8 12M3 8l9 6 9-6M3 8h18v10H3z" />
        </svg>


          Email
        </h3>
        <div className="flex space-x-4">
          <p>cardealer@gmail.com</p>
          <p>helpcenter@gmail.com</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4 0 2.76 4 8 4 8s4-5.24 4-8c0-2.21-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
          Address
        </h3>
        <p>2130 N Park Dr #234, <span className="underline">Brampton</span>, ON L6S 0C9, Canada</p>
      </div>

      {/* Phone Number Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 10h18M3 15h18M3 20h18" />
          </svg>
          Phone Number
        </h3>
        <div className="flex space-x-4">
          <p>+12894999102</p>
          <p>+12894998405</p>
        </div>
      </div>
    </div>
        </div>
        <div className="flex justify-center pt-2 pb-4">
            <p className="text-4xl font-bold">LOCATION </p>
        </div>
        <Footer/>
    </div>
}