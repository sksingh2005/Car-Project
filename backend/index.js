const express = require("express");
const multer = require("multer");
const zod = require("zod");
const { User, Booking, Image } = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/images/"); // Adjust the path as needed
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Zod schema for user booking
const Schema = zod.object({
  username: zod.string().min(3, "Username must be at least 3 characters long").max(20, "Username cannot be longer than 20 characters"),
  phone: zod.string().length(10, "Phone number must be exactly 10 digits"), // Phone as a string
  time: zod.string(),
  service: zod.string(),
});

// Booking service endpoint
app.post('/book_service', async (req, res) => {
  const body = req.body;

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({
      msg: "Invalid credentials",
      errors: parsed.error.errors // Include validation errors
    });
  }

  const user = await User.create({
    username: body.username,
    num1: body.phone, // Ensure phone number is passed as a string
    service: body.service,
    time: body.time
  });

  if (user) {
    return res.json({
      msg: "Service booked"
    });
  }
});

// Zod schema for booking
const bookingSchema = zod.object({
  username: zod.string().min(3, "Username must be at least 3 characters long").max(20, "Username cannot be longer than 20 characters"),
  phone: zod.string().length(10, "Phone number must be exactly 10 digits"), // Phone as a string
  budget: zod.string(),
  location: zod.string(),
});

// Booking endpoint
app.post('/booking', async (req, res) => {
  const body = req.body;
  const validation = bookingSchema.safeParse(body);
  if (!validation.success) {
    return res.status(403).json({
      msg: "Invalid credentials"
    });
  }
  const book = await Booking.create({
    username: body.username,
    num1: body.phone,
    budget: body.budget,
    location: body.location
  });
  if (book) {
    return res.status(200).json({
      msg: "Booking successful"
    });
  }
});

// Zod schema for car details
const carDetailsSchema = zod.object({
  carname: zod.string().min(1, "Car name is required"),
  mileage: zod.string().min(1, "Mileage is required"),
  fueltype: zod.string().min(1, "Fuel type is required"),
  transmission: zod.string().min(1, "Transmission type is required"),
  price: zod.number().min(0, "Price must be a positive number"),
});

// Endpoint to upload car details and image
app.post('/upload', upload.single('image'), async (req, res) => {
  const { carname, mileage, fueltype, transmission, price } = req.body;
  const imageName = req.file ? req.file.filename : null; // Get uploaded image filename

  // Validate input data
  const parsed = carDetailsSchema.safeParse({ carname, mileage, fueltype, transmission, price });
  if (!parsed.success) {
    return res.status(400).json({
      msg: "Invalid credentials",
      errors: parsed.error.errors,
    });
  }

  try {
    const upload = await Image.create({
      image: imageName,
      carname: carname,
      mileage: mileage,
      fueltype: fueltype,
      transmission: transmission,
      price: price,
    });

    if (upload) {
      res.send({ status: "ok" });
    } else {
      res.json({ msg: "Error occurred during upload" });
    }
  } catch (err) {
    res.send({ status: "error", data: err });
  }
});

// Endpoint to get uploaded images
app.get('/get-image', async (req, res) => {
  try {
    const images = await Image.find({});
    res.json({ status: "ok", data: images });
  } catch (error) {
    res.json({ status: error });
  }
});

// Existing endpoints for image retrieval
app.get('/get_image', async (req, res) => {
  const images = await Image.find({});
  res.json({ "images": images });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
