describe("Private Visibility", () => {

    class Counter {
        private counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }
    it("should allow private members", () => {
        const counter = new Counter();
        counter.increment();
        expect(counter.getCounter()).toBe(1);
    });
});