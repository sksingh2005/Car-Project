import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Hello Admin
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your car inventory with ease!
        </p>
        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Go Back to Home Page
          </button>
          <button
            onClick={() => navigate("/add-car")}
            className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Add Cars
          </button>
          <button
            onClick={() => navigate("/delete-car")}
            className="bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
          >
            Delete Cars
          </button>
          <button
            onClick={() => navigate("/manage-cars")}
            className="bg-yellow-600 text-white p-4 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
          >
            Manage Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
