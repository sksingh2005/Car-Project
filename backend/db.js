const mongoose = require("mongoose");

mongoose.connect("MONGO_URL");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    num1: {
        type: String, // Change from Number to String
        required: true,
        minLength: 10,
        maxLength: 10 // Set the length constraint for phone number as a string
    },
    time: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    }
});
const userschema1=new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstname:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    }
})
const bookingschema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    num1: {
        type: String, // Change from Number to String
        required: true,
        minLength: 10,
        maxLength: 10 // Set the length constraint for phone number as a string
    },
    budget:{
        type: String, // Change from Number to String
        required: true,
    },
    location:{
        type: String, // Change from Number to String
        required: true,
    }

})

const ImageSchema=new mongoose.Schema({
    carname:String,
    mileage:String,
    fueltype:String,
    transmission:String,
    price:String,
    image:String,

},{
    collection:"Image"
});
const Admin=mongoose.model('Admin',userschema1);
const Image=mongoose.model('Image',ImageSchema);
const User = mongoose.model('User', userSchema);
const Booking=mongoose.model('Booking',bookingschema)
module.exports = {
    User,
    Booking,
    Image,
    Admin
};
