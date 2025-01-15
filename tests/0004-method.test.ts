describe('Method', () => {
    class Customer {
        readonly id: number;
        name: string;
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should can have methods', () => {
        const customer: Customer = new Customer(1, 'Mahmud');

        customer.sayHello('Budi');
    });
});