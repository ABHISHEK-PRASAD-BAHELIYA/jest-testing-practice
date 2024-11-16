function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Input must be a non-empty array");
    }

    // Ensure all elements are numbers
    if (!arr.every((item) => typeof item === "number")) {
        throw new Error("All elements in the array must be numbers");
    }

    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average,
        min,
        max,
        length,
    };
}

// Example:
const result = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(result);
// Output: { average: 4, min: 1, max: 8, length: 6 }

// Export the function for testing
module.exports = analyzeArray;
