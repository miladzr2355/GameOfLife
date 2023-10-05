import { SolitudeRule } from "./SolitudeRule";

describe("SolitudeRule", () => {
  it("should apply if the cell is alive", () => {
    const rule = new SolitudeRule();

    const result = rule.applies(true);

    expect(result).toBeTruthy();
  });

  it("should not apply if the cell is dead", () => {
    const rule = new SolitudeRule();

    const result = rule.applies(false);

    expect(result).toBeFalsy();
  });

  it("should live in the next generation if number of living neighbours is more than 1", () => {
    const rule = new SolitudeRule();

    const result = rule.shouldLive(2);

    expect(result).toBeTruthy();
  });

  it("should not live in the next generation if number of living neighbours is less than 2", () => {
    const rule = new SolitudeRule();

    const result = rule.shouldLive(1);

    expect(result).toBeFalsy();
  });
});
