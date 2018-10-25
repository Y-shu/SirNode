const express = require('express');
let router = express.Router();
let ctrlHotel= require('../app/controller/hotel.controller');
router
router
.route('/hotels')
.get(ctrlHotel.getHotels);
router
.route('/hotels/:hotelId')
.get(ctrlHotel.getOneHotel);
router
.route('/hotels/new')
.post(ctrlHotel.addOneHotel);
router
.route('/hotels/:hotelId')
.put(ctrlHotel.updateHotel);
router
.route('/hotels/:hotelId')
.delete(ctrlHotel.deleteHotel)
module.exports= router;
