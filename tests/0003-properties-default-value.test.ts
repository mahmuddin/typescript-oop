describe('Properties Default Value', () => {
    class Customer {
        readonly id: number;
        name: string = 'Mahmud';
        age?: number;

        constructor(id: number) {
            this.id = id;
        }
    }

    it('should can have properties', () => {
        const customer: Customer = new Customer(1);
        customer.age = 20;
        customer.name = 'Mahmud Nurul Fajri';

        console.info(customer);
        expect(customer.name).toBe('Mahmud Nurul Fajri');
    })
})