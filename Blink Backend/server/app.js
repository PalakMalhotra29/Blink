const express = require('express')
const app = express()

const db = require('./config/db')

app.use(express.urlencoded({extended:true}))

const adminroutes = require("./routes/adminroutes")
app.use("/api",adminroutes)

app.get("/",function(req,res){
    res.json({
        status:200,
        success:true,
        message:"Welcome to BLINK."
    })
})

// app.get("/admin",function(req,res){
//     console.log("hi")
//     res.json({
//         status:200,
//         success:true,
//         message:"Welcome to Admin routes."
//     })
// })

app.listen(3000,function(){
    console.log("Server running at 3000.")
})

