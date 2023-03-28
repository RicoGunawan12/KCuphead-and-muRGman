/**
 * Canvas object that is used by every object that is rendered.
 */
export 
const CANVAS: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;

/**
 * Set canvas's default width and height
 */
CANVAS.width = 1440;
CANVAS.height = 735;

/**
 * 2d canvas context API that is used for every render.
 */
export
const CTX: CanvasRenderingContext2D  = CANVAS.getContext("2d") as CanvasRenderingContext2D;

/**
 * Defines the game FPS
 */
export
const FPS = 60;