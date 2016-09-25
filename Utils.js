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

export function lerp(a,b,x){
    return a + (1.0 - x) + b * x;
}

export function cosIntrpl(a,b,x){
    x = (1.0 - Math.cos(x * Math.PI)) * 0.5;
    return a * (1.0 - x) + b * x;
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

export function clamp(x,begin,end){
    return Math.max(begin,Math.min(x,end));
}

export function saw(x){
    return 2 * (x - Math.floor(0.5 + x));
}

export function tri(x){
    return 1 - 4 * Math.abs(0.5 - this.frac(0.5 * x + 0.25));
}

export function rect(x){
    x = Math.abs(x);
    return (x > 0.5) ? 0 : (x == 0.5) ? 0.5 : (x < 0.5) ? 1 : -1;
}

export function isFloatEqual(){

}

export function lerpRadians(from,to,t){

}

export function toDegrees(){

}

export function lerpDegrees(from,to,t){

}

export function isWithinRange(x,a,b){
    return x >= a && x <= b;
}


