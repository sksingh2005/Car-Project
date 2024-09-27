import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard3 from "./Fetched";

const CarCard2 = () => {
  const navigate = useNavigate();

  const [carData,setCarData] = useState([
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
    {
      id: 4,
      name: "2016 KIA Seltos HTX",
      mileage: "203 km",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "₹ 14.79 Lakh",
      imageUrl: "/Kia.jpg",
    },
    {
      id: 5,
      name: "2020 Hyundai Creta",
      mileage: "123 km",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "₹ 13.79 Lakh",
      imageUrl: "/Creta.jpg",
    },
    {
      id: 6,
      name: "2020 Tata Nexon XZ+",
      mileage: "50 km",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "₹ 11.5 Lakh",
      imageUrl: "/nexon.jpg",
    },
    {
      id: 7,
      name: "2021 Volkswagen Taigun Highline",
      mileage: "200 km",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "₹ 15.79 Lakh",
      imageUrl: "/taigun.jpg",
    },
    {
      id: 8,
      name: "2020 Honda City V Petrol",
      mileage: "45 km",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "₹ 12.26 Lakh",
      imageUrl: "/Hondacity.jpg",
    },
    {
      id: 9,
      name: "2016 Ford Endeavour Titanium+",
      mileage: "27 km",
      fuelType: "Diesel",
      transmission: "Manual",
      price: "₹ 35.0 Lakh",
      imageUrl: "/FORO.jpg",
    },
  ]);
  const [count, setCount] = useState(0); // Use state to manage count
  useEffect(()=>{
    const count1=async()=>{
      const result=await axios.get("http://localhost:3001/count")
        setCount(result.data.Count);
    }
    count1();
  },[])
  const toggleLike = (id) => {
    setLikedCars((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const [more,setMore]=useState(false);
  const filteredCarData = more ? carData : carData.filter((car) => car.id < 7);

  return (
    <div>
      <div className="p-4 font-bold text-2xl">
        <p>{carData.length+count} Used car Available</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 ">
        {}
        {filteredCarData
        .map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg border border-gray-200 relative flex flex-col cursor-pointer"
          >
            {/* Car Image */}
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={car.imageUrl}
              alt={car.name}
              onClick={() => {
                if (car.id === 1) {
                  navigate("/cars/ms");
                }
              }}
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
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
      {more ? <CarCard3 /> : <div></div>}
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
      <button onClick={()=>{
        setMore(!more);
      }} type="button" class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">{!more?(
      <>
      <p> view  more  cars </p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        </>):(
          <>
          <p> view  less  cars </p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
        </>
        )} 
     </button>

      </div>
    </div>
    </div>
  );
};

export default CarCard2;


// // {likedCars[car.id] ? (
//   <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6 text-red-500"
//   fill="currentColor"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     d="M12 21c-3.313 0-5.943-1.671-8-4.439C1.586 13.416 0 10.348 0 7a7 7 0 0 1 12-5.18A7 7 0 0 1 24 7c0 3.348-1.586 6.416-4 9.561C17.943 19.329 15.313 21 12 21z"
//   />
// </svg>
// ) : (
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     d="M12 21c-3.313 0-5.943-1.671-8-4.439C1.586 13.416 0 10.348 0 7a7 7 0 0 1 12-5.18A7 7 0 0 1 24 7c0 3.348-1.586 6.416-4 9.561C17.943 19.329 15.313 21 12 21z"
//   />
// </svg>
// )}