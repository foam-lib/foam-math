import {randomFloat} from './Random';

export function create() {
    return [0, 0, 0];
}

export function equals(a,b) {
    return a[0] == b[0] &&
        a[1] == b[1] &&
        a[2] == b[2];
}

export function equals3(a,x,y,z){
    return a[0] == x &&
        a[1] == y &&
        a[2] == z;
}

export function set(a,b){
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    return a;
}

export function set3(a,x,y,z){
    a[0] = x;
    a[1] = y;
    a[2] = z;
    return a;
}

export function add(a,b){
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
    return a;
}

export function add3(a,x,y,z){
    a[0] += x;
    a[1] += y;
    a[2] += z;
    return a;
}

export function added(a,b){
    return add(copy(a),b);
}

export function added3(a,x,y,z){
    return add3(copy(a),x,y,z);
}

export function sub(a,b){
    a[0] -= b[0];
    a[1] -= b[1];
    a[2] -= b[2];
    return a;
}

export function sub3(a,x,y,z){
    a[0] -= x;
    a[1] -= y;
    a[2] -= z;
    return a;
}

export function subbed(a,b){
    return sub(copy(a),b);
}

export function subbed3(a,x,y,z){
    return sub3(copy(a),x,y,z);
}

export function scale(a,n){
    a[0] *= n;
    a[1] *= n;
    a[2] *= n;
    return a;
}

export function scaled(a,n){
    return scale(copy(a),n);
}

export function scale3(a,x,y,z){
    a[0] *=x;
    a[1] *=y;
    a[2] *=z;
    return a;
}

export function scaled3(a,x,y,z){
    return scale3(copy(a),x,y,z);
}

export function multMat4(a,m){
    var x = a[0];
    var y = a[1];
    var z = a[2];

    a[0] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12];
    a[1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13];
    a[2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14];

    return a;
}

export function multedMat4(a,m){
    return multMat4(copy(a),m);
}

export function multQuat(a,q){
    var x = a[0];
    var y = a[1];
    var z = a[2];

    var qx = q[0];
    var qy = q[1];
    var qz = q[2];
    var qw = q[3];

    var ix =  qw * x + qy * z - qz * y;
    var iy =  qw * y + qz * x - qx * z;
    var iz =  qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;

    a[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    a[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    a[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return a;
}

export function multedQuat(a,q){
    return multQuat(copy(a),q);
}

export function dot(a,b){
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function cross(a,b){
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var vx = b[0];
    var vy = b[1];
    var vz = b[2];

    a[0] = y * vz - vy * z;
    a[1] = z * vx - vz * x;
    a[2] = x * vy - vx * y;
    return a;
}

export function crossed(a,b){
    return cross(copy(a),b);
}

export function cross3(a,x,y,z){
    var _x = a[0];
    var _y = a[1];
    var _z = a[2];

    a[0] = _y * z - y * _z;
    a[1] = _z * x - z * _x;
    a[2] = _x * y - x * _y;
    return a;
}

export function crossed3(a,x,y,z){
    return cross3(copy(a),x,y,z);
}

export function length(a){
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

export function lengthSq(a){
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}

export function normalize(a){
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var l = Math.sqrt(x * x + y * y + z * z);

    l = 1.0 / (l || 1);
    a[0] *= l;
    a[1] *= l;
    a[2] *= l;
    return a;
}

export function normalized(a){
    return normalize(copy(a));
}

export function distance(a,b){
    return distance3(a,b[0],b[1],b[2]);
}

export function distance3(a,x,y,z){
    var dx = x - a[0];
    var dy = y - a[1];
    var dz = z - a[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function distanceSq(a,b){
    return distanceSq3(a,b[0],b[1],b[2]);
}

export function distanceSq3(a,x,y,z){
    var dx = x - a[0];
    var dy = y - a[1];
    var dz = z - a[2];
    return dx * dx + dy * dy + dz * dz;
}

export function limit(a,n){
    var x = a[0];
    var y = a[1];
    var z = a[2];

    var dsq = x * x + y * y + z * z;
    var lsq = n * n;

    if(lsq > 0 && dsq > lsq){
        var nd = n / Math.sqrt(dsq);
        a[0] *= nd;
        a[1] *= nd;
        a[2] *= nd;
    }

    return a;
}

export function limited(a,n){
    return limit(copy(a),n);
}

export function invert(a){
    a[0] *= -1;
    a[1] *= -1;
    a[2] *= -1;
    return a;
}

export function inverted(a){
    return invert(copy(a));
}

export function lerp(a,b,n){
    var x = a[0];
    var y = a[1];
    var z = a[2];

    a[0] = x + (b[0] - x) * n;
    a[1] = y + (b[1] - y) * n;
    a[2] = z + (b[2] - z) * n;

    return a;
}

export function lerped(a,b,n){
    return lerp(copy(a),b,n);
}

export function toZero(a){
    a[0] = a[1] = a[2] = 0;
    return a;
}

export function toOne(a){
    a[0] = a[1] = a[2] = 1;
    return a;
}

export function toMax(a){
    a[0] = a[1] = a[2] = Number.MAX_VALUE;
    return a;
}

export function toMin(a){
    a[0] = a[1] = a[2] = -Number.MAX_VALUE;
    return a;
}

export function toAbs(a){
    a[0] = Math.abs(a[0]);
    a[1] = Math.abs(a[1]);
    a[2] = Math.abs(a[2]);
    return a;
}

export function xAxis(){
    return [1,0,0];
}

export function yAxis(){
    return [0,1,0];
}

export function zAxis(){
    return [0,0,1];
}

export function toString(a, precision) {
    precision = precision || Math.pow(10, 4);
    var s = "[";
        s += Math.floor(a[0]*precision)/precision + ",";
        s += Math.floor(a[1]*precision)/precision + ",";
        s += Math.floor(a[2]*precision)/precision +
    "]";
    return s;
}

export function copy(a,out){
    if(out !== undefined){
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }
    return a.slice(0);
}

export function random(out){
    out = out || [0,0];
    out[0] = -1 + randomFloat() * 2;
    out[1] = -1 + randomFloat() * 2;
    out[2] = -1 + randomFloat() * 2;
    return normalize(out);
}
