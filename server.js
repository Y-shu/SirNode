//require('./app/model/db.connection').open();
require('./app/model/db.conn');
const express = require('express');
const CONFIG = require('./app/config/index.js');
const bodyParser = require('body-parser');
var routes =require('./routes/index.js');
var user =require('./routes/user.js');
const path = require('path');
var cors = require('cors');
const morgan = require('morgan');

var app = express();
//setting a port for server
app.set('port',CONFIG.PORT);

app.get('/',(req,res)=>{
	res.send('helloworld')
})

//log inserver for every request
app.use(function(req,res,next){
  console.log(req.method,req.url);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
  next();
});
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json());
app.use('/api',routes);
// app.use('/api',user);

app.use(express.static(path.join(__dirname,'public')));
app.listen(app.get('port'),function () {
  console.log("Magic happens on port " +app.get('port'));
});
console.log("After Start");
module.exports =app
