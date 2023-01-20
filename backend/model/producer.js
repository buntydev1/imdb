

const mongoose = require('mongoose');


const ProducerSchema = mongoose.Schema({
    name:{
        type:String
        // required:true
    }, 
    gender: { type: String,
        //enum: "Female"||"Male" 
    },
    dob:{
        type:Date
    }, 
    Bio:{
        type:String
    },
    // movies:[
    //     {
    //         ProducerId:{
    //             type:mongoose.Schema.Types.ObjectId,
    //             ref:'Movie'
    //         }
    //     }
    // ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Producer', ProducerSchema);

// axios bcryptjs body-parser cookie-parser cors dotenv express jsonwebtoken mongoose
