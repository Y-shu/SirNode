const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(req,res){
  res.setHeader('Content-Type','text/plain');
  res.statusCode =200;
  res.end('Hello World');
});
server.listen(port,host,function(){
  console.log("Server is Runnint on "+host+":"+port);
});
