const express=require('express')
const bodyParser = require('body-parser')
const mongoose =  require('mongoose')
const PORT=3000
const api=require('./routes/api')
const app=express()
const Users=require('./schemas/useres')
const UR=require('./schemas/receipt')
const cors=require('cors')
const path = require('path');

mongoose.Promise=Promise
mongoose.connect('mongodb://localhost:27017/usersdb')
//app.options('*',cors())

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// to change your ports for different cors stuff:
//  app.use(function (req, res, next) {
//      res.setHeader('Access-Control-Allow-Origin', '*');
//      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//      //res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//      //res.setHeader('Access-Control-Allow-Credentials', true);
//      next();
//      });
app.use(bodyParser.json())
app.use('/api',api)

app.get('/',function(req,res){
    res.send('Hello from server')

})
app.post('/',function(req,res){
    req.send('Hello from server')

})
 app.listen(PORT,function(){
console.log('Server running on localhost '+PORT)

 })
