
const bodyParser = require('body-parser')
require('dotenv').config({path: '.env'})

var path = require('path');
const express = require("express");
const routes = require("./routes/index");
const config = require('./config/load-parameters');

require('./config/db.mongo')();
require('./config/db.postgres');
require('./models/sequelize');

const app = express();

app.use(bodyParser.json({limit: '5mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}))

app.use('/images', express.static('images'))




// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });

routes(app);

app.use('',express.static('./dist/client-website'));

app.get('*', function(req,res) {    
  res.sendFile(path.join(__dirname,'../dist/client-website/index.html'));
});
  



app.use(function (err, req, res, next) {
  if(err){
    return res.status(500).json({status: false, message: err.message, stackTrace: err.stack})
  }
  
})

module.exports = app;