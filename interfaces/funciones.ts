
(() => {

    interface AddTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFuntion: AddTwoNumbers;

    addNumbersFuntion = (a: number, b: number) => {
        return a + b;
    }

})()