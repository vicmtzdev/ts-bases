"use strict";
//Función anomina autoinvocada
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? false : true;
    console.log({ isSuperman });
})();
