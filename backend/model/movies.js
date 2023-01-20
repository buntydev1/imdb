

const mongoose = require('mongoose');


const ActorSchema = mongoose.Schema({
    name:{
        type:String
        // required:true
    }, 
    actorIdList:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Actor'
        }
    ],
    producerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Producer'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Movies', ActorSchema);

// axios bcryptjs body-parser cookie-parser cors dotenv express jsonwebtoken mongoose
