import { CellRule } from "rules/CellRule";

export class NewLifeRule implements CellRule {
  applies(isAlive: boolean): boolean {
    return !isAlive;
  }
  shouldLive(numberOfLivingNeighbours: number): boolean {
    return numberOfLivingNeighbours === 3;
  }
}
