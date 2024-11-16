# **JavaScript Testing Assignments**

This repository contains a series of JavaScript functions and their corresponding Jest tests. Each function solves a specific problem or performs a computation, and the tests ensure the correctness and robustness of the implementation.

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Implemented Functions](#implemented-functions)
   - [Capitalize Function](#1-capitalize-function)
   - [ReverseString Function](#2-reversestring-function)
   - [Calculator Object](#3-calculator-object)
   - [CaesarCipher Function](#4-caesarcipher-function)
   - [AnalyzeArray Function](#5-analyzearray-function)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Running Tests](#running-tests)
6. [Examples](#examples)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Project Overview**

This project demonstrates how to write and test JavaScript functions using **Jest**, a powerful JavaScript testing framework. Each function is accompanied by unit tests to verify its correctness and handle edge cases. The project is structured for readability, scalability, and ease of use.

---

## **Implemented Functions**

### **1. Capitalize Function**

- **Description**:  
  Takes a string and returns it with the first character capitalized.

- **File**: `capitalize.js`

- **Tests**: `capitalize.test.js`

```javascript
const result = capitalize("hello");
console.log(result); // Output: "Hello"
```

---

### 2. ReverseString Function

- **Description**:  
  Takes a string and returns it reversed.

- **File**: `reverseString.js`

- **Tests**: `reverseString.test.js`

```javascript
const result = reverseString("hello");
console.log(result); // Output: "olleh"
```

---

### 3. Calculator Object

- **Description**:  
   An object that performs basic arithmetic operations (add, subtract, multiply, divide).

- **File**: `calculator.js`

- **Tests**: `calculator.test.js`

```javascript
const calculator = require("./calculator");

const sum = calculator.add(5, 3);
console.log(sum); // Output: 8
```

---

### 4. CaesarCipher Object

- **Description**:
  Implements a Caesar Cipher to shift characters by a specified number while preserving case and ignoring non-alphabetical characters.

- **File**: `caesarCipher.js`

- **Tests**: `caesarCipher.test.js`

```javascript
const result = caesarCipher("Hello, World!", 3);
console.log(result); // Output: "Khoor, Zruog!"
```

---

### 5. AnalyzeArray Object

- **Description**:  
  Takes an array of numbers and returns an object with the average, min, max, and length of the array.

- **File**: `analyzeArray.js`

- **Tests**: `analyzeArray.test.js`

```javascript
const result = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(result);
// Output: { average: 4, min: 1, max: 8, length: 6 }
```

---

## Technologies Used

- **JavaScript**: Core language for implementation.
- **Jest**: A testing framework for JavaScript to ensure the correctness of each function.

---

## Setup and Installation

To run this project locally, follow these steps:

1. clone the repository:

```bash
git clone https://github.com/ABHISHEK-PRASAD-BAHELIYA/jest-testing-practice.git
cd jest-testing-practice
```

2. Install dependencies:

```bash
npm install
```

3. Ensure Jest is installed:

```bash
npm install --save-dev jest
```

---

## Running Tests

To run all tests, use the following command:

```bash
npm test
```

Jest will execute the test cases for all implemented functions and display the results in the console.

---

## Examples

Here are some example outputs for the functions:

### Capitalize Function

```javascript
const capitalize = require("./capitalize");
console.log(capitalize("hello"));
// Output: "Hello"
```

### ReverseString Function

```javascript
const reverseString = require("./reverseString");
console.log(reverseString("hello"));
// Output: "olleh"
```

### Calculator Object

```javascript
const calculator = require("./calculator");
console.log(calculator.add(2, 3));
// Output: 5
```

### CaesarCipher Function

```javascript
const caesarCipher = require("./caesarCipher");
console.log(caesarCipher("xyz", 3));
// Output: "abc"
```

### AnalyzeArray Function

```javascript
const analyzeArray = require("./analyzeArray");
console.log(analyzeArray([1, 2, 3, 4, 5]));
// Output: { average: 3, min: 1, max: 5, length: 5 }
```

---

## Contributing

Contributions are welcome! If you have improvements or additional test cases, feel free to submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

```vbnet

This `README.md` file is designed to provide a structured overview of the project, including explanations for each function, installation instructions, and usage examples.
```
