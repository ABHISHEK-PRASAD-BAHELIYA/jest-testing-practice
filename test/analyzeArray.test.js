const analyzeArray = require("../code/analyzeArray");

describe("analyzeArray function", () => {
    test("should correctly analyze an array of numbers", () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test("should handle an array with one number", () => {
        const result = analyzeArray([5]);
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1,
        });
    });

    test("should handle an array with all equal numbers", () => {
        const result = analyzeArray([3, 3, 3]);
        expect(result).toEqual({
            average: 3,
            min: 3,
            max: 3,
            length: 3,
        });
    });

    test("should throw an error for an empty array", () => {
        expect(() => analyzeArray([])).toThrow("Input must be a non-empty array");
    });

    test("should throw an error for non-numeric elements in the array", () => {
        expect(() => analyzeArray([1, "2", 3])).toThrow("All elements in the array must be numbers");
        expect(() => analyzeArray([1, null, 3])).toThrow("All elements in the array must be numbers");
    });

    test("should throw an error for non-array input", () => {
        expect(() => analyzeArray("not an array")).toThrow("Input must be a non-empty array");
        expect(() => analyzeArray(123)).toThrow("Input must be a non-empty array");
        expect(() => analyzeArray(null)).toThrow("Input must be a non-empty array");
    });
});
