const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    Date:{
        type:String,
        default:Date.now
    },
    role: { type: String,
         enum: ['Ngo','Restaurant','Volunteer'],
          required: true },

})
const User=mongoose.model('User',UserSchema)
module.exports=User