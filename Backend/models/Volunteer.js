const mongoose=require('mongoose');
const {Schema}=mongoose;
const VolunteerSchema=new Schema({
    points:{
        type:String,
        defualt:0
    },
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

})
const Volunteer=mongoose.model('Volunteer',VolunteerSchema)
module.exports=Volunteer