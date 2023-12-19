
(() => {

    class Apocalispsis {

        static instance: Apocalispsis;

        private constructor(public name: string) { }

        static callApocalipsis(name: string): Apocalispsis {

            if (!Apocalispsis.instance) {
                Apocalispsis.instance = new Apocalispsis(name);
            }

            return Apocalispsis.instance;

        }

        changeName(newName: string): void {
            this.name = newName;
        }

    }

    const apocalipsis1 = Apocalispsis.callApocalipsis('Soy apocalipsis 1');
    const apocalipsis2 = Apocalispsis.callApocalipsis('Soy apocalipsis 2');
    const apocalipsis3 = Apocalispsis.callApocalipsis('Soy apocalipsis 3');

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

    apocalipsis1.changeName('Solo Apocalipsis');

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

    // const apocalipsis1 = new Apocalispsis('Apocalipsis1');
    // const apocalipsis2 = new Apocalispsis('Apocalipsis2');
    // const apocalipsis3 = new Apocalispsis('Apocalipsis3');

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);


})()