const router = require('express').Router()
const patientController = require("../apis/patient/patientController")
const doctorController = require("../apis/doctor/doctorController")
const userController =  require("../apis/user/userController")


router.post("/user/adduser",userController.addUser)




router.post("*",function(req,res){
    res.json({
        status:404,
        success:false,
        message:"Not Found."
    })
})

router.get("/admin",function(req,res){
    console.log("hi")
    res.json({
        status:200,
        success:true,
        message:"Welcome to Admin routes."
    })
})

module.exports = router;

