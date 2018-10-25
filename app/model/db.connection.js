const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const CONFIG = require('../config');
require('./hotels.model');
require('./users.model');


var _connection = null;
let open = function(){
  MongoClient.connect(CONFIG.DBURL,function(error,client) {
      if (error) {
        console.log("Error in DB Connection ");
      }else {
      _connection = client;
      console.log('Connection  Success !'+_connection);
      }
  });
};
var get = function () {
  return _connection;
}
module.exports={
open:open,
get:get
}
