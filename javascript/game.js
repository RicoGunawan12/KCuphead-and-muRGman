import { BackgroundFacade } from "./facades/BackgroundFacade.js";
import { TableFacade } from "./facades/TableFacade.js";
import { CANVAS, CTX, FPS } from "./globals.js";
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
    BackgroundFacade.renderBackground();
    TableFacade.render();
    BackgroundFacade.renderForeground();
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
