const express=require('express')
const Volunteer=require('../models/Volunteer')
const router=express.Router()
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
// Route 1:get all the notes
router.get('/fetchvolunteer',async (req,res)=>{
    const volunteer=await Volunteer.find()
    res.json(volunteer)
}),
router.get('/singlevolunteer/:id',async (req,res)=>{

    try {
        let volunteer=await Volunteer.findById(req.params.id)//check if notes exist or not
    if(!volunteer)
    {
        return res.status(404).send("volunteer not found");
    }
    res.json(volunteer);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})
router.post('/addvolunteer',async (req,res)=>{
    try{
    // const {name,list,location,number}=req.body;
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const volunteer=new Volunteer(req.body)
    //Here we have two ways to send our data first is create method which we used in auth and now this by creating new constructor and savenotes.
    const savevolunteer=await volunteer.save()
    res.json(volunteer)
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
}
})
router.delete('/delete/:id',async (req,res)=>{
    try {
        let volunteer=await Volunteer.findById(req.params.id)//check if notes exist or not
    if(!volunteer)
    {
        return res.status(404).send("ngo not found");
    }
    //now check if some user is trying to check another person notes.
    // if(ngo.user.toString()!=req.user.id){
    //     return res.status(401).send("Not allowed");
    // }
    //now if all are ok use find and update function of database.
    volunteer=await Volunteer.findByIdAndDelete(req.params.id)
    res.json(volunteer);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})