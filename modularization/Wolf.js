/*
class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() {
        console.log("Awooo!");
    }
}

TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.

*/

class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() {
        console.log("Awooo!");
    }
}

export default Wolf;