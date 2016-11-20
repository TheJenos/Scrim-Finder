var express = require('express');
var mysql     =    require('mysql');
var app = express();
var sqlInfo = {
	host: 'localhost',
	user: 'root',
	password: '123',
	port:'3307',
	database: 'exam'
}

var connection = mysql.createConnection(sqlInfo);

app.use(express.static('public'));

app.post('/db',function(req,res){
	connection.query('SELECT * FROM user;', function (error, rows, fields) {
		// res.writeHead(200, {
		// 	'Content-Type': 'x-application/json'
		// });
		var resob = {
			ress :(error==null)?rows:error
		}
		var ress =  "{\"ress\":"+(error==null)?JSON.stringify(rows):JSON.stringify(error)+"}"
		res.end(JSON.stringify(resob));
	});
});
app.get('/', function (req, res) {
	res.sendFile( __dirname + "/public/" + "index.html" );
})
var server = app.listen(80, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
});