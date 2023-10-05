import { CellRule } from "rules/CellRule";

export class SolitudeRule implements CellRule {
  applies = (isAlive: boolean): boolean => {
    return isAlive;
  };
  shouldLive = (numberOfLivingNeighbours: number): boolean => {
    return numberOfLivingNeighbours > 1;
  };
}
