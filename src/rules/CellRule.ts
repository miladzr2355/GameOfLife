export interface CellRule {
	applies(isAlive: boolean): boolean;
	shouldLive(numberOfLivingNeighbours: number): boolean;
}
