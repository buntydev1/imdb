

const mongoose = require('mongoose');


const ActorSchema = mongoose.Schema({
    name:{
        type:String
        // required:true
    }, 
    gender: { type: String,
       // enum: "Female"||"Male" 
    },
    dob:{
        type:Date
    }, 
    bio:{
        type:String
    },
    // movieList:[
    //     {
    //         MovieId:{
    //             type:mongoose.Schema.Types.ObjectId,
    //             ref:'Movies'
    //         }
    //     }
    // ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Actor', ActorSchema);

// axios bcryptjs body-parser cookie-parser cors dotenv express jsonwebtoken mongoose
