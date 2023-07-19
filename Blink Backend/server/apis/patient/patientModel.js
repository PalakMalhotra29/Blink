let mongoose = require("mongoose")
let bcrypt = require("bcrypt")
let User = require("../user/userModel")

let patientSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, default:null},
    patientName:{type:String, default:''},
    email:{type:String, default:''},
    password:{type:String, default:''},

    isAdmin:{type:Boolean, default:false},
    isPatient:{type:Boolean, default:true},
    isDoctor:{type:Boolean, default:false},

    status:{type:Boolean, default:true}
})

module.exports = mongoose.model("Patient", patientSchema)