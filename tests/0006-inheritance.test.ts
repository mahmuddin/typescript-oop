describe('Inheritance', () => {
    class Employee {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {
    }

    it('should can create inheritance', () => {
        const employee = new Employee('Mahmud', 20);
        console.info(employee.name);

        const manager = new Manager('Budi', 25);
        console.info(manager.name);

        const director = new Director('Nurul', 30);
        console.info(director.name);
    });
});