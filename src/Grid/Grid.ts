import { Cell } from "../cell/Cell";
import { GridBoundaryChecker } from "../utility/GridBoundaryChecker";

export class Grid {
    private cells: Cell[][];
    private boundaryChecker: GridBoundaryChecker;

    constructor(rows: number, cols: number, initialProbability: number = 0.5) {
        this.cells = new Array(rows);
        this.boundaryChecker = new GridBoundaryChecker(rows, cols);
    
        for (let i = 0; i < rows; i++) {
            this.cells[i] = new Array(cols);

            for (let j = 0; j < cols; j++) {
                this.cells[i][j] = new Cell(Math.random() < initialProbability);
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
        if (this.boundaryChecker.isWithinBoundaries(row, col)) {
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

                if (this.boundaryChecker.isWithinBoundaries(neighborRow, neighborCol)) {
                    neighbors.push(this.getCell(neighborRow, neighborCol));
                }
            }
        }
      
        return neighbors;
    }
}