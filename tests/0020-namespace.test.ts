import { CountArrayNumber, MathUtil } from "../src/math-util";

describe("Namespace", () => {

    it('should support namespace', () => {
        console.info(MathUtil.PI);
        console.info(MathUtil.sum(1, 2, 3));
        console.info(CountArrayNumber.count([1, 2, 3, 4, 5]));

        expect(MathUtil.PI).toBe(3.14);
        expect(MathUtil.sum(1, 2, 3)).toBe(6);
        expect(CountArrayNumber.count([1, 2, 3, 4, 5])).toBe(5);
    });
});