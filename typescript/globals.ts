/**
 * Canvas object that is used by every object that is rendered.
 */
export 
const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;

/**
 * 2d canvas context API that is used for every render.
 */
export
const ctx: CanvasRenderingContext2D  = canvas.getContext("2d") as CanvasRenderingContext2D;
