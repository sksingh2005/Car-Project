import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error messages
  const [isHovered, setIsHovered] = useState(false); // State to trigger hover effect
  const [loading, setLoading] = useState(false); // New state for loading

  const submit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Start loading

    try {
      const response = await axios.post("http://localhost:3000/booking", {
        username,
        phone,
        budget,
        location,
      });

      if (response.data.msg === "Booking successful") {
        setSuccessMessage("Service booked successfully!");
        setUsername("");
        setPhone("");
        setBudget("");
        setLocation("");
        triggerHoverEffect();
        setErrorMessage(""); // Clear any previous error
      }
    } catch (error) {
      console.error("Error booking service:", error);
      setErrorMessage("Failed to book service. Please try again."); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const triggerHoverEffect = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false); // Remove hover effect after 2 seconds
    }, 2000); // Hover effect duration (2 seconds)
  };

  return (
    <div>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Call Now</h2>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={username}
              placeholder="Enter your name"
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={phone}
              placeholder="Please enter your Mobile Number"
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
              Enter your Budget
            </label>
            <input
              type="text"
              id="budget"
              value={budget}
              placeholder="Enter your Budget"
              onChange={(e) => setBudget(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-map-marker-alt text-gray-500"></i>
              </span>
              <input
                type="text"
                id="location"
                value={location}
                placeholder="Please Select your location"
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100"
              />
            </div>
          </div>

          {errorMessage && <div className="text-red-600">{errorMessage}</div>}
          {successMessage && (
            <div
              className={`text-green-600 mt-4 p-2 bg-green-100 rounded-md text-center transition-transform duration-500 ease-out ${
                isHovered ? "scale-105" : ""
              }`}
            >
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full ${loading ? "bg-gray-400" : "bg-gray-800 hover:bg-gray-900"} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {loading ? "Processing..." : "Contact Seller"}
          </button>
        </form>
      </div>
    </div>
  );
}
