
var m = 80;
var n = 80;
var matrix = [];
var side = 10;

for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
        matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);
    }
}