import {randomFloat} from './Random';

/*--------------------------------------------------------------------------------------------------------------------*/
// CREATE
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Creates a new vector 2d.
 * @returns {number[]}
 */
export function create() {
    return [0, 0];
}

/**
 * Creates a new vector with minimum components.
 * @returns {*[]}
 */
export function createFromMin(){
    return [-Number.MAX_VALUE,-Number.MAX_VALUE];
}

/**
 * Creates a new vector with maximum components.
 * @returns {*[]}
 */
export function createFromMax(){
    return [Number.MAX_VALUE,Number.MAX_VALUE];
}

/**
 * Returns a copy of the vector.
 * @param a
 * @param out
 * @returns {*}
 */
export function copy(a,out){
    if(out !== undefined){
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }
    return a.slice(0);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// FLOOR / ROUND
/*--------------------------------------------------------------------------------------------------------------------*/

export function floor(a){
    a[0] = Math.floor(a[0]);
    a[1] = Math.floor(a[1]);
    return a;
}

export function floored(a,out){
    out = out || [0,0];
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return a;
}

export function round(a){
    a[0] = Math.round(a[0]);
    a[1] = Math.round(a[1]);
    return a;
}

export function rounded(a,out){
    out = out || [0,0];
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return a;
}


/*--------------------------------------------------------------------------------------------------------------------*/
// SET
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Sets a vectors components from another vector.
 * @param a
 * @param b
 * @returns {*}
 */
export function set(a,b){
    a[0] = b[0];
    a[1] = b[1];
    return a;
}

/**
 * Sets vector components.
 * @param a
 * @param xy
 * @returns {*}
 */
export function set1(a,xy){
    a[0] = a[1] = xy;
    return a;
}

/**
 * Sets vector components.
 * @param a
 * @param x
 * @param y
 * @returns {*}
 */
export function set2(a,x,y){
    a[0] = x;
    a[1] = y;
    return a;
}

/**
 * Sets vector components to minimum.
 * @param a
 * @returns {*}
 */
export function toMin(a){
    a[0] = a[1] = -Number.MAX_VALUE;
    return a;
}

/**
 * Sets vector components to maximum.
 * @param a
 * @returns {*}
 */
export function toMax(a){
    a[0] = a[1] = Number.MAX_VALUE;
    return a;
}

/**
 * Sets vector components to zero.
 * @param a
 * @returns {*}
 */
export function toZero(a){
    a[0] = a[1] = 0;
    return a;
}

/**
 * Sets vector components to one.
 * @param a
 * @returns {*}
 */
export function toOne(a){
    a[0] = a[1] = 1;
    return a;
}


/*--------------------------------------------------------------------------------------------------------------------*/
// EQUALITY
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Returns true if two vectors are equal.
 * @param a
 * @param b
 * @returns {boolean}
 */
export function equals(a,b) {
    return a[0] == b[0] &&
        a[1] == b[1];
}

/**
 * Returns true if vector is equal to components.
 * @param a
 * @param x
 * @param y
 * @returns {boolean}
 */
export function equals2(a,x,y){
    return a[0] == x &&
        a[1] == y;
}

export function multMat33(v,m){

}

/*--------------------------------------------------------------------------------------------------------------------*/
// ADD
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Adds a vector.
 * @param a
 * @param b
 * @returns {*}
 */
export function add(a,b){
    a[0] += b[0];
    a[1] += b[1];
    return a;
}

/**
 * Adds components.
 * @param a
 * @param x
 * @param y
 * @returns {*}
 */
export function add2(a,x,y){
    a[0] += x;
    a[1] += y;
    return a;
}

/**
 * Returns a
 * @param a
 * @param b
 * @returns {*}
 */
export function added(a,b){
    return add(copy(a),b);
}

export function added2(a,x,y){
    return add2(copy(a),x,y);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// SUB
/*--------------------------------------------------------------------------------------------------------------------*/

export function sub(a,b){
    a[0] -= b[0];
    a[1] -= b[1];
    return a;
}

export function sub2(a,x,y){
    a[0] -= x;
    a[1] -= y;
    return a;
}

export function subbed(a,b){
    return sub(copy(a),b);
}

export function subbed2(a,x,y){
    return sub2(copy(a),x,y);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// SCALE
/*--------------------------------------------------------------------------------------------------------------------*/

export function scale(a,n){
    a[0] *= n;
    a[1] *= n;
    return a;
}

export function scaled(a,n){
    return scale(copy(a),n);
}

export function dot(a,b){
    return a[0] * b[0] + a[1] * b[1];
}

/*--------------------------------------------------------------------------------------------------------------------*/
// LENGTH
/*--------------------------------------------------------------------------------------------------------------------*/

export function length(a){
    var x = a[0];
    var y = a[1];
    return Math.sqrt(x * x + y * y);
}

export function lengthSq(a){
    var x = a[0];
    var y = a[1];
    return x * x + y * y;
}

/*--------------------------------------------------------------------------------------------------------------------*/
// NORMALIZE
/*--------------------------------------------------------------------------------------------------------------------*/

export function normalize(a){
    var x = a[0];
    var y = a[1];
    var l = Math.sqrt(x * x + y * y);

    if(l !== 0.0){
        a[0] /= l;
        a[1] /= l;
    }

    return a;
}

export function normalized(a){
    return normalize(copy(a));
}

/*--------------------------------------------------------------------------------------------------------------------*/
// DISTANCE
/*--------------------------------------------------------------------------------------------------------------------*/

export function distance(a,b){
    return distance2(a,b[0],b[1]);
}

export function distance2(a,x,y){
    var dx = x - a[0];
    var dy = y - a[1];
    return Math.sqrt(dx * dx + dy * dy);
}

export function distanceSq(a,b){
    return distanceSq2(a,b[0],b[1],b[2]);
}

export function distanceSq2(a,x,y){
    var dx = x - a[0];
    var dy = y - a[1];
    return dx * dx + dy * dy;
}

/*--------------------------------------------------------------------------------------------------------------------*/
// ANGLE
/*--------------------------------------------------------------------------------------------------------------------*/

export function getAngle(a){
    return Math.atan2(a[1],a[0]);
}

export function getAngle2(x,y){
    return Math.atan2(y,x);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// LIMIT
/*--------------------------------------------------------------------------------------------------------------------*/

export function limit(a,n){
    var x = a[0];
    var y = a[1];

    var dsq = x * x + y * y;
    var lsq = n * n;

    if(lsq > 0 && dsq > lsq){
        var nd = n / Math.sqrt(dsq);
        a[0] *= nd;
        a[1] *= nd;
    }

    return a;
}

export function limited(a,n){
    return limit(copy(a),n);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// CLAMP
/*--------------------------------------------------------------------------------------------------------------------*/

export function clamp(vec,min,max){
    return clamp2(vec,min[0],min[1],max[0],max[1]);
}

export function clamp2(vec,minx,miny,maxx,maxy){
    vec[0] = Math.max(minx,Math.min(vec[0],maxx));
    vec[1] = Math.max(miny,Math.min(vec[1],maxy));
    return vec;
}

export function clamped(vec,min,max){
    return clamp(copy(vec),min,max);
}

export function clamped2(vec,minx,miny,maxx,maxy){
    return clamp2(copy(vec),minx,miny,maxx,maxy);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// INVERT
/*--------------------------------------------------------------------------------------------------------------------*/

export function invert(a){
    a[0] *= -1;
    a[1] *= -1;
    return a;
}

export function inverted(a){
    return invert(copy(a));
}

/*--------------------------------------------------------------------------------------------------------------------*/
// LERP
/*--------------------------------------------------------------------------------------------------------------------*/

export function lerp(a,b,n){
    var x = a[0];
    var y = a[1];

    a[0] = x + (b[0] - x) * n;
    a[1] = y + (b[1] - y) * n;

    return a;
}

export function lerped(a,b,n){
    return lerp(copy(a),b,n);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// RANDOM
/*--------------------------------------------------------------------------------------------------------------------*/

export function random(out){
    return setRandom(out || [0,0]);
}

export function setRandom(a){
    a[0] = -1 + randomFloat() * 2;
    a[1] = -1 + randomFloat() * 2;
    return normalize(a);
}