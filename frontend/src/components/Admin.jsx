import React, { useState } from 'react';
import axios from 'axios';

function CarForm() {
    const [formData, setFormData] = useState({
        carName: '',
        kmDriven: '',
        makeYear: '',
        registrationYear: '',
        rto: '',
        noOfOwner: '',
        fuelType: '',
        transmission: '',
        insuranceType: '',
        insuranceValidity: '',
        location: '',
        price: '',
        images: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            images: e.target.files
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        // Append form data
        for (const key in formData) {
            if (key === 'images') {
                [...formData.images].forEach(image => {
                    data.append('pictures', image);
                });
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.post('http://localhost:3000/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success:', response.data);
        } catch (error) {
            // Improved error handling
            console.error('Error occurred during upload:');
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-5">
            <h1 className="text-2xl font-bold mb-6">Post Your Used Car</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Car Name" name="carName" type="text" value={formData.carName} onChange={handleInputChange} required />
                    <InputField label="KM driven" name="kmDriven" type="text" value={formData.kmDriven} onChange={handleInputChange} required />
                    <Dropdown label="Make year" name="makeYear" value={formData.makeYear} onChange={handleInputChange} options={['2020', '2021']} />
                    <Dropdown label="Registration year" name="registrationYear" value={formData.registrationYear} onChange={handleInputChange} options={['2019', '2020']} />
                    <Dropdown label="RTO" name="rto" value={formData.rto} onChange={handleInputChange} options={['CH 01', 'CH 02']} />
                    <Dropdown label="No of Owner" name="noOfOwner" value={formData.noOfOwner} onChange={handleInputChange} options={['1', '2']} />
                    <Dropdown label="Fuel Type" name="fuelType" value={formData.fuelType} onChange={handleInputChange} options={['Petrol', 'Diesel']} />
                    <Dropdown label="Transmission" name="transmission" value={formData.transmission} onChange={handleInputChange} options={['Manual', 'Automatic']} />
                    <Dropdown label="Insurance Type" name="insuranceType" value={formData.insuranceType} onChange={handleInputChange} options={['Comprehensive', 'Third Party']} />
                    <Dropdown label="Insurance validity" name="insuranceValidity" value={formData.insuranceValidity} onChange={handleInputChange} options={['2021', '2022']} />
                    <InputField label="Car Location" name="location" type="text" value={formData.location} onChange={handleInputChange} required />
                    <InputField label="Price" name="price" type="number" value={formData.price} onChange={handleInputChange} required />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Upload up to 8 photos</label>
                    <input type="file" multiple accept="image/*" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" className="mt-4 w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none">
                    Upload
                </button>
            </form>
        </div>
    );
}

function InputField({ label, type, name, value, onChange, required }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1">{label}:</label>
            <input type={type} name={name} value={value} onChange={onChange} required={required} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
    );
}

function Dropdown({ label, name, value, onChange, options }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1">{label}:</label>
            <select name={name} value={value} onChange={onChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default CarForm;
