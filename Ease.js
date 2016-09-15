export function none(a){
    return a;
}

export function stepSmooth(a) {
    return a * a * (3 - 2 * a);
}

export function stepSmoothSquared(a) {
    a = stepSmooth(a);
    return a * a;
}

export function stepSmoothInvSquared(a) {
    a = 1.0 - stepSmooth(a);
    return 1 - a * a;
}

export function stepSmoothCubed(a) {
    a = stepSmooth(a);
    return a * a * a * a;
}

export function stepSmoothInvCubed(a) {
    a = 1.0 - stepSmooth(a);
    return 1 - a * a * a * a;
}

export function stepSquared(a) {
    return a * a;
}

export function stepInvSquared(a) {
    a = 1.0 - a;
    return 1 - a * a;
}

export function stepCubed(a) {
    return a * a * a * a;
}

export function stepInvCubed(a) {
    a = 1.0 - a;
    return 1 - a * a * a * a;
}