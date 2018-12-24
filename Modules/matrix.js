var Grass = require("./class.grass");
var GrassEater = require("./class.GrassEater");
var Predator = require("./class.Predator");



Grass.born = 0;
Grass.dead = 0;
Grass.current = 0;

GrassEater.born = 0;
GrassEater.dead = 0;
GrassEater.current = 0;


Predator.born = 0;
Predator.dead = 0;
Predator.current = 0;

var m = 80;
var n = 80;
var matrix = [];
// var arr = [];
// var side = 10;
function random(arr){
    var random = Math.floor(Math.random() *arr.length)
    return arr[random];
}

for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3]); 
    }
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
            Grass.born++;
            Grass.current++;
        }
        if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
            GrassEater.born++;
            GrassEater.current++;
        }
        if (matrix[y][x] == 3) {
            matrix[y][x] = new Predator(x, y, 3);
            Predator.born++;
            Predator.current++;
        }
    }
}

module.exports = matrix;