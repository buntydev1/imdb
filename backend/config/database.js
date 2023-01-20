const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const ConnectDatabase = () =>{
    mongoose.connect('mongodb+srv://yasin:yasin@cluster0.jtq9z0a.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser:true,
      
        useUnifiedTopology:true
    }).then(con=>{
        
        console.log(`mongodb connected with Host on ${con.connection.host}.`)
    })
}

module.exports= ConnectDatabase;