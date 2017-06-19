var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');

})

http.listen(process.env.Port || 3000, function(){
	console.log('the application is listening on port 3000');
})