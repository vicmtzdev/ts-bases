//Función anomina autoinvocada

(() => {

    function callBatman(): void {
        return;
    }

    const a = callBatman();
    console.log(a);

    const callSuperman = (): void => {
        // return true;
    }

})()