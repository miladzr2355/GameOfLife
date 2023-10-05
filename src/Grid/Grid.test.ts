import { Grid } from "./Grid";

describe("Grid", () => {
    const numRows = 3;
    const numCols = 4;
    const grid = new Grid(numRows, numCols);

    it("should have the correct number of rows and cols", () => {
        expect(grid.numRows).toBe(numRows);
        expect(grid.numCols).toBe(numCols);
    });

    it("should return a dead cell for an invalid position", () => {
        const cell = grid.getCell(-1, 10);

        expect(cell.isAlive()).toBeFalsy();
    });
});