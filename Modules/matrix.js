var Grass = require("./class.grass");
var GrassEater = require("./class.grassEater");
var Predator = require("./class.Predator");
var Ell = require("./class.Ell");
var m = 80;
var n = 80;
var matrix = [];
var side = 10;
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}
for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
        matrix[y][x] = random_item([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);
        console.log(random_item(items));
    }
}




var Grass = require("./class.grass");
var GrassEater = require("./class.grasseater");
var Predator = require("./class.predator");
var Fish = require("./class.fish");

var matrix = [];
var n = 50;
var m = 50;

var arr = [];
var dzukQanak = 25;

for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3]); //
        if (x + y >= n - 4 && x + y <= n + 2) {
            matrix[y][x] = 4;
            arr.push([x, y]);
        }
    }
}

function random(arr)
{
    return arr[Math.floor(Math.random() * arr.length)];
}

while (dzukQanak > 0) {
    var kord = random(arr);
    //console.log(kord);
    var x = kord[0];
    var y = kord[1];
    matrix[y][x] = 5;
    dzukQanak--;
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
        if (matrix[y][x] == 5) {
            matrix[y][x] = new Fish(x, y, 5);
        }
    }
}

module.exports = matrix;