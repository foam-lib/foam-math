import * as Mat44 from './Mat44';

export function create(){
    return [
        [0,0,1],
        [0,1,0],
        [1,0,0]
    ]
}

export function copy(a){
    return [
        a[0].slice(0),
        a[1].slice(0),
        a[2].slice(0)
    ];
}

export function set(a,b){
    return set3(a,b[0],b[1],b[2]);
}

export function set3(a,u,v,w){
    return set9(a,
        u[0],u[1],u[2],
        v[0],v[1],v[2],
        w[0],w[1],w[2]
    );
}

export function set9(a,ux,uy,uz,vx,vy,vz,wx,wy,wz){
    a[0][0] = ux;
    a[0][1] = uy;
    a[0][2] = uz;

    a[1][0] = vx;
    a[1][1] = vy;
    a[1][2] = vz;

    a[2][0] = wx;
    a[2][1] = wy;
    a[2][2] = wz;
    return a;
}


export function getMatrix(a,m){
    if(m){
        Mat44.identity(m);
    } else {
        m = Mat44.create();
    }
    return Mat44.setRotationFromOnB9(m,
        a[0][0],
        a[0][1],
        a[0][2],
        a[1][0],
        a[1][1],
        a[1][2],
        a[2][0],
        a[2][1],
        a[2][2]
    );
}