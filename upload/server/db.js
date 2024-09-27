const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shashanksgh3:%402005SINGHjvm@cluster0.eoakwss.mongodb.net/upload");



const ImageSchema=new mongoose.Schema({
    carName:String,
    mileage:String,
    fuelType:String,
    transmission:String,
    price:String,
    images:[String],

},{
    collection:"Image"
});

const Image=mongoose.model('Image',ImageSchema);

module.exports = {
    Image
};
