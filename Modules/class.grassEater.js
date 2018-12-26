var  LivingCreature = require("./class.LivingCreature");
function random(arr){
    var random = Math.floor(Math.random() *arr.length)
    return arr[random];
}
var Grass = require('./class.grass.js');
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.multiply = 6;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(num,matrix) {
        this.getNewCoordinates();
        return super.chooseCell(num,matrix);

    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new GrassEater(newX, newY, 2);
            GrassEater.current++;
            GrassEater.born++;

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

            }
            this.energy--;
            if (this.energy <= 0) {
                this.die(matrix);
            }
            this.acted = true;
        }
        else this.acted = false;
    }
    eat(matrix) {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(1,matrix));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                if (matrix[newY][newX].nexac == true) {
                    matrix[newY][newX] = 0;
                    this.die(matrix); 
                    Grass.dead++;
                    Grass.current--;
                    return;
                }
                else if (matrix[newY][newX].nexac == false) {
                    matrix[newY][newX] = matrix[this.y][this.x];
                    matrix[this.y][this.x] = 0;
                    this.x = newX;
                    this.y = newY;
                    this.energy++;
                    Grass.dead++;
                    Grass.current--;
                    if (this.energy >= 12) {
                        this.mul(matrix);
                        this.energy = 3;
                    }
                    this.acted = true;
                }
            }
            else {
                this.move(matrix);
                
            }
        }
        else this.acted = false;
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
        GrassEater.dead++;
        GrassEater.current--;
    }
}