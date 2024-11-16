const { capitalize } = require("../code/capitalize");

describe("capitalize function", () => {
    test("should capitalize the first letter of lowercase word", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test("should not change the first letter if it's already uppercase", () => {
        expect(capitalize("Hello")).toBe("Hello");
    });

    test("should work for a single lowercase letter", () => {
        expect(capitalize("a")).toBe("A");
    });

    test("should return a empty string if input is an empty string", () => {
        expect(capitalize("")).toBe("");
    });

    test("should handle strings with numbers at the start", () => {
        expect(capitalize("123abc")).toBe("123abc");
    });

    test("should capitalize the first letter of a sentence", () => {
        expect(capitalize("this is a test")).toBe("This is a test");
    });

    test("should return an empty string for null input", () => {
        expect(capitalize(null)).toBe("");
    });

    test("should return an empty string for undefined input", () => {
        expect(capitalize(undefined)).toBe("");
    });
})