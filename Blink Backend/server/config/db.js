let mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Palak_Malhotra:malhotra2901@onlinedb1.vowdrjr.mongodb.net/Blink")
.then(con=>{
    console.log('DB connected successfully.')
})
.catch(err=>{
    console.log(err)
    console.log("Error while connecting to DB.")
})
