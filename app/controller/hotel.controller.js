const dbconn = require('../model/db.conn.js');
const mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');


module.exports.getHotels =function (req,res){
  Hotel.find({})
  .exec((err,hotel)=>{
    // console.log('Found hotels',hotel.length);
   if(err) {
    res.send(err);
  }
   res.json(hotel).status(100);
})
};


module.exports.getOneHotel = function (req,res) {
  // console.log(req);
  var hotelId = req.params.hotelId;
  // console.log("Get hotel Id ",hotelId);
  Hotel
  .findById(hotelId)
  .exec((error,hotel)=>{
    // console.log('Found hotels',hotel);
     if(error){
      res.send(error);
    }
    res
    .status(200).json(hotel);
  });
}

module.exports.addOneHotel=function(req,res){
  var hotel=new Hotel(req.body);
  hotel.save((error,hotels)=>{
    if(error){
      res.send(error);
    }else{
      res
      .json(hotels).status(200);
    }
  });
}



module.exports.updateHotel= function(req,res){
var hotelId = req.params.hotelId;
Hotel
.findByIdAndUpdate(hotelId,req.body,{new:true},(err,hotel)=>{
  if(err){
console.log("Error : ", err.stack);
 }else{
    res
    .status(200)
    .json(hotel)
  }
})
}

// module.exports.deleteHotel=function(req, res) {
//     Hotel.remove({_id : req.params.id}, (err, result) => {
//         res.json({ message: "Hotel successfully deleted!", result });
//     });
// }

module.exports.deleteHotel=function(req, res) {
var id = req.params.hotelId; //here you pass the id
    Hotel
   .findByIdAndRemove(id)
   .exec()
   .then(function(doc) {
    res
    .status(200)
    .json(doc)
    }).catch(function(error) {
      res
    .status(500)
    .json(error)
    });
}

// module.exports.getHotelAllReviews= (req,res)=>{
//   var hotelId = req.params.hotelId;
//   console.log("Get hotel Id ",hotelId);
//   Hotel
//   .findById(hotelId)
//   .select('reviews')
//   .exec((error,reviews)=>{
//     console.log('Found hotels');
//     res
//     .status(200)
//     .json(reviews)
//   });
// }
// module.exports.getHotelOneReviews= (req,res)=>{
//   var hotelId = req.params.hotelId;
//   var reviewId = req.params.reviewId;
//   console.log("Get hotel Id "+hotelId+"reviewid "+reviewId);
//   Hotel
//   .findById(hotelId)
//   .select('reviews')
//   .exec((error,hotel)=>{
//     var review = hotel.reviews.id(reviewId);
//     console.log("Single review",review);
//     console.log('Found hotels');
//     res
//     .status(200)
//     .json(review)
//   });
// }
