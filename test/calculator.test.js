const calculator = require("../code/calculator");

describe("Calculator Object", () => {
    // Add
    test("should correctly add two numbers", () => {
        expect(calculator.add(10, 5)).toBe(15);
        expect(calculator.add(-10, 5)).toBe(-5);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test("should throw an error if add inputs are not numbers", () => {
        expect(() => calculator.add(10, "5")).toThrow("Inputs must be numbers");
        expect(() => calculator.add(null, 5)).toThrow("Inputs must be numbers");
    });

    // Subtract
    test("should correctly subtract two numbers", () => {
        expect(calculator.subtract(10, 5)).toBe(5);
        expect(calculator.subtract(-10, -5)).toBe(-5);
        expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test("should throw an error if subtract inputs are not numbers", () => {
        expect(() => calculator.subtract(10, "5")).toThrow("Inputs must be numbers");
    });

    // Multiply
    test("should correctly multiply two numbers", () => {
        expect(calculator.multiply(10, 5)).toBe(50);
        expect(calculator.multiply(-10, 5)).toBe(-50);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test("should throw an error if multiply inputs are not numbers", () => {
        expect(() => calculator.multiply(10, "5")).toThrow("Inputs must be numbers");
    });

    // Divide
    test("should correctly divide two numbers", () => {
        expect(calculator.divide(10, 5)).toBe(2);
        expect(calculator.divide(-10, 5)).toBe(-2);
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test("should throw an error if divide inputs are not numbers", () => {
        expect(() => calculator.divide(10, "5")).toThrow("Inputs must be numbers");
    });

    test("should throw an error if division by zero is attempted", () => {
        expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
    });
});
