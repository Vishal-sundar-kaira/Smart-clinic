const express=require('express')
const Ngo=require('../models/Ngo')
const router=express.Router()
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
// Route 1:get all the notes
router.get('/fetchngo',async (req,res)=>{
    const ngo=await Ngo.find({req})
    res.json(ngo)
})
router.get('/singlengo/:id',async (req,res)=>{

    try {
        let ngo=await Ngo.findById(req.params.id)//check if notes exist or not
    if(!ngo)
    {
        return res.status(404).send("ngo not found");
    }
    res.json(ngo);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})
// Route 2:Add notes
router.post('/addngo',async (req,res)=>{
    try{
    // const {name,list,location,number}=req.body;
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const ngo=new Ngo(req.body)
    //Here we have two ways to send our data first is create method which we used in auth and now this by creating new constructor and savenotes.
    const savengo=await ngo.save()
    res.json(ngo)
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
}
})

// Route 4:delete notes
router.delete('/delete/:id',fetchuser,async (req,res)=>{
    try {
        let ngo=await Ngo.findById(req.params.id)//check if notes exist or not
    if(!ngo)
    {
        return res.status(404).send("ngo not found");
    }
    //now check if some user is trying to check another person notes.
    if(ngo.user.toString()!=req.user.id){
        return res.status(401).send("Not allowed");
    }
    //now if all are ok use find and update function of database.
    note=await Notes.findByIdAndDelete(req.params.id)
    res.json({"success":"note has been deleted",note:note});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})

module.exports=router