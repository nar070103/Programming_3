var  LivingCreature = require("./class.LivingCreature");
function random(arr){
    var random = Math.floor(Math.random() *arr.length)
    return arr[random];
}
var stat = require("./statistic.js");
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        
        this.nexac = random([true, false, false, false]);

    }

    mul(matrix) {
        this.multiply++;
        var newCell = random(this.chooseCell(0,matrix));

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;
            stat.Grass.born++;
            stat.Grass.current++;
        }
    }


}
