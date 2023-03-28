import { CANVAS, CTX, FPS } from "./globals.ts";

/**
 * Defines how to clear the canvas at each animation frame
 */
function clear(): void {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

/**
 * Defines how to render the new animation frame
 */
function render(): void {

}

/**
 * Defines how to update the active game objects
 */
function update(): void {

}

/**
 * Runs the main loop of the canvas
 */
function runAnimation(): void {
    clear();
    render();
    update();
}

setInterval(runAnimation, 1000 / FPS);
