describe("Static Class", () => {

    class Configuration {
        static NAME: string = "Belajar TypeScript";
        static VERSION: string = "1.0.0";
        static AUTHOR: string = "Mahmuddin";
    }

    //static Method
    class MathUtils {
        static sum(...values: number[]): number {
            let total = 0;
            for (let value of values) {
                total += value;
            }
            return total;
        }
    }

    it('should support static class', () => {
        expect(Configuration.NAME).toBe("Belajar TypeScript");
        expect(Configuration.VERSION).toBe("1.0.0");
        expect(Configuration.AUTHOR).toBe("Mahmuddin");
    });

    it('should support static method', () => {
        expect(MathUtils.sum(1, 2, 3)).toBe(6);
    });
});