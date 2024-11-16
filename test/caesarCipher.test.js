const caesarCipher = require("../code/caesarCipher");

describe("Caesar Cipher", () => {
    test("should correctly shift lowercase letters", () => {
        expect(caesarCipher("abc", 1)).toBe("bcd");
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    test("should correctly shift uppercase letters", () => {
        expect(caesarCipher("ABC", 1)).toBe("BCD");
        expect(caesarCipher("XYZ", 3)).toBe("ABC");
    });

    test("should handle mixed case letters", () => {
        expect(caesarCipher("AbC", 1)).toBe("BcD");
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    test("should not change non-alphabetical characters", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
        expect(caesarCipher("12345!@#$%", 5)).toBe("12345!@#$%");
    });

    test("should handle wrapping from z to a", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
        expect(caesarCipher("XYZ", 3)).toBe("ABC");
    });

    test("should handle negative shifts", () => {
        expect(caesarCipher("bcd", -1)).toBe("abc");
        expect(caesarCipher("abc", -3)).toBe("xyz");
    });

    test("should handle large shift values", () => {
        expect(caesarCipher("abc", 27)).toBe("bcd"); // 27 is effectively 1
        expect(caesarCipher("xyz", 52)).toBe("xyz"); // 52 is effectively 0
    });
});
