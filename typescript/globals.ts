/**
 * Canvas object that is used by every object that is rendered.
 */
export 
const CANVAS: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;

/**
 * Set canvas's default width and height
 */
CANVAS.width = 800;
CANVAS.height = 450;

/**
 * 2d canvas context API that is used for every render.
 */
export
const CTX: CanvasRenderingContext2D  = CANVAS.getContext("2d") as CanvasRenderingContext2D;
CTX.imageSmoothingEnabled = false;

/**
 * Defines the game FPS
 */
export
const FPS: number = 60;