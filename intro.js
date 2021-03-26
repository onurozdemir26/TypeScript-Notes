function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('Onur Ozdemir');
console.log(mesaj);
var sayi;
sayi = 10;
sayi = 10.4;
var sehir = 'İstanbul';
sehir = 'Eskisehir';
var dogruMu = true;
dogruMu = false;
dogruMu = true;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3, 4, 5];
var dizi = [2, 'Eskisehir'];
// enum bi class mantığıyla çalışır değişken adı büyük harfle başlar
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["MAvi"] = 3] = "MAvi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
console.log(renk);
// any ile tüm veri tipleri kullanılabilir emin olamadığımız değer atamalarında kullanılır
var deger = 'Eskisehir';
deger = 2;
deger = {};
// fonksiyon oluştururken döndürmek değil sadece bir işlem yerine getirmek istiyorsak void kullanırız
function selamVer2() {
    console.log("Exfenix");
}
selamVer2();
