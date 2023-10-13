import { Grid } from "./grid/Grid";

const numRows = 10;
const numCols = 10;
const grid = new Grid(numRows, numCols, false);
const numGenerations = 20;

grid.setCell(0, 1, true);
grid.setCell(1, 2, true);
grid.setCell(2, 0, true);
grid.setCell(2, 1, true);
grid.setCell(2, 2, true);

// grid.setCell(1, 4, true);
// grid.setCell(2, 3, true);
// grid.setCell(2, 4, true);

for (let generation = 0; generation < numGenerations; generation++) {
    console.log(`Generation ${generation}`);

    for (let row = 0; row < numRows; row++) {
        let rowString = '';

        for (let col = 0; col < numCols; col++) {
            rowString += grid.getCell(row, col).isAlive() ? '■' : '□';
        }
        console.log(rowString);
    }
    console.log('');

    grid.nextGeneration();
}