// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path"); 
// const { Image } = require("./db"); // Assuming you have an Image model

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public')); // Serve static files from the public folder

// // Set up storage for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, 'public/images')); // Corrected path
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname.split('.')[0] + "_" + Date.now() + path.extname(file.originalname));
//   }
// });

// // Multer configuration to upload up to 8 files at a time
// const upload = multer({
//   storage: storage
// });

// // Upload route
// app.post('/upload', upload.array('files', 8), async (req, res) => {
//   try {
//     const { carName, mileage, fuelType, transmission, price } = req.body;

//     const uploadedFiles = req.files.map(file => file.filename); // Get filenames

//     // Create a new entry in the database
//     const newCar = await Image.create({
//       carName,
//       mileage,
//       fuelType,
//       transmission,
//       price,
//       images: uploadedFiles // Store uploaded filenames
//     });

//     return res.json({
//       msg: "Images uploaded successfully",
//       images: uploadedFiles
//     });
//   } catch (error) {
//     console.error("Error uploading images:", error);
//     return res.status(500).json({ msg: "Error uploading images", error });
//   }
// });

// // Route to serve images directly
// app.get('/images/:filename', (req, res) => {
//   const { filename } = req.params;
//   const imagePath = path.join(__dirname, 'public/images', filename);
//   res.sendFile(imagePath);
// });

// // Route to fetch all images
// app.get('/getimages', async (req, res) => {
//   try {
//     const images = await Image.find().lean(); // Use .lean() to return plain JavaScript objects
//     return res.json({ Images: images });
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     return res.status(500).json({ msg: "Error fetching images" });
//   }
// });
// app.get('/count', async (req, res) => {
//     try {
//         const count = await Image.countDocuments(); // Use countDocuments for efficiency
//         console.log(count);
//         return res.status(200).json({ Count: count });
//     } catch (error) {
//         console.error("Error fetching count:", error);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// });

// app.get('/car:carname',async(req,res)=>{

// })
// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path"); 
const { Car } = require("./db"); // Assuming you have an Image model

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images'))); // Serve images statically

// Connect to MongoDB (ensure you have your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/carDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Set up storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/images')); // Corrected path
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.split('.')[0] + "_" + Date.now() + path.extname(file.originalname));
  }
});

// Multer configuration to upload up to 8 files at a time
const upload = multer({
  storage: storage
});

// Upload route
app.post('/upload', upload.array('files', 8), async (req, res) => {
  try {
    const { carName, mileage, fuelType, transmission, price, makeYear, registrationYear, ownerStatus, insuranceValidity, insuranceType, carLocation, rto } = req.body;

    const uploadedFiles = req.files.map(file => file.filename); // Get filenames

    // Create a new entry in the database
    const newCar = await Car.create({
      carName,
      mileage,
      fuelType,
      transmission,
      price,
      makeYear,
      registrationYear,
      ownerStatus,
      insuranceValidity,
      insuranceType,
      carLocation,
      rto,
      images: uploadedFiles // Store uploaded filenames
    });

    return res.json({
      msg: "Images uploaded successfully",
      images: uploadedFiles
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    return res.status(500).json({ msg: "Error uploading images", error });
  }
});

// Route to serve images directly
app.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, 'public/images', filename);
  res.sendFile(imagePath);
});

// Route to fetch all images and car details
app.get('/getimages', async (req, res) => {
  try {
    const images = await Car.find().lean(); // Use .lean() to return plain JavaScript objects
    return res.json({ Images: images });
  } catch (error) {
    console.error("Error fetching images:", error);
    return res.status(500).json({ msg: "Error fetching images" });
  }
});

// Route to get the count of cars
app.get('/count', async (req, res) => {
  try {
    const count = await Car.countDocuments(); // Use countDocuments for efficiency
    console.log(count);
    return res.status(200).json({ Count: count });
  } catch (error) {
    console.error("Error fetching count:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// **New Route**: Fetch car details by carName
app.get('/getcar/:carName', async (req, res) => {
  try {
    const { carName } = req.params;
    // Convert carName to match the format stored in the database
    const formattedCarName = carName.replace(/-/g, ' ').toLowerCase();

    // Find the car by name (case-insensitive)
    const car = await Car.findOne({ 
      carName: { $regex: new RegExp(`^${formattedCarName}$`, 'i') } 
    }).lean();

    if (!car) {
      return res.status(404).json({ msg: "Car not found" });
    }

    return res.json(car);
  } catch (error) {
    console.error("Error fetching car details:", error);
    return res.status(500).json({ msg: "Error fetching car details", error });
  }
});
// Route to delete a car by ID
app.delete('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters
    const deletedCar = await Car.findByIdAndDelete(id); // Delete the car from the database

    if (!deletedCar) {
      return res.status(404).json({ msg: "Car not found" });
    }

    return res.status(200).json({ msg: "Car deleted successfully", car: deletedCar });
  } catch (error) {
    console.error("Error deleting car:", error);
    return res.status(500).json({ msg: "Error deleting car", error });
  }
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
