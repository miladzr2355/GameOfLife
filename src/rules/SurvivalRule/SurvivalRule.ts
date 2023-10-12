import { CellRule } from "rules/CellRule";

export class SurvivalRule implements CellRule {
	applies(isAlive: boolean): boolean {
		return isAlive;
	};

	shouldLive(numberOfLivingNeighbours: number): boolean {
		return numberOfLivingNeighbours === 3 || numberOfLivingNeighbours === 2;
	};
}
