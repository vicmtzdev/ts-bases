// Función anonima autoinvocada 

(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    let myFunction: () => string;

    //? myFunction = 10;
    //? console.log(myFunction);

    //? myFunction = addNumbers;
    //? console.log(myFunction(1, 2));

    //? myFunction = greet;
    //? console.log(myFunction('Victor'));

    myFunction = saveTheWorld;
    console.log(myFunction());

    // * TypeScript logra inferiri los tipos despues de una asignación

})()