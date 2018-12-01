// find rects
//arancnacnenq  datarkner@
//vercnel  random datarkneric
//add new grass

var m = 80;
var n = 80;
var matrix = [];
var side = 10;
function setup() {

    for (var y = 0; y < m; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);
        }
    }



    // matrix = [
    //     [4, 0, 1, 0, 0],
    //     [1, 0, 0, 0, 0],
    //     [0, 1, 2, 0, 0],
    //     [0, 1, 1, 1, 0],
    //     [1, 1, 0, 0, 1],
    //     [1, 1, 0, 0, 1],
    //     [1, 1, 0, 3, 0]
    // ];

    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);

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
console.log(matrix);
function draw() {
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
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                if (matrix[y][x].nexac == true) {
                    fill("#7A8613");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
                }
                else if (matrix[y][x].nexac == false) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
                }
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 4) {
                fill("Aqua");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }
    }
}










































