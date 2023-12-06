"use strict";
// Función anonima autoinvocada 
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batisignal activate';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
    console.log(heroName);
})();
