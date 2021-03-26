abstract class KrediBase {
    constructor(){

    }
    kaydet():void{
        console.log("Kaydedildi")
    }
    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase {
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı")
    }
}

class MortgageKredisi extends KrediBase{
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı")
    }
    baskaBirOperasyon(){

    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let mortgageKredisi = new MortgageKredisi()

mortgageKredisi.hesapla();
mortgageKredisi.kaydet();

let kredi : KrediBase

kredi = new TuketiciKredi()

kredi = new MortgageKredisi()












