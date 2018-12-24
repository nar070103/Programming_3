function random(arr){
    var random = Math.floor(Math.random() *arr.length)
    return arr[random];
}
// var stat = require("./statistic.js");
    module.exports = class Ell {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.acted = false;
        this.directions = [];

    }
    chooseCell(num,matrix) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    getNewCoordinates(matrix) {
        for (var yy = 0; yy < matrix.length; yy++) {
            for (var xx = 0; xx < matrix[yy].length; xx++) {
                if (xx == yy) {
                    this.directions.push([xx, yy]);
                }

            }
        }
    }
    move(matrix) {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0,matrix));

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.acted = true;
            }
            else this.acted = false;
        }
    }
    eat(matrix) {
        var newCell = random(this.chooseCell(1,matrix));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.acted = true;
            stat.Grass.dead++;
            stat.Grass.current--;
        }
        else {
            this.move(matrix);
            this.acted = false;
            }
    }
    eat1(matrix) {
        var newCell = random(this.chooseCell(2,matrix));

        if (newCell,matrix) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.acted = true;
            stat.GrassEater.dead++;
            stat.GrassEater.current--;
        }
        else {
            this.eat(matrix);
            this.acted = false;
        }
    }
    eat2(matrix) {
        var newCell = random(this.chooseCell(3,matrix));

        if (newCell,matrix) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            stat.Predator.dead++;
            stat.Predator.current--;
        }
        else {
            this.eat1(matrix);
            this.acted = false;
        }
    }

}
