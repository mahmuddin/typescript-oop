describe("Protected Visibility", () => {
    class Counter {
        protected counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleConter extends Counter {
        public increment(): void {
            this.counter += 2;
        }
    }

    it("should allow protected members", () => {
        const counter = new Counter();
        counter.increment();
        expect(counter.getCounter()).toBe(1);

        const doubleCounter = new DoubleConter();
        doubleCounter.increment();
        expect(doubleCounter.getCounter()).toBe(2);
    });

});