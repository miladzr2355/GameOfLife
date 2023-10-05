import { SurvivalRule } from "./SurvivalRule";

describe("SurvivalRule", () => {
  it("should apply if the cell is alive", () => {
    const rule = new SurvivalRule();

    const result = rule.applies(true);

    expect(result).toBeTruthy();
  });

  it("should not apply if the cell is dead", () => {
    const rule = new SurvivalRule();

    const result = rule.applies(false);

    expect(result).toBeFalsy();
  });

  it("should live if the cell has 2 or 3 neighbours ", () => {
    const rule = new SurvivalRule();

    const result1 = rule.shouldLive(3);
    const result2 = rule.shouldLive(2);

    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });

  it("should not live if the cell does not have 2 or 3 neighbours", () => {
    const rule = new SurvivalRule();

    const result1 = rule.shouldLive(4);
    const result2 = rule.shouldLive(1);
    
    expect(result1).toBeFalsy();
    expect(result2).toBeFalsy();
  });
});
