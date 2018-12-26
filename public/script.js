var matrix = [];
var socket;
var stat;
var qanak;
var side = 10;
function setup() {

    socket = io();

    socket.on('send matrix', function (mtx) {
        matrix = mtx;
        background('#acacac');
        createCanvas(matrix[0].length * side + 1000, matrix.length * side);
        redraw();

        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        })
        socket.on("stats", function (stats) {
            stat = stats;
            return stat;
        })
        socket.on("qanak", function (qanakner) {
            qanak = qanakner;
            return qanak;
        })
    });
    noLoop();
}
function draw() {
    background("#acacac");
    fill("black");
    textSize(32);
    text('Born', matrix[0].length * side + 300, 30);

    fill("black");
    text('Dead', matrix[0].length * side + 500, 30);

    fill("black");
    text('Current', matrix[0].length * side + 700, 30);

    fill("green");
    text("Grass", matrix[0].length * side + 50, 100);

    fill("yellow");
    text("GrassEater", matrix[0].length * side + 50, 200);

    fill("red");
    textSize(32);
    text("Predator", matrix[0].length * side + 50, 300);

    if (stat != undefined) {
        fill("green");
        textSize(32);
        text(str(stat.Grass.born), matrix[0].length * side + 300, 100);

        fill("green");
        text(str(stat.Grass.current), matrix[0].length * side + 700, 100);

        fill("green");
        text(str(stat.Grass.dead), matrix[0].length * side + 500, 100);


        fill("yellow");
        text(str(stat.GrassEater.born), matrix[0].length * side + 300, 200);

        fill("yellow");
        text(str(stat.GrassEater.current), matrix[0].length * side + 700, 200);

        fill("yellow");
        text(str(stat.GrassEater.dead), matrix[0].length * side + 500, 200);

        fill("red");
        text(str(stat.Predator.born), matrix[0].length * side + 300, 300);

        fill("red");
        text(str(stat.Predator.current), matrix[0].length * side + 700, 300);

        fill("red");
        text(str(stat.Predator.dead), matrix[0].length * side + 500, 300);
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 1) {
                if (matrix[y][x].nexac == true && qanak < 1000) 
                {
                    fill("#7A8613");
                    rect(x * side, y * side, side, side);
                }
                else if(matrix[y][x].nexac == false && qanak < 1000)
                {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if ((matrix[y][x].nexac == true || matrix[y][x].nexac == false) && qanak >= 1000 ) 
                {
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
                if (qanak == 2000) 
                {
                    qanak = 0;
                }
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 4) {
                fill("Aqua");
                rect(x * side, y * side, side, side);
            }
        }
    }
    qanak += 50;
}
