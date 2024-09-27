const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path"); 
const { Image } = require("./db"); // Assuming you have an Image model

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the public folder

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
    const { carName, mileage, fuelType, transmission, price } = req.body;

    const uploadedFiles = req.files.map(file => file.filename); // Get filenames

    // Create a new entry in the database
    const newCar = await Image.create({
      carName,
      mileage,
      fuelType,
      transmission,
      price,
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

// Route to fetch all images
app.get('/getimages', async (req, res) => {
  try {
    const images = await Image.find().lean(); // Use .lean() to return plain JavaScript objects
    return res.json({ Images: images });
  } catch (error) {
    console.error("Error fetching images:", error);
    return res.status(500).json({ msg: "Error fetching images" });
  }
});
app.get('/count', async (req, res) => {
    try {
        const count = await Image.countDocuments(); // Use countDocuments for efficiency
        console.log(count);
        return res.status(200).json({ Count: count });
    } catch (error) {
        console.error("Error fetching count:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
