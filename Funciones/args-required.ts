// Función anonima autoinvocada 

(() => {

    const fullName = (firstName: string, lastName: string): string => {

        return `${firstName} ${lastName}`;

    }

    const name = fullName('Victor', 'Martinez');
    console.log({ name });


})()