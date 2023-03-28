/**
 * Represents a game object
 * 
 * @attribute {CanvasRenderingContext2D} ctx - 2d context to render the game object
 * @attribute {x} x - Position in x axis starting from top left
 * @attribute {y} y - Position in y axis starting from top left (inverted)
 */
export
abstract class GameObject {

    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    /**
     * Defines how a game object should be rendered
     */
    public abstract render(): void;

    /**
     * Defines how a game object should be updated
     */
    public abstract update(): void;

}
