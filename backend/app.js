const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const path= require('path')
const dotenv =require('dotenv')
var cors = require('cors')


global.__basedir = __dirname;

if (process.env.NODE_ENV !== 'PRODUCTION'){

    dotenv.config({ path: 'backend/config/config.env' })

} 
// const jsonParser = express.json()
// app.use(jsonParser);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())

const Producer= require('./routes/producer');
const Movies = require('./routes/movies');
const Actor = require('./routes/actor');

app.use('/api/v1', Producer);
app.use('/api/v1',Movies);
app.use('/api/v1',Actor);

//  app.use(express.static(path.join(__dirname, '../frontend/build')))

//     app.get('*',(req, res) =>{
//         res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
//         // /bin/index.html
//     })

// if (process.env.NODE_ENV === 'PRODUCTION') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
//     })
// }

app.get('/', (req, res) => {
    res.send("Welcome to our ToDo")
})


module.exports = app;