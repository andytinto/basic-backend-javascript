/*

class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        console.log("Grrr!");
    }
}

// TODO 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain.

*/

class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        console.log("Grrr!");
    }
}

export default Tiger;