import { lazy, Suspense } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CarouselComponent = lazy(() => import("./Slider1"));
import Navbar from './Navbar';
import Footer from './Footer';
import Form from './Form';

const CarDetailsPage = () => {
  const { carName } = useParams(); // Extract carName from route parameters
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getcar/${carName}`);
        setCar(response.data); // Set fetched car details
        setLoading(false);
      } catch (error) {
        console.error('Error fetching car details:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [carName]);

  if (loading) {
    return <div className="text-center mt-10">Loading car details...</div>; // Handle loading state
  }

  if (error || !car) {
    return <div className="text-center mt-10 text-red-500">Error loading car details.</div>;
  }

  // Construct image URLs
  const imageUrls = car.images.map(img => `http://localhost:3001/images/${img}`);

  return (
    <div>
      {/* Navbar can be included here if not already in a higher-level component */}
      <div className="absolute top-0 left-0 right-0 z-20"> {/* Navbar fixed at top */}
        <div className="p-2">
            <Navbar />
        </div>
        
      </div>

      {/* Carousel with dynamic images */}
      <CarouselComponent images={imageUrls} />

      {/* Car Details */}
      <div className="p-6">
      <div className="grid grid-cols-3 p-6">
            <div className="col-span-2 text-4xl italic font-bold ">
                 <p>{car.carName}</p>
            </div>
           <div className="text-4xl italic font-bold">
            <p>Price: ₹{car.price / 100000} Lakh </p>
           </div>
        </div>
        
        <div className="pl-6 font-bold">
  <p>Car Overview</p>
  <div>
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200">
        {/* Display Mileage, Fuel Type, Transmission, Make Year, Registration Year */}
        <div className="flex flex-col p-4 border-b border-r border-gray-200">
          <span className="font-semibold">Mileage</span>
          <span>{car.mileage}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-r border-gray-200">
          <span className="font-semibold">Fuel Type</span>
          <span>{car.fuelType}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-r border-gray-200">
          <span className="font-semibold">Transmission</span>
          <span>{car.transmission}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-gray-200">
          <span className="font-semibold">Make Year</span>
          <span>{car.makeYear}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-r border-gray-200">
          <span className="font-semibold">Registration Year</span>
          <span>{car.registrationYear}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-r border-gray-200">
          <span className="font-semibold">Owner Status</span>
          <span>{car.ownerStatus}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-r border-gray-200">
          <span className="font-semibold">Insurance Validity</span>
          <span>{new Date(car.insuranceValidity).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-gray-200">
          <span className="font-semibold">Insurance Type</span>
          <span>{car.insuranceType}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-r border-gray-200">
          <span className="font-semibold">Location</span>
          <span>{car.carLocation}</span>
        </div>
        <div className="flex flex-col p-4 border-b border-gray-200">
          <span className="font-semibold">RTO</span>
          <span>{car.rto}</span>
        </div>
      </div>
    </div>
  </div>
  {/* Include Form and Footer components below */}
  <Form />
</div>

      </div>
        <Footer />

    </div>
  );
};

export default CarDetailsPage;
