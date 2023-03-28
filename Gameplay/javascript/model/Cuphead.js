import Character from "./Character.js";

const MAXIDLE = 5;
const MAXMOVE = 16;
const MAXJUMP = 8;
const SPEED = 8;
const WIDTH = canvas.width = 1440;
const HEIGHT = canvas.height = 735;

var MAXFPS = 7;
var currX = 1;
var maxX = MAXIDLE;
var fps = 0;
var state = "IDLE";
var tempState = "";
var direction = 1;
var heightJump;
var currHeight = 550;

var MoveLeft = false;
var MoveRight = false;
var Jump = false;
var Jumping = false;

const PATH = "../../cuphead-assets/";
var IDLE = "idle/cuphead_idle_000" +  currX + ".png";
var MOVERIGHT = "run/normal/cuphead_run_000" +  currX + ".png";
var JUMP = "Jump/Cuphead/cuphead_jump_000" +  currX + ".png";

const STATE = new Image();

export default class Cuphead extends Character {
    constructor(ctx, x, y) {
        super(ctx, 1000, x, y, 100, 150);
        this.speed = SPEED;
        heightJump = this.y - 280;
        document.addEventListener("keydown", this.KeyDown);
        document.addEventListener("keyup", this.KeyUp);
    }

    MainThread() {
        this.ChangeState();
        this.Animation();
        this.Draw();
        this.Move();
        this.DrawState();
        this.Interval();

        
        console.log(state + " " + currX + " || " + tempState);
    }

    Interval() {
        if (fps >= MAXFPS) {
            currX = (currX % maxX) + 1;
        }
        fps = (fps + 1) % (MAXFPS + 1);
    }

    ChangeState() {
        if (tempState != state) {
            console.log(tempState + " " + state);
            currX = 1;
            tempState = state;
            
        }
    }

    Draw() {
        if (direction === 1) {
            this.ctx.drawImage(STATE, this.x, this.y, this.width, this.height);
        }
        else {
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(STATE, -this.x, this.y, -this.width, this.height);
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }

    }

    Move() {
        if (MoveRight) {
            if (this.x < WIDTH - this.width) this.x+=this.speed;
            direction = 1;
        }
        if (MoveLeft) {
            if (this.x > 0) this.x-=this.speed;
            direction = -1;
        }
        if (Jump) {
            if (!Jumping) {
                if (this.y >= heightJump) {
                    this.y -= 25;
                }
                else {
                    Jumping = true;
                }
            }
            else {
                this.y += 15;
            }
            if (this.y === currHeight) {
                state = "IDLE";
                this.ChangeState();
                maxX = MAXIDLE;
                Jump = false;
                Jumping = false;
            }
        }
    }

    Animation() {
        if (MoveRight && !Jump) {
            maxX = MAXMOVE;
            MAXFPS = 2;
            state = "MOVERIGHT";
        }
        else if (MoveLeft && !Jump) {
            maxX = MAXMOVE;
            MAXFPS = 2;
            state = "MOVERIGHT";
        }
        else if (Jump) {
            MAXFPS = 5;
            maxX = MAXJUMP;
            state = "JUMP";
        }
    }

    DrawState() {
        if (state === "JUMP") {
            this.DrawJump();
        }
        else if (state === "IDLE") {
            this.DrawIdle();
        }
        else if (state === "MOVERIGHT") {
            this.DrawMove();
        }
    }

    DrawIdle() {
        var IDLE = "idle/cuphead_idle_000" +  currX + ".png";
        STATE.src = PATH + IDLE;
    }

    DrawMove() {
        if (currX < 10) {
            var MOVERIGHT = "run/normal/cuphead_run_000" +  currX + ".png";
        }
        else {
            var MOVERIGHT = "run/normal/cuphead_run_00" +  currX + ".png";
        }
        STATE.src = PATH + MOVERIGHT;
    }

    DrawJump() {
        this.ChangeState();
        maxX = 8;
        var JUMP = "Jump/Cuphead/cuphead_jump_000" +  currX + ".png";
        STATE.src = PATH + JUMP;

        if (currX === maxX) {
            Jump = false;
            state = "IDLE";
            maxX = MAXIDLE;
        }
    }

    KeyDown = (e) => {
        if (e.code === "KeyA") {
            MoveLeft = true;
        } 
        if (e.code === "KeyD") {
            MoveRight = true;
        } 
        if (e.code === "Space") {
            Jump = true;
        }
    }
    
    KeyUp = (e) => {
        if (e.code === "KeyA") {
            maxX = MAXIDLE;
            state = "IDLE";
            MAXFPS = 7;
            MoveLeft = false;
        } 
        if (e.code === "KeyD") {
            maxX = MAXIDLE;
            state = "IDLE";
            MAXFPS = 7;
            MoveRight = false;
        } 
    }

    
}