"use strict";
//Función anomina autoinvocada
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["a"] = 10] = "a";
        AudioLevel[AudioLevel["b"] = 11] = "b";
        AudioLevel[AudioLevel["c"] = 9] = "c";
        AudioLevel[AudioLevel["d"] = 10] = "d";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel);
})();
