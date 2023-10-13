import { Cell } from "../cell/Cell";
import { GridBoundaryChecker } from "../utility/GridBoundaryChecker";
import { SurvivalRule } from "../rules/SurvivalRule/SurvivalRule";
import { ReproduceRule } from "../rules/ReproduceRule/ReproduceRule";
import { SolitudeRule } from "../rules/SolitudeRule/SolitudeRule";
import { OverPopulationRule } from "../rules/OverPopulationRule/OverPopulationRule";
import { CellRule } from '../rules/CellRule';

export class Grid {
    private rows: number;
    private cols: number;
    private useInitialProbability: boolean;
    private initialProbability: number;
    private cells: Cell[][];
    private boundaryChecker: GridBoundaryChecker;
    private rules: CellRule[];

    constructor(_rows: number, _cols: number, _useInitialProbability: boolean = true, _initialProbability: number = 0.4) {
        this.rows = _rows;
        this.cols = _cols;
        this.useInitialProbability = _useInitialProbability;
        this.initialProbability = _initialProbability;
        this.rules = [
            new SurvivalRule(), 
            new OverPopulationRule(), 
            new ReproduceRule(), 
            new SolitudeRule()
        ];
        this.boundaryChecker = new GridBoundaryChecker(_rows, _cols);

        this.initGrid();
    }

    private initGrid(): void {
        this.cells = new Array(this.rows);

        for (let i = 0; i < this.rows; i++) {
            this.cells[i] = new Array(this.cols);

            for (let j = 0; j < this.cols; j++) {
                this.useInitialProbability
                    ? this.cells[i][j] = new Cell(Math.random() < this.initialProbability)
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

    setCell(row: number, col: number, isAlive: boolean): void {
        this.cells[row][col] = new Cell(isAlive);
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
        const nextGeneration: Cell[][] = [];

        for(let i = 0; i < this.numRows; i++) {
            nextGeneration[i] = new Array(this.numCols)

            for(let j = 0; j < this.numCols; j++) {
                nextGeneration[i][j] = this.createNewCell(i, j);
            }
        }

        this.cells = nextGeneration;
    }

    createNewCell(i: number, j: number): Cell {
        const livingNeighbors = this.getNeighbors(i, j).filter((neighbor) => neighbor.isAlive());

        let shouldLive = this.rules
                    .filter((rule) => rule.applies(this.cells[i][j].isAlive()))
                    .every((rule) => rule.shouldLive(livingNeighbors.length))

        return new Cell(shouldLive);
    }
}