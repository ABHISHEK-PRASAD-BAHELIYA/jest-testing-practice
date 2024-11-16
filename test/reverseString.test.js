const { reverseString } = require("../code/reverseString");

describe("reverseString function", () => {
    test("should reverse a regular string", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("should reverse strings with numbers and special characters", () => {
        expect(reverseString("12345")).toBe("54321");
        expect(reverseString("!@#$%")).toBe("%$#@!");
    });

    test("should return an empty string for non-string inputs", () => {
        expect(reverseString(12345)).toBe("");
        expect(reverseString({})).toBe("");
        expect(reverseString([])).toBe("");
    });

    test("should reverse strings with spaces", () => {
        expect(reverseString("hello world")).toBe("dlrow olleh");
        expect(reverseString("  spaces  ")).toBe("  secaps  ");
    });

    test("should handle palindrome strings (same when reversed)", () => {
        expect(reverseString("racecar")).toBe("racecar");
    });
});
