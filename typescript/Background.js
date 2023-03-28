
const PATH = "../../background-assets";
const UPPERPATH = "/Background/kd_bg_painting.png";
const TABLEPATH = "/Table/kd_bg_table.png";

const UPPER = new Image();
UPPER.src = PATH + UPPERPATH;

const TABLE = new Image();
TABLE.src = PATH + TABLEPATH;

export default class Background {
    constructor(ctx, windowWidth, windowHeight) {
        this.ctx = ctx;
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
    }

    DrawUpperBackground() {
        this.ctx.drawImage(UPPER, 0, 0, this.windowWidth, this.windowHeight - 200);
        this.ctx.drawImage()
    }

    DrawTable() {
        this.ctx.drawImage(TABLE, 0, this.windowHeight - 400, this.windowWidth, this.windowHeight - 300);
    }
}