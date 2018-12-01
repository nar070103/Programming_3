class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.nexac = random([true, false, false, false]);
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;
        }
    }


}
