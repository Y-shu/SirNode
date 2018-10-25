const mongoose = require('mongoose');
var reviewSchema =mongoose.Schema({
  name:{
    type:String
  },
  id:String,
  review:{
    type:String
    },
  rating:{
    type:Number,
    min:0,
    max:5,
    "default":0
  },
  createdOn:{
    type:Date,
    "default":Date.now
  }
});
var roomSchema = mongoose.Schema({
  type:String,
  number:Number,
  description:String,
  photos:[String],
  price:Number
});
var locationSchema= mongoose.Schema({
  address : String,
  coordinates:[Number]
});
var HotelSchema = mongoose.Schema({
  name:String,
    
  stars:Number,
    
  description:String,
  photos:[String],
  services:[String],
  currency:String,
  reviews:[reviewSchema],
  rooms:[roomSchema],
  location:locationSchema
});

module.exports=mongoose.model('Hotel',HotelSchema,'hoteldetailss')



