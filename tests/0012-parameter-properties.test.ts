describe("Parameter Properties", () => {

    class Person {
        constructor(public name: string = "") {
        }
    }

    it("should allow parameter properties", () => {
        const person = new Person("Mahmuddin");
        person.name = "Budi";

        expect(person.name).toBe("Budi");

    });
});