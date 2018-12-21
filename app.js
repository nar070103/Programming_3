var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
var stat = require("./Modules/statistic.js");

app.use(express.static("./public"));
app.get('/', function (req, res) {
	res.redirect('index.html');
});

server.listen(3000);

io.on('connection', function (socket) {
	socket.emit("send matrix", matrix);

	setInterval(function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix);
                    // stat.grass++;
                }
                else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat(matrix);
                    // stat.grassEater++;
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat(matrix);
                    // stat.Predator++;
                }
                else if (matrix[y][x].index == 4) {
                    matrix[y][x].eat1(matrix);
                    // stat.Ell++;
                }
            }
        
        }
        
        // var myJSON = JSON.stringify(stat);
        // fs.writeFileSync("test.json",myJSON);

        console.log(stat);

		socket.emit("redraw", matrix);
	}, time);

});

// setInterval(draw, time);

var matrix = require("./Modules/matrix");


var time = frameRate(1);
function frameRate(frameCount) {
	return 1000 / frameCount;
}