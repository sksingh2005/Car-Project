import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA/Canada" },
    // Add more country codes as needed
];

const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
];

const FormComponent = () => {
    const location = useLocation();
    const selectedService = location.state?.selectedService || "";

    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        countryCode: '+91', // Default country code
        service: selectedService,
        time: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (selectedService) {
            setFormData((prevData) => ({ ...prevData, service: selectedService }));
        }
    }, [selectedService]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrorMessages((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        // Validation
        if (!formData.username) errors.username = "Name is required.";
        if (!formData.phone) errors.phone = "Mobile number is required.";
        if (!formData.service) errors.service = "Service selection is required.";
        if (!formData.time) errors.time = "Time slot is required.";

        setErrorMessages(errors);

        if (Object.keys(errors).length > 0) return; // If there are errors, stop submission

        try {
            const response = await axios.post("http://localhost:3000/book_service", formData);

            if (response.data.msg === "Service booked") {
                setSuccessMessage("Service booked successfully!");
                setFormData({
                    username: '',
                    phone: '',
                    countryCode: '+91',
                    service: '',
                    time: '',
                });
                triggerHoverEffect();
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
            countryCode: '+91',
            service: '',
            time: '',
        });
        setErrorMessages({});
        setSuccessMessage('');
    };

    const triggerHoverEffect = () => {
        setIsHovered(true);
        setTimeout(() => {
            setIsHovered(false);
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-pink-100 p-12 shadow-md rounded-md w-full max-w-lg relative">
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="block mb-1 font-medium text-lg">Name</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`w-full px-6 py-3 border ${errorMessages.username ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-indigo-100`}
                            placeholder="Enter your name"
                        />
                        {errorMessages.username && <p className="text-red-500 text-sm">{errorMessages.username}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-lg">Service</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`w-full px-6 py-3 border ${errorMessages.service ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-indigo-100`}
                        >
                            <option value="">Select the service</option>
                            <option value="Car Engine Service">Car Engine Service</option>
                            <option value="Car Tyre Service">Car Tyre Service</option>
                            <option value="Car Air Conditioning Service">Car Air Conditioning Service</option>
                            <option value="Car Brake Service">Car Brake Service</option>
                        </select>
                        {errorMessages.service && <p className="text-red-500 text-sm">{errorMessages.service}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-lg">Mobile Number</label>
                        <div className="flex">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="w-1/3 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-indigo-100"
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.code} ({country.country})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-2/3 px-6 py-3 border ${errorMessages.phone ? 'border-red-500' : 'border-gray-300'} rounded-r-md focus:outline-none focus:ring focus:ring-indigo-100`}
                                placeholder="Enter your mobile number"
                            />
                            {errorMessages.phone && <p className="text-red-500 text-sm">{errorMessages.phone}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-lg">Time Slot</label>
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className={`w-full px-6 py-3 border ${errorMessages.time ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-indigo-100`}
                        >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        {errorMessages.time && <p className="text-red-500 text-sm">{errorMessages.time}</p>}
                    </div>
                </div>

                {successMessage && (
                    <div className={`text-green-600 mt-4 p-2 bg-green-100 rounded-md text-center transition-transform duration-500 ease-out ${isHovered ? 'scale-105' : ''}`}>
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
                        type="submit"
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
