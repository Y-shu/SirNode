var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: {
    type:String,
    required:true,
    min:6,
    max:15
  },
  
  password:{
    type:String,
    required:true,
    min:6,
    },
  email:{type:String,required:true,unique:true},
  phoneNumber:Number,
  latLogin:{
    type:Date,
    "default":Date.now
  },
  adress :String,
  activeStatus:Boolean,
  gender:String,
  

});
module.exports = mongoose.model('User',userSchema,'meanuser')
