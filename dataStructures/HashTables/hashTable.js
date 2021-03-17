class HashTable {
    constructor (size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100);  i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return console.log("total", total);
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    
    keys() {
        let result = [];
        for ( let i = 0; i < this.keyMap.length; i++ ) {
            if(this.keyMap[i]){

                for ( let j = 0; j < this.keyMap[i].length; j++ ) {
                    if (!result.includes(this.keyMap[i][j][1])) {
                        let key = this.keyMap[i][j][1];
                        result.push(key)
                    }
                }
            }
        }
        return result;
    }

    values() {
        let result = []
        for ( let i = 0; i < this.keyMap.length; i++ ) {
            if(this.keyMap[i]){

                for ( let j = 0; j < this.keyMap[i].length; j++ ) {
                    if (!result.includes(this.keyMap[i][j][1])) {
                        let key = this.keyMap[i][j][1];
                        result.push(key)
                    }
                }
            }
        }
        return result;
    }
}

let ht = new HashTable();
// ht.set('hello', 'goodbye');
// ht.set('cats', 'dogs');
// console.log(ht);
// console.log(ht.get("cats"))
// console.log(ht.keys())
// console.log(ht.keyMap)

let words = ["aaaa","asas","able","ability","actt","actor","access"]
let puzzle = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]

for (let i = 0; i < words.length; i++) {
    ht.set(words[i], puzzle[i])
}
console.log(ht)