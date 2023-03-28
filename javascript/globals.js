"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctx = exports.canvas = void 0;
/**
 * Canvas object that is used by every object that is rendered.
 */
exports.canvas = document.getElementById("canvas");
/**
 * 2d canvas context API that is used for every render.
 */
exports.ctx = exports.canvas.getContext("2d");
