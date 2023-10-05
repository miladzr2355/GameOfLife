import { Cell } from "./Cell";

describe("Cell", () => {
	it("should have correct default value when instantiated", () => {
		const cell = new Cell();

		const result = cell.isAlive();

		expect(result).toBeFalsy();
	});

	it("should have correct default value when instantiated", () => {
		const cell = new Cell(true);

		const result = cell.isAlive();

		expect(result).toBeTruthy();
	});

	it("should be able to toggle living state", () => {
		const cell = new Cell();

		cell.toggleLivingStatus();

		expect(cell.isAlive()).toBeTruthy();
	});
});
