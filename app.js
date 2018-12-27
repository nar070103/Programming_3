var Grass = require("./Modules/class.grass");
var GrassEater = require("./Modules/class.grassEater");
var Predator = require("./Modules/class.Predator");

var qanak = 0;

Grass.born = 0;
Grass.dead = 0;
Grass.current = 0;

GrassEater.born = 0;
GrassEater.dead = 0;
GrassEater.current = 0;

Predator.born = 0;
Predator.dead = 0;
Predator.current = 0;

var express = require('express');
var fs = require('fs');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});


server.listen(3000);
// console.log(matrix);

io.on('connection', function (socket) {
    socket.emit("send matrix", matrix);

    setInterval(function () {
        for (var y = 0; y < matrix.length; y++) {     
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x].index == 1) 
                {
                    if (qanak < 25)
                    {
                        matrix[y][x].mul(matrix);                    
                    }
                    if(qanak== 50)
                    {
                        qanak = 0;
                    }
                }
                else if (matrix[y][x].index == 2) {
                    if (qanak < 25)
                    {
                        matrix[y][x].eat(matrix,false);
                    }
                    else if (qanak >= 25)
                    {
                        matrix[y][x].eat(matrix,true);
                        if(qanak== 50)
                        {
                           qanak = 0;
                        }
                    }
                }
                else if(matrix[y][x].index == 3)
                {
                    if(qanak < 25)
                    {    
                        matrix[y][x].eat(matrix, true);
                    }
                    else if(qanak >= 25)
                    {
                        matrix[y][x].eat(matrix, false);
                        if(qanak == 50)
                        {
                           qanak = 0;
                        }
                    }
                }
                if (matrix[y][x].index == 4) {
                    matrix[y][x].eat1(matrix);
                }
            }
        }
        socket.emit("redraw", matrix);
        qanak+=2;
        socket.emit("qanak", qanak);
        // console.log(qanak);
    }, time);

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
            }
        };
        var myJSON = JSON.stringify(stat);
        fs.writeFileSync("statistic.json", myJSON);
        socket.emit("stats", stat);
    }, 1000);
});
var time = frameRate(5);

function frameRate(frameCount) {
    return 1000 / frameCount;
}
var matrix = require("./Modules/matrix.js");


var stat = {
    "Grass": {
        "born": 3600,
        "dead": 0,
        "current": 3600
    },
    "GrassEater": {
        "born": 2000,
        "dead": 0,
        "current": 2000
    },
    "Predator": {
        "born": 400,
        "dead": 0,
        "current": 400
    }
};

module.exports = stat;