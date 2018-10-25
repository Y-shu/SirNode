const dbconn = require('../model/db.conn.js');
const mongoose = require('mongoose');
var User = mongoose.model('User');
const path = require('path');

module.exports.registration=(req,res)=>{
  // var id = req.params.userId
  if(!req.body || req.body.name || req.body.email|| req.body.password|| req.body.number){
    return res.status(500).send({
      auth:false,
      message:"Please fill the required(*) feilds"
    });
  }
  var password = bcryptjs.hashSync(req.body.password);
  var user = new User({
      name:req.body.name,
      email:req.body.email,
      password:password,
      phoneNumber:req.body.number
  });
  console.log("user=",user)
  user.save(function(err,doc){
    console.log("doc=",doc)
    if(err) {
      return res.status(500).send({
        auth:false,
        message:"Failed to register a user email is taken"
      });
    }
    console.log("id=",doc._id+"key= ",CONFIG.AUTHKEY);
    var token = jwt.sign({_id:doc._id},CONFIG.AUTHKEY,{expiresIn:1800});
    res.status(200)
    .send({
      auth:true,
      user:user.name,
      role:user.role,
      status:user.isActive,
      message:"Registration successful",
      token:token
    });
  })
}

module.exports.validation =(req,res,next)=>{
  var token = req.headers['x-access-token'];
    //console.log(token);
    if(!token || token ==null){
      return res.status(404).send({
          auth:false,message:"Token Not Found !"
        })
    }
    jwt.verify(token,CONFIG.AUTHKEY,function(err,doc){
      if(err){
        return res.status(401).json({
          auth:false,
          // message:"Failed to authenticate Token {Unatherized}"
          message:"Session is expired.Please Login again",
          token:null
        })
      }
         //console.log("Id:  ",doc._id)
      User.findById(doc._id,{password:false},function(err,user){
        if(err){
          return res.status(500).send("Here was problem while Fetching a user record")
        }
        if(!user){
          return res.status(404).json({
            auth:false,
            message:"User Not Found"
          });
        }
          // res.status(200).send(user)
          next();
      })

    })
}

module.exports.login=(req,res)=>{
  // console.log(req.body);
    if(!req.body.email || !req.body.password){
      return res.status(500).send({
        message:"Username and Password can not be Empty",
        auth:false
      })
    }
      User.findOne({email:req.body.email},function(err,user){
      if(err) return res.status(500).send({
        auth:false,
        message:"Internal server Error"
      });
      if(!user) return res.status(404).send({
        auth:false,
        message:"Not a Register User get Registered it's Free"
      });
      var isPwdMatch = bcryptjs.compareSync(req.body.password,user.password)
      if (!isPwdMatch){
        return res.status(401).send({
          auth:false,
          message:"Password Not Match",
          token:null
        })
      }
      var token = jwt.sign({_id:user._id},CONFIG.AUTHKEY,{expiresIn:3600})
      res.status(200)
      .send({
        auth:true,
        user:user.name,
        role:user.role,
        status:user.isActive,
        message:"Login Successful",
        token:token
      })
      })
}