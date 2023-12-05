//Función anomina autoinvocada

(() => {

    const error = (message: string): never => {
        throw new Error(message);
    }

    // const error = (message: string): (never | number) => {

    //     if (false) {
    //         throw new Error(message);
    //     }

    //     return 1;

    // }

    error('Hubo un error');
    console.log('Aquí se rompió el código');

})()