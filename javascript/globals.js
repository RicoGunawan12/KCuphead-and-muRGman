/**
 * Canvas object that is used by every object that is rendered.
 */
export const CANVAS = document.getElementById("canvas");
/**
 * Set canvas's default width and height
 */
CANVAS.width = 800;
CANVAS.height = 450;
/**
 * 2d canvas context API that is used for every render.
 */
export const CTX = CANVAS.getContext("2d");
CTX.imageSmoothingEnabled = false;
/**
 * Defines the game FPS
 */
export const FPS = 60;
