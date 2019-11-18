import { Engine } from "tetris-engine";

const areaHeight = 4;
export const areaWidth = 20;
const defaultHeap = new Array(areaHeight).fill(new Array(areaWidth).fill(0));

export const createEngine = (onUpdate) => new Engine(
    areaHeight,
    areaWidth,
    onUpdate,
    defaultHeap,
);