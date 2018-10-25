// const mongoose = require('mongoose');
// var User = mongoose.model('User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// var CONFIG = require('../config');
// module.exports.registration =(req,res)=>{
//   var hashedPassword = bcrypt.hashSync(req.body.password);
//   var user = new User({
//     user : req.body.name,
//     email:req.body.email,
//     password:hashedPassword
//   });
//   user.save(function (err,user) {
//     if(err) return res.status(500).send("There was was problem in resgistration!")
//     var token = jwt.sign({_id:user._id},CONFIG.AUTHKEY,
//       {expiresIn:86400});//24 hours
//       res.status(200).send({auth:true,token:token})
//     })
// }
// module.exports.authenticator=(req,res,next)=>{
//   var token = req.headers['x-access-token'];
//   console.log(token);
//   if (!token) {
//     return res.status(404).send({auth:false,message:"Token not Found!"});
//   }
//   jwt.verify(token,CONFIG.AUTHKEY,function(err,doc) {
//     if (err) {
//       return res.status(500).send({auth:false,message:"Failed to authenticate token"})
//     }
//     //res.status(200).send(doc);
//     User.findById(doc._id,{password:false},function (err,user) {
//       if (err) {
//         return res.status(500).send("There was problem while fetching a user")
//       }
//       if (!user) {
//           return res.status(404).send("User not found")
//         }
//       // res.status(200).send(user)
//       next();
//     })
//   })
// }
// module.exports.login=(req,res)=>{
//   if(!req.body.email || !req.body.password){
//     return res.status(500).send({
//       message: "username and password can not be empty",
//       auth:false
//     })
//   }
//   User.findOne({email:req.body.email},function(err,user) {

//     if (err) return res.status(500).send("Internal server error");
//     if(!user) return res.status(404).send("No user Found");
//     var isPwdMatch = bcrypt.compareSync(req.body.password,user.password);
//     if (!isPwdMatch) {
//       return res.status(401).send({
//         auth:false,
//         mesaage:"Password not match",
//         token:null
//       });
//     }
//     var token = jwt.sign({_id:user._id},CONFIG.AUTHKEY,{expiresIn:86400});
//     res
//     .status(200)
//     .send({
//       auth:true,
//       mesaage:"Login Successfull",
//       token:token
//     })
//   })
// }
// module.exports.logout=(req,res)=>{
//   res.status(200).send({auth:false,token:null,message:"logout Successfully"})
// }
