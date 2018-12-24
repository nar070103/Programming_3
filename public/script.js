// find rects
//arancnacnenq  datarkner@
//vercnel  random datarkneric
//add new grass

var m = 80;
var n = 80;
var matrix = [];
var socket;
var stat;
var side = 10;
var arr = [];
function setup() {
	background('#acacac');
	frameRate(0);

	socket = io();

	socket.on("send matrix", function (mtx) {
		matrix = mtx;
		createCanvas(1500, 751);
		background('#acacac');
		console.log(matrix);
		redraw();

		socket.on("redraw", function (mtx) {
			matrix = mtx;
			redraw();
		});

		socket.on("stats", function(stats){
			stat = stats;
		});
		
	});
	
	noLoop();
	
}

function draw() {
	background('#acacac');
	for(var yCord = 100; yCord <= 600; yCord+=100){
		for(var xCord = 100; xCord <= 600; xCord+=100){
			line(1500, yCord, xCord, yCord)
		}
	}

	var yText = 0;
	for(var i in stat){	
		
		var xText = 0;

		if (i == "Grass"){
			fill("green")
		}
		else if(i == "GrassEater"){
			fill("yellow")
		}
		else if(i == "Predator"){
			fill("red")
		}
		else{
			fill("black")
		}
		textSize(25)
		text(i, 800, 250 + yText);
		for(var j in stat[i])
		{
			text(stat[i][j], 1000 + xText, 250 + yText);
			xText += 180;
		}	
		yText += 100;
	}

	textSize(35);
	fill("black");
	text('Game Of Life', 900, 50);
	line(950, 100, 950, 600);
	line(1125, 100, 1125, 600);
	line(1300, 100, 1300, 600);
	textSize(25);
	fill("black");
	text("Name", 800, 150);
	text("Born", 1000, 150);
	text("Dead", 1150, 150);
	text("Current", 1350, 150);


	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 0) {
				fill("#acacac");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x].index == 1) {
				fill("green");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x].index == 2) {
				fill("yellow");
				//matrix[y][x].acted = false;
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x].index == 3) {
				fill("red");
				//matrix[y][x].acted = false;
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x].index == 4) {
				//matrix[y][x].acted = false;
				fill("Aqua");
				rect(x * side, y * side, side, side);
			}
		}
	}
	
}