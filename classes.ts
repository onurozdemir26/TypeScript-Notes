class Ev {
    odaSayisi:number;
    pencereSayisi:number;
    bulunduguKat:number;
    constructor(odaSayisi:number,pencereSayisi:number,bulunduguKat:number){
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.bulunduguKat = bulunduguKat;
    }
    yemekYe(){
        console.log(this.bulunduguKat+" katlı evde "+"Yemek yiyildi!")
    }
    
}


let ev = new Ev(3,4,5)
ev.yemekYe();

class Kisi {
    private _isim:string;

    get isim():string{
        return "Sayın :" + this._isim
    }

    set isim(id:string){
        this._isim = id
    }

    kaydet(){
        console.log("Kişi Kaydedildi!")
    }
}

class Musteri extends Kisi {
    satisYap(){
        console.log("Satış Yapıldı")
    }
}

class Personel extends Kisi {
    maasOde(){
        console.log("Maaş Ödendi!")
    }
}

let musteri = new Musteri()
musteri.isim = " Onur"
console.log(musteri.isim)
musteri.kaydet();
musteri.satisYap();

let personel = new Personel()
personel.kaydet();
personel.maasOde();

// Public heryerde private tanımlandığı class içerisinden erişilebilir










