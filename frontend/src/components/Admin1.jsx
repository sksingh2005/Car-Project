import React, { useState } from 'react';
import axios from 'axios';

function CarForm() {
    const [formData, setFormData] = useState({
        carName: '',
        mileage: '',
        makeYear: '2020',  // Default value
        registrationYear: '2019',  // Default value
        rto: 'CH01',  // Default value without space
        ownerStatus: '1st Owner',  // Updated field name and default value
        fuelType: 'Petrol',  // Default value
        transmission: 'Manual',  // Default value
        insuranceType: 'Comprehensive',  // Default value
        insuranceValidity: '',  // Changed to empty string for date input
        carLocation: '',
        price: '',
        images: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // For rto, remove any spaces to match backend format
        if (name === 'rto') {
            setFormData({ ...formData, [name]: value.replace(/\s+/g, '') });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            images: Array.from(e.target.files)  // Convert FileList to an array
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Append car details to FormData
        data.append('carName', formData.carName);
        data.append('mileage', formData.mileage);
        data.append('fuelType', formData.fuelType);
        data.append('transmission', formData.transmission);
        data.append('price', formData.price);
        data.append('makeYear', formData.makeYear);
        data.append('registrationYear', formData.registrationYear);
        data.append('ownerStatus', formData.ownerStatus);
        data.append('insuranceValidity', formData.insuranceValidity);
        data.append('insuranceType', formData.insuranceType);
        data.append('carLocation', formData.carLocation);
        data.append('rto', formData.rto);

        // Append images as 'files'
        formData.images.forEach((image) => {
            data.append('files', image); // Match the field name 'files'
        });

        try {
            const response = await axios.post('http://localhost:3001/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success:', response.data);

            // Reset form data after successful upload
            setFormData({
                carName: '',
                mileage: '',
                makeYear: '2020',
                registrationYear: '2019',
                rto: 'CH01',
                ownerStatus: '1st Owner',
                fuelType: 'Petrol',
                transmission: 'Manual',
                insuranceType: 'Comprehensive',
                insuranceValidity: '',
                carLocation: '',
                price: '',
                images: []
            });

            // Optionally, you can provide user feedback or redirect
            alert('Car uploaded successfully!');
        } catch (error) {
            console.error('Error occurred during upload:', error);
            alert('Failed to upload car. Please try again.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-5">
            <h1 className="text-2xl font-bold mb-6">Post Your Used Car</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <InputField 
                        label="Car Name" 
                        name="carName" 
                        type="text" 
                        value={formData.carName} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <InputField 
                        label="Mileage" 
                        name="mileage" 
                        type="text" 
                        value={formData.mileage} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <Dropdown 
                        label="Make Year" 
                        name="makeYear" 
                        value={formData.makeYear} 
                        onChange={handleInputChange} 
                        options={['2020', '2021', '2022', '2023', '2024']} 
                        required 
                    />
                    <Dropdown 
                        label="Registration Year" 
                        name="registrationYear" 
                        value={formData.registrationYear} 
                        onChange={handleInputChange} 
                        options={['2019', '2020', '2021', '2022', '2023']} 
                        required 
                    />
                    <Dropdown 
                        label="RTO" 
                        name="rto" 
                        value={formData.rto} 
                        onChange={handleInputChange} 
                        options={['CH01', 'CH02', 'DL01', 'DL02']} 
                        required 
                    />
                    <Dropdown 
                        label="Owner Status" 
                        name="ownerStatus" 
                        value={formData.ownerStatus} 
                        onChange={handleInputChange} 
                        options={['1st Owner', '2nd Owner', '3rd Owner', '4th Owner']} 
                        required 
                    />
                    <Dropdown 
                        label="Fuel Type" 
                        name="fuelType" 
                        value={formData.fuelType} 
                        onChange={handleInputChange} 
                        options={['Petrol', 'Diesel', 'Electric', 'Hybrid']} 
                        required 
                    />
                    <Dropdown 
                        label="Transmission" 
                        name="transmission" 
                        value={formData.transmission} 
                        onChange={handleInputChange} 
                        options={['Manual', 'Automatic', 'Semi-Automatic']} 
                        required 
                    />
                    <Dropdown 
                        label="Insurance Type" 
                        name="insuranceType" 
                        value={formData.insuranceType} 
                        onChange={handleInputChange} 
                        options={['Comprehensive', 'Third Party']} 
                        required 
                    />
                    <DatePicker 
                        label="Insurance Validity" 
                        name="insuranceValidity" 
                        value={formData.insuranceValidity} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <InputField 
                        label="Car Location" 
                        name="carLocation" 
                        type="text" 
                        value={formData.carLocation} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <InputField 
                        label="Price (₹)" 
                        name="price" 
                        type="number" 
                        value={formData.price} 
                        onChange={handleInputChange} 
                        required 
                        min="0"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Upload up to 10 photos</label>
                    <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="mt-4 w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
                >
                    Upload
                </button>
            </form>
        </div>
    );
}

// Custom Input Field Component
function InputField({ label, type, name, value, onChange, required, min }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1">{label}:</label>
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                required={required} 
                min={min}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
        </div>
    );
}

// Custom Dropdown Component
function Dropdown({ label, name, value, onChange, options, required }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1">{label}:</label>
            <select 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={required}
            >
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

// Custom Date Picker Component
function DatePicker({ label, name, value, onChange, required }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1">{label}:</label>
            <input 
                type="date" 
                name={name} 
                value={value} 
                onChange={onChange} 
                required={required}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
        </div>
    );
}

export default CarForm;
