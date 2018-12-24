var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));
app.get('/', function (req, res) {
	res.redirect('index.html');
});

var fs = require("fs");


var Grass = require("./Modules/class.Grass");
var GrassEater = require("./Modules/class.GrassEater");
var Predator = require("./Modules/class.Predator");
server.listen(3000);
io.on('connection', function (socket) {
	socket.emit("send matrix", matrix);

	setInterval(function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix);
                    stat.grass++;
                }
                else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat(matrix);
                    stat.grassEater++;
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat(matrix);
                    stat.Predator++;
                }
                else if (matrix[y][x].index == 4) {
                    matrix[y][x].eat1(matrix);
                    stat.Ell++;
                }
            }
        
        }
        
        var myJSON = JSON.stringify(stat);
        fs.writeFileSync("test.json",myJSON);

        console.log(stat);

		socket.emit("redraw", matrix);
	}, time);


	//Current statistics
	setInterval(function () {
		stat = {
			"Grass": {
				"born": Grass.born,
				"dead": Grass.dead,
				"current": Grass.current
			},
			"GrassEater": {
				"born": GrassEater.born,
				"dead": GrassEater.dead,
				"current": GrassEater.current
			},
			"Predator": {
				"born": Predator.born,
				"dead": Predator.dead,
				"current": Predator.current
			},
		};

		var file = "test.json";
		var statJSON = JSON.stringify(stat);
		fs.writeFileSync(file, statJSON);

		socket.emit("stats", stat);
	}, 1000);



});

// setInterval(draw, time);

var matrix = require("./Modules/matrix");

var stat = {
	"Grass": {
		"born": 0,
		"dead": 0,
		"current": 0
	},
	"GrassEater": {
		"born": 0,
		"dead": 0,
		"current": 0
	},
	"Predator": {
		"born": 0,
		"dead": 0,
		"current": 0
    },
};

var time = frameRate(1);
function frameRate(frameCount) {
	return 1000 / frameCount;
}