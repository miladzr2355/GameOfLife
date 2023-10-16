export class GameOfLife {
    private gameSpeed: number;
    public isGamePaused: boolean;
  
    constructor(initialSpeed: number = 100) {
      this.gameSpeed = initialSpeed;
      this.isGamePaused = false;
    }
  
    getGameSpeed(): number {
      return this.gameSpeed;
    }
  
    setGameSpeed(speed: number): void {
      this.gameSpeed = speed;
    }
  
    getIsGamePaused(): boolean {
      return this.isGamePaused;
    }
  
    toggleGamePaused(): void {
      this.isGamePaused = !this.isGamePaused;
    }
}