export class GridBoundaryChecker {
    private numRows: number;
    private numCols: number;

    constructor(_numRows: number, _numCols: number) {
        this.numRows = _numRows;
        this.numCols = _numCols;
    }
  
    isWithinBoundaries(row: number, col: number): boolean {
        return row >= 0 && row < this.numRows && col >= 0 && col < this.numCols;
    }
}