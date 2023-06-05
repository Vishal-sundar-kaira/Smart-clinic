const mongoose=require('mongoose');
const {Schema}=mongoose;
const ResSchema=new Schema({
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
    // restaurantid:{type:String,required:true,unique:false},
    nconfirm:{type:Boolean,default:false},
    vconfirm:{type:Boolean,default:false},
    foodItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
      }
    ],

})
ResSchema.index({ restaurantid: 1 }, { unique: false });
const Restaurant=mongoose.model('Restaurant',ResSchema)
module.exports=Restaurant;