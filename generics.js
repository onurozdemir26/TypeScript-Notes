function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("Eskisehir");
console.log(sehir);
function deger3(x) {
    return x;
}
var sayi3 = deger3(2);
var sehir3 = deger3("Eskisehir");
console.log(sayi3, sehir3);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon("Eskisehir");
