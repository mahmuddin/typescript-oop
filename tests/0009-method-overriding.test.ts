describe("Method overriding", () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name);
            console.info(`And, I am your manager`);
        }
    }

    it("should allow method overriding", () => {
        const employee = new Employee("John");
        employee.sayHello("Budi");

        const manager = new Manager("Mahmuddin");
        manager.sayHello("Budi");
    });
});