
const router=require("express").Router();
const Appointment=require("../models/Appointment");

router.post("/book",async(req,res)=>{
    const appt=new Appointment(req.body);
    await appt.save();
    res.json({message:"Appointment booked"});
});

router.get("/",async(req,res)=>{
    const data=await Appointment.find();
    res.json(data);
});

module.exports=router;
