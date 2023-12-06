"use strict";
// Función anonima autoinvocada 
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Victor');
    console.log({ name });
})();
