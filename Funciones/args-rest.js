"use strict";
// Función anonima autoinvocada 
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const name = fullName('Victor', 'Hugo', 'Martinez', 'Suarez');
    console.log({ name });
})();
