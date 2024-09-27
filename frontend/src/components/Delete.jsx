import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteCar = () => {
  const [cars, setCars] = useState([]);

  // Fetch cars from the server
  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getimages");
      console.log(response.data); // Log response to check its structure
      if (Array.isArray(response.data.Images)) { // Check for the Images array
        setCars(response.data.Images); // Access the array correctly
      } else {
        console.error("Response data.Images is not an array");
        setCars([]); // Set cars to an empty array if the structure is wrong
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
      setCars([]); // Handle any errors by setting cars to an empty array
    }
  };

  // Delete car by ID
  const handleDelete = async (carId) => {
    try {
      await axios.delete(`http://localhost:3001/cars/${carId}`); // Ensure the URL is correct
      setCars(cars.filter((car) => car._id !== carId)); // Update the local state
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };
  
  

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Delete Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car._id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{car.carName}</h2> {/* Adjusted to use carName */}
            <p><strong>Mileage:</strong> {car.mileage}</p>
            <p><strong>Fuel Type:</strong> {car.fuelType}</p>
            <p><strong>Transmission:</strong> {car.transmission}</p>
            <p><strong>Make Year:</strong> {car.makeYear}</p>
            <p><strong>Owner Status:</strong> {car.ownerStatus}</p>
            <button
              onClick={() => handleDelete(car._id)} // Delete button
              className="mt-4 bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-300"
            >
              Delete Car
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteCar;
