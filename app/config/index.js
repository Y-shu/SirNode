const port = 7070;
const host = '127.0.0.1';
const secret = 'supersecret';
//const dburl ='mongodb://appAdmin:password@172.16.0.29:27017/meanhotel';
const dburl ='mongodb://@ds049935.mlab.com:49935/hotel-data';
// mongodb://<dbuser>:<dbpassword>@ds049935.mlab.com:49935/hotel-data
const user ='admin';
const pass ='admin234';
const authSource ='hotel-data';
module.exports = {
  PORT : port,
  HOST: host,
  DBURL:dburl,
  USER:user,
  PASS:pass ,
  AUTH:authSource,
  AUTHKEY:secret
};
