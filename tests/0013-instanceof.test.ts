describe("InstanceOf", () => {


    it("should have problem with typeof", () => {
        class Employee {

        }

        class Manager {

        }

        const budi = new Employee();
        const eko = new Manager();

        expect(typeof budi).toBe("object");
        expect(typeof eko).toBe("object");

    });

    it("should support instanceof", () => {
        class Employee {

        }

        class Manager {

        }

        const budi = new Employee();
        const eko = new Manager();

        expect(budi instanceof Employee).toBe(true);
        expect(eko instanceof Manager).toBe(true);

        expect(budi instanceof Manager).toBe(false);
        expect(eko instanceof Employee).toBe(false);
    });

});