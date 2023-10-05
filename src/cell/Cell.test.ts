import { Cell } from "./Cell";

describe("Cell", () => {
  it("should have correct default value when instantiated", () => {
    // arrange
    const cell = new Cell();

    // act
    const result = cell.isAlive();

    // assert
    expect(result).toBeFalsy();
  });

  it("should have correct default value when instantiated", () => {
    // arrange
    const cell = new Cell(true);

    // act
    const result = cell.isAlive();

    // assert
    expect(result).toBeTruthy();
  });

  it("should be able to toggle living state", () => {
    const cell = new Cell();

    cell.toggleLivingStatus();

    expect(cell.isAlive()).toBeTruthy();
  });
});
