"use strict";
// Función anonima autoinvocada
(() => {
    let myCustomVariable = 'Victor';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Fuerza'],
    };
    console.log(typeof myCustomVariable);
})();
