import seedrandom from 'seedrandom';

var seed_ = null;

export function setSeed(seed){
    seed_ = seed;
    Math.seedrandom(seed);
}

export function getSeed(){
    return seed_;
}

export function random(min,max){
    if(min === undefined){
        return Math.random();
    }
    if(max === undefined){
        max = min;
        min = 0;
    }
    return min + (max - min) * Math.random();
}

export const randomFloat = random;

const MAX_INTEGER = Number.MAX_SAFE_INTEGER;

export function randomInt(min,max){
    if(min === undefined){
        return Math.floor(Math.random() * MAX_INTEGER);
    }
    if(max === undefined){
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min));
}


