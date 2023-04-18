import { Background } from "../classes/Background.js";
import { CTX, CANVAS } from "../globals.js";
const table = new Background(CTX, 0, CANVAS.height - 300, CANVAS.width, 300, '../assets/game/king dice/background/Table/kd_bg_table.png');
export class TableFacade {
    static renderTable() {
        table.render();
    }
    static render() {
        this.renderTable();
    }
}
