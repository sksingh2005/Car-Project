import Slider from "react-slick";
import React, { lazy, Suspense } from "react";
import CarouselComponent1 from "./Courselcomponent1";

// Lazy loaded components
const Footer = lazy(() => import("./Footer"));
const Form = lazy(() => import("./Form"));
const CarouselComponent = lazy(() => import("./Slider1"));

export default function Ms(){
    const carDetails = {
        makeYear: "May 2021",
        registrationYear: "Aug 2021",
        fuelType: "Petrol",
        kmDriven: "23 km",
        transmission: "Manual (Regular)",
        ownerStatus: "1st Owner",
        insuranceValidity: "Aug 2025",
        insuranceType: "Third party",
        carLocation: "Chandigarh",
        rto: "CH01"
    };
    return <div>
        <div>
            <CarouselComponent1/>

        </div>
        <div className="grid grid-cols-3 p-6">
            <div className="col-span-2 text-4xl italic font-bold ">
                 <p>2021 Maruti Suzuki Baleno </p>
            </div>
           <div className="text-4xl italic font-bold">
            <p> ₹ 6.79 Lakh</p>
           </div>
           <div className="text-4xl italic font-bold">
            <p>Zeta</p>
           </div>
        </div>

        <div>
            <div className="pl-6 font-bold">
                <p>Car Overview </p>
                <div>
                <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-200">
                {Object.entries(carDetails).map(([key, value], index) => (
                    <div key={index} className="flex flex-col p-4 border-b border-r border-gray-200">
                        <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
                </div>
            </div>
            <Form/>
            <Footer/>
        </div>
    </div>
}