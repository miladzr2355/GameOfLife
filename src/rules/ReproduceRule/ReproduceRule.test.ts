import { ReproduceRule } from "./ReproduceRule";

describe("ReproduceRule", () => {
  it("should apply if the cell is dead", () => {
    const rule = new ReproduceRule();

    const result = rule.applies(false);

    expect(result).toBeTruthy();
  });

  it("should not apply if the cell is alive", () => {
    const rule = new ReproduceRule();

    const result = rule.applies(true);

    expect(result).toBeFalsy();
  });

  it("should live in the next generation if number of living neighbours is exactly 3", () => {
    const rule = new ReproduceRule();

    const result = rule.shouldLive(3);

    expect(result).toBeTruthy();
  });

  it("should not live in the next generation if number of living neighbours is not 3", () => {
    const rule = new ReproduceRule();

    const result = rule.shouldLive(1);

    expect(result).toBeFalsy();
  });
});
