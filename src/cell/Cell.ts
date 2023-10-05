export class Cell {
	private alive: boolean;

	constructor(_alive: boolean = false) {
		this.alive = _alive;
	}

	isAlive = () => this.alive;

	toggleLivingStatus = () => {
		this.alive = !this.alive;
	};
}
