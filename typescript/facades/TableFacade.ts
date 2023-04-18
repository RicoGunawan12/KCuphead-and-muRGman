import { Background } from "../classes/Background.js";
import { CTX, CANVAS } from "../globals.js";
import { spaces } from "./SpacesFacade.js";

const table: Background = new Background(CTX, 0, CANVAS.height - 300, CANVAS.width, 300, '../assets/game/king dice/background/Table/kd_bg_table.png');

/**
 * Facade for rendering Table with Spaces and Odds attached
 */
export
class TableFacade {

    private static renderTable(): void {

        table.render();

    }

    private static renderSpaces(): void {

        spaces.forEach((space: Background) => {

            space.render();

        });

    }

    static render(): void {
        this.renderTable();
        this.renderSpaces();
    }

}