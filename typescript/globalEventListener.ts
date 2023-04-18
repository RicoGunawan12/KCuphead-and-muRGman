import { CANVAS } from "./globals.js";

let isFullScreen: boolean = false;

document.addEventListener('keydown', function (event: KeyboardEvent){

    if (event.key.toLowerCase() === 'f') {

        if (isFullScreen) {

            document.exitFullscreen();
            isFullScreen = false;
        
        } else {

            CANVAS.requestFullscreen();
            isFullScreen = true;
            
        }

    }

});