function selamVer(isim: string) {
    return "Merhaba " + isim
}

let mesaj = selamVer('Onur Ozdemir')

console.log(mesaj)

let sayi: number
sayi = 10

sayi = 10.4

let sehir : string = 'İstanbul'

sehir = 'Eskisehir'

let dogruMu : boolean = true

dogruMu = false

dogruMu = true

let sayilar:number[] = [1,2,3]

let sayilar2 : Array<number> = [1,2,3,4,5]

let dizi:[number,string] = [2, 'Eskisehir']

// enum bi class mantığıyla çalışır değişken adı büyük harfle başlar

enum Renk {Kirmizi=1,Siyah,MAvi}

let renk : Renk = Renk.Kirmizi

console.log(renk)

// any ile tüm veri tipleri kullanılabilir emin olamadığımız değer atamalarında kullanılır

let deger : any = 'Eskisehir'

deger = 2

deger = {}

// fonksiyon oluştururken döndürmek değil sadece bir işlem yerine getirmek istiyorsak void kullanırız

function selamVer2() : void {
    console.log("Exfenix")
}
selamVer2()

// undefined

let yas : number;
yas = 10


class Musteri {
    
}



