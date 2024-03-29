import { Background } from "../classes/Background.js";
import { CTX } from "../globals.js";

export 
const spaces: Array<Background> = new Array<Background>();

const spaceOne = new Background(CTX, 176, 201, 50, 45, '../../assets/game/king dice/background/Spaces/kd_gb_space_01.png');
spaces.push(spaceOne);

const spaceTwo = new Background(CTX, 198, 230, 53, 47, '../../assets/game/king dice/background/Spaces/kd_gb_space_02.png');
spaces.push(spaceTwo);

const spaceThree = new Background(CTX, 230, 255, 51, 48, '../../assets/game/king dice/background/Spaces/kd_gb_space_03.png');
spaces.push(spaceThree);

const spaceFour = new Background(CTX, 307, 291, 45, 44, '../../assets/game/king dice/background/Spaces/kd_gb_space_04.png');
spaces.push(spaceFour);

const spaceFive = new Background(CTX, 349, 301, 41, 41, '../../assets/game/king dice/background/Spaces/kd_gb_space_05.png');
spaces.push(spaceFive);

const spaceSix = new Background(CTX, 390, 305, 38, 39, '../../assets/game/king dice/background/Spaces/kd_gb_space_06.png');
spaces.push(spaceSix);

const spaceSeven = new Background(CTX, 465, 289, 43, 44, '../../assets/game/king dice/background/Spaces/kd_gb_space_07.png');
spaces.push(spaceSeven);

const spaceEight = new Background(CTX, 498, 274, 48, 46, '../../assets/game/king dice/background/Spaces/kd_gb_space_08.png');
spaces.push(spaceEight);

const spaceNine = new Background(CTX, 530, 255, 48, 46, '../../assets/game/king dice/background/Spaces/kd_gb_space_09.png');
spaces.push(spaceNine);

const spaceStartOver = new Background(CTX, 579, 201, 44, 44, '../../assets/game/king dice/background/Spaces/kd_gb_space_start_over.png');
spaces.push(spaceStartOver);

const spaceFinished = new Background(CTX, 598, 172, 40, 38, '../../assets/game/king dice/background/Spaces/kd_gb_space_fin.png');
spaces.push(spaceFinished);
