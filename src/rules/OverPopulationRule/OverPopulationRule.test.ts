import { OverPopulationRule } from "./OverPopulationRule";

describe("OverPopulationRule", () => {
  it("should apply if the cell is alive", () => {
    const rule = new OverPopulationRule();

    const result = rule.applies(true);

    expect(result).toBeTruthy();
  });

  it("should not apply if the cell is dead", () => {
    const rule = new OverPopulationRule();

    const result = rule.applies(false);

    expect(result).toBeFalsy();
  });

  it("should not live if the cell has 4 or more living neighbours ", () => {
    const rule = new OverPopulationRule();

    const result = rule.shouldLive(4);

    expect(result).toBeFalsy();
  });

  it("should live if the cell has less than four living neighbours", () => {
    const rule = new OverPopulationRule();
    const result = rule.shouldLive(3);
    expect(result).toBeTruthy();
  });
});
