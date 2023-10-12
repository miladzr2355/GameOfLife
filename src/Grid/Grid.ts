import { Cell } from "../cell/Cell";
import { GridBoundaryChecker } from "../utility/GridBoundaryChecker";
import { SurvivalRule } from "../rules/SurvivalRule/SurvivalRule";
import { ReproduceRule } from "../rules/ReproduceRule/ReproduceRule";
import { CellRule } from '../rules/CellRule';

export class Grid {
    private cells: Cell[][];
    private boundaryChecker: GridBoundaryChecker;
    private survivalRule: CellRule;
    private reproduceRule: CellRule;

    constructor(rows: number, cols: number, useInitialProbability: boolean = true, initialProbability: number = 0.4) {
        this.boundaryChecker = new GridBoundaryChecker(rows, cols);
        this.survivalRule = new SurvivalRule();
        this.reproduceRule = new ReproduceRule();
        
        this.cells = new Array(rows);

        for (let i = 0; i < rows; i++) {
            this.cells[i] = new Array(cols);

            for (let j = 0; j < cols; j++) {
                useInitialProbability
                    ? this.cells[i][j] = new Cell(Math.random() < initialProbability)
                    : this.cells[i][j] = new Cell(false)
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

    setCell(row: number, col: number, alive: boolean): void {
        this.cells[row][col] = new Cell(alive);
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

    nextGeneration(): void {
        const newCells: Cell[][] = [];

        for(let i = 0; i < this.numRows; i++) {
            newCells[i] = new Array(this.numCols)

            for(let j = 0; j < this.numCols; j++) {
                const cell = this.cells[i][j];
                const livingNeighbors = this.getNeighbors(i, j).filter((neighbor) => neighbor.isAlive());

                let shouldLive = cell.isAlive()
                    ? this.survivalRule.shouldLive(livingNeighbors.length)
                    : this.reproduceRule.shouldLive(livingNeighbors.length);

                newCells[i][j] = new Cell(shouldLive)
            }
        }

        this.cells = newCells;
    }
}