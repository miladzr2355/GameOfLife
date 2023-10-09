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

    getNeighbors(row: number, col: number): Cell[] {
        const neighbors: Cell[] = [];
      
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                // Skip the current cell itself
                if (i === 0 && j === 0) continue;
                const neighborRow = row + i;
                const neighborCol = col + j;
            
                // Check if cell is within the grid boundaries
                if (neighborRow >= 0 && neighborRow < this.numRows &&
                    neighborCol >= 0 && neighborCol < this.numCols) {
                    neighbors.push(this.getCell(neighborRow, neighborCol));
                }
            }
        }
      
        return neighbors;
    }
}