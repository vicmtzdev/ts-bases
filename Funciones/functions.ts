// Función anonima autoinvocada 

(() => {

    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = (): string => {
        return 'Batisignal activate';
    }

    console.log(typeof activateBatiSignal);

    const heroName = returnName();
    console.log(heroName);

})()