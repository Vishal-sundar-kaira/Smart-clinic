const express=require('express')
const Restaurant=require('../models/Restaurant.js')
const router=express.Router()
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
// Route 1:get all the products list
router.get('/fetchrestaurant',async (req,res)=>{

    const restaurant=await Restaurant.find(); 
    if(!restaurant) res.status(500).send("no restaurant of this id");
    res.json(restaurant)
})
router.get('/singlerestaurant/:id',async (req,res)=>{

    try {
        let restaurant=await Restaurant.findById(req.params.id)//check if notes exist or not
    if(!restaurant)
    {
        return res.status(404).send("Restaurant not found");
    }
    res.json(restaurant);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})
// Route 2:Add products
router.post('/Addfood',async (req,res)=>{
    try{
        // const { restaurantid, foodItems } = req.body;
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    }catch(error){
        res.status(500).send("Internal server error Ocuured");
    }
    
    const createRestaurant=new Restaurant(
        req.body
    )
    //Here we have two ways to send our data first is create method which we used in auth and now this by creating new constructor and savenotes.
    const saverestaurant=await createRestaurant.save()
    res.json(saverestaurant)
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
}
})

// Route 4:delete notes
router.delete('/delete/:id',async (req,res)=>{
    try {
        let restaurant=await Restaurant.findById(req.params.id)//check if notes exist or not
    if(!restaurant)
    {
        return res.status(404).send("Restaurant not found");
    }
    //now check if some user is trying to check another person notes.
    // if(restaurant.user.toString()!=req.user.id){
    //     return res.status(401).send("Not allowed");
    // }
    //now if all are ok use find and update function of database.
    restaurant=await Restaurant.findByIdAndDelete(req.params.id)
    res.json(restaurant);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})

module.exports=router