import Background from "./model/Background.js";
import Cuphead from "./model/Cuphead.js";
import Dice from "./model/Dice.js";
import KingDice from "./model/KingDice.js";
import { ClearRect } from "./utility/Utility.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width = 1440;
const HEIGHT = canvas.height = 735;

const boss = new KingDice(ctx, WIDTH / 2 - 430, HEIGHT / 2 - 220);
const cuphead = new Cuphead(ctx, 1000, 550);
const background = new Background(ctx, WIDTH, HEIGHT);

function MainThread() {
    ClearRect(ctx, WIDTH, HEIGHT);
    background.DrawUpperBackground();
    background.DrawTable();
    boss.MainThread();
    cuphead.MainThread();
}


setInterval(MainThread, 1000/60);