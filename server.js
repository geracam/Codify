

var express = require('express')
var app = express();
var http = require('http')
var server = http.createServer(app)
var io = require('socket.io').listen(server);

var chatPort = 8000; //what localhost port shall it run in?


var jade = require('jade');
var names=[]
// Views Options

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false })

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('home.jade');
});

server.listen(chatPort);
console.log("Now listening on localhost port 8000");

//here we go with the socket.io stuff

var users_Online = 0; 

io.sockets.on('connection', function (socket) { 
	users_Online += 1; // one more user!
	howManyUsers(); 
	socket.on('message', function (data) { // Broadcast the message to all
		if(checkAvailability(socket))
		{
			var sendInfo = {date : new Date().toISOString(), user_name : getName(socket), message : data};
			socket.broadcast.emit('message', sendInfo);
			
			console.log("user_name "+ sendInfo['user_name'] +" has entered \""+data+"\"");
		}
	});
	socket.on('setUserName', function (data) { // Assign a name to the user
		if (names.indexOf(data) == -1) // Test if the name is already taken
		{
			socket.set('user_name', data, function(){
				names.push(data);
				socket.emit('userNameStatus', 'ok');
				console.log("user " + data + " connected");
			});
		}
		else
		{
			socket.emit('userNameStatus', 'error') // Send the error
		}
	});
	socket.on('disconnect', function () { // Disconnection of the client
		users_Online -= 1;
		howManyUsers();
		if (checkAvailability(socket))
		{
			var user_name;
			socket.get('user_name', function(err, name) {
				user_name = name;
			});
			var index = names.indexOf(user_name);
			user_name.slice(index - 1, 1);
		}
	});
});


function checkAvailability(sock) { // Test if the user has a name
	var test;
	sock.get('user_name', function(err, name) {
		if (name == null ) test = false;
		else test = true;
	});
	return test;
}
function howManyUsers() { // Send the count of the users to all
	io.sockets.emit('numUsers', {"num": users_Online});
}
function getName(sock) { // Return the name of the user
	var user_name;
	sock.get('user_name', function(err, name) {
		if (name == null ) user_name = false;
		else user_name = name;
	});
	return user_name;
}