export const PI = Math.PI;
export const HALF_PI = Math.PI * 0.5;
export const QUATER_PI = Math.PI * 0.25;
export const TWO_PI = Math.PI * 2;
export const EPSILON = 0.00001;

export function sign(x){
    return x < 0 ? -1 : 1;
}

export function mod(a,b){
    return ((a % b) + b) % b;
}

export function toRadians(degree){
    return degree * 180 / Math.PI;
}

export function toDegree(radians){
    return radians * Math.PI / 180;
}

export function gradient(x,y){

}

export function lerp(){

}

export function map(a,inMin,inMax,outMin,outMax){
    return outMin + (outMax - outMin) * (a - inMin) / (inMax - inMin);
}

export function normalize(a,start,end){
    return (a - start) / (end - start);
}

export function frac(a){
    return a - Math.floor(a);
}

export function sgn(a){
    return a / Math.abs(a);
}

export function isPOT(a){
    return (a & (a - 1)) == 0;
}

export function clamp(){

}

export function saw(){

}

export function tri(){

}

export function rect(){

}

export function isFloatEqual(){

}

export function swap(){

}

export function lerpRadians(from,to,t){

}

export function toDegrees(){

}

export function lerpDegrees(from,to,t){

}

export function inRange(x,a,b){

}


