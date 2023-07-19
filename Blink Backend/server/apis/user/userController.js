let User = require('./userModel')

let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

const saltRounds = 10
let Patient = require('../patient/patientModel')

exports.addUser = (req,res)=>{
    console.log(' res is' , res)
    let formData = req.body
    console.log(formData.email)
    console.log(User);
    User.findOne({email:formData.email})
    .then(data=>{
        if(data==null){
            userObj = new User()
            userObj.name = formData.name
            userObj.email = formData.email
            userObj.phone = formData.phone
            userObj.save()
            .then(data=>{
                let patientId = data._id
                let patObj = new Patient()
                patObj.patientId = patientId 
                patObj.email = formData.email
                patObj.password = bcrypt.hashSync(formData.password, saltRounds)
                patObj.isPatient = true
                patObj.save()
                .then(userData=>{
                    res.json({
                        message:"Patient Registered Successfully.",
                        success:true,
                        status:200,
                        data:data,
                        userdata:userData
                    })
                })
                .catch(err=>{
                    res.json({
                        message:"Server Side Error while registration.",
                        success:false,
                        status:400,
                        error:err
                    })
                })
            })
        }
        else{
            res.json({
                message:"User Already exists.",
                success:false,
                status:400
            })
        }
    })
    .catch(err=>{
        res.json({
            message:"Error while registration.",
            success:false,
            status:400,
            error:err
        })
    })
}