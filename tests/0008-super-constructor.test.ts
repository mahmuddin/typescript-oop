describe('Super Custructor', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        departement: string;

        constructor(name: string, departement: string) {
            super(name);
            this.departement = departement;
        }
    }

    it('should support super constructor', () => {
        const employee = new Employee('Mahmud', 'Technology');
        console.info(employee.name);
        console.info(employee.departement);

        expect(employee.name).toBe('Mahmud');
        expect(employee.departement).toBe('Technology');
    })
})