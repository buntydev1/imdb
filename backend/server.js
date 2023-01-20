const app = require('./app');
const connectionDB = require('./config/database');
const dotenv = require('dotenv');

//handle uncaught Exception ex. use of variable without declaring variable
process.on('uncaughtException', err =>{
    console.log(`error message : ${err.message}`)
    console.log(`due to some uncaught problem shutting down server`);
    process.exit(1);
})
// setting up config file
dotenv.config({path: 'backend/config/config.env'})
// if (process.env.NODE_ENV !== 'PRODUCTION') {
    dotenv.config({ path: 'backend/config/config.env' })
//}
//connection to Database

connectionDB();

//listening on port number from env file
const server = app.listen(4001,()=>{
    //${process.env.NODE_ENV}
    console.log(`listening on 4001 in Development mode.`);
})

// handle unhandled Promise rejection Error -> database Error
process.on('unhandledRejection', err =>{
    console.log(`error message : ${err.message}`)
    console.log(`shutting down server due to some unhandled promise rejection`)
    server.close(()=>{
        process.exit(1);
    })
})


//command to run in production mode
//npm run prod
//on port 4001   ------------            http://localhost:4001/

//command to run in development mode
//npm run dev
//on port 4001 backend  ------------            http://localhost:4001/
//inside frontend folder -->   npm run dev
//on port 3000 frontend  ------------            http://localhost:3000/


