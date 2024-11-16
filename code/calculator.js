const calculator = {
    add: function(a, b) {
        if(typeof a !== "number" || typeof b !== "number") {
            throw new Error("Inputs must be numbers");
        }
        return a + b;
    },
    subtract: function(a, b) {
        if(typeof a !== "number" || typeof b !== "number") {
            throw new Error("Inputs must be numbers");
        }
        return a - b;
    },
    multiply: function(a, b) {
        if(typeof a !== "number" || typeof b !== "number") {
            throw new Error("Inputs must be numbers");
        }
        return a * b;
    },
    divide: function(a, b) {
        if(typeof a !== "number" || typeof b !== "number") {
            throw new Error("Inputs must be numbers");
        }
        if(b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
};

// Example usage:
console.log(calculator.add(10, 5));       // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5
console.log(calculator.multiply(10, 5)); // Output: 50
console.log(calculator.divide(10, 5));   // Output: 2



module.exports = calculator;