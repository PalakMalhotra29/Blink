let User = require("../apis/user/userModel")
let bcrypt = require("bcrypt")
const saltRounds = 10

let userObj = {
    name:'Admin',
    email:'admin@gmail.com',
    phone:'9876543210',
    password:bcrypt.hashSync('admin@123',saltRounds)
}

User.findOne({email:userObj.email})
.then(data=>{
    if(data==null){
        let userObj2 = new User(userObj)
        userObj2.save()
        .then(data=>{
            console.log("Admin Registered Successfully")
        })
    }
})