describe("Polymorphism ", () => {

    class Employee {
        constructor(public name: string) {

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {
    }

    function sayHello(employee: Employee) {
        console.info(`Hello ${employee.name}`);
    };


    it("should support polymorphism ", () => {
        let employee = new Employee("Mahmuddin");
        console.info(employee);

        employee = new Manager("Mahmuddin");
        console.info(employee);

        employee = new VicePresident("Mahmuddin");
        console.info(employee);
    });

    it("should support parameter polymorphism ", () => {
        sayHello(new Employee("Eko"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Joko"));
    });
});