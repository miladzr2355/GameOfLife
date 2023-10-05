import { Cell } from "../cell/Cell";

export class Grid {
    private cells: Cell[][];

    constructor(rows: number, cols: number) {
        this.cells = new Array(rows);
    
        for (let i = 0; i < rows; i++) {
            this.cells[i] = new Array(cols);

            for (let j = 0; j < cols; j++) {
                this.cells[i][j] = new Cell(Math.random() < 0.5);
            }
        }
    }

    get numRows(): number {
        return this.cells.length;
    }
    
    get numCols(): number {
        return this.cells[0].length;
    }

    getCell(row: number, col: number): Cell {
        if (row >= 0 && row < this.numRows && col >= 0 && col < this.numCols) {
            return this.cells[row][col];
        }

        return new Cell(false);
    }
}