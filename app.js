var express = require('express')
var app = express();
var mongoose = require('mongoose');
var port = 3000;
var setUpController = require('./controllers/SetUpController');
var apiController = require('./controllers/apiController');
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
mongoose.connect("mongodb://localhost:27017/node-todo");
var connection = mongoose.connection;
connection.on('connected', function(){
	console.log("connected");
});
setUpController(app);
apiController(app);
app.listen(port);