const mongoose=require('mongoose');
const {Schema}=mongoose;
const NgoSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    resname:{
        type:String,
        required:true,
    },
    rescontact:{
        type:Number,
        required:true
    },
    resaddress:{
        type:String,
        required:true
    },
    resid:{
        type:String
    }

})
const Ngo=mongoose.model('Ngo',NgoSchema)
module.exports=Ngo