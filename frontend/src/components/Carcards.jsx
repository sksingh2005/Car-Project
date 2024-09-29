import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCard = () => {
  const navigate=useNavigate();
  const carData = [
    {
      id: 1,
      name: "2021 Maruti Suzuki Baleno Zeta",
      mileage: "23 km",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "₹ 6.79 Lakh",
      imageUrl: "/MS.jpg",
    },
    {
      id: 2,
      name: "2021 Skoda Kushaq Ambition 1",
      mileage: "24 km",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "₹ 9.0 Lakh",
      imageUrl: "/Skoda.jpg",
    },
    {
      id: 3,
      name: "2020 Mahindra Thar LX 4 STR",
      mileage: "100 km",
      fuelType: "Diesel",
      transmission: "Manual",
      price: "₹ 15.0 Lakh",
      imageUrl: "/Thar.jpg",
    },
  ];

  const [likedCars, setLikedCars] = useState({});

  const toggleLike = (id) => {
    setLikedCars((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 ">
      {carData.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-lg shadow-lg border border-gray-200 relative flex flex-col"
        >
          {/* Car Image */}
          <img
            className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
            src={car.imageUrl}
            alt={car.name} onClick={()=>{
              if(car.id==1){
                navigate("/cars/ms")
              }
            }}
          />
          <div className="p-2">
          <div className="mt-4 ">
            <h2 className="text-lg font-semibold">{car.name}</h2>
            <div className="flex space-x-2 mt-2 text-sm text-gray-500">
              <span>{car.mileage}</span>
              <span>{car.fuelType}</span>
              <span>{car.transmission}</span>
            </div>
          </div>

          {/* Price and Heart Section */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold">{car.price}</p>
            <button
              onClick={() => toggleLike(car.id)}
              className="text-gray-500 focus:outline-none"
            >
              
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default CarCard;

// {likedCars[car.id] ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-red-500"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 21c-3.313 0-5.943-1.671-8-4.439C1.586 13.416 0 10.348 0 7a7 7 0 0 1 12-5.18A7 7 0 0 1 24 7c0 3.348-1.586 6.416-4 9.561C17.943 19.329 15.313 21 12 21z"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 21c-3.313 0-5.943-1.671-8-4.439C1.586 13.416 0 10.348 0 7a7 7 0 0 1 12-5.18A7 7 0 0 1 24 7c0 3.348-1.586 6.416-4 9.561C17.943 19.329 15.313 21 12 21z"
//                   />
//                 </svg>
//               )}
