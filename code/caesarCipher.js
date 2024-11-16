function caesarCipher(str, shift) {
    // Helper function to shift a character
    const shiftChar = (char, shift) => {
        const isUpperCase = char >= "A" && char <= "Z";
        const isLowerCase = char >= "a" && char <= "z";

        if (isUpperCase || isLowerCase) {
            const charCode = char.charCodeAt(0);
            const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);

            // Wrap around using modulo
            return String.fromCharCode(((charCode - base + shift) % 26 + 26) % 26 + base);
        }

        // Return non-alphabetical characters unchanged
        return char;
    };

    // Apply the shift to each character
    return str
        .split("")
        .map((char) => shiftChar(char, shift))
        .join("");
}

// Example:
console.log(caesarCipher("xyz", 3)); // Output: "abc"
console.log(caesarCipher("HeLLo", 3)); // Output: "KhOOr"
console.log(caesarCipher("Hello, World!", 3)); // Output: "Khoor, Zruog!"
console.log(caesarCipher("AbC-Zz!", 1)); // Output: "BcD-Aa!"
console.log(caesarCipher("Shift-By-Ten", 10)); // Output: "Crsnz-Li-Xox"

// Export the function for testing
module.exports = caesarCipher;
