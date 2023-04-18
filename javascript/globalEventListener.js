import { CANVAS } from "./globals.js";
let isFullScreen = false;
document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'f') {
        if (isFullScreen) {
            document.exitFullscreen();
            isFullScreen = false;
        }
        else {
            CANVAS.requestFullscreen();
            isFullScreen = true;
        }
    }
});
