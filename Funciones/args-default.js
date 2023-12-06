"use strict";
// Función anonima autoinvocada 
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Victor', 'Martinez', true);
    console.log({ name });
})();
