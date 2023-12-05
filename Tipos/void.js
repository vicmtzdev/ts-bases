"use strict";
//Función anomina autoinvocada
(() => {
    function callBatman() {
        return;
    }
    const a = callBatman();
    console.log(a);
    const callSuperman = () => {
        // return true;
    };
})();
