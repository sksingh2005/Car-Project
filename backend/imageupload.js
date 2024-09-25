const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream');
const cors = require("cors");
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const { Schema } = mongoose;

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB URI
const mongoURI = 'your mongo url'; // Update with your MongoDB URI

// Connect to MongoDB
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Initialize GridFS stream
let gfs;
conn.on('error', (err) => console.error('MongoDB connection error:', err));
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads'); // Set collection name for files
});

// Create a storage engine for multer
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return {
      bucketName: 'uploads',
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

const upload = multer({ storage });

// Define Car Schema
const carSchema = new Schema({
  carname: { type: String, required: true },
  kmDriven: { type: Number, required: true },
  makeYear: { type: Number, required: true },
  registrationYear: { type: Number, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  insuranceValidity: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  pictures: [{ type: String }], // Array of image filenames
});

const Car = mongoose.model('Car', carSchema);

// POST /upload - Upload car details with images
app.post('/upload', upload.array('pictures', 8), async (req, res) => {
  console.log('Uploaded files:', req.files);
  
  const { carname, kmDriven, makeYear, registrationYear, fuelType, transmission, insuranceValidity, location, price } = req.body;

  // Check for uploaded files
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }

  const pictures = req.files.map(file => file.filename);

  try {
    const newCar = new Car({
      carname,
      kmDriven,
      makeYear,
      registrationYear,
      fuelType,
      transmission,
      insuranceValidity,
      location,
      price,
      pictures,
    });

    await newCar.save();
    res.status(201).json({ message: 'Car details uploaded successfully' });
  } catch (error) {
    console.error('Error uploading car details:', error);
    res.status(500).json({ error: 'Failed to upload car details' });
  }
});

// GET /getimages - Get car details along with images
app.get('/getimages', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching car details:', error);
    res.status(500).json({ error: 'Failed to fetch car details' });
  }
});

// GET /image/:filename - Serve an image by filename
app.get('/image/:filename', (req, res) => {
  const { filename } = req.params;

  gfs.files.findOne({ filename }, (err, file) => {
    if (err) {
      console.error('Error fetching file:', err);
      return res.status(500).json({ error: 'Error fetching file' });
    }

    if (!file || file.length === 0) {
      return res.status(404).json({ error: 'No file exists' });
    }

    // Check if the file is an image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({ error: 'Not an image' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
