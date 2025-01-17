export namespace MathUtil {
    export const PI: number = 3.14;

    export function sum(...values: number[]): number {
        let total = 0;
        for (let value of values) {
            total += value;
        }
        return total;
    }
}

export namespace CountArrayNumber {
    export function count(array: number[]): number {
        let count = 0;
        for (let value of array) {
            if (value > 0) {
                count++;
            }
        }
        return count;
    }
}