import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarCard3 = () => {
  const navigate = useNavigate();
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getimages');
        setCarData(response.data.Images); // Access Images array from the response
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {carData.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border border-gray-200 relative flex flex-col cursor-pointer"
            onClick={() => {
              navigate(`/cars/${car.carName.replace(/\s+/g, '-').toLowerCase()}`);
            }}
          >
            {/* Car Image */}
            {car.images && car.images.length > 0 ? (
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={`http://localhost:3001/images/${car.images[0]}`} // Access the first image
                alt={car.carName}
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <p>No Image Available</p>
              </div>
            )}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">{car.carName}</h2>
                <div className="flex space-x-2 mt-2 text-sm text-gray-500">
                  <span>{car.mileage}</span>
                  <span>{car.fuelType}</span>
                  <span>{car.transmission}</span>
                </div>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold">₹{car.price / 100000} Lakh</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCard3;
