"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza', 'Volar'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + '' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Victor',
        age: 25,
        address: {
            id: 125,
            zip: 'KY13',
            city: 'New York',
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Alejandra',
        age: 24,
        address: {
            id: 123,
            zip: 'KY13',
            city: 'New York',
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFuntion;
    addNumbersFuntion = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map