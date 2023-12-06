// Función anonima autoinvocada 

(() => {

    const fullName = (firstName: string, ...restArgs: string[]): string => {

        return `${firstName} ${restArgs.join(' ')}`;

    }

    const name = fullName('Victor', 'Hugo', 'Martinez', 'Suarez');
    console.log({ name });

})()