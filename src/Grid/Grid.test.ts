import { Grid } from "../grid/Grid";

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

    it("should return correct number of neighbors for a corner cell", () => {
        const neighbors = grid.getNeighbors(0, 0);
        
        expect(neighbors).toHaveLength(3);
    });

    it("should return correct neighbors for a corner cell", () => {
        const neighbors = grid.getNeighbors(0, 0);
        
        expect(neighbors).toContain(grid.getCell(0, 1));
        expect(neighbors).toContain(grid.getCell(1, 0));
        expect(neighbors).toContain(grid.getCell(1, 1));
    });
    
    it("should return correct number of neighbors for an interior cell", () => {
        const neighbors = grid.getNeighbors(1, 1);
        
        expect(neighbors).toHaveLength(8);
    });

    it("should return correct neighbors for an interior cell", () => {
        const neighbors = grid.getNeighbors(1, 1);
        
        expect(neighbors).toContain(grid.getCell(0, 0));
        expect(neighbors).toContain(grid.getCell(0, 1));
        expect(neighbors).toContain(grid.getCell(0, 2));
        expect(neighbors).toContain(grid.getCell(1, 0));
        expect(neighbors).toContain(grid.getCell(1, 2));
        expect(neighbors).toContain(grid.getCell(2, 0));
        expect(neighbors).toContain(grid.getCell(2, 1));
        expect(neighbors).toContain(grid.getCell(2, 2));
    });

});