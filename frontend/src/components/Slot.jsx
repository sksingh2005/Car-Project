import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    service: '',
    time: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State to trigger hover effect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API request to the backend to book the service
      const response = await axios.post("http://localhost:3000/book_service", formData);

      if (response.data.msg === "Service booked") {
        setSuccessMessage("Service booked successfully!");
        setFormData({
          username: '',
          phone: '',
          service: '',
          time: '',
        });
        triggerHoverEffect(); // Trigger the hover effect on success
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Booking failed. Try again.");
    }
  };

  const handleClear = () => {
    setFormData({
      username: '',
      phone: '',
      service: '',
      time: '',
    });
    setSuccessMessage('');
  };

  // Trigger hover effect for a specific time (e.g., 2 seconds)
  const triggerHoverEffect = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false); // Remove hover effect after 2 seconds
    }, 2000); // Hover effect duration (2 seconds)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit}  // Handle form submission here
        className="bg-pink-100 p-12 shadow-md rounded-md w-full max-w-lg relative"
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block mb-1 font-medium text-lg">Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Enter your name"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1 font-medium text-lg">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            >
              <option value="">Select the service</option>
              <option value="Car Engine Service">Car Engine Service</option>
              <option value="Car Tyre Service">Car Tyre Service</option>
              <option value="Car Air Condition Service">Car Air Condition Service</option>
              <option value="Car Brake Service">Car Brake Service</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block mb-1 font-medium text-lg">Mobile Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Please enter your Mobile Number"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1 font-medium text-lg">Time Slot</label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Select the time slot"
            />
          </div>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div 
            className={`text-green-600 mt-4 p-2 bg-green-100 rounded-md text-center transition-transform duration-500 ease-out ${isHovered ? 'scale-105' : ''}`}
          >
            {successMessage}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleClear}
            className="px-8 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Clear
          </button>
          <button
            type="submit"  // Submit button should trigger form submit
            className="px-8 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
