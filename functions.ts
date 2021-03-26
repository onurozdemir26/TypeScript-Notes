//JS de ki yazım

function topla(x,y){
    return x+y;
}

// TS de ki yazım

function topla2(x:number, y:number):number{
    return x+y;
}

let topla3 = function(x:number,y:number):number{
    return x+y;
}

console.log(topla3(5,8))

function topla4 (x:number,y:number=4):number{
    return x+y;
}
console.log(topla4(3))

function topla5 (x:number,y?:number):number{
    if(y){
        return x+y;
    }
        return x;
}

console.log(topla5(3,40))

// Rest Parametreler

function davetEt(ilkDavetli: string,...digerleri: string[]): string{
    return ilkDavetli + " " + digerleri.join(" ")
}

console.log(davetEt("Onur","Eray","Duck","Fahrettin"))




