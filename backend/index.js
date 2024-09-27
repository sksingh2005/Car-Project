const express = require("express");
const zod = require("zod");
const jwt=require("jsonwebtoken")
const { User, Booking, Image, Admin } = require("./db");
const cors = require("cors");
const { JWWT_SECRET } = require("./config");

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));


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
const userschema=zod.object({
  username:zod.string().email(),
  firstname:zod.string(),
  lastname:zod.string(),
  password:zod.string().min(8)
})
app.post('/signup',async function(req,res){
  const input=req.body;
  const valid=userschema.safeParse(input);
  if(!valid.success){
      res.status(411).json({
          msg:"Invalid entry",
      })
      return ;
  }
  const dbcheck=await Admin.findOne({
      username:input.username,
      firstname:input.firstname,
      lastname:input.lastname,
      password:input.password
  })
  const entry=await Admin.create({
      username:input.username,
      firstname:input.firstname,
      lastname:input.lastname,
      password:input.password
  })

  const userid=entry._id;
  const token=jwt.sign({userid},JWWT_SECRET)
  if(entry){
      res.status(200).json({
          msg:"User created successfully",
          "token":token
      })
  }
})

const signinBody = zod.object({
  username: zod.string().email(),
password: zod.string()
})
app.post('/signin',async function(req,res){
  const input=req.body;
  const valid=signinBody.safeParse(input);
  if(!valid.success){
      res.status(411).json({
          msg:"Invalid entry",
      })
      return ;
  }
  const dbcheck=await User.findOne({
      username:input.username,
      password:input.password
  })
  let userId;
  if (dbcheck) {
      userId = dbcheck._id;
  } else {
      console.log("User not found with provided credentials");
  }
  const token=jwt.sign({userId},JWWT_SECRET)

  if(dbcheck){
      res.status(200).json({
          "token":token,
      })
      return ;
  }
  res.status(411).json({
      msg:"Error while logging in",
  })
  

})
// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
