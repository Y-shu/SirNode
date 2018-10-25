const mongoose = require('mongoose');
const CONFIG = require('../config');
require('./hotels.model');
require('./users.model');
//mongoose.Promise =global.Promise;
const options ={
  user:CONFIG.USER,
  pass:CONFIG.PASS,
  authSource:CONFIG.AUTH
}
mongoose.connect(CONFIG.DBURL,options);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("MongooseConnection ");
// });
// process.on('SIGINT',()=>{
//   mongoose.connection.close(function(){
//     console.log("Mongoose dissonnected by app termination signal SIGINT");
//     process.exit(0);
//    });
// });
// process.on('SIGTERM',()=>{
//   mongoose.connection.close(function(){
//     console.log("Mongoose dissonnected by app termination signal SIGTERM");
//     process.exit(0);
//    });
// });
// process.once('SIGUSR2',()=>{
//   gracefullShutdown('nodemon restart',function(){
//     process.kill(process.pid,'SIGUSR2');
//   });
// });
// function gracefullShutdown(msg,callback) {
//   mongoose.connection.close(function () {
//     console.log("Mongoose dissonnected :"+msg);
//     callback();
//   });
// }
