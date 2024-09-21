const express = require("express");
const zod = require("zod");
const { User, Booking } = require("./db");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const Schema = zod.object({
    username: zod.string().min(3, "Username must be at least 3 characters long").max(20, "Username cannot be longer than 20 characters"),
    phone: zod.string().length(10, "Phone number must be exactly 10 digits"), // Phone as a string
    time: zod.string(),
    service: zod.string()
});

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
const bookingSchema = zod.object({
    username: zod.string().min(3, "Username must be at least 3 characters long").max(20, "Username cannot be longer than 20 characters"),
    phone: zod.string().length(10, "Phone number must be exactly 10 digits"), // Phone as a string
    budget: zod.string(),
    location: zod.string()
});
app.post('/booking',async(req,res)=>{
    const body=req.body;
    const validation=bookingSchema.safeParse(body);
    if(!validation.success){
        return res.status(403).json({
            msg:"Invalid credentials"
        })
    }
    const book=await Booking.create({
        username:body.username,
        num1:body.phone,
        budget:body.budget,
        location:body.location
    })
    if(book){
        return res.status(200).json({
            msg:"Booking successful"
        })
    }
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
