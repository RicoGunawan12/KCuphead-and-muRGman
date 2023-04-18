import { Background } from "./classes/Background.js";
import { BackgroundFacade } from "./facades/BackgroundFacade.js";
import { CANVAS, CTX, FPS } from "./globals.js";
const table = new Background(CTX, 0, CANVAS.height - 300, CANVAS.width, 300, '../assets/game/king dice/background/Table/kd_bg_table.png');
/**
 * Defines how to clear the canvas at each animation frame
 */
function clear() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
}
/**
 * Defines how to render the new animation frame
 */
function render() {
    BackgroundFacade.displayBackground();
    table.render();
    BackgroundFacade.displayForeground();
}
/**
 * Defines how to update the active game objects
 */
function update() {
}
/**
 * Runs the main loop of the canvas
 */
function runAnimation() {
    clear();
    render();
    update();
}
// requestAnimationFrame(runAnimation);
setInterval(runAnimation, 1000 / FPS);
