import { Background } from "../classes/Background.js";
import { CTX, CANVAS } from "../globals.js";

const table: Background = new Background(CTX, 0, CANVAS.height - 300, CANVAS.width, 300, '../assets/game/king dice/background/Table/kd_bg_table.png');

export
class TableFacade {

    private static renderTable(): void {

        table.render();

    }

    static render(): void {
        this.renderTable();
    }

}