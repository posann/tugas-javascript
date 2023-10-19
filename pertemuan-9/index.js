class Hero {
    constructor(){
        this.nama = ""
    }

    recall(nama){
        console.log(nama + " sedang recall");
    }
}

Valir = new Hero()  // aryadi
Valir.nama = "Valir Sang Penguasa Api"
Valir.recall(Valir.nama)

Vale = new Hero()
Vale.nama = "Vale"
Vale.recall(Vale.nama)

const all_hero = [
    Valir,
    Vale
]

for(mahasantri of all_hero){
    console.log(mahasantri);
}







