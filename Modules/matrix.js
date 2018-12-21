var Grass = require("./class.grass");
var GrassEater = require("./class.grassEater");
var Predator = require("./class.Predator");
var Ell = require("./class.Ell");

var m = 80;
var n = 80;
var matrix = [];
// var arr = [];
// var side = 10;
function random(arr){
    var random = Math.floor(Math.random() *arr.length)
    return arr[random];
}

for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
        matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);

    }
}




for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        if (matrix[y][x] == 3) {
            matrix[y][x] = new Predator(x, y, 3);
        }
        if (matrix[y][x] == 4) {
            matrix[y][x] = new Ell(x, y, 5);
        }
    }
}

module.exports = matrix;