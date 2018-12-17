var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);

var Grass = require("./modules/class.grass.js");
var GrassEater = require("./modules/class.grassEater");
var Predator = require("./modules/class.Predator");
var Ell = require("./modules/class.Ell");
var LivingCreature = require("./modules/class.LivingCreature");

var time = frameRate(5);

function frameRate(frameCount) {
  return 1000 / frameCount;
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Predator(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Ell(x, y, 4);
        }
    }
}
}
  background("#acacac");
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].eat1();
            }
        }
    
}

setInterval(draw, time)
