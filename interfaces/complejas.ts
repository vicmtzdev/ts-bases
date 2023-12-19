
(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Victor',
        age: 25,
        address: {
            id: 125,
            zip: 'KY13',
            city: 'New York',
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Alejandra',
        age: 24,
        address: {
            id: 123,
            zip: 'KY13',
            city: 'New York',
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

})()