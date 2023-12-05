"use strict";
//Función anomina autoinvocada
(() => {
    let avengers = 10;
    // console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos bien');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
