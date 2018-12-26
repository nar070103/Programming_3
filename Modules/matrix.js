var Grass = require('./class.grass.js');
var GrassEater = require('./class.grassEater.js');
var Predator = require('./class.Predator.js');

var matrix = [];
var xotQanak = 4000;
var xotakerQanak = 2000;
var gishatichQanak = 400;

var n = 80;
var m = 80;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {

        matrix[y][x] = 0;
    }
}
var k = 0;

while (k < xotQanak) {
    var x = Math.floor(Math.random() * (matrix[0].length));
    var y = Math.floor(Math.random() * (matrix.length));


    if (matrix[y][x] == 0) {
        matrix[y][x] = new Grass(x, y, 1);
        k++;
        Grass.born++;
        Grass.current++;
    }
}

var p = 0;

while (p < xotakerQanak) {
    var x = Math.floor(Math.random() * (matrix[0].length));
    var y = Math.floor(Math.random() * (matrix.length));

    if (matrix[y][x] == 0) {
        matrix[y][x] = new GrassEater(x, y, 2);
        p++;
        GrassEater.born++;
        GrassEater.current++;
    }
}
var a = 0;
while (a < gishatichQanak) {
    var x = Math.floor(Math.random() * (matrix[0].length));
    var y = Math.floor(Math.random() * (matrix.length));

    if (matrix[y][x] == 0) {
        matrix[y][x] = new Predator(x, y, 3);
        a++;
        Predator.born++;
        Predator.current++;
    }
}

module.exports = matrix;