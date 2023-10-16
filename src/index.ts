import { Grid } from "./grid/Grid";
import { GameOfLife } from "./gameOfLife/GameOfLife";

const canvas = document.querySelector<HTMLCanvasElement>("#game");

const width  = canvas.width;
const height = canvas.height;
const context = canvas.getContext("2d");

const initialPopulationDensityProbability = 0.3;
const cellSize = 20;
const numRows = width / cellSize;
const numCols = height / cellSize;

const startButton = document.querySelector(".start-btn");
const pauseButton = document.querySelector(".pause-btn");
const randomGridButton = document.querySelector(".random-grid-btn");
const clearButton = document.querySelector(".clear-btn");
const increaseSpeedBtn = document.querySelector(".increase-speed-btn");
const decreaseSpeedBtn = document.querySelector(".decrease-speed-btn")

let grid = new Grid(numRows, numCols, false);
let game = new GameOfLife();

grid.setCell(0, 1, true);
grid.setCell(1, 2, true);
grid.setCell(2, 0, true);
grid.setCell(2, 1, true);
grid.setCell(2, 2, true);

const setContext = () => {
    if(context !== null) {
        context.fillStyle = "rgb(100, 240, 150)";
        context.strokeStyle = "rgb(90, 90, 90)";
        context.lineWidth = 1;
    }
}

const drawGridBorders = () => {
    if(context !== null) {
        for(let i = 0; i < numRows; i++) {
            context.beginPath();
            context.moveTo(i * cellSize - 0.5, 0);
            context.lineTo(i * cellSize - 0.5, height);
            context.stroke();
        }
    
        for(let j = 0; j < numCols; j++) {
            context.beginPath();
            context.moveTo(0, j * cellSize - 0.5);
            context.lineTo(width, j * cellSize - 0.5);
            context.stroke();
        }
    }
}

const drawCellOnGrid = () => {
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            if(!grid.getCell(i, j).isAlive()) continue;

            context?.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}

const clear = () => {
    context?.clearRect(0, 0, width, height);
}

const drawAll = () => {
    clear();
    drawCellOnGrid();
    drawGridBorders();
}

const nextGen = () => {
    if(game.isGamePaused) return;

    grid.nextGeneration();
    drawAll();
}

const gameLoop = () => {
    nextGen();
    setTimeout(gameLoop, game.getGameSpeed());
}

const toggleGamePaused = () => {
    game.toggleGamePaused();
}

const setGridRandomPopulationDencity = () => {
    grid = new Grid(numRows, numCols, true, initialPopulationDensityProbability);
}

canvas?.addEventListener("click", e => {
    const xPos = Math.floor((e.clientX - canvas.offsetLeft) / cellSize); 
    const yPos = Math.floor((e.clientY - canvas.offsetTop) / cellSize);
    grid.toggleCell(xPos, yPos);
    drawAll();
})

const handleStartButtonClick = () => {
    setContext();
    gameLoop();
};

const handlePauseButtonClick = () => {
    toggleGamePaused();

    const pauseBtn = document.querySelector(".pause-btn");

    if (pauseBtn) {
        pauseBtn.innerHTML = game.isGamePaused ? "Resume" : "Pause";
    }
};

const handleRandomGridButtonClick = () => {
    setGridRandomPopulationDencity();
};

const handleClearButtonClick = () => {
    clear();
    window.location.reload();
};

const handleSpeedChange = (newSpeed: number) => {
    let currentGameSpeed = game.getGameSpeed();
    game.setGameSpeed(currentGameSpeed += newSpeed);
}

increaseSpeedBtn?.addEventListener("click", () => handleSpeedChange(-10));
decreaseSpeedBtn?.addEventListener("click", () =>  handleSpeedChange(10));
startButton?.addEventListener("click", handleStartButtonClick);
pauseButton?.addEventListener("click", handlePauseButtonClick);
randomGridButton?.addEventListener("click", handleRandomGridButtonClick);
clearButton?.addEventListener("click", handleClearButtonClick);


setContext()