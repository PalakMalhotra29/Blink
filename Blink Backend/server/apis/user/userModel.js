let mongoose = require("mongoose")
let bcrypt = require("bcrypt")

let userSchema =  new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    phone:{type:Number,default:0},
    password:{type:String,default:""},

    isAdmin:{type:Boolean,default:false},
    isPatient:{type:Boolean, default:false},
    isDoctor:{type:Boolean, default:false},
    
    loginLogs:[{
        ip:{type:String, default:""},
        loginTime:{type:Date, default:Date.now()},
        isLogged:{type:Date, default:Date.now()}
    }],

    status:{type:Boolean, default:false},
    createdAt:{type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()}
})

module.exports = mongoose.model("User",userSchema)