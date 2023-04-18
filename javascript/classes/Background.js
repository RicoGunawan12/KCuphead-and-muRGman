import { GameObject } from "./GameObject.js";
/**
 * Child class of GameObject
 * Represents a Background (Non Collidable)
 *
 * @attribute {CanvasRenderingContext2D} ctx - 2d context to render the game object
 * @attribute {x} x - Position in x axis starting from top left
 * @attribute {y} y - Position in y axis starting from top left (inverted)
 * @attribute {width} - Width of the game object
 * @attribute {height} - Height of the game object
 * @attribute {image} - CanvasImageSource containing the background image
 */
export class Background extends GameObject {
    constructor(ctx, x, y, width, height, filePath) {
        super(ctx, x, y, width, height);
        this.image = new Image();
        this.image.src = filePath;
    }
    /**
     * @Override
     */
    render() {
        this.getCtx().drawImage(this.image, super.getX(), super.getY(), super.getWidth(), super.getHeight());
    }
    /**
     * @Override
     */
    update() {
        throw new Error("Method not implemented.");
    }
}
