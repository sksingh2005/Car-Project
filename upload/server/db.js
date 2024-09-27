

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("MONGO_URL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

// Define the Car Schema
const CarSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: [true, "Car name is required"],
    trim: true,
    unique: true, // Assuming each carName is unique
  },
  mileage: {
    type: String,
    required: [true, "Mileage is required"],
    trim: true,
  },
  fuelType: {
    type: String,
    required: [true, "Fuel type is required"],
    enum: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG", "LPG"],
    default: "Petrol",
  },
  transmission: {
    type: String,
    required: [true, "Transmission type is required"],
    enum: ["Manual", "Automatic", "Semi-Automatic"],
    default: "Manual",
  },
  price: {
    type: Number, // Changed to Number for easier calculations
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  images: {
    type: [String],
    required: [true, "At least one image is required"],
    validate: [arrayLimit, "Exceeds the limit of 10 images"],
  },
  makeYear: {
    type: Number,
    required: [true, "Make year is required"],
    min: [1886, "Make year cannot be before 1886"], // First car invented in 1886
  },
  registrationYear: {
    type: Number,
    required: [true, "Registration year is required"],
    min: [1886, "Registration year cannot be before 1886"],
  },
  ownerStatus: {
    type: String,
    required: [true, "Owner status is required"],
    enum: ["1st Owner", "2nd Owner", "3rd Owner", "4th Owner"],
    default: "1st Owner",
  },
  insuranceValidity: {
    type: Date,
    required: [true, "Insurance validity date is required"],
  },
  insuranceType: {
    type: String,
    required: [true, "Insurance type is required"],
    enum: ["Third Party", "Comprehensive"],
    default: "Third Party",
  },
  carLocation: {
    type: String,
    required: [true, "Car location is required"],
    trim: true,
  },
  rto: {
    type: String,
    required: [true, "RTO code is required"],
    trim: true,
    uppercase: true,
    match: [/^[A-Z]{2}\d{2}$/, "RTO code must be in the format 'XX00'"],
  },
}, {
  collection: "Cars", // Updated collection name
  timestamps: true,   // Adds createdAt and updatedAt timestamps
});

// Custom validator to limit the number of images
function arrayLimit(val) {
  return val.length <= 10; // Maximum of 10 images per car
}

// Create the Car model
const Car = mongoose.model('Car', CarSchema);

// Export the Car model
module.exports = {
  Car,
};
