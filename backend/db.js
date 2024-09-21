const mongoose = require("mongoose");

mongoose.connect("mONGO_URL");

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
const User = mongoose.model('User', userSchema);
const Booking=mongoose.model('Booking',bookingschema)
module.exports = {
    User,
    Booking
};